'use client';

import Link from 'next/link';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import { faviconUrl } from '@/lib/tools';
import type { Accent, Locale } from '@/lib/types';
import { useDoneModules, useHydrated } from '@/lib/store';
import Icon from './Icon';
import styles from './SyllabusModules.module.css';

export interface SyllabusRow {
  slug: string;
  number: number;
  accent: Accent;
  title: string;
  abstract: string;
  minutes: number;
  tools: { name: string; domain: string }[];
}

const ROMAN = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
];

/** Badge shelf — one seal per module, filled in as you finish them. */
export function BadgeShelf({
  rows,
  locale,
}: {
  rows: SyllabusRow[];
  locale: Locale;
}) {
  const [doneModules] = useDoneModules();
  const hydrated = useHydrated();
  const done = new Set(hydrated ? doneModules : []);

  return (
    <div className={styles.shelf}>
      <p className="eyebrow">{UI.badgesTitle[locale]}</p>
      <ul className={styles.seals}>
        {rows.map((row) => {
          const earned = done.has(row.slug);
          return (
            <li key={row.slug} data-accent={row.accent}>
              <span
                className={styles.seal}
                data-earned={earned || undefined}
                title={`${UI.moduleLabel[locale]} ${row.number} — ${row.title}`}
              >
                <span aria-hidden="true">{ROMAN[row.number - 1]}</span>
                <span className="visually-hidden">
                  {UI.moduleLabel[locale]} {row.number}: {row.title}
                  {earned ? ` — ${UI.badgeEarned[locale]}` : ''}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      {done.size === 0 && <p className={styles.empty}>{UI.badgesEmpty[locale]}</p>}
    </div>
  );
}

/** The syllabus table: number, title, abstract, tools, estimated time. */
export default function SyllabusModules({
  rows,
  locale,
}: {
  rows: SyllabusRow[];
  locale: Locale;
}) {
  const [doneModules] = useDoneModules();
  const hydrated = useHydrated();
  const done = new Set(hydrated ? doneModules : []);

  return (
    <ol className={styles.list}>
      {rows.map((row) => {
        const isDone = done.has(row.slug);
        return (
          <li key={row.slug} data-accent={row.accent} className={styles.row}>
            <Link href={href(locale, `modules/${row.slug}`)} className={styles.link}>
              <span className={styles.num}>
                {String(row.number).padStart(2, '0')}
                <span className={styles.tick} data-done={isDone || undefined}>
                  {isDone ? <Icon name="check" size={11} /> : null}
                </span>
              </span>

              <span className={styles.main}>
                <span className={styles.title}>{row.title}</span>
                <span className={styles.abstract}>{row.abstract}</span>
                {row.tools.length > 0 && (
                  <span className={styles.tools}>
                    {row.tools.map((tool) => (
                      <img
                        key={tool.domain + tool.name}
                        className="favicon"
                        src={faviconUrl(tool.domain)}
                        alt={tool.name}
                        title={tool.name}
                        width={26}
                        height={26}
                        loading="lazy"
                      />
                    ))}
                  </span>
                )}
              </span>

              <span className={styles.time}>
                {row.minutes} {UI.minutes[locale]}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
