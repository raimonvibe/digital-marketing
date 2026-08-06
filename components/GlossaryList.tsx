'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import styles from './GlossaryList.module.css';

export interface GlossaryRow {
  id: string;
  term: string;
  definition: string;
  module: number;
  moduleSlug: string;
  moduleTitle: string;
}

export default function GlossaryList({
  rows,
  locale,
}: {
  rows: GlossaryRow[];
  locale: Locale;
}) {
  const [filter, setFilter] = useState('');

  /* Sorted alphabetically here rather than in the content file, so the order is
     correct in each language rather than in whichever it was authored in. */
  const sorted = useMemo(
    () => [...rows].sort((a, b) => a.term.localeCompare(b.term, locale)),
    [rows, locale],
  );

  const shown = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter(
      (r) =>
        r.term.toLowerCase().includes(q) ||
        r.definition.toLowerCase().includes(q),
    );
  }, [sorted, filter]);

  return (
    <div>
      <label className={styles.search}>
        <span className="eyebrow">{UI.glossarySearch[locale]}</span>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.input}
          autoComplete="off"
        />
      </label>

      {shown.length === 0 ? (
        <p className={styles.empty}>{UI.glossaryEmpty[locale]}</p>
      ) : (
        <dl className={styles.list}>
          {shown.map((row) => (
            <div key={row.id} className={styles.entry} id={row.id}>
              <dt className={styles.term}>{row.term}</dt>
              <dd className={styles.def}>
                <p>{row.definition}</p>
                <p className={styles.source}>
                  {UI.introducedIn[locale]}{' '}
                  <Link href={href(locale, `modules/${row.moduleSlug}`)}>
                    {String(row.module).padStart(2, '0')} · {row.moduleTitle}
                  </Link>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
