import type { Block, Locale } from '@/lib/types';

/** Front matter for the syllabus page. */
export const COURSE: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    description: Block[];
    objectives: string[];
    howItWorks: { title: string; text: string }[];
    modulesHeading: string;
    modulesLede: string;
    totalLabel: string;
  }
> = {
  en: {
    title: 'Digital Marketing & E-commerce',
    subtitle:
      'Eleven modules, fifteen tools, and a free-tier account for every one of them. Built for one student: me.',
    description: [
      {
        kind: 'p',
        text: 'This is a self-built course, modelled on the structure of a professional certificate but expanded with the tools I actually want to learn. It runs entirely in the browser. There is no account, no server and no cohort — your progress, quiz answers and written reflections are stored in this browser and nowhere else.',
      },
      {
        kind: 'p',
        text: 'The point is not to read about marketing. Every tool module ends with you logged into the real product, on its free tier, doing one concrete thing to a site or a business you actually own. The reading exists to make that half hour count.',
      },
      {
        kind: 'note',
        label: 'A note on scope',
        text: 'Eleven modules is roughly a term of evening study. Do one a week and you finish in under three months, with fifteen tools you have genuinely touched rather than fifteen you have heard of.',
      },
    ],
    objectives: [
      'Explain how digital marketing and e-commerce fit together, and place any activity on the marketing funnel.',
      'Run a basic SEO audit of a site you own, using Search Console, Semrush and Ahrefs.',
      'Plan and write an email campaign, and choose the right platform for the job.',
      'Produce your own marketing graphics without a designer.',
      'Schedule social content and track leads in a CRM.',
      'Stand up a working product page on a hosted e-commerce platform.',
      'Read an analytics report and say what it means for the business.',
      'Write headlines, calls-to-action and blog structures that hold attention.',
      'Judge an influencer or affiliate partnership on its numbers rather than its follower count.',
    ],
    howItWorks: [
      {
        title: 'Every module has the same five parts',
        text: 'Learning objectives, a lesson, hands-on tool missions, a quiz, and a recap. Same shape every time, so you always know where you are.',
      },
      {
        title: 'Missions are real, not simulated',
        text: 'Each tool lesson links straight to that product’s free tier and asks you to do one specific thing there. No sandbox, no screenshots to imagine.',
      },
      {
        title: 'Quizzes grade themselves, reflections do not',
        text: 'Multiple choice, matching and ordering questions are checked instantly with an explanation. Reflection questions are yours to answer honestly — they save as you type.',
      },
      {
        title: 'Nothing is submitted anywhere',
        text: 'Checkmarks, answers and notes live in this browser’s local storage. Clear the browser and you clear the course.',
      },
    ],
    modulesHeading: 'Module list',
    modulesLede:
      'In order. Later modules assume the tools from earlier ones, so the sequence is worth keeping.',
    totalLabel: 'Total estimated time',
  },
  nl: {
    title: 'Digitale Marketing & E-commerce',
    subtitle:
      'Elf modules, vijftien tools, en voor elke tool een gratis account. Gebouwd voor één student: ikzelf.',
    description: [
      {
        kind: 'p',
        text: 'Dit is een zelfgebouwde cursus, opgezet volgens de structuur van een beroepscertificaat maar uitgebreid met de tools die ik echt wil leren. Alles draait in de browser. Geen account, geen server, geen medestudenten — je voortgang, antwoorden en notities staan in deze browser en nergens anders.',
      },
      {
        kind: 'p',
        text: 'Het doel is niet om over marketing te lézen. Elke toolmodule eindigt ermee dat je ingelogd bent bij het echte product, op het gratis pakket, en één concrete handeling doet aan een site of bedrijf dat van jou is. De theorie is er om dat halve uur te laten tellen.',
      },
      {
        kind: 'note',
        label: 'Over de omvang',
        text: 'Elf modules is ongeveer een trimester aan avondstudie. Doe er één per week en je bent binnen drie maanden klaar, met vijftien tools die je echt hebt aangeraakt in plaats van vijftien waarvan je hebt gehoord.',
      },
    ],
    objectives: [
      'Uitleggen hoe digitale marketing en e-commerce samenhangen, en elke activiteit op de marketingfunnel plaatsen.',
      'Een basis-SEO-audit uitvoeren op een site van jezelf, met Search Console, Semrush en Ahrefs.',
      'Een e-mailcampagne opzetten en schrijven, en het juiste platform kiezen.',
      'Je eigen marketinggraphics maken zonder ontwerper.',
      'Social content inplannen en leads bijhouden in een CRM.',
      'Een werkende productpagina neerzetten op een gehost e-commerceplatform.',
      'Een analyticsrapport lezen en zeggen wat het betekent voor het bedrijf.',
      'Koppen, calls-to-action en blogstructuren schrijven die aandacht vasthouden.',
      'Een influencer- of affiliate-samenwerking beoordelen op cijfers in plaats van op volgers.',
    ],
    howItWorks: [
      {
        title: 'Elke module heeft dezelfde vijf delen',
        text: 'Leerdoelen, een les, praktische toolmissies, een toets en een samenvatting. Steeds dezelfde vorm, zodat je altijd weet waar je bent.',
      },
      {
        title: 'Missies zijn echt, niet nagespeeld',
        text: 'Elke toolles linkt direct naar het gratis pakket van dat product en vraagt je daar één specifieke handeling te doen. Geen oefenomgeving, geen screenshots om je bij voor te stellen.',
      },
      {
        title: 'Toetsvragen nakijken zichzelf, reflecties niet',
        text: 'Meerkeuze-, koppel- en volgordevragen worden meteen nagekeken met uitleg. Reflectievragen beantwoord je zelf, eerlijk — ze bewaren terwijl je typt.',
      },
      {
        title: 'Er wordt niets ingeleverd',
        text: 'Vinkjes, antwoorden en notities staan in de local storage van deze browser. Wis je browser en je wist de cursus.',
      },
    ],
    modulesHeading: 'Moduleoverzicht',
    modulesLede:
      'Op volgorde. Latere modules gaan uit van de tools uit eerdere modules, dus die volgorde is het waard om aan te houden.',
    totalLabel: 'Totale geschatte tijd',
  },
};
