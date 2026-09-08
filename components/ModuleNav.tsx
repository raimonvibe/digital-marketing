'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import type { Accent, Locale } from '@/lib/types';
import {
  clearAll,
  useDoneLessons,
  useDoneModules,
  useHydrated,
} from '@/lib/store';
import Icon from './Icon';
import styles from './ModuleNav.module.css';

export interface NavModule {
  slug: string;
  number: number;
  accent: Accent;
  title: string;
  minutes: number;
  lessons: { id: string; title: string }[];
}

/**
 * Accordion table of contents. Only the module you are on is open by default;
 * clicking a title opens any other. Checkmarks come from localStorage.
 */
export default function ModuleNav({
  locale,
  modules,
}: {
  locale: Locale;
  modules: NavModule[];
}) {
  const pathname = usePathname() || '';
  const currentSlug = modules.find((m) =>
    pathname.startsWith(href(locale, `modules/${m.slug}`)),
  )?.slug;

  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [doneModules] = useDoneModules();
  const [doneLessons] = useDoneLessons();
  const hydrated = useHydrated();

  const doneModuleSet = new Set(doneModules);
  const doneLessonSet = new Set(doneLessons);
  /* Null means "not touched yet", so the current module stays open on load. */
  const expanded = openSlug ?? currentSlug ?? null;

  return (
    <nav className={styles.nav} aria-label={UI.navModules[locale]}>
      <p className="eyebrow">{UI.navModules[locale]}</p>

      <ol className={styles.list}>
        {modules.map((m) => {
          const open = expanded === m.slug;
          const isCurrent = currentSlug === m.slug;
          const moduleDone = hydrated && doneModuleSet.has(m.slug);

          return (
            <li key={m.slug} data-accent={m.accent} className={styles.item}>
              <div className={isCurrent ? `${styles.row} ${styles.rowCurrent}` : styles.row}>
                <button
                  type="button"
                  className={styles.disclosure}
                  aria-expanded={open}
                  aria-controls={`nav-${m.slug}`}
                  onClick={() => setOpenSlug(open ? '' : m.slug)}
                >
                  <span className={styles.chevron} data-open={open || undefined}>
                    <Icon name="chevron" size={9} />
                  </span>
                  <span className="visually-hidden">{m.title}</span>
                </button>

                <Link href={href(locale, `modules/${m.slug}`)} className={styles.moduleLink}>
                  <span className={styles.num}>
                    {String(m.number).padStart(2, '0')}
                  </span>
                  <span className={styles.title}>{m.title}</span>
                </Link>

                <span className={styles.check} data-done={moduleDone || undefined}>
                  {moduleDone ? <Icon name="check" size={11} /> : null}
                </span>
              </div>

              <div id={`nav-${m.slug}`} hidden={!open}>
                {m.lessons.length > 0 ? (
                  <ul className={styles.lessons}>
                    {m.lessons.map((l) => {
                      const lessonDone = hydrated && doneLessonSet.has(`${m.slug}/${l.id}`);
                      return (
                        <li key={l.id}>
                          <Link
                            href={`${href(locale, `modules/${m.slug}`)}#${l.id}`}
                            className={styles.lessonLink}
                          >
                            <span
                              className={styles.lessonCheck}
                              data-done={lessonDone || undefined}
                              aria-hidden="true"
                            >
                              {lessonDone ? <Icon name="check" size={10} /> : '·'}
                            </span>
                            {l.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className={styles.noTools}>{UI.noToolsThisModule[locale]}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <button
        type="button"
        className={`btn btn-quiet ${styles.reset}`}
        onClick={() => {
          if (window.confirm(UI.progressResetConfirm[locale])) clearAll();
        }}
      >
        {UI.progressReset[locale]}
      </button>
    </nav>
  );
}
