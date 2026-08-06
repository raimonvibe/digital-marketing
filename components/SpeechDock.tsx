'use client';

import { useEffect, useMemo, useState } from 'react';
import { UI } from '@/content/ui';
import type { Locale } from '@/lib/types';
import {
  getRate,
  getVoiceUri,
  otherVoices,
  pause,
  resume,
  setRate,
  setVoice,
  speakContainer,
  speakText,
  stop,
  supported,
  useSpeech,
  voicesFor,
} from '@/lib/speech';
import Icon from './Icon';
import styles from './SpeechDock.module.css';

const ME = 'dock';

/** Where this platform hides its text-to-speech voices. */
function installHint(locale: Locale): string {
  if (typeof navigator === 'undefined') return UI.speechInstallGeneric[locale];
  const ua = navigator.userAgent;
  const iOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

  if (iOS) return UI.speechInstallIos[locale];
  if (/Android/.test(ua)) return UI.speechInstallAndroid[locale];
  if (/Windows/.test(ua)) return UI.speechInstallWindows[locale];
  if (/Macintosh|Mac OS X/.test(ua)) return UI.speechInstallMac[locale];
  return UI.speechInstallGeneric[locale];
}

/**
 * Sticky read-aloud control, bottom right. Adds three things the inline
 * buttons do not have: it is reachable from anywhere on the page, it can read
 * just the text you have selected, and it lets you pick the voice — including
 * a voice from another language when the page language has none installed.
 */
export default function SpeechDock({ locale }: { locale: Locale }) {
  const { status, owner, voiceCount, voiceEpoch } = useSpeech();
  const [open, setOpen] = useState(false);
  const [canSpeak, setCanSpeak] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);

  useEffect(() => {
    setCanSpeak(supported());
  }, []);

  /* Enable the selection button only while there is something selected. */
  useEffect(() => {
    const check = () => {
      const sel = window.getSelection();
      setHasSelection(!!sel && sel.toString().trim().length > 0);
    };
    document.addEventListener('selectionchange', check);
    check();
    return () => document.removeEventListener('selectionchange', check);
  }, []);

  useEffect(() => stop, []);

  /* voiceEpoch changes when the platform finishes populating its voice list,
     which on iOS happens well after first paint. */
  const groups = useMemo(() => {
    const dutch = voicesFor('nl');
    const english = voicesFor('en');
    const others = otherVoices();
    /* Current page language first — that is the one you are choosing for. */
    const ordered =
      locale === 'nl'
        ? [
            { label: UI.speechLangNl[locale], voices: dutch },
            { label: UI.speechLangEn[locale], voices: english },
          ]
        : [
            { label: UI.speechLangEn[locale], voices: english },
            { label: UI.speechLangNl[locale], voices: dutch },
          ];
    return {
      ordered: [
        ...ordered,
        { label: UI.speechLangOther[locale], voices: others },
      ].filter((g) => g.voices.length > 0),
      missingForPage: (locale === 'nl' ? dutch : english).length === 0,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, voiceEpoch]);

  if (!canSpeak) return null;

  const playing = status !== 'idle';
  const mine = owner === ME;

  function readSelection() {
    const text = window.getSelection()?.toString().trim();
    if (text) speakText(text, ME, locale);
  }

  return (
    <div className={styles.dock}>
      {open && (
        <div
          className={styles.panel}
          role="group"
          aria-label={UI.speechDockTitle[locale]}
        >
          <div className={styles.panelHead}>
            <p className="eyebrow eyebrow-accent">
              {UI.speechDockTitle[locale]}
            </p>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label={UI.speechDockClose[locale]}
            >
              <Icon name="close" />
            </button>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => speakContainer('main', ME, locale)}
            >
              <Icon name="play" />
              {UI.speechReadPage[locale]}
            </button>
            <button
              type="button"
              className="btn"
              onClick={readSelection}
              disabled={!hasSelection}
              title={hasSelection ? undefined : UI.speechSelectionHint[locale]}
            >
              <Icon name="quote" />
              {UI.speechReadSelection[locale]}
            </button>
          </div>

          {!hasSelection && (
            <p className={styles.hint}>{UI.speechSelectionHint[locale]}</p>
          )}

          {playing && (
            <div className={styles.actions}>
              {status === 'speaking' ? (
                <button type="button" className="btn" onClick={pause}>
                  <Icon name="pause" />
                  {UI.readAloudPause[locale]}
                </button>
              ) : (
                <button type="button" className="btn" onClick={resume}>
                  <Icon name="play" />
                  {UI.readAloudResume[locale]}
                </button>
              )}
              <button type="button" className="btn btn-quiet" onClick={stop}>
                <Icon name="stop" />
                {UI.readAloudStop[locale]}
              </button>
            </div>
          )}

          <label className={styles.field}>
            <span className="eyebrow">
              {UI.speechVoice[locale]}
              {voiceCount > 0 && (
                <span className={styles.count}>
                  {' '}
                  · {voiceCount} {UI.speechVoiceCount[locale]}
                </span>
              )}
            </span>

            {voiceCount === 0 ? (
              <span className={styles.hint}>{UI.speechNoVoices[locale]}</span>
            ) : (
              <select
                className={styles.select}
                value={getVoiceUri(locale) ?? ''}
                onChange={(e) => setVoice(locale, e.target.value || null)}
              >
                <option value="">{UI.speechVoiceAuto[locale]}</option>
                {groups.ordered.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.voices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({v.lang})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            )}
          </label>

          {groups.missingForPage && (
            <p className={styles.warn}>
              {locale === 'nl'
                ? UI.speechMissingDutch[locale]
                : UI.speechMissingEnglish[locale]}
            </p>
          )}

          <details className={styles.install}>
            <summary className={styles.installSummary}>
              {UI.speechInstallTitle[locale]}
            </summary>
            <p className={styles.hint}>{installHint(locale)}</p>
          </details>

          <label className={styles.field}>
            <span className="eyebrow">
              {UI.speechSpeed[locale]} · {getRate().toFixed(2)}×
            </span>
            <input
              className={styles.range}
              type="range"
              min={0.6}
              max={1.6}
              step={0.05}
              value={getRate()}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      <button
        type="button"
        className={styles.fab}
        data-playing={(playing && mine) || undefined}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        /* aria-expanded already conveys open/closed, so this stays constant —
           otherwise it collides with the panel's own close button. */
        aria-label={UI.speechDockTitle[locale]}
      >
        <Icon
          name={playing && mine ? 'pause' : 'speaker'}
          className={styles.fabIcon}
          size={22}
        />
      </button>
    </div>
  );
}
