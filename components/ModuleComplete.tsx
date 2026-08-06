'use client';

import Link from 'next/link';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { toggleInList, useDoneModules, useHydrated } from '@/lib/store';
import styles from './ModuleComplete.module.css';

export default function ModuleComplete({
  slug,
  locale,
  next,
}: {
  slug: string;
  locale: Locale;
  next?: { slug: string; title: string; number: number };
}) {
  const [doneModules, setDoneModules] = useDoneModules();
  const hydrated = useHydrated();
  const done = hydrated && doneModules.includes(slug);

  return (
    <div className={styles.wrap} data-done={done || undefined}>
      <div className={styles.left}>
        {done ? (
          <>
            <p className={styles.badgeLine}>
              <span className={styles.seal} aria-hidden="true">
                ✓
              </span>
              <span>
                <span className="eyebrow eyebrow-accent">
                  {UI.badgeEarned[locale]}
                </span>
                <br />
                <strong>{UI.markedComplete[locale]}</strong>
              </span>
            </p>
            <button
              type="button"
              className="btn btn-quiet"
              onClick={() => setDoneModules(toggleInList(doneModules, slug, false))}
            >
              {UI.undoComplete[locale]}
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setDoneModules(toggleInList(doneModules, slug, true))}
          >
            {UI.markComplete[locale]}
          </button>
        )}
      </div>

      <div className={styles.right}>
        {next ? (
          <Link href={href(locale, `modules/${next.slug}`)} className={styles.nextLink}>
            <span className="eyebrow">{UI.nextModule[locale]}</span>
            <span className={styles.nextTitle}>
              {String(next.number).padStart(2, '0')} · {next.title}
              <span aria-hidden="true"> →</span>
            </span>
          </Link>
        ) : (
          <Link href={href(locale)} className={styles.nextLink}>
            <span className={styles.nextTitle}>
              {UI.backToSyllabus[locale]}
              <span aria-hidden="true"> →</span>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
