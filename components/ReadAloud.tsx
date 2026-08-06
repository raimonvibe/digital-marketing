'use client';

import { useEffect, useState } from 'react';
import { UI } from '@/content/ui';
import type { Locale } from '@/lib/types';
import {
  pause,
  resume,
  speakContainer,
  stop,
  supported,
  useSpeech,
} from '@/lib/speech';
import styles from './ReadAloud.module.css';

/**
 * The inline control that sits beside a section heading. It drives the shared
 * engine in lib/speech, so starting playback here stops whatever the dock was
 * reading rather than talking over it.
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
  const { status, owner } = useSpeech();
  const [canSpeak, setCanSpeak] = useState(true);
  const me = `inline:${targetId}`;
  const mine = owner === me;

  useEffect(() => {
    setCanSpeak(supported());
  }, []);

  /* Leaving the page mid-sentence should not leave the browser talking. */
  useEffect(() => stop, []);

  if (!canSpeak) {
    return <p className={styles.unsupported}>{UI.readAloudUnsupported[locale]}</p>;
  }

  if (!mine || status === 'idle') {
    return (
      <div className={styles.wrap}>
        <button
          type="button"
          className="btn"
          onClick={() => speakContainer(targetId, me, locale)}
        >
          <span aria-hidden="true">▶</span>
          {label ?? UI.readAloud[locale]}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      {status === 'speaking' ? (
        <button type="button" className="btn" onClick={pause}>
          <span aria-hidden="true">❚❚</span>
          {UI.readAloudPause[locale]}
        </button>
      ) : (
        <button type="button" className="btn" onClick={resume}>
          <span aria-hidden="true">▶</span>
          {UI.readAloudResume[locale]}
        </button>
      )}
      <button type="button" className="btn btn-quiet" onClick={stop}>
        <span aria-hidden="true">■</span>
        {UI.readAloudStop[locale]}
      </button>
    </div>
  );
}
