import Link from 'next/link';
import { UI } from '@/content/ui';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import SocialIcon, { SOCIAL_LINKS } from './SocialIcon';
import styles from './SiteFooter.module.css';

export default function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.maker}>
          <p className={styles.madeBy}>{UI.footerMadeBy[locale]}</p>
          <p className={styles.tagline}>{UI.footerTagline[locale]}</p>
        </div>

        <nav className={styles.social} aria-label={UI.footerElsewhere[locale]}>
          <p className="eyebrow">{UI.footerElsewhere[locale]}</p>
          <div className={styles.icons}>
            {SOCIAL_LINKS.map((link) => (
              <SocialIcon key={link.id} link={link} />
            ))}
          </div>
        </nav>

        <div className={styles.meta}>
          <p className={styles.note}>{UI.footerNote[locale]}</p>
          <p className={styles.links}>
            <Link href={href(locale)}>{UI.navSyllabus[locale]}</Link>
            <span aria-hidden="true"> · </span>
            <Link href={href(locale, 'tools')}>{UI.navTools[locale]}</Link>
            <span aria-hidden="true"> · </span>
            <Link href={href(locale, 'glossary')}>
              {UI.navGlossary[locale]}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
