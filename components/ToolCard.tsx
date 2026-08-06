'use client';

import { UI } from '@/content/ui';
import { TOOLS, faviconUrl } from '@/lib/tools';
import type { Locale, ToolLesson } from '@/lib/types';
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

        <details className={styles.why}>
          <summary className={styles.whySummary}>
            <span className={styles.info}>
              <Icon name="info" size={13} />
            </span>
            {UI.whyThisMatters[locale]}
          </summary>
          <p className={styles.whyBody} data-speech>
            {lesson.why}
          </p>
        </details>

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
