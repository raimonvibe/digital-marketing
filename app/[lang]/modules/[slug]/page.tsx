import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ModuleComplete from '@/components/ModuleComplete';
import Prose from '@/components/Prose';
import Quiz from '@/components/Quiz';
import ReadAloud from '@/components/ReadAloud';
import ToolCard from '@/components/ToolCard';
import { UI } from '@/content/ui';
import { getModule, MODULES, moduleNeighbours } from '@/lib/course';
import { coerceLocale } from '@/lib/i18n';
import { TOOLS, faviconUrl } from '@/lib/tools';
import { LOCALES } from '@/lib/types';
import styles from './module.module.css';

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    MODULES.map((m) => ({ lang, slug: m.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = coerceLocale(lang);
  const mod = getModule(slug);
  if (!mod) return {};
  return {
    title: mod.content[locale].title,
    description: mod.content[locale].abstract,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = coerceLocale(lang);
  const mod = getModule(slug);
  if (!mod) notFound();

  const c = mod.content[locale];
  const { next } = moduleNeighbours(slug);
  const tools = c.lessons.map((l) => TOOLS[l.tool]);

  const sections = [
    { id: 'lesson', label: UI.lesson[locale] },
    ...(c.lessons.length > 0
      ? [{ id: 'tools', label: UI.toolLessons[locale] }]
      : []),
    ...(c.assignment ? [{ id: 'assignment', label: UI.assignment[locale] }] : []),
    { id: 'quiz', label: UI.quiz[locale] },
    { id: 'recap', label: UI.recap[locale] },
  ];

  return (
    <article data-accent={mod.accent} className={styles.article}>
      <header className={styles.hero}>
        <p className="eyebrow">
          {UI.moduleLabel[locale]} {String(mod.number).padStart(2, '0')}{' '}
          <span className={styles.heroOf}>
            {UI.moduleOf[locale]} {MODULES.length}
          </span>
        </p>
        <h1 className={styles.heroTitle} data-speech>
          {c.title}
        </h1>
        <p className={`lede ${styles.heroSub}`} data-speech>
          {c.subtitle}
        </p>
      </header>

      <div className="spread">
        <div className="margin-col">
          <dl className={styles.meta}>
            <dt className="eyebrow">{UI.estimatedTime[locale]}</dt>
            <dd>
              {mod.minutes} {UI.minutes[locale]}
            </dd>

            <dt className="eyebrow">{UI.toolsUsed[locale]}</dt>
            <dd>
              {tools.length === 0 ? (
                <span className={styles.noTools}>
                  {UI.noToolsThisModule[locale]}
                </span>
              ) : (
                <ul className={styles.toolList}>
                  {tools.map((tool) => (
                    <li key={tool.id}>
                      <img
                        className="favicon"
                        src={faviconUrl(tool.domain)}
                        alt=""
                        width={26}
                        height={26}
                        loading="lazy"
                      />
                      {tool.name}
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </dl>

          <nav className={styles.toc} aria-label={UI.onThisPage[locale]}>
            <p className="eyebrow">{UI.onThisPage[locale]}</p>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.body}>
          <section className={styles.objectives} aria-labelledby="objectives-h">
            <p className="eyebrow eyebrow-accent" id="objectives-h">
              {UI.objectives[locale]}
            </p>
            <p className={styles.objectivesLede} data-speech>
              {UI.objectivesLede[locale]}
            </p>
            <ol className={styles.objectivesList}>
              {c.objectives.map((o, i) => (
                <li key={i} data-speech>
                  {o}
                </li>
              ))}
            </ol>
          </section>

          <section id="lesson" className={styles.section}>
            <div className={styles.sectionHead}>
              <h2>{UI.lesson[locale]}</h2>
              <ReadAloud targetId="lesson" locale={locale} />
            </div>
            <div className="measure">
              <Prose blocks={c.lesson} />
            </div>
          </section>

          {c.lessons.length > 0 && (
            <section id="tools" className={styles.section}>
              <div className={styles.sectionHead}>
                <h2>{UI.toolLessons[locale]}</h2>
              </div>
              <div className={styles.cards}>
                {c.lessons.map((lesson) => (
                  <ToolCard
                    key={lesson.id}
                    lesson={lesson}
                    locale={locale}
                    moduleSlug={mod.slug}
                  />
                ))}
              </div>
            </section>
          )}

          {c.assignment && (
            <section id="assignment" className={styles.section}>
              <div className={styles.sectionHead}>
                <h2>{UI.assignment[locale]}</h2>
              </div>
              <div className={`${styles.assignment} measure`}>
                <h3 className={styles.assignmentTitle} data-speech>
                  {c.assignment.title}
                </h3>
                <Prose blocks={c.assignment.brief} />
                <p className={styles.deliverable}>
                  <span className="eyebrow eyebrow-accent" data-speech>
                    {UI.deliverable[locale]}
                  </span>
                  <br />
                  <span data-speech>{c.assignment.deliverable}</span>
                </p>
              </div>
            </section>
          )}

          <section id="quiz" className={styles.section}>
            <div className={styles.sectionHead}>
              <h2>{UI.quiz[locale]}</h2>
            </div>
            <Quiz items={c.quiz} locale={locale} />
          </section>

          <section id="recap" className={styles.section}>
            <div className={styles.sectionHead}>
              <h2>{UI.recap[locale]}</h2>
            </div>
            <div className="measure">
              <p className={styles.recapLede} data-speech>
                {UI.recapLede[locale]}
              </p>
              <ul className={styles.recapList}>
                {c.recap.map((r, i) => (
                  <li key={i} data-speech>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ModuleComplete
            slug={mod.slug}
            locale={locale}
            next={
              next
                ? {
                    slug: next.slug,
                    title: next.content[locale].title,
                    number: next.number,
                  }
                : undefined
            }
          />
        </div>
      </div>
    </article>
  );
}
