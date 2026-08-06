import type { Locale } from '@/lib/types';

/**
 * Every string of site furniture, in both languages. Lesson content lives in
 * content/modules — this file is chrome only.
 */
export const UI = {
  siteTitle: {
    en: 'Digital Marketing & E-commerce',
    nl: 'Digitale Marketing & E-commerce',
  },
  siteTitleShort: { en: 'DM&E', nl: 'DM&E' },
  courseKicker: { en: 'A self-built course', nl: 'Een zelfgebouwde cursus' },

  navSyllabus: { en: 'Syllabus', nl: 'Studiegids' },
  navModules: { en: 'Modules', nl: 'Modules' },
  navTools: { en: 'Tools', nl: 'Tools' },
  navGlossary: { en: 'Glossary', nl: 'Begrippenlijst' },
  navOpen: { en: 'Open course menu', nl: 'Open cursusmenu' },
  navClose: { en: 'Close course menu', nl: 'Sluit cursusmenu' },
  skipToContent: { en: 'Skip to content', nl: 'Ga naar inhoud' },

  themeToLight: { en: 'Switch to light', nl: 'Schakel naar licht' },
  themeToDark: { en: 'Switch to dark', nl: 'Schakel naar donker' },
  languageLabel: { en: 'Language', nl: 'Taal' },

  progressCourse: { en: 'Course progress', nl: 'Cursusvoortgang' },
  progressComplete: { en: 'complete', nl: 'voltooid' },
  progressModule: { en: 'Module progress', nl: 'Modulevoortgang' },
  progressReset: { en: 'Reset progress', nl: 'Voortgang wissen' },
  progressResetConfirm: {
    en: 'Clear every checkmark, answer and note saved in this browser?',
    nl: 'Alle vinkjes, antwoorden en notities in deze browser wissen?',
  },

  moduleLabel: { en: 'Module', nl: 'Module' },
  moduleOf: { en: 'of', nl: 'van' },
  minutes: { en: 'min', nl: 'min' },
  estimatedTime: { en: 'Estimated time', nl: 'Geschatte tijd' },
  toolsUsed: { en: 'Tools used', nl: 'Gebruikte tools' },
  noToolsThisModule: {
    en: 'No tools — conceptual module',
    nl: 'Geen tools — conceptuele module',
  },
  onThisPage: { en: 'On this page', nl: 'Op deze pagina' },

  objectives: { en: 'Learning objectives', nl: 'Leerdoelen' },
  objectivesLede: {
    en: 'By the end of this module you will be able to:',
    nl: 'Aan het eind van deze module kun je:',
  },
  lesson: { en: 'Lesson', nl: 'Les' },
  toolLessons: { en: 'Tools in this module', nl: 'Tools in deze module' },
  mission: { en: 'Your mission', nl: 'Jouw missie' },
  whyThisMatters: { en: 'Why this matters', nl: 'Waarom dit ertoe doet' },
  startTask: { en: 'Start the task', nl: 'Start de taak' },
  opensInNewTab: { en: 'opens in a new tab', nl: 'opent in een nieuw tabblad' },
  assignment: { en: 'Assignment', nl: 'Opdracht' },
  deliverable: { en: 'Deliverable', nl: 'Op te leveren' },
  quiz: { en: 'Quiz', nl: 'Toets' },
  recap: { en: 'Recap', nl: 'Samenvatting' },
  recapLede: {
    en: 'Before you move on, the things worth keeping:',
    nl: 'Voor je verdergaat, wat je moet onthouden:',
  },

  markComplete: { en: 'Mark module complete', nl: 'Module afronden' },
  markedComplete: { en: 'Module complete', nl: 'Module afgerond' },
  undoComplete: { en: 'Undo', nl: 'Ongedaan maken' },
  nextModule: { en: 'Next module', nl: 'Volgende module' },
  prevModule: { en: 'Previous module', nl: 'Vorige module' },
  backToSyllabus: { en: 'Back to the syllabus', nl: 'Terug naar de studiegids' },

  readAloud: { en: 'Read aloud', nl: 'Lees voor' },
  readAloudPause: { en: 'Pause', nl: 'Pauzeer' },
  readAloudResume: { en: 'Resume', nl: 'Hervat' },
  readAloudStop: { en: 'Stop', nl: 'Stop' },
  readAloudUnsupported: {
    en: 'Read-aloud needs a browser with speech synthesis.',
    nl: 'Voorlezen vereist een browser met spraaksynthese.',
  },

  quizCheck: { en: 'Check answer', nl: 'Controleer antwoord' },
  quizTryAgain: { en: 'Try again', nl: 'Probeer opnieuw' },
  quizCorrect: { en: 'Correct', nl: 'Goed' },
  quizIncorrect: { en: 'Not quite', nl: 'Nog niet' },
  quizSelectAll: { en: 'Select every answer that applies.', nl: 'Selecteer alle antwoorden die kloppen.' },
  quizMatchHint: {
    en: 'Pick the matching item for each row.',
    nl: 'Kies bij elke rij het passende item.',
  },
  quizOrderHint: {
    en: 'Put the steps in the right order.',
    nl: 'Zet de stappen in de juiste volgorde.',
  },
  quizMoveUp: { en: 'Move up', nl: 'Omhoog' },
  quizMoveDown: { en: 'Move down', nl: 'Omlaag' },
  quizChoosePlaceholder: { en: 'Choose…', nl: 'Kies…' },
  quizSaved: { en: 'Saved in this browser', nl: 'Opgeslagen in deze browser' },
  quizReflectPlaceholder: {
    en: 'Write your answer…',
    nl: 'Schrijf je antwoord…',
  },
  quizScore: { en: 'Score', nl: 'Score' },

  /* Small motivational microcopy after a quiz is finished. */
  cheerAll: {
    en: 'All correct. On to the next one.',
    nl: 'Alles goed. Door naar de volgende.',
  },
  cheerMost: {
    en: 'Solid. Re-read the ones you missed and move on.',
    nl: 'Sterk. Lees de gemiste vragen nog eens terug en ga verder.',
  },
  cheerSome: {
    en: 'Worth a second pass through the lesson before you continue.',
    nl: 'De les nog een keer doorlopen is hier de moeite waard.',
  },

  badgeEarned: { en: 'Badge earned', nl: 'Badge behaald' },
  badgesTitle: { en: 'Badges', nl: 'Badges' },
  badgesEmpty: {
    en: 'Complete a module to earn your first badge.',
    nl: 'Rond een module af voor je eerste badge.',
  },

  glossaryTitle: { en: 'Glossary', nl: 'Begrippenlijst' },
  glossaryLede: {
    en: 'Every term the course introduces, with the module it comes from.',
    nl: 'Alle begrippen uit de cursus, met de module waarin ze voorkomen.',
  },
  glossarySearch: { en: 'Filter terms', nl: 'Filter begrippen' },
  glossaryEmpty: { en: 'No terms match that filter.', nl: 'Geen begrippen gevonden.' },
  introducedIn: { en: 'Introduced in module', nl: 'Geïntroduceerd in module' },

  toolsTitle: { en: 'Tool index', nl: 'Toolindex' },
  toolsLede: {
    en: 'Every tool the course touches, with the module that teaches it and a direct link to its free tier.',
    nl: 'Alle tools uit de cursus, met de module die ze behandelt en een directe link naar het gratis pakket.',
  },
  taughtIn: { en: 'Taught in', nl: 'Behandeld in' },
  visitTool: { en: 'Visit', nl: 'Bezoek' },

  footerNote: {
    en: 'A personal, front-end-only course. Progress and answers are stored in this browser only — nothing is sent anywhere.',
    nl: 'Een persoonlijke cursus zonder back-end. Voortgang en antwoorden staan alleen in deze browser — er wordt niets verstuurd.',
  },
} as const;

export type UiKey = keyof typeof UI;

export function t(key: UiKey, locale: Locale): string {
  return UI[key][locale];
}
