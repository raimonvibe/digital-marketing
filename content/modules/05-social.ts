import type { Module } from '@/lib/types';

const module05: Module = {
  slug: 'social',
  number: 5,
  accent: 'teal',
  minutes: 75,
  content: {
    en: {
      title: 'Run Your Social Presence',
      subtitle:
        'Scheduling so posting does not depend on your mood, a CRM so leads do not depend on your memory, and a plan for the day someone is angry in public.',
      abstract:
        'Social scheduling with Hootsuite and lead tracking with HubSpot’s free CRM, plus how to handle criticism where everyone can see it.',
      objectives: [
        'Schedule social content in advance instead of posting reactively.',
        'Explain what a CRM records and why memory is not a substitute.',
        'Add a contact to a real CRM and say what each field is for.',
        'Respond to a public complaint without making it worse.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Social media done badly is a slot machine: you post when you feel like it, watch the numbers, feel briefly good or bad, and repeat. Done properly it is boring in exactly the way that works — a decision made once about what you publish and how often, then executed whether or not you are in the mood.',
        },
        {
          kind: 'h',
          text: 'Scheduling is what turns intention into output',
        },
        {
          kind: 'p',
          text: 'A scheduler lets you write several posts in one sitting and have them go out over the following weeks. That matters for three reasons: you write better in a batch than under deadline, consistency beats volume for almost every small account, and a queue means a busy fortnight does not become a silent fortnight.',
        },
        {
          kind: 'p',
          text: 'It also forces the question most people avoid — what am I actually going to post about, twelve times? If you cannot answer, the problem was never the tooling.',
        },
        {
          kind: 'h',
          text: 'A CRM is memory you cannot lose',
        },
        {
          kind: 'p',
          text: 'A customer relationship management system is a record of every person connected to your business and everything that has passed between you: who they are, where they came from, what was said, what happens next. For a solo business the argument for one is unglamorous — you will forget. Not the big things, the small ones: the client who asked to be contacted in the spring, the lead who wanted a quote after their budget renewed.',
        },
        {
          kind: 'p',
          text: 'The fields a CRM asks for are also a checklist of what is worth knowing. Name and email are obvious. Source, stage and next action are the ones that turn a contact list into a pipeline you can look at and act on.',
        },
        {
          kind: 'h',
          text: 'When someone complains in public',
        },
        {
          kind: 'p',
          text: 'Sooner or later somebody says something bad about your work where everyone can read it. The response is a small, well-understood procedure, and almost all the damage in these situations comes from deviating from it.',
        },
        {
          kind: 'ol',
          items: [
            'Reply, quickly, in public. Silence reads as guilt and deleting reads as worse.',
            'Acknowledge the specific thing rather than offering a general apology. "Sorry you feel that way" is widely read as an insult.',
            'Say what you are doing about it, concretely — not that you take it seriously.',
            'Move the detail somewhere private, once, with an actual route: an email address or a direct message.',
            'Then fix it, and if the fix is public, say so where the complaint was.',
          ],
        },
        {
          kind: 'note',
          label: 'The one exception',
          text: 'None of this applies to abuse or a bad-faith pile-on, where the correct response is to disengage, and use the block and report tools without apology. The procedure above is for a real customer with a real grievance — the two are usually easy to tell apart.',
        },
        {
          kind: 'p',
          text: 'Handled well, a public complaint is worth more than a compliment: everyone watching learns what happens when something goes wrong with you, which is the question they actually care about.',
        },
      ],
      lessons: [
        {
          id: 'hootsuite',
          tool: 'hootsuite',
          title: 'Put One Post in a Queue',
          what: [
            {
              kind: 'p',
              text: 'Hootsuite connects several social accounts to one dashboard, so you write, schedule and monitor from a single place rather than logging into each platform.',
            },
            {
              kind: 'p',
              text: 'Beyond scheduling, it gives you streams — columns watching mentions, replies and search terms — which is how you notice someone talking about you without living inside every app.',
            },
          ],
          why: 'Scheduling separates the decision to publish from the act of publishing. That single split is what makes consistency possible for people who have other work, and consistency is the only thing that reliably grows a small account.',
          mission:
            'Start the Hootsuite free trial, connect at least one social account, and schedule one post about a project of yours — with the Canva graphic from Module 4 if you made one.',
          missionUrl: 'https://www.hootsuite.com/',
          missionCta: 'Open Hootsuite',
          check: {
            kind: 'reflect',
            id: 'm5-hootsuite-reflect',
            prompt:
              'Which platforms did you connect, and what did you schedule? Then answer the harder question: could you fill a queue for a month, and if not, what would you post about?',
          },
        },
        {
          id: 'hubspot',
          tool: 'hubspot',
          title: 'Record One Lead Properly',
          what: [
            {
              kind: 'p',
              text: 'HubSpot is a marketing and sales platform whose CRM is free and genuinely usable on its own. It stores contacts, companies, deals and the history of every interaction.',
            },
            {
              kind: 'p',
              text: 'The pieces that matter for a small business are the contact record, the lifecycle stage, and the ability to see every conversation with one person in one place — including the email you sent them four months ago and forgot.',
            },
          ],
          why: 'Most lost work for a small business is not lost to a competitor, it is lost to nobody: an enquiry that was never followed up, a client who said "next quarter" and was never contacted again. A CRM turns those from things you must remember into things the system reminds you of.',
          mission:
            'Create a free HubSpot account and add one contact to the CRM — a real past client or lead. Fill in every field it offers, including lifecycle stage and source, and note what it asks for that you would not have thought to record.',
          missionUrl: 'https://www.hubspot.com/products/crm',
          missionCta: 'Open the free CRM',
          check: {
            kind: 'reflect',
            id: 'm5-hubspot-reflect',
            prompt:
              'What information does HubSpot ask for when adding a contact, and how could that help you track client leads? Name one field you would not have recorded on your own.',
            hint: 'Lifecycle stage and original source are usually the two that change how you work, not just what you store.',
          },
        },
      ],
      quiz: [
        {
          kind: 'match',
          id: 'm5-features',
          prompt: 'Match each job to the tool feature that does it.',
          lefts: [
            'Writing eight posts on a Sunday and having them go out over four weeks',
            'Seeing every email, call and note about one client in one place',
            'Noticing that someone mentioned your project without tagging you',
            'Knowing which enquiries are still waiting on you',
          ],
          rights: [
            'A scheduling queue',
            'A CRM contact record',
            'A monitoring stream',
            'Lifecycle stages in the CRM',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Scheduling handles output, streams handle listening, and the CRM handles memory. The lifecycle stage is the field that turns a list of names into something you can act on.',
        },
        {
          kind: 'order',
          id: 'm5-complaint-order',
          prompt:
            'A customer posts publicly that your work broke their site. Put the response in the right order.',
          steps: [
            'Reply publicly and quickly, before the thread grows',
            'Acknowledge the specific problem they described',
            'Say concretely what you are doing about it',
            'Offer a private route — an email address or DM — for the details',
            'Fix it, then report back where the complaint was made',
          ],
          explain:
            'Speed and specificity first, because that is what everyone watching is judging. The move to private happens after you have publicly acknowledged the problem — doing it first looks like hiding.',
        },
        {
          kind: 'choice',
          id: 'm5-scenario-negative',
          prompt:
            'Someone leaves an angry but fair comment about a genuine mistake you made. What is the worst available option?',
          options: [
            'Deleting the comment and carrying on',
            'Replying publicly, naming the mistake and what you are changing',
            'Replying publicly and offering to sort out the details by email',
            'Fixing the problem, then replying to say what changed',
          ],
          answer: 0,
          explain:
            'Deletion converts a solvable complaint into a story about censorship, and the person will usually screenshot it anyway. The other three are all defensible; the first is the one that reliably makes things worse.',
        },
        {
          kind: 'choice',
          id: 'm5-scenario-abuse',
          prompt:
            'A stranger with no connection to your work starts a stream of personal abuse. What now?',
          options: [
            'Disengage, block and report — the complaint procedure does not apply here',
            'Apply the same public acknowledgement procedure as a real complaint',
            'Reply once with a joke to defuse it',
            'Ask your audience to respond on your behalf',
          ],
          answer: 0,
          explain:
            'The public-response procedure exists for real customers with real grievances. Abuse and bad-faith pile-ons are a moderation problem, and engaging — or mobilising your followers — makes them larger.',
        },
        {
          kind: 'multi',
          id: 'm5-crm-fields',
          prompt:
            'Which CRM fields turn a plain contact list into something you can actually work from?',
          options: [
            'Where the contact originally came from',
            'What stage of the relationship they are at',
            'The next action and when it is due',
            'The contact’s email address',
          ],
          answers: [0, 1, 2],
          explain:
            'An email address is storage. Source, stage and next action are what make the list answer questions — which channel produces work, who is waiting on me, what have I forgotten.',
        },
        {
          kind: 'reflect',
          id: 'm5-reflect-cadence',
          prompt:
            'Decide your posting cadence honestly: how often will you publish, on which platform, for the next three months? Then say what your queue would contain for the first month.',
          hint: 'Once a fortnight, kept up for a year, beats daily for three weeks and then nothing.',
        },
      ],
      recap: [
        'Scheduling separates deciding to publish from publishing, which is what makes consistency survive a busy month.',
        'A CRM is memory you cannot lose — and most small-business work is lost to being forgotten rather than to competitors.',
        'Source, lifecycle stage and next action are the fields that turn a contact list into a pipeline.',
        'A public complaint gets a fast, specific, public reply, then a private route, then a fix — in that order.',
        'Abuse is not a complaint. Disengage, block and report, and do not mobilise your audience.',
      ],
    },

    nl: {
      title: 'Voer je social presence',
      subtitle:
        'Inplannen zodat posten niet van je humeur afhangt, een CRM zodat leads niet van je geheugen afhangen, en een plan voor de dag dat iemand in het openbaar boos is.',
      abstract:
        'Social inplannen met Hootsuite en leads bijhouden met het gratis CRM van HubSpot, plus hoe je omgaat met kritiek waar iedereen bij is.',
      objectives: [
        'Social content vooruit inplannen in plaats van reactief posten.',
        'Uitleggen wat een CRM vastlegt en waarom geheugen geen vervanging is.',
        'Een contact toevoegen aan een echt CRM en benoemen waar elk veld voor dient.',
        'Reageren op een publieke klacht zonder het erger te maken.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Slecht gedane social media is een gokautomaat: je post wanneer je er zin in hebt, kijkt naar de cijfers, voelt je even goed of slecht, en herhaalt. Goed gedaan is het saai op precies de manier die werkt — één keer beslissen wat je publiceert en hoe vaak, en dat daarna uitvoeren of je er zin in hebt of niet.',
        },
        {
          kind: 'h',
          text: 'Inplannen maakt van voornemen output',
        },
        {
          kind: 'p',
          text: 'Met een planner schrijf je in één sessie meerdere posts die de weken erna uitgaan. Dat telt om drie redenen: je schrijft beter in een reeks dan onder tijdsdruk, consistentie verslaat volume voor vrijwel elk klein account, en een wachtrij zorgt dat twee drukke weken geen twee stille weken worden.',
        },
        {
          kind: 'p',
          text: 'Het dwingt ook de vraag af die de meesten ontwijken — waar ga ik het eigenlijk twaalf keer over hebben? Kun je dat niet beantwoorden, dan lag het probleem nooit aan de tooling.',
        },
        {
          kind: 'h',
          text: 'Een CRM is geheugen dat je niet kunt kwijtraken',
        },
        {
          kind: 'p',
          text: 'Een customer relationship management-systeem is een register van iedereen die met je bedrijf te maken heeft en alles wat er tussen jullie is gepasseerd: wie ze zijn, waar ze vandaan kwamen, wat er is gezegd, wat er nu moet gebeuren. Voor een eenmanszaak is het argument ervoor weinig glamoureus — je gaat het vergeten. Niet de grote dingen, de kleine: de klant die in het voorjaar gebeld wilde worden, de lead die een offerte wilde zodra het budget was vernieuwd.',
        },
        {
          kind: 'p',
          text: 'De velden waar een CRM om vraagt zijn meteen een checklist van wat het weten waard is. Naam en e-mail spreken voor zich. Bron, fase en volgende actie zijn de velden die van een contactenlijst een pijplijn maken waar je naar kunt kijken en naar kunt handelen.',
        },
        {
          kind: 'h',
          text: 'Als iemand in het openbaar klaagt',
        },
        {
          kind: 'p',
          text: 'Vroeg of laat zegt iemand iets slechts over je werk waar iedereen het kan lezen. De reactie is een kleine, goed begrepen procedure, en bijna alle schade in deze situaties ontstaat door ervan af te wijken.',
        },
        {
          kind: 'ol',
          items: [
            'Reageer snel, en in het openbaar. Zwijgen leest als schuld en verwijderen leest als erger.',
            'Erken het specifieke punt in plaats van een algemeen excuus. "Sorry dat je het zo ervaart" wordt breed gelezen als een belediging.',
            'Zeg concreet wat je eraan doet — niet dat je het serieus neemt.',
            'Verplaats de details één keer naar privé, met een echte route: een e-mailadres of een direct bericht.',
            'Los het op, en als de oplossing publiek is, zeg dat dan waar de klacht stond.',
          ],
        },
        {
          kind: 'note',
          label: 'De ene uitzondering',
          text: 'Niets hiervan geldt bij intimidatie of een pile-on te kwader trouw. Daar is loskoppelen het juiste antwoord, en gebruik je blokkeer- en meldknoppen zonder excuus. De procedure hierboven is voor een echte klant met een echte klacht — die twee zijn meestal makkelijk uit elkaar te houden.',
        },
        {
          kind: 'p',
          text: 'Goed afgehandeld is een publieke klacht meer waard dan een compliment: iedereen die meekijkt leert wat er gebeurt als er iets misgaat bij jou, en dat is de vraag waar ze echt om geven.',
        },
      ],
      lessons: [
        {
          id: 'hootsuite',
          tool: 'hootsuite',
          title: 'Zet één post in de wachtrij',
          what: [
            {
              kind: 'p',
              text: 'Hootsuite koppelt meerdere social accounts aan één dashboard, zodat je schrijft, inplant en meekijkt vanaf één plek in plaats van op elk platform apart in te loggen.',
            },
            {
              kind: 'p',
              text: 'Naast inplannen geeft het je streams — kolommen die vermeldingen, reacties en zoektermen volgen — en zo merk je dat iemand het over je heeft zonder in elke app te wonen.',
            },
          ],
          why: 'Inplannen scheidt de beslissing om te publiceren van het publiceren zelf. Precies die splitsing maakt consistentie mogelijk voor mensen met ander werk, en consistentie is het enige dat een klein account betrouwbaar laat groeien.',
          mission:
            'Start de gratis proefperiode van Hootsuite, koppel minstens één social account en plan één post over een project van jezelf — met de Canva-graphic uit module 4, als je die maakte.',
          missionUrl: 'https://www.hootsuite.com/',
          missionCta: 'Open Hootsuite',
          check: {
            kind: 'reflect',
            id: 'm5-hootsuite-reflect',
            prompt:
              'Welke platforms koppelde je, en wat plande je in? Beantwoord daarna de lastigere vraag: zou je een maand aan wachtrij kunnen vullen, en zo niet, waar zou je het over hebben?',
          },
        },
        {
          id: 'hubspot',
          tool: 'hubspot',
          title: 'Leg één lead fatsoenlijk vast',
          what: [
            {
              kind: 'p',
              text: 'HubSpot is een marketing- en salesplatform waarvan het CRM gratis is en op zichzelf goed bruikbaar. Het bewaart contacten, bedrijven, deals en de geschiedenis van elke interactie.',
            },
            {
              kind: 'p',
              text: 'Voor een klein bedrijf tellen vooral de contactkaart, de levensfase, en dat je elk gesprek met één persoon op één plek ziet — inclusief de mail die je vier maanden geleden stuurde en vergat.',
            },
          ],
          why: 'De meeste gemiste opdrachten van een klein bedrijf gaan niet naar een concurrent, ze gaan naar niemand: een aanvraag die nooit werd opgevolgd, een klant die "volgend kwartaal" zei en nooit meer werd gebeld. Een CRM verandert die van dingen die jij moet onthouden in dingen waar het systeem je aan herinnert.',
          mission:
            'Maak een gratis HubSpot-account en voeg één contact toe aan het CRM — een echte klant of lead uit het verleden. Vul elk veld in dat het aanbiedt, inclusief levensfase en bron, en noteer waar het om vraagt dat je zelf niet had vastgelegd.',
          missionUrl: 'https://www.hubspot.com/products/crm',
          missionCta: 'Open het gratis CRM',
          check: {
            kind: 'reflect',
            id: 'm5-hubspot-reflect',
            prompt:
              'Welke informatie vraagt HubSpot bij het toevoegen van een contact, en hoe kan dat je helpen klantleads bij te houden? Noem één veld dat je zelf niet had vastgelegd.',
            hint: 'Levensfase en oorspronkelijke bron zijn meestal de twee die veranderen hóé je werkt, niet alleen wát je opslaat.',
          },
        },
      ],
      quiz: [
        {
          kind: 'match',
          id: 'm5-features',
          prompt: 'Koppel elke taak aan de toolfunctie die hem uitvoert.',
          lefts: [
            'Op zondag acht posts schrijven die over vier weken uitgaan',
            'Elke mail, telefoontje en notitie over één klant op één plek zien',
            'Merken dat iemand je project noemde zonder je te taggen',
            'Weten welke aanvragen nog op jou wachten',
          ],
          rights: [
            'Een planningswachtrij',
            'Een CRM-contactkaart',
            'Een monitoringstream',
            'Levensfases in het CRM',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Inplannen regelt output, streams regelen meeluisteren, en het CRM regelt geheugen. De levensfase is het veld dat van een lijst namen iets maakt waar je naar kunt handelen.',
        },
        {
          kind: 'order',
          id: 'm5-complaint-order',
          prompt:
            'Een klant post publiekelijk dat jouw werk hun site sloopte. Zet de reactie in de juiste volgorde.',
          steps: [
            'Reageer snel en publiek, voordat de draad groeit',
            'Erken het specifieke probleem dat ze beschreven',
            'Zeg concreet wat je eraan doet',
            'Bied een privéroute aan — een e-mailadres of DM — voor de details',
            'Los het op en meld terug waar de klacht stond',
          ],
          explain:
            'Eerst snelheid en specificiteit, want daar wordt je door alle meelezers op beoordeeld. De stap naar privé komt ná de publieke erkenning — andersom oogt het als wegmoffelen.',
        },
        {
          kind: 'choice',
          id: 'm5-scenario-negative',
          prompt:
            'Iemand plaatst een boze maar terechte reactie over een echte fout van jou. Wat is de slechtste optie?',
          options: [
            'De reactie verwijderen en doorgaan',
            'Publiek reageren, de fout benoemen en zeggen wat je verandert',
            'Publiek reageren en aanbieden de details per mail af te handelen',
            'Het probleem oplossen en daarna melden wat er is veranderd',
          ],
          answer: 0,
          explain:
            'Verwijderen maakt van een oplosbare klacht een verhaal over censuur, en de klager heeft er meestal toch een screenshot van. De andere drie zijn allemaal verdedigbaar; de eerste maakt het betrouwbaar erger.',
        },
        {
          kind: 'choice',
          id: 'm5-scenario-abuse',
          prompt:
            'Een vreemde zonder enige band met je werk begint een stroom persoonlijke beledigingen. Wat nu?',
          options: [
            'Loskoppelen, blokkeren en melden — de klachtenprocedure geldt hier niet',
            'Dezelfde publieke erkenningsprocedure toepassen als bij een echte klacht',
            'Eén keer met een grap reageren om het te ontmijnen',
            'Je publiek vragen om namens jou te reageren',
          ],
          answer: 0,
          explain:
            'De publieke reactieprocedure bestaat voor echte klanten met echte klachten. Intimidatie en pile-ons te kwader trouw zijn een moderatieprobleem, en meegaan — of je volgers mobiliseren — maakt ze groter.',
        },
        {
          kind: 'multi',
          id: 'm5-crm-fields',
          prompt:
            'Welke CRM-velden maken van een gewone contactenlijst iets waar je echt mee kunt werken?',
          options: [
            'Waar het contact oorspronkelijk vandaan kwam',
            'In welke fase de relatie zit',
            'De volgende actie en wanneer die moet',
            'Het e-mailadres van het contact',
          ],
          answers: [0, 1, 2],
          explain:
            'Een e-mailadres is opslag. Bron, fase en volgende actie laten de lijst vragen beantwoorden — welk kanaal levert werk op, wie wacht op mij, wat ben ik vergeten.',
        },
        {
          kind: 'reflect',
          id: 'm5-reflect-cadence',
          prompt:
            'Bepaal je publicatieritme eerlijk: hoe vaak publiceer je, op welk platform, de komende drie maanden? Zeg daarna wat er de eerste maand in je wachtrij zou staan.',
          hint: 'Eens per twee weken, een jaar volgehouden, verslaat dagelijks gedurende drie weken en daarna niets.',
        },
      ],
      recap: [
        'Inplannen scheidt beslissen van publiceren, en daardoor overleeft consistentie een drukke maand.',
        'Een CRM is geheugen dat je niet kwijtraakt — en de meeste gemiste opdrachten gaan verloren aan vergeten worden, niet aan concurrenten.',
        'Bron, levensfase en volgende actie zijn de velden die van een contactenlijst een pijplijn maken.',
        'Een publieke klacht krijgt een snelle, specifieke, publieke reactie, dan een privéroute, dan een oplossing — in die volgorde.',
        'Intimidatie is geen klacht. Loskoppelen, blokkeren en melden, en mobiliseer je publiek niet.',
      ],
    },
  },
};

export default module05;
