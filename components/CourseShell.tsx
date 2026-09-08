'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import ModuleNav, { type NavModule } from './ModuleNav';
import styles from './CourseShell.module.css';

/**
 * The syllabus is the course front matter and gets the full page width; every
 * other page reads like a chapter, with the table of contents down the side.
 */
export default function CourseShell({
  locale,
  modules,
  children,
}: {
  locale: Locale;
  modules: NavModule[];
  children: ReactNode;
}) {
  const pathname = usePathname() || '';
  const isSyllabus = pathname === href(locale) || pathname === `/${locale}`;

  if (isSyllabus) {
    return (
      <main id="main" className="shell">
        {children}
      </main>
    );
  }

  return (
    <div className={`shell ${styles.layout}`}>
      <aside className={styles.aside}>
        <div className={styles.asideInner}>
          <ModuleNav locale={locale} modules={modules} />
        </div>
        <details className={styles.mobileNav}>
          <summary className={styles.mobileSummary}>
            {UI.navModules[locale]}
          </summary>
          <ModuleNav locale={locale} modules={modules} />
        </details>
      </aside>

      <main id="main" className={styles.main}>
        {children}
      </main>
    </div>
  );
}
