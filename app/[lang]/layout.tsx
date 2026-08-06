import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import '../globals.css';

import CourseShell from '@/components/CourseShell';
import type { NavModule } from '@/components/ModuleNav';
import SiteHeader from '@/components/SiteHeader';
import StoreBoot from '@/components/StoreBoot';
import { UI } from '@/content/ui';
import { allLessonIds, MODULES } from '@/lib/course';
import { coerceLocale } from '@/lib/i18n';
import { LOCALES, type Locale } from '@/lib/types';

/* Two contrasting families on purpose: a serif with opinions for display, a
   plain humanist sans for reading, and mono for the academic apparatus. */
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
  variable: '--font-fraunces',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

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
    title: {
      default: UI.siteTitle[locale],
      template: `%s · ${UI.siteTitle[locale]}`,
    },
    description: UI.footerNote[locale],
  };
}

/* Runs before first paint so a dark-mode visitor never sees a white flash. */
const themeScript = `(function(){try{var raw=localStorage.getItem('dme:v1:theme');var t=raw?JSON.parse(raw):null;if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

function navModules(locale: Locale): NavModule[] {
  return MODULES.map((m) => ({
    slug: m.slug,
    number: m.number,
    accent: m.accent,
    minutes: m.minutes,
    title: m.content[locale].title,
    lessons: m.content[locale].lessons.map((l) => ({
      id: l.id,
      title: l.title,
    })),
  }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const locale = coerceLocale((await params).lang);
  const totalUnits = MODULES.length + allLessonIds().length;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {UI.skipToContent[locale]}
        </a>
        <StoreBoot />
        <SiteHeader locale={locale} totalUnits={totalUnits} />
        <CourseShell locale={locale} modules={navModules(locale)}>
          {children}
        </CourseShell>
        <footer className="site-footer">
          <div className="shell">
            <p>{UI.footerNote[locale]}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
