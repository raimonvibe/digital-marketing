import type { Metadata } from 'next';
import GlossaryList, { type GlossaryRow } from '@/components/GlossaryList';
import { GLOSSARY } from '@/content/glossary';
import { UI } from '@/content/ui';
import { MODULES } from '@/lib/course';
import { coerceLocale } from '@/lib/i18n';
import { LOCALES, type Locale } from '@/lib/types';
import styles from '../page.module.css';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const locale = coerceLocale((await params).lang);
  return {
    title: UI.glossaryTitle[locale],
    description: UI.glossaryLede[locale],
  };
}

function rows(locale: Locale): GlossaryRow[] {
  return GLOSSARY.map((entry) => {
    const mod = MODULES.find((m) => m.number === entry.module);
    return {
      id: entry.id,
      term: entry.term[locale],
      definition: entry.definition[locale],
      module: entry.module,
      moduleSlug: mod?.slug ?? '',
      moduleTitle: mod ? mod.content[locale].title : '',
    };
  });
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const locale = coerceLocale((await params).lang);

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className="eyebrow">{UI.navGlossary[locale]}</p>
        <h1 className={styles.title}>{UI.glossaryTitle[locale]}</h1>
        <p className={styles.lede}>{UI.glossaryLede[locale]}</p>
      </header>

      <GlossaryList rows={rows(locale)} locale={locale} />
    </div>
  );
}
