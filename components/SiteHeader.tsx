'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { useDoneLessons, useDoneModules } from '@/lib/store';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
import styles from './SiteHeader.module.css';

/**
 * `totalUnits` is passed in from the server layout rather than imported, so the
 * whole course content doesn't get pulled into the client bundle just to draw
 * a progress bar.
 */
export default function SiteHeader({
  locale,
  totalUnits,
}: {
  locale: Locale;
  totalUnits: number;
}) {
  const pathname = usePathname() || '';
  const [doneModules] = useDoneModules();
  const [doneLessons] = useDoneLessons();
  const done = Math.min(doneModules.length + doneLessons.length, totalUnits);
  const pct = totalUnits === 0 ? 0 : Math.round((done / totalUnits) * 100);

  const links = [
    { path: '', label: UI.navSyllabus[locale] },
    { path: 'tools', label: UI.navTools[locale] },
    { path: 'glossary', label: UI.navGlossary[locale] },
  ];

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.bar}`}>
        <Link href={href(locale)} className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            ¶
          </span>
          <span className={styles.brandText}>
            <span className="eyebrow">{UI.courseKicker[locale]}</span>
            <span className={styles.brandTitle}>{UI.siteTitle[locale]}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={UI.navModules[locale]}>
          {links.map((l) => {
            const target = href(locale, l.path);
            const active = l.path === '' ? pathname === target : pathname.startsWith(target);
            return (
              <Link
                key={l.path}
                href={target}
                className={active ? `${styles.link} ${styles.linkActive}` : styles.link}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.controls}>
          <LangToggle locale={locale} />
          <ThemeToggle locale={locale} />
        </div>
      </div>

      <div
        className={styles.progress}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={UI.progressCourse[locale]}
      >
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        <span className={styles.progressLabel}>
          {pct}% {UI.progressComplete[locale]}
        </span>
      </div>
    </header>
  );
}
