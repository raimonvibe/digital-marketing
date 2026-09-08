'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, type Locale } from '@/lib/types';
import { LOCALE_LABEL } from '@/lib/i18n';
import { UI } from '@/content/ui';
import styles from './LangToggle.module.css';

/** Keeps you on the same page when you switch language: /en/modules/x → /nl/modules/x */
export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;

  function swap(to: Locale) {
    const rest = pathname.replace(/^\/(en|nl)(?=\/|$)/, '');
    return `/${to}${rest || '/'}`;
  }

  return (
    <div className={styles.wrap} role="group" aria-label={UI.languageLabel[locale]}>
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={swap(code)}
            className={active ? `${styles.opt} ${styles.active}` : styles.opt}
            aria-current={active ? 'true' : undefined}
            hrefLang={code}
            title={LOCALE_LABEL[code]}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
