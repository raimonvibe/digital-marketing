'use client';

import { useEffect, useState } from 'react';
import { UI } from '@/content/ui';
import type { Locale } from '@/lib/types';
import {
  pause,
  resume,
  speakContainer,
  speechErrorMessage,
  stop,
  supported,
  useSpeech,
} from '@/lib/speech';
import Icon from './Icon';
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
  const { status, owner, error, errorOwner } = useSpeech();
  const [canSpeak, setCanSpeak] = useState(true);
  const me = `inline:${targetId}`;
  const mine = owner === me;
  /* Only the button that was pressed explains itself. */
  const failed = error && errorOwner === me ? error : null;

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
      <div className={failed ? `${styles.wrap} ${styles.wrapFailed}` : styles.wrap}>
        <button
          type="button"
          className="btn"
          onClick={() => speakContainer(targetId, me, locale)}
        >
          <Icon name="play" />
          {label ?? UI.readAloud[locale]}
        </button>
        {failed && (
          <p className={styles.failed} role="status">
            {speechErrorMessage(failed, locale)}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
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
  );
}
