'use client';

import { useSyncExternalStore } from 'react';
import { SPEECH_LANG } from './i18n';
import { readValue, useStoreVersion, writeValue } from './store';
import type { Locale } from './types';

/**
 * One speech engine for the whole page.
 *
 * Both the inline "read aloud" buttons and the sticky dock drive this module,
 * so starting one stops the other rather than two utterances overlapping.
 *
 * Web Speech is implemented differently on every platform, so most of the code
 * below is working around specific engines:
 *
 *  - Chrome silently stops after roughly fifteen seconds of a single
 *    utterance, so text is split into short pieces rather than read a
 *    paragraph at a time.
 *  - iOS Safari only populates getVoices() after the first utterance, so the
 *    list is polled for a few seconds instead of trusted on first read.
 *  - iOS Safari ignores pause(); there, pause is implemented as cancel plus a
 *    remembered position.
 *  - iOS and Android keep speaking after a page is hidden or navigated away
 *    from, so playback is cancelled on pagehide and on tab switches.
 *
 * No regular expression here uses lookbehind: Safari only gained support in
 * 16.4, and a parse error would take the whole bundle down on older phones.
 */

export type SpeechStatus = 'idle' | 'speaking' | 'paused';

interface Chunk {
  text: string;
  /** Present for element-based reading, so the chunk can be highlighted. */
  el?: HTMLElement;
}

interface Snapshot {
  status: SpeechStatus;
  owner: string | null;
  voiceCount: number;
  /** Bumped when the voice list changes, so pickers re-render. */
  voiceEpoch: number;
}

let status: SpeechStatus = 'idle';
let owner: string | null = null;
let chunks: Chunk[] = [];
let index = 0;
/** Bumped on every stop, so a cancelled utterance's onend cannot advance us. */
let run = 0;
let voices: SpeechSynthesisVoice[] = [];
let voiceEpoch = 0;
let activeLocale: Locale = 'en';
let keepAlive: ReturnType<typeof setInterval> | null = null;

const listeners = new Set<() => void>();
let snapshot: Snapshot = { status, owner, voiceCount: 0, voiceEpoch: 0 };

function emit() {
  snapshot = { status, owner, voiceCount: voices.length, voiceEpoch };
  for (const l of listeners) l();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function supported() {
  return (
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    typeof window.SpeechSynthesisUtterance === 'function'
  );
}

/* --- Platform quirks ----------------------------------------------------- */

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  /* iPadOS reports itself as a Mac, so the touch-point check catches it. */
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
  );
}

function isChromiumDesktop() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /Chrome|Chromium|Edg/.test(ua) && !/Android/.test(ua) && !isIOS();
}

/* --- Voices -------------------------------------------------------------- */

export const VOICE_KEY = { en: 'voice:en', nl: 'voice:nl' } as const;
export const RATE_KEY = 'speech-rate';

function signature(list: SpeechSynthesisVoice[]) {
  return list.map((v) => v.voiceURI).join('|');
}

function loadVoices() {
  if (!supported()) return;
  const next = window.speechSynthesis.getVoices();
  if (signature(next) === signature(voices)) return;
  voices = next;
  voiceEpoch += 1;
  emit();
}

if (supported()) {
  loadVoices();
  window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

  /* iOS and some Android builds never fire voiceschanged on a cold load, so
     poll briefly rather than showing an empty picker forever. */
  let tries = 0;
  const poll = setInterval(() => {
    loadVoices();
    tries += 1;
    if (voices.length > 0 || tries > 20) clearInterval(poll);
  }, 250);

  /* A phone that locks or switches app should not keep talking. */
  const halt = () => {
    if (status !== 'idle') stop();
  };
  window.addEventListener('pagehide', halt);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') halt();
  });
}

function normalise(lang: string) {
  return lang.replace('_', '-').toLowerCase();
}

/** Every installed voice for a language, including regional variants. */
export function voicesFor(locale: Locale) {
  return voices.filter((v) => normalise(v.lang).startsWith(locale));
}

/** Voices that are neither English nor Dutch — offered, but grouped last. */
export function otherVoices() {
  return voices.filter((v) => {
    const lang = normalise(v.lang);
    return !lang.startsWith('en') && !lang.startsWith('nl');
  });
}

export function allVoices() {
  return voices;
}

function pickVoice(locale: Locale): SpeechSynthesisVoice | undefined {
  const wanted = readValue<string | null>(VOICE_KEY[locale], null);
  if (wanted) {
    const match = voices.find((v) => v.voiceURI === wanted);
    if (match) return match;
  }

  const forLocale = voicesFor(locale);
  if (forLocale.length === 0) return undefined;

  /* Prefer the exact regional match (nl-NL over nl-BE for Dutch, en-GB for
     English), then a local voice, then whatever is first. */
  const preferred = locale === 'nl' ? 'nl-nl' : 'en-gb';
  return (
    forLocale.find((v) => normalise(v.lang) === preferred && v.localService) ??
    forLocale.find((v) => normalise(v.lang) === preferred) ??
    forLocale.find((v) => v.localService) ??
    forLocale[0]
  );
}

export function setVoice(locale: Locale, voiceURI: string | null) {
  writeValue(VOICE_KEY[locale], voiceURI);
}

export function getVoiceUri(locale: Locale): string | null {
  return readValue<string | null>(VOICE_KEY[locale], null);
}

export function getRate(): number {
  const rate = readValue<number>(RATE_KEY, 1);
  return Number.isFinite(rate) ? Math.min(Math.max(rate, 0.5), 2) : 1;
}

export function setRate(rate: number) {
  writeValue(RATE_KEY, rate);
}

/* --- Chunking ------------------------------------------------------------ */

/**
 * Chrome cuts an utterance off after about fifteen seconds, so nothing longer
 * than a couple of sentences is ever handed over in one piece. Splitting at
 * sentence and then clause boundaries also gives pause somewhere sensible to
 * land on the platforms where pause has to be faked.
 */
const MAX_UTTERANCE = 180;

function hardWrap(text: string, out: string[]) {
  let buffer = '';
  for (const word of text.split(/\s+/)) {
    /* A single token longer than the cap — a URL, say — has no space to break
       on, so cut it rather than hand the engine something oversized. */
    if (word.length > MAX_UTTERANCE) {
      if (buffer) {
        out.push(buffer);
        buffer = '';
      }
      for (let i = 0; i < word.length; i += MAX_UTTERANCE) {
        out.push(word.slice(i, i + MAX_UTTERANCE));
      }
      continue;
    }
    if (buffer && (buffer + ' ' + word).length > MAX_UTTERANCE) {
      out.push(buffer);
      buffer = word;
    } else {
      buffer = buffer ? buffer + ' ' + word : word;
    }
  }
  if (buffer) out.push(buffer);
}

export function splitForSpeech(input: string): string[] {
  const text = input.replace(/\s+/g, ' ').trim();
  if (!text) return [];

  const out: string[] = [];
  const sentences = text.match(/[^.!?…]+(?:[.!?…]+|$)/g) ?? [text];

  for (const raw of sentences) {
    const sentence = raw.trim();
    if (!sentence) continue;

    if (sentence.length <= MAX_UTTERANCE) {
      out.push(sentence);
      continue;
    }

    /* Too long: break on clause punctuation, keeping the mark with its clause. */
    let buffer = '';
    for (const piece of sentence.split(/([,;:—–]\s+)/)) {
      if (!piece) continue;
      if (buffer && (buffer + piece).length > MAX_UTTERANCE) {
        if (buffer.trim().length > MAX_UTTERANCE) hardWrap(buffer.trim(), out);
        else out.push(buffer.trim());
        buffer = piece.replace(/^[,;:—–]\s*/, '');
      } else {
        buffer += piece;
      }
    }
    if (buffer.trim()) {
      if (buffer.trim().length > MAX_UTTERANCE) hardWrap(buffer.trim(), out);
      else out.push(buffer.trim());
    }
  }

  return out;
}

/* --- Playback ------------------------------------------------------------ */

function clearHighlight() {
  for (const c of chunks) c.el?.classList.remove('speaking');
}

/**
 * Fired on a chunk's element just before it is spoken, so a disclosure whose
 * open state lives in React can unfold itself. It bubbles, so the listener can
 * sit on the wrapper and catch both the toggle and the body.
 */
export const REVEAL_EVENT = 'speech:reveal';

/**
 * Text folded away out of sight is still read out — textContent does not care
 * whether you can see it — but nothing appears on screen while it plays: the
 * highlight lands on something unpainted and scrollIntoView has nothing to
 * scroll to. Unfolding as playback arrives keeps the page and the voice
 * together. It stays open afterwards; having heard it, you can read it back.
 */
function reveal(el: HTMLElement) {
  /* Native disclosures can simply be opened. */
  let node: Element | null = el.closest('details');
  while (node) {
    const disclosure = node as HTMLDetailsElement;
    if (!disclosure.open) disclosure.open = true;
    node = disclosure.parentElement?.closest('details') ?? null;
  }
  /* React-owned ones cannot be, so ask them to. */
  el.dispatchEvent(new CustomEvent(REVEAL_EVENT, { bubbles: true }));
}

function stopKeepAlive() {
  if (keepAlive) {
    clearInterval(keepAlive);
    keepAlive = null;
  }
}

/**
 * Desktop Chrome drops the queue if it sits idle mid-run. Nudging it while a
 * long lesson plays is the accepted workaround; short chunks alone are not
 * always enough on slower machines.
 */
function startKeepAlive() {
  if (!isChromiumDesktop()) return;
  stopKeepAlive();
  keepAlive = setInterval(() => {
    if (status !== 'speaking') return;
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) {
      synth.pause();
      synth.resume();
    }
  }, 9000);
}

export function stop() {
  run += 1;
  stopKeepAlive();
  if (supported()) window.speechSynthesis.cancel();
  clearHighlight();
  chunks = [];
  index = 0;
  status = 'idle';
  owner = null;
  emit();
}

function speakFrom(start: number, myRun: number) {
  if (myRun !== run) return;
  if (start >= chunks.length) {
    stop();
    return;
  }

  const chunk = chunks[start];
  const text = chunk.text.trim();
  if (!text) {
    speakFrom(start + 1, myRun);
    return;
  }

  clearHighlight();
  if (chunk.el) {
    reveal(chunk.el);
    chunk.el.classList.add('speaking');
    chunk.el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  index = start;

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickVoice(activeLocale);
  if (voice) utterance.voice = voice;
  /* Setting lang as well matters on Android, where an unset lang falls back to
     the system language rather than the voice's. */
  utterance.lang = voice?.lang ?? SPEECH_LANG[activeLocale];
  utterance.rate = getRate();
  utterance.pitch = 1;
  utterance.volume = 1;

  utterance.onend = () => {
    if (myRun !== run) return;
    speakFrom(start + 1, myRun);
  };
  utterance.onerror = (event) => {
    if (myRun !== run) return;
    /* A cancel() raises an error event on some engines; that is not a failure. */
    if (event.error === 'canceled' || event.error === 'interrupted') return;
    stop();
  };

  window.speechSynthesis.speak(utterance);
}

/**
 * Must be reachable synchronously from a click: iOS refuses to start speaking
 * outside a user gesture, and an await anywhere in the path breaks it.
 */
function begin(next: Chunk[], nextOwner: string, locale: Locale) {
  if (!supported() || next.length === 0) return;
  stop();
  chunks = next;
  owner = nextOwner;
  activeLocale = locale;
  status = 'speaking';
  emit();
  startKeepAlive();
  speakFrom(0, run);
}

/** Read every `[data-speech]` element inside a container, in document order. */
export function speakContainer(
  containerId: string,
  ownerId: string,
  locale: Locale,
) {
  const root = document.getElementById(containerId);
  if (!root) return;
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-speech]'));
  const next: Chunk[] = [];
  for (const el of els) {
    for (const text of splitForSpeech(el.textContent || '')) {
      next.push({ text, el });
    }
  }
  begin(next, ownerId, locale);
}

export function speakText(text: string, ownerId: string, locale: Locale) {
  begin(
    splitForSpeech(text).map((t) => ({ text: t })),
    ownerId,
    locale,
  );
}

export function pause() {
  if (!supported() || status !== 'speaking') return;
  stopKeepAlive();

  if (isIOS()) {
    /* pause() does nothing on iOS Safari, so stop and remember where we were.
       Chunks are short, so resuming replays at most one sentence. */
    const resumeAt = index;
    run += 1;
    window.speechSynthesis.cancel();
    index = resumeAt;
    status = 'paused';
    emit();
    return;
  }

  window.speechSynthesis.pause();
  status = 'paused';
  emit();
}

export function resume() {
  if (!supported() || status !== 'paused') return;

  if (isIOS()) {
    status = 'speaking';
    emit();
    startKeepAlive();
    speakFrom(index, run);
    return;
  }

  window.speechSynthesis.resume();
  status = 'speaking';
  emit();
  startKeepAlive();
}

/* --- React binding ------------------------------------------------------- */

const serverSnapshot: Snapshot = {
  status: 'idle',
  owner: null,
  voiceCount: 0,
  voiceEpoch: 0,
};

export function useSpeech() {
  /* Re-render when a stored voice or rate changes as well as on playback. */
  useStoreVersion();
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => serverSnapshot,
  );
}
