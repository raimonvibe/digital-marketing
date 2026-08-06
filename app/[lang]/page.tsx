import Prose from '@/components/Prose';
import ReadAloud from '@/components/ReadAloud';
import SyllabusModules, {
  BadgeShelf,
  type SyllabusRow,
} from '@/components/SyllabusModules';
import { COURSE } from '@/content/course';
import { UI } from '@/content/ui';
import { MODULES, TOTAL_MINUTES } from '@/lib/course';
import { coerceLocale } from '@/lib/i18n';
import { TOOLS } from '@/lib/tools';
import { LOCALES, type Locale } from '@/lib/types';
import styles from './syllabus.module.css';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

function rows(locale: Locale): SyllabusRow[] {
  return MODULES.map((m) => ({
    slug: m.slug,
    number: m.number,
    accent: m.accent,
    minutes: m.minutes,
    title: m.content[locale].title,
    abstract: m.content[locale].abstract,
    tools: m.content[locale].lessons.map((l) => ({
      name: TOOLS[l.tool].name,
      domain: TOOLS[l.tool].domain,
    })),
  }));
}

export default async function SyllabusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const locale = coerceLocale((await params).lang);
  const c = COURSE[locale];
  const moduleRows = rows(locale);
  const hours = Math.round((TOTAL_MINUTES / 60) * 10) / 10;

  return (
    <div className={styles.page}>
      {/* Title block is set hard left against a thick rule, with the standfirst
          running past it — editorial, not a centred hero. */}
      <header className={styles.masthead}>
        <p className="eyebrow">{UI.courseKicker[locale]}</p>
        <h1 className={styles.title}>{c.title}</h1>
        <p className={styles.standfirst}>{c.subtitle}</p>
        <dl className={styles.stats}>
          <div>
            <dt className="eyebrow">{UI.navModules[locale]}</dt>
            <dd>{MODULES.length}</dd>
          </div>
          <div>
            <dt className="eyebrow">{UI.navTools[locale]}</dt>
            <dd>{Object.keys(TOOLS).length}</dd>
          </div>
          <div>
            <dt className="eyebrow">{c.totalLabel}</dt>
            <dd>
              ≈{hours} {locale === 'nl' ? 'uur' : 'hrs'}
            </dd>
          </div>
        </dl>
      </header>

      <div className="spread">
        <div className="margin-col">
          <ReadAloud targetId="description" locale={locale} />
          <div className={styles.shelfWrap}>
            <BadgeShelf rows={moduleRows} locale={locale} />
          </div>
        </div>

        <div className={styles.column}>
          <section id="description" className="measure">
            <Prose blocks={c.description} />
          </section>

          <section className={styles.objectives}>
            <h2 className={styles.h2}>{UI.objectives[locale]}</h2>
            <p className={styles.sectionLede}>
              {UI.objectivesLedeCourse[locale]}
            </p>
            <ol className={styles.objectivesList}>
              {c.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className={styles.h2}>
              {locale === 'nl' ? 'Hoe het werkt' : 'How this works'}
            </h2>
            <div className={styles.howGrid}>
              {c.howItWorks.map((item, i) => (
                <div key={i} className={styles.howItem}>
                  <p className={styles.howNum}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={styles.howTitle}>{item.title}</h3>
                  <p className={styles.howText}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.h2}>{c.modulesHeading}</h2>
            <p className={styles.sectionLede}>{c.modulesLede}</p>
            <div className={styles.tableWrap}>
              <SyllabusModules rows={moduleRows} locale={locale} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
