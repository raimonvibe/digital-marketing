'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { UI } from '@/content/ui';
import { SPEECH_LANG } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import styles from './ReadAloud.module.css';

type Status = 'idle' | 'speaking' | 'paused';

/**
 * Read-aloud on the browser's own SpeechSynthesis — no service, no key, no
 * network. Reads one `[data-speech]` chunk per utterance so the paragraph
 * being spoken can be highlighted, which `onboundary` alone can't give us
 * reliably across browsers.
 */
export default function ReadAloud({
  targetId,
  locale,
  label,
}: {
  targetId: string;
  locale: Locale;
  label?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [supported, setSupported] = useState(true);
  const chunksRef = useRef<HTMLElement[]>([]);
  const indexRef = useRef(0);
  /* Guards against the `onend` of a cancelled utterance advancing the queue. */
  const runRef = useRef(0);

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
  }, []);

  const clearHighlight = useCallback(() => {
    for (const el of chunksRef.current) el.classList.remove('speaking');
  }, []);

  const stop = useCallback(() => {
    runRef.current += 1;
    window.speechSynthesis.cancel();
    clearHighlight();
    indexRef.current = 0;
    setStatus('idle');
  }, [clearHighlight]);

  /* Leaving the page mid-sentence should not leave the browser talking. */
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakFrom = useCallback(
    (start: number, run: number) => {
      const chunks = chunksRef.current;
      if (start >= chunks.length) {
        clearHighlight();
        indexRef.current = 0;
        setStatus('idle');
        return;
      }

      const el = chunks[start];
      const text = (el.textContent || '').trim();
      if (!text) {
        speakFrom(start + 1, run);
        return;
      }

      clearHighlight();
      el.classList.add('speaking');
      indexRef.current = start;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = SPEECH_LANG[locale];
      utterance.rate = 0.98;

      const voice = window.speechSynthesis
        .getVoices()
        .find((v) => v.lang.replace('_', '-').startsWith(locale));
      if (voice) utterance.voice = voice;

      utterance.onend = () => {
        if (runRef.current !== run) return;
        speakFrom(start + 1, run);
      };
      utterance.onerror = () => {
        if (runRef.current !== run) return;
        clearHighlight();
        setStatus('idle');
      };

      window.speechSynthesis.speak(utterance);
    },
    [clearHighlight, locale],
  );

  function start() {
    const root = document.getElementById(targetId);
    if (!root) return;
    chunksRef.current = Array.from(
      root.querySelectorAll<HTMLElement>('[data-speech]'),
    );
    if (chunksRef.current.length === 0) return;

    window.speechSynthesis.cancel();
    runRef.current += 1;
    setStatus('speaking');
    speakFrom(0, runRef.current);
  }

  function pause() {
    window.speechSynthesis.pause();
    setStatus('paused');
  }

  function resume() {
    window.speechSynthesis.resume();
    setStatus('speaking');
  }

  if (!supported) {
    return (
      <p className={styles.unsupported}>{UI.readAloudUnsupported[locale]}</p>
    );
  }

  return (
    <div className={styles.wrap}>
      {status === 'idle' && (
        <button type="button" className="btn" onClick={start}>
          <span aria-hidden="true">▶</span>
          {label ?? UI.readAloud[locale]}
        </button>
      )}

      {status === 'speaking' && (
        <button type="button" className="btn" onClick={pause}>
          <span aria-hidden="true">❚❚</span>
          {UI.readAloudPause[locale]}
        </button>
      )}

      {status === 'paused' && (
        <button type="button" className="btn" onClick={resume}>
          <span aria-hidden="true">▶</span>
          {UI.readAloudResume[locale]}
        </button>
      )}

      {status !== 'idle' && (
        <button type="button" className="btn btn-quiet" onClick={stop}>
          <span aria-hidden="true">■</span>
          {UI.readAloudStop[locale]}
        </button>
      )}
    </div>
  );
}
