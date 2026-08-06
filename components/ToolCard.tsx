'use client';

import { useEffect, useRef, useState } from 'react';
import { UI } from '@/content/ui';
import { TOOLS, faviconUrl } from '@/lib/tools';
import type { Locale, ToolLesson } from '@/lib/types';
import { REVEAL_EVENT } from '@/lib/speech';
import { toggleInList, useDoneLessons, useHydrated } from '@/lib/store';
import Icon from './Icon';
import Prose from './Prose';
import { QuizQuestion } from './Quiz';
import styles from './ToolCard.module.css';

/**
 * One tool = one card, in the three beats the outline asks for: what it does
 * and why it matters, a concrete mission with a direct link, then a question
 * that applies it to your own business.
 */
export default function ToolCard({
  lesson,
  locale,
  moduleSlug,
}: {
  lesson: ToolLesson;
  locale: Locale;
  moduleSlug: string;
}) {
  const tool = TOOLS[lesson.tool];
  const [doneLessons, setDoneLessons] = useDoneLessons();
  const hydrated = useHydrated();
  const key = `${moduleSlug}/${lesson.id}`;
  const done = hydrated && doneLessons.includes(key);

  const [whyOpen, setWhyOpen] = useState(false);
  const whyRef = useRef<HTMLDivElement>(null);
  const whyId = `${lesson.id}-why`;

  /* Read-aloud unfolds the panel as it reaches it, so the words are on screen
     while they play rather than arriving from nowhere. */
  useEffect(() => {
    const el = whyRef.current;
    if (!el) return;
    const open = () => setWhyOpen(true);
    el.addEventListener(REVEAL_EVENT, open);
    return () => el.removeEventListener(REVEAL_EVENT, open);
  }, []);

  return (
    <article className={styles.card} id={lesson.id} data-done={done || undefined}>
      <header className={styles.head}>
        <img
          className="favicon favicon-lg"
          src={faviconUrl(tool.domain)}
          alt=""
          width={40}
          height={40}
          loading="lazy"
        />
        <div className={styles.headText}>
          <p className="eyebrow eyebrow-accent" data-speech>
            {tool.name}
          </p>
          <h3 className={styles.title} data-speech>
            {lesson.title}
          </h3>
        </div>
        <label className={styles.doneToggle}>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) =>
              setDoneLessons(toggleInList(doneLessons, key, e.target.checked))
            }
          />
          <span className={styles.doneLabel}>
            {done ? UI.lessonDone[locale] : UI.markLessonDone[locale]}
          </span>
        </label>
      </header>

      <div className={styles.body}>
        <Prose blocks={lesson.what} />

        {/* Not a <details>: a closed one is kept out of the accessibility tree,
            so a screen reader working down the page skipped this entirely. The
            body is always rendered and only folded away from the eye, which
            leaves it in the reading order on every platform. */}
        <div className={styles.why} ref={whyRef}>
          <button
            type="button"
            className={styles.whySummary}
            aria-expanded={whyOpen}
            aria-controls={whyId}
            onClick={() => setWhyOpen((v) => !v)}
            /* Reads too, so the panel unfolding mid-playback is announced
               rather than just appearing. */
            data-speech
          >
            <span className={styles.info}>
              <Icon name="info" size={13} />
            </span>
            {UI.whyThisMatters[locale]}
          </button>
          <p
            id={whyId}
            className={styles.whyBody}
            data-folded={!whyOpen || undefined}
            data-speech
          >
            {lesson.why}
          </p>
        </div>

        <section className={styles.mission} aria-label={UI.mission[locale]}>
          <p className="eyebrow eyebrow-accent">{UI.mission[locale]}</p>
          <p className={styles.missionText} data-speech>
            {lesson.mission}
          </p>
          <a
            className="btn btn-primary"
            href={lesson.missionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lesson.missionCta}
            <Icon name="external" size={14} />
            <span className="visually-hidden">
              ({UI.opensInNewTab[locale]})
            </span>
          </a>
        </section>

        <div className={styles.check}>
          <QuizQuestion item={lesson.check} locale={locale} />
        </div>
      </div>
    </article>
  );
}
