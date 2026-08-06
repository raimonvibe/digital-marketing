export const LOCALES = ['en', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];

export type Accent =
  | 'slate'
  | 'green'
  | 'ochre'
  | 'purple'
  | 'teal'
  | 'blue'
  | 'rust'
  | 'rose'
  | 'indigo'
  | 'olive'
  | 'plum';

/* Lesson prose is authored as blocks rather than markdown so the read-aloud
   control can walk it sentence by sentence and highlight what it is speaking. */
export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'note'; label: string; text: string };

export type QuizItem =
  | {
      kind: 'choice';
      id: string;
      prompt: string;
      options: string[];
      answer: number;
      explain: string;
    }
  | {
      kind: 'multi';
      id: string;
      prompt: string;
      options: string[];
      answers: number[];
      explain: string;
    }
  | {
      kind: 'match';
      id: string;
      prompt: string;
      /* Each left item is matched to one right item. `rights` is the shared
         pool shown in every dropdown; `answer` indexes into it. */
      lefts: string[];
      rights: string[];
      answer: number[];
      explain: string;
    }
  | {
      kind: 'order';
      id: string;
      prompt: string;
      /* Authored in correct order; the component shuffles deterministically. */
      steps: string[];
      explain: string;
    }
  | {
      kind: 'reflect';
      id: string;
      prompt: string;
      hint?: string;
    };

export interface ToolLesson {
  id: string;
  tool: ToolId;
  /* Active-verb title: "Find Out What You Already Rank For". */
  title: string;
  what: Block[];
  /* Optional deeper context behind a disclosure, so the main flow stays clean. */
  why: string;
  mission: string;
  missionUrl: string;
  missionCta: string;
  check: QuizItem;
}

export interface Assignment {
  title: string;
  brief: Block[];
  deliverable: string;
}

export interface ModuleContent {
  title: string;
  /* One editorial line under the title. */
  subtitle: string;
  /* One sentence for the syllabus table. */
  abstract: string;
  objectives: string[];
  lesson: Block[];
  lessons: ToolLesson[];
  assignment?: Assignment;
  quiz: QuizItem[];
  recap: string[];
}

export interface Module {
  slug: string;
  number: number;
  accent: Accent;
  minutes: number;
  content: Record<Locale, ModuleContent>;
}

export type ToolId =
  | 'search-console'
  | 'semrush'
  | 'ahrefs'
  | 'google-ads'
  | 'business-profile'
  | 'mailchimp'
  | 'constant-contact'
  | 'klaviyo'
  | 'canva'
  | 'hootsuite'
  | 'hubspot'
  | 'shopify'
  | 'wix'
  | 'ga4'
  | 'x';

export interface Tool {
  id: ToolId;
  name: string;
  /* Domain fed to Google's favicon service. */
  domain: string;
  /* Where the hands-on task actually starts. */
  url: string;
  blurb: Record<Locale, string>;
}

export interface GlossaryEntry {
  id: string;
  term: Record<Locale, string>;
  definition: Record<Locale, string>;
  /* Module number where the term is introduced. */
  module: number;
}
