import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { UI } from '@/content/ui';
import { MODULES } from '@/lib/course';
import { coerceLocale, href } from '@/lib/i18n';
import { TOOLS, TOOL_ORDER, faviconUrl } from '@/lib/tools';
import { LOCALES, type Locale, type ToolId } from '@/lib/types';
import shell from '../page.module.css';
import styles from './tools.module.css';

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
    title: UI.toolsTitle[locale],
    description: UI.toolsLede[locale],
  };
}

/** Which module teaches a tool, in the current language. */
function taughtIn(tool: ToolId, locale: Locale) {
  for (const mod of MODULES) {
    const lesson = mod.content[locale].lessons.find((l) => l.tool === tool);
    if (lesson) {
      return {
        slug: mod.slug,
        number: mod.number,
        accent: mod.accent,
        title: mod.content[locale].title,
        lessonId: lesson.id,
      };
    }
  }
  return null;
}

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const locale = coerceLocale((await params).lang);

  return (
    <div className={shell.page}>
      <header className={shell.head}>
        <p className="eyebrow">{UI.navTools[locale]}</p>
        <h1 className={shell.title}>{UI.toolsTitle[locale]}</h1>
        <p className={shell.lede}>{UI.toolsLede[locale]}</p>
      </header>

      <ul className={styles.grid}>
        {TOOL_ORDER.map((id) => {
          const tool = TOOLS[id];
          const source = taughtIn(id, locale);

          return (
            <li
              key={id}
              className={styles.card}
              data-accent={source?.accent ?? 'slate'}
            >
              <div className={styles.cardHead}>
                <img
                  className="favicon favicon-lg"
                  src={faviconUrl(tool.domain)}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <div>
                  <h2 className={styles.name} data-speech>
                    {tool.name}
                  </h2>
                  <p className={styles.domain}>{tool.domain}</p>
                </div>
              </div>

              <p className={styles.blurb} data-speech>
                {tool.blurb[locale]}
              </p>

              <p className={styles.source}>
                {source ? (
                  <>
                    <span className="eyebrow">{UI.taughtIn[locale]}</span>{' '}
                    <Link
                      href={`${href(locale, `modules/${source.slug}`)}#${source.lessonId}`}
                    >
                      {String(source.number).padStart(2, '0')} · {source.title}
                    </Link>
                  </>
                ) : (
                  <span className={styles.reference}>
                    {UI.referenceOnly[locale]}
                  </span>
                )}
              </p>

              <a
                className={`btn ${styles.visit}`}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {UI.visitTool[locale]} {tool.name}
                <Icon name="external" size={14} />
                <span className="visually-hidden">
                  ({UI.opensInNewTab[locale]})
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
