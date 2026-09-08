import type { Module } from '@/lib/types';

const module01: Module = {
  slug: 'foundations',
  number: 1,
  accent: 'slate',
  minutes: 45,
  content: {
    en: {
      title: "Map the Ground You're Standing On",
      subtitle:
        'Before any tool: what digital marketing and e-commerce actually are, and the four stages every customer moves through on the way to buying from you twice.',
      abstract:
        'Definitions, the marketing funnel, the customer lifecycle, and who does what on a marketing team. No tools — this one is groundwork.',
      objectives: [
        'Define digital marketing and e-commerce, and say precisely where the two overlap.',
        'Place any marketing activity at the correct stage of the funnel.',
        'Describe what happens in the customer lifecycle after the first sale.',
        'Name the main roles on a marketing team and what each one is accountable for.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Every tool in the ten modules after this one is a way of doing something at a particular stage of a particular process. If you skip the process, the tools become a list of dashboards you half-remember logging into. So this module has no software in it at all.',
        },
        {
          kind: 'h',
          text: 'Digital marketing and e-commerce are two different jobs',
        },
        {
          kind: 'p',
          text: 'Digital marketing is everything you do to earn attention and interest through a screen: search results, ads, email, social posts, video, the words on your own pages. Its output is a person who is now aware of you and considering you.',
        },
        {
          kind: 'p',
          text: 'E-commerce is the machinery of selling online: the product page, the cart, the checkout, the payment, the confirmation email, the returns. Its output is a completed transaction and a customer record.',
        },
        {
          kind: 'p',
          text: 'They meet at exactly one point — the moment someone who is interested becomes someone who is buying. Marketing that never hands off to a working store is theatre. A beautiful store nobody has heard of is a warehouse. Most businesses are bad at one of the two, and the one they are bad at is usually the one they find less interesting.',
        },
        {
          kind: 'h',
          text: 'The funnel: four stages, one question each',
        },
        {
          kind: 'p',
          text: 'The funnel is a model of how strangers become customers. It is called a funnel because each stage holds fewer people than the one before it. What makes it useful is not the shape but the fact that each stage has a different question in the customer’s head, and answering the wrong question is the most common way to waste marketing effort.',
        },
        {
          kind: 'ul',
          items: [
            'Awareness — "Does this exist?" The person does not know you. Your job is to be found or noticed: search results, social posts, someone else mentioning you.',
            'Consideration — "Is this for me?" They know you exist and are comparing. Your job is evidence: what it does, who it is for, what it costs, what other people got out of it.',
            'Conversion — "Am I doing this?" They have decided in principle. Your job is to remove friction: a clear price, a short form, a checkout that works on a phone.',
            'Loyalty — "Am I doing this again?" They already bought. Your job is to be worth returning to: the product working, the follow-up, the reason to come back.',
          ],
        },
        {
          kind: 'note',
          label: 'The most common mistake',
          text: 'Answering a consideration question at the awareness stage. A detailed pricing table shown to someone who has never heard of you is not persuasive, it is noise. The same table shown to someone comparing three options is the most useful page on your site.',
        },
        {
          kind: 'h',
          text: 'The lifecycle carries on after the sale',
        },
        {
          kind: 'p',
          text: 'The funnel ends at the transaction. The customer lifecycle does not. It runs: reach, acquisition, conversion, retention, advocacy — and the last two are where the money usually is, because you have already paid the cost of finding that person.',
        },
        {
          kind: 'p',
          text: 'Retention is everything that makes the second purchase happen: the product being good, the onboarding email that shows them the feature they missed, the renewal reminder that arrives before the card expires. Advocacy is when they bring you someone else, which is the only channel that gets cheaper as it grows.',
        },
        {
          kind: 'p',
          text: 'For a solo developer selling a service, this maps cleanly: reach is someone finding your site, acquisition is them getting in touch, conversion is the signed job, retention is the second project, advocacy is them recommending you to the person in the next office.',
        },
        {
          kind: 'h',
          text: 'Who does what on a marketing team',
        },
        {
          kind: 'p',
          text: 'Even if you are doing all of this alone, the roles are worth knowing — they are how job ads are written, how agencies are structured, and how you decide what to outsource first.',
        },
        {
          kind: 'ul',
          items: [
            'Marketing manager — owns the plan and the budget, decides which channels get effort, answers for the numbers.',
            'Content marketer — plans and writes the blog posts, guides and videos that answer consideration questions.',
            'SEO specialist — makes sure the site can be found and understood by search engines, and chases the keywords worth having.',
            'Paid media / SEM specialist — runs the ad accounts, manages bids and budgets, kills what does not pay for itself.',
            'Social media manager — runs the accounts day to day, schedules posts, handles what happens in the replies.',
            'Email marketer — owns the list, the automations and the deliverability, which is a more technical job than it looks.',
            'Designer — makes the assets everyone else needs, and holds the line on the brand looking like one thing.',
            'Analyst — connects what was spent to what was earned, and is usually the person who finds out something has been broken for a month.',
          ],
        },
        {
          kind: 'p',
          text: 'One person doing all eight is normal for a small business. The value of the list is that it tells you which hat you are wearing at any moment — and which hat you have not put on in six weeks.',
        },
      ],
      lessons: [],
      quiz: [
        {
          kind: 'match',
          id: 'm1-funnel-match',
          prompt: 'Match each activity to the funnel stage it belongs to.',
          lefts: [
            'A blog post that ranks for a question a stranger typed into Google',
            'A comparison page listing your three service tiers side by side',
            'A one-field contact form at the bottom of a project page',
            'An email six months later asking how the site is holding up',
          ],
          rights: ['Awareness', 'Consideration', 'Conversion', 'Loyalty'],
          answer: [0, 1, 2, 3],
          explain:
            'The test is the question in the customer’s head. Ranking for a stranger’s search is awareness; a side-by-side comparison answers "is this for me"; a short form removes friction at the point of decision; a check-in after delivery is retention work.',
        },
        {
          kind: 'choice',
          id: 'm1-tf-ecom',
          prompt: 'True or false: e-commerce is simply a part of digital marketing.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. They overlap at the point of purchase but they are different jobs. Digital marketing earns attention; e-commerce is the machinery that turns an interested person into a completed, paid-for order.',
        },
        {
          kind: 'choice',
          id: 'm1-tf-loyalty',
          prompt:
            'True or false: a customer who has already bought once and is deciding whether to buy again is in the consideration stage.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False — they are in loyalty. The distinction matters because a returning customer already has evidence about you. Selling to them as if they were a stranger wastes the one advantage you have.',
        },
        {
          kind: 'multi',
          id: 'm1-lifecycle',
          prompt:
            'Which of these belong to the part of the customer lifecycle that comes after the first sale?',
          options: [
            'Retention',
            'Acquisition',
            'Advocacy',
            'Reach',
          ],
          answers: [0, 2],
          explain:
            'Retention and advocacy come after the sale, and they are usually the cheapest growth you have — you have already paid the cost of finding that person once.',
        },
        {
          kind: 'match',
          id: 'm1-roles',
          prompt: 'Match each responsibility to the role that owns it.',
          lefts: [
            'Keeps the ad budget from being spent on terms that never convert',
            'Finds out that a form has been silently failing for three weeks',
            'Owns the mailing list, the automations and whether mail lands in inboxes',
            'Makes sure search engines can find and understand the site',
          ],
          rights: [
            'Paid media specialist',
            'Analyst',
            'Email marketer',
            'SEO specialist',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Even as a team of one, naming the role tells you which job you are doing — and which one you have not done in a month.',
        },
        {
          kind: 'reflect',
          id: 'm1-reflect-own',
          prompt:
            'Take one thing you already publish — a project page, a repo README, a post. Which funnel stage is it actually written for, and which stage do you have nothing at all for?',
          hint: 'Most solo developers have plenty of awareness material and nothing that answers "is this for me".',
        },
      ],
      recap: [
        'Digital marketing earns attention; e-commerce completes the sale. They meet at exactly one point, and most businesses are weak on whichever side they find less interesting.',
        'The funnel is useful because each stage has a different question in the customer’s head: does this exist, is this for me, am I doing this, am I doing this again.',
        'The lifecycle continues past the sale into retention and advocacy, which are cheaper than acquisition because the finding has already been paid for.',
        'The eight marketing roles are worth knowing even as a team of one — they tell you which hat you are wearing, and which you have not worn lately.',
      ],
    },

    nl: {
      title: 'Breng het speelveld in kaart',
      subtitle:
        'Vóór elke tool: wat digitale marketing en e-commerce precies zijn, en de vier fasen die elke klant doorloopt op weg naar een tweede aankoop bij jou.',
      abstract:
        'Definities, de marketingfunnel, de klantlevenscyclus en wie wat doet in een marketingteam. Geen tools — dit is het fundament.',
      objectives: [
        'Digitale marketing en e-commerce definiëren, en precies aangeven waar ze elkaar raken.',
        'Elke marketingactiviteit in de juiste fase van de funnel plaatsen.',
        'Beschrijven wat er in de klantlevenscyclus gebeurt ná de eerste verkoop.',
        'De belangrijkste rollen in een marketingteam benoemen en waar elke rol verantwoordelijk voor is.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Elke tool in de tien modules hierna is een manier om iets te doen in een bepaalde fase van een bepaald proces. Sla je het proces over, dan worden de tools een rijtje dashboards waarvan je je vaag herinnert dat je erop hebt ingelogd. Daarom zit er in deze module geen software.',
        },
        {
          kind: 'h',
          text: 'Digitale marketing en e-commerce zijn twee verschillende banen',
        },
        {
          kind: 'p',
          text: 'Digitale marketing is alles wat je doet om via een scherm aandacht en interesse te verdienen: zoekresultaten, advertenties, e-mail, social posts, video, de woorden op je eigen pagina’s. De uitkomst is iemand die je nu kent en je overweegt.',
        },
        {
          kind: 'p',
          text: 'E-commerce is de machinerie van online verkopen: de productpagina, de winkelwagen, de checkout, de betaling, de bevestigingsmail, de retouren. De uitkomst is een afgeronde transactie en een klantregistratie.',
        },
        {
          kind: 'p',
          text: 'Ze raken elkaar op precies één punt — het moment waarop iemand met interesse iemand wordt die koopt. Marketing die nooit overdraagt aan een werkende winkel is toneel. Een prachtige winkel waar niemand van heeft gehoord is een magazijn. De meeste bedrijven zijn slecht in één van de twee, en meestal in die ze zelf minder interessant vinden.',
        },
        {
          kind: 'h',
          text: 'De funnel: vier fasen, elk met één vraag',
        },
        {
          kind: 'p',
          text: 'De funnel is een model van hoe vreemden klanten worden. Hij heet een trechter omdat er in elke fase minder mensen zitten dan in de vorige. Het nut zit niet in de vorm maar hierin: in elke fase speelt een andere vraag in het hoofd van de klant, en de verkeerde vraag beantwoorden is de meest voorkomende manier om marketing te verspillen.',
        },
        {
          kind: 'ul',
          items: [
            'Awareness (bekendheid) — "Bestaat dit?" De persoon kent je niet. Jouw taak is gevonden of opgemerkt worden: zoekresultaten, social posts, iemand anders die je noemt.',
            'Consideration (overweging) — "Is dit iets voor mij?" Ze weten dat je bestaat en vergelijken. Jouw taak is bewijs: wat het doet, voor wie het is, wat het kost, wat anderen eraan hadden.',
            'Conversion (conversie) — "Doe ik dit?" In principe hebben ze besloten. Jouw taak is wrijving wegnemen: een duidelijke prijs, een kort formulier, een checkout die het op een telefoon doet.',
            'Loyalty (loyaliteit) — "Doe ik dit nog een keer?" Ze hebben al gekocht. Jouw taak is het waard zijn om naar terug te komen: een product dat werkt, opvolging, een reden om terug te komen.',
          ],
        },
        {
          kind: 'note',
          label: 'De meest gemaakte fout',
          text: 'Een overwegingsvraag beantwoorden in de bekendheidsfase. Een uitgebreide prijstabel tonen aan iemand die nog nooit van je heeft gehoord is niet overtuigend, het is ruis. Dezelfde tabel voor iemand die drie opties vergelijkt is de nuttigste pagina van je site.',
        },
        {
          kind: 'h',
          text: 'De levenscyclus loopt door na de verkoop',
        },
        {
          kind: 'p',
          text: 'De funnel eindigt bij de transactie. De klantlevenscyclus niet. Die loopt: bereik, acquisitie, conversie, retentie, ambassadeurschap — en in die laatste twee zit meestal het geld, omdat je de kosten om die persoon te vinden al hebt betaald.',
        },
        {
          kind: 'p',
          text: 'Retentie is alles waardoor de tweede aankoop gebeurt: een goed product, de onboardingmail die de functie laat zien die ze misten, de verlengingsherinnering die aankomt voordat de kaart verloopt. Ambassadeurschap is wanneer ze iemand anders meebrengen, het enige kanaal dat goedkoper wordt naarmate het groeit.',
        },
        {
          kind: 'p',
          text: 'Voor een zelfstandige developer die een dienst verkoopt is de vertaling recht-toe-recht-aan: bereik is iemand die je site vindt, acquisitie is dat ze contact opnemen, conversie is de getekende opdracht, retentie is het tweede project, ambassadeurschap is dat ze je aanbevelen bij de buren.',
        },
        {
          kind: 'h',
          text: 'Wie doet wat in een marketingteam',
        },
        {
          kind: 'p',
          text: 'Ook als je dit allemaal alleen doet, zijn de rollen het kennen waard — zo worden vacatures geschreven, zo zijn bureaus ingericht, en zo bepaal je wat je als eerste uitbesteedt.',
        },
        {
          kind: 'ul',
          items: [
            'Marketingmanager — eigenaar van het plan en het budget, bepaalt welke kanalen aandacht krijgen, legt verantwoording af over de cijfers.',
            'Contentmarketeer — bedenkt en schrijft de blogs, gidsen en video’s die overwegingsvragen beantwoorden.',
            'SEO-specialist — zorgt dat de site vindbaar en begrijpelijk is voor zoekmachines, en jaagt op de zoekwoorden die de moeite waard zijn.',
            'Paid media / SEM-specialist — beheert de advertentieaccounts, biedingen en budgetten, en stopt wat zichzelf niet terugverdient.',
            'Social media manager — voert de accounts dagelijks, plant posts in, en handelt af wat er in de reacties gebeurt.',
            'E-mailmarketeer — eigenaar van de lijst, de automatiseringen en de afleverbaarheid, technischer werk dan het lijkt.',
            'Ontwerper — maakt het materiaal dat alle anderen nodig hebben, en bewaakt dat het merk er als één ding uitziet.',
            'Analist — verbindt wat is uitgegeven aan wat is verdiend, en is meestal degene die ontdekt dat er iets een maand kapot was.',
          ],
        },
        {
          kind: 'p',
          text: 'Eén persoon die alle acht doet is normaal voor een klein bedrijf. De waarde van het lijstje is dat je weet welke pet je op dat moment op hebt — en welke pet je in geen zes weken hebt opgezet.',
        },
      ],
      lessons: [],
      quiz: [
        {
          kind: 'match',
          id: 'm1-funnel-match',
          prompt: 'Koppel elke activiteit aan de funnelfase waar hij thuishoort.',
          lefts: [
            'Een blogpost die scoort op een vraag die een vreemde in Google typte',
            'Een vergelijkingspagina die je drie servicepakketten naast elkaar zet',
            'Een contactformulier met één veld onderaan een projectpagina',
            'Een mail een half jaar later met de vraag hoe de site het houdt',
          ],
          rights: ['Awareness', 'Consideration', 'Conversion', 'Loyalty'],
          answer: [0, 1, 2, 3],
          explain:
            'De toets is de vraag in het hoofd van de klant. Scoren op de zoekopdracht van een vreemde is bekendheid; een vergelijking naast elkaar beantwoordt "is dit iets voor mij"; een kort formulier haalt wrijving weg op het beslismoment; een berichtje na oplevering is retentiewerk.',
        },
        {
          kind: 'choice',
          id: 'm1-tf-ecom',
          prompt: 'Waar of niet waar: e-commerce is gewoon een onderdeel van digitale marketing.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Ze overlappen op het aankoopmoment, maar het zijn verschillende banen. Digitale marketing verdient aandacht; e-commerce is de machinerie die een geïnteresseerde omzet in een afgeronde, betaalde bestelling.',
        },
        {
          kind: 'choice',
          id: 'm1-tf-loyalty',
          prompt:
            'Waar of niet waar: een klant die al één keer kocht en twijfelt over een tweede aankoop zit in de overwegingsfase.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar — die zit in loyaliteit. Dat verschil telt, want een terugkerende klant heeft al bewijs over jou. Verkopen alsof het een vreemde is, verspilt precies het voordeel dat je hebt.',
        },
        {
          kind: 'multi',
          id: 'm1-lifecycle',
          prompt:
            'Welke hiervan horen bij het deel van de klantlevenscyclus ná de eerste verkoop?',
          options: ['Retentie', 'Acquisitie', 'Ambassadeurschap', 'Bereik'],
          answers: [0, 2],
          explain:
            'Retentie en ambassadeurschap komen na de verkoop, en zijn meestal de goedkoopste groei die je hebt — je hebt de kosten om die persoon te vinden al één keer betaald.',
        },
        {
          kind: 'match',
          id: 'm1-roles',
          prompt: 'Koppel elke verantwoordelijkheid aan de rol die hem draagt.',
          lefts: [
            'Voorkomt dat advertentiebudget gaat naar termen die nooit converteren',
            'Ontdekt dat een formulier al drie weken stilletjes faalt',
            'Beheert de mailinglijst, de automatiseringen en of mail in de inbox landt',
            'Zorgt dat zoekmachines de site kunnen vinden en begrijpen',
          ],
          rights: [
            'Paid media-specialist',
            'Analist',
            'E-mailmarketeer',
            'SEO-specialist',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Ook als team van één zegt de rolnaam je welk werk je aan het doen bent — en welk werk je een maand niet hebt gedaan.',
        },
        {
          kind: 'reflect',
          id: 'm1-reflect-own',
          prompt:
            'Neem iets dat je al publiceert — een projectpagina, een repo-README, een post. Voor welke funnelfase is het eigenlijk geschreven, en voor welke fase heb je helemaal niets?',
          hint: 'De meeste zelfstandige developers hebben genoeg bekendheidsmateriaal en niets dat "is dit iets voor mij" beantwoordt.',
        },
      ],
      recap: [
        'Digitale marketing verdient aandacht; e-commerce rondt de verkoop af. Ze raken elkaar op precies één punt, en de meeste bedrijven zijn zwak aan de kant die ze zelf minder interessant vinden.',
        'De funnel is nuttig omdat er in elke fase een andere vraag speelt: bestaat dit, is dit iets voor mij, doe ik dit, doe ik dit nog een keer.',
        'De levenscyclus loopt door na de verkoop, naar retentie en ambassadeurschap — goedkoper dan acquisitie, omdat het zoeken al betaald is.',
        'De acht marketingrollen zijn het kennen waard, ook als team van één: ze vertellen je welke pet je op hebt, en welke je lang niet hebt opgezet.',
      ],
    },
  },
};

export default module01;
