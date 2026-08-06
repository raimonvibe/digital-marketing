import type { Module } from '@/lib/types';

const module10: Module = {
  slug: 'content',
  number: 10,
  accent: 'olive',
  minutes: 60,
  content: {
    en: {
      title: 'Plan Content That Lasts',
      subtitle:
        'The difference between having a strategy and having a backlog, how to write for search without writing for robots, and getting five things out of one afternoon’s work.',
      abstract:
        'Content strategy versus content creation, SEO-friendly writing, content calendars, and repurposing across channels. Uses Canva and Hootsuite from earlier modules.',
      objectives: [
        'Distinguish content strategy from content creation, and say which one you are missing.',
        'Match a content type to the funnel stage it serves.',
        'Write for search without damaging the writing.',
        'Build a content calendar you can realistically sustain.',
        'Turn one substantial piece into five publishable things.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Almost everyone who says they need to do more content marketing means they need to create more content. The two are not the same, and creating more without a strategy is how people end up with forty posts and no idea which of them did anything.',
        },
        {
          kind: 'h',
          text: 'Strategy is the set of decisions you make once',
        },
        {
          kind: 'p',
          text: 'Content strategy answers: who is this for, what do they need to know that they do not know, what will we therefore publish, where, how often, and how will we tell whether it worked. Creation is what happens after those are settled. Doing creation first is what produces a blog that reads like a diary.',
        },
        {
          kind: 'p',
          text: 'A strategy fits on one page. If yours does not, it is a wish list.',
        },
        {
          kind: 'h',
          text: 'Content maps onto the funnel',
        },
        {
          kind: 'ul',
          items: [
            'Awareness — the answer to a question someone typed without knowing you existed: how-to guides, explanations, definitions, the post that ranks.',
            'Consideration — the evidence someone needs while comparing: comparisons, case studies, pricing explanations, the honest "when not to use this" post.',
            'Conversion — the material that removes the last doubt: a demo, a template, a detailed FAQ, the page that says exactly what happens after you get in touch.',
            'Loyalty — what makes the existing customer better off: documentation, deeper guides, release notes people actually read, the thing that makes them look good to their boss.',
          ],
        },
        {
          kind: 'p',
          text: 'Most independent developers publish almost entirely at the awareness end, because that is the writing that feels like writing. The gap is nearly always consideration — the material that helps someone choose you rather than merely find you.',
        },
        {
          kind: 'h',
          text: 'SEO-friendly writing is mostly just structure',
        },
        {
          kind: 'p',
          text: 'Writing for search does not mean seeding phrases into paragraphs. Search engines are trying to work out whether a page genuinely answers a question, and the things that help them are the same things that help a hurried human.',
        },
        {
          kind: 'ul',
          items: [
            'Answer the question in the first paragraph. Withholding it to increase time on page annoys the reader and helps nobody.',
            'Use the words your reader would use, including the unglamorous ones — people search for the problem, not for your product name.',
            'Give the page one subject. Two subjects means two mediocre pages sharing a URL.',
            'Structure with real headings that describe what follows, so both a skimmer and a crawler can navigate.',
            'Write a title tag and a meta description that read like a promise, not a summary; they are the advertisement for the page.',
            'Link to your own related pages where it genuinely helps — that is how a crawler learns which of your pages matter.',
          ],
        },
        {
          kind: 'note',
          label: 'The one thing that outranks all of it',
          text: 'A page that fully answers its question beats a page that is well-optimised and slightly evasive. Every technique above is about making a good answer findable — none of them substitutes for having one.',
        },
        {
          kind: 'h',
          text: 'A calendar you can actually keep',
        },
        {
          kind: 'p',
          text: 'A content calendar is a schedule of what goes out, where and when. Its real purpose is not organisation, it is to make you commit to a frequency in advance, when you are being realistic, rather than in the moment, when you are being ambitious.',
        },
        {
          kind: 'ul',
          items: [
            'Set the frequency at the level you could sustain during your busiest month, not your quietest.',
            'Plan one substantial piece per period, and let the smaller pieces be derived from it rather than invented separately.',
            'Keep a queue at least two publications deep, so one bad week does not become silence.',
            'Book the writing time in the same calendar as your client work, or it will lose every argument with client work.',
          ],
        },
        {
          kind: 'h',
          text: 'Repurposing: one piece, five outputs',
        },
        {
          kind: 'p',
          text: 'Repurposing is not reposting. It is recognising that a substantial piece of work contains several separate ideas, each of which suits a different format, and that publishing them separately reaches people the original never would.',
        },
        {
          kind: 'ol',
          items: [
            'The original — the full article on your own site, where it can rank and where the link points.',
            'The single strongest claim, as a social post with one image made in Canva.',
            'The steps or the list, as a carousel or a thread — the format that survives being read in a feed.',
            'The before-and-after, the screenshot or the diagram, as a standalone visual that makes sense with no words.',
            'The summary and the link, in your email newsletter, where the people who already trust you are.',
          ],
        },
        {
          kind: 'p',
          text: 'Schedule the derived pieces in Hootsuite over the following fortnight rather than publishing them all the day the article goes out. The article is not stale to anyone who has not read it.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Turn one post into five pieces',
        brief: [
          {
            kind: 'p',
            text: 'Take one substantial thing you have already written — a blog post, a long README, a detailed answer you gave someone. You are not writing anything new.',
          },
          {
            kind: 'ul',
            items: [
              'Identify the single strongest claim in it, and write it as a standalone social post.',
              'Pull out a list or a sequence of steps and reformat it for a feed.',
              'Make one visual in Canva that carries an idea from the piece without needing the text.',
              'Write the two-sentence newsletter version, with the link.',
              'Decide the dates for all four, and put them in a queue in Hootsuite.',
            ],
          },
          {
            kind: 'p',
            text: 'Then answer the strategy question honestly: which funnel stage does the original serve, and which stage do you still have nothing for?',
          },
        ],
        deliverable:
          'The four derived pieces, their scheduled dates, and one sentence naming the funnel stage you are missing.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm10-funnel-content',
          prompt: 'Match each content type to the funnel stage it serves.',
          lefts: [
            'A guide answering a question someone typed without knowing you exist',
            'An honest post about when your approach is the wrong choice',
            'A page describing exactly what happens after someone gets in touch',
            'Documentation that makes an existing client better at using what you built',
          ],
          rights: ['Awareness', 'Consideration', 'Conversion', 'Loyalty'],
          answer: [0, 1, 2, 3],
          explain:
            'The "when not to use this" post is the one people find counter-intuitive: naming where you are the wrong choice is consideration content, and it is more persuasive than a page of advantages.',
        },
        {
          kind: 'choice',
          id: 'm10-strategy-vs-creation',
          prompt:
            'Someone has published thirty posts in a year and cannot tell you which produced anything. What are they missing?',
          options: [
            'A strategy — decisions about audience, purpose and measurement, made before creating',
            'More posts, to build up enough volume to see a pattern',
            'A better content management system',
            'A larger social following',
          ],
          answer: 0,
          explain:
            'Volume without decisions is a diary. Strategy is the one-page set of choices — who it is for, what they need to know, where it goes, how you will tell whether it worked — that makes the thirty-first post worth writing.',
        },
        {
          kind: 'multi',
          id: 'm10-seo-writing',
          prompt: 'Which of these genuinely help a page perform in search?',
          options: [
            'Answering the question in the first paragraph',
            'Giving the page a single clear subject',
            'Using the words your reader would search for, including the plain ones',
            'Repeating the target phrase as often as it will fit',
          ],
          answers: [0, 1, 2],
          explain:
            'The first three help a hurried human and a crawler for the same reason. Phrase-stuffing is a technique from a much older internet, and it now reads as low quality to both.',
        },
        {
          kind: 'order',
          id: 'm10-repurpose-order',
          prompt:
            'You have written one substantial article. Put the repurposing sequence in a sensible order.',
          steps: [
            'Publish the full article on your own site, where it can rank',
            'Post the single strongest claim, with one image, to a social feed',
            'Reformat the list or steps for a feed as a carousel or thread',
            'Publish a standalone visual that carries an idea without the text',
            'Send the summary and the link to your newsletter',
          ],
          explain:
            'The article goes first because everything else links back to it. Spreading the derived pieces over the following fortnight reaches people who missed the original — it is not stale to anyone who has not read it.',
        },
        {
          kind: 'choice',
          id: 'm10-calendar',
          prompt:
            'You are setting a publishing frequency. Which basis will actually survive the year?',
          options: [
            'What you could sustain during your busiest month',
            'What you managed in the quiet week when you were enthusiastic',
            'Whatever your most prolific competitor publishes',
            'As often as you have something to say',
          ],
          answer: 0,
          explain:
            'Frequency set from a good week collapses in a bad one, and matching a competitor imports their capacity, not yours. "When I have something to say" is how a blog quietly stops.',
        },
        {
          kind: 'reflect',
          id: 'm10-reflect-gap',
          prompt:
            'List the last five things you published and place each at a funnel stage. Which stage is empty, and what would the first piece for it be?',
        },
      ],
      recap: [
        'Strategy is the one-page set of decisions made before creating; without it, volume produces a diary.',
        'Content maps onto the funnel, and the gap for most independent developers is consideration — material that helps someone choose you, not just find you.',
        'SEO-friendly writing is structure and directness: answer first, one subject per page, real headings, the reader’s words.',
        'Set publishing frequency at what survives your busiest month, and book the writing time against client work.',
        'Repurposing is recognising the separate ideas inside one piece, and scheduling them over the following weeks rather than all at once.',
      ],
    },

    nl: {
      title: 'Plan content die blijft',
      subtitle:
        'Het verschil tussen een strategie hebben en een stapel werk hebben, hoe je voor zoekmachines schrijft zonder voor robots te schrijven, en vijf dingen halen uit één middag werk.',
      abstract:
        'Contentstrategie versus contentcreatie, SEO-vriendelijk schrijven, contentkalenders en hergebruik over kanalen. Gebruikt Canva en Hootsuite uit eerdere modules.',
      objectives: [
        'Contentstrategie onderscheiden van contentcreatie, en benoemen welke van de twee je mist.',
        'Een contenttype koppelen aan de funnelfase die het bedient.',
        'Schrijven voor zoekmachines zonder het schrijven te beschadigen.',
        'Een contentkalender bouwen die je realistisch volhoudt.',
        'Van één stevig stuk vijf publiceerbare dingen maken.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Vrijwel iedereen die zegt meer aan contentmarketing te moeten doen, bedoelt dat hij meer content moet maken. Dat is niet hetzelfde, en meer maken zonder strategie is hoe mensen eindigen met veertig posts en geen idee welke ervan iets deed.',
        },
        {
          kind: 'h',
          text: 'Strategie is de set beslissingen die je één keer neemt',
        },
        {
          kind: 'p',
          text: 'Contentstrategie beantwoordt: voor wie is dit, wat moeten ze weten wat ze nog niet weten, wat publiceren we dus, waar, hoe vaak, en hoe zien we of het werkte. Creatie is wat gebeurt zodra dat vaststaat. Beginnen met creatie levert een blog op die als een dagboek leest.',
        },
        {
          kind: 'p',
          text: 'Een strategie past op één pagina. Past die van jou daar niet op, dan is het een verlanglijstje.',
        },
        {
          kind: 'h',
          text: 'Content ligt over de funnel heen',
        },
        {
          kind: 'ul',
          items: [
            'Awareness — het antwoord op een vraag die iemand intypte zonder te weten dat jij bestond: uitleg, handleidingen, definities, de post die scoort.',
            'Consideration — het bewijs dat iemand nodig heeft tijdens het vergelijken: vergelijkingen, casestudy’s, uitleg over prijzen, de eerlijke post over wanneer je dit níét moet gebruiken.',
            'Conversion — het materiaal dat de laatste twijfel wegneemt: een demo, een template, een uitgebreide FAQ, de pagina die precies zegt wat er gebeurt nadat je contact opneemt.',
            'Loyalty — wat de bestaande klant beter af maakt: documentatie, diepere gidsen, release notes die mensen echt lezen, het ding waarmee ze goed voor de dag komen bij hun baas.',
          ],
        },
        {
          kind: 'p',
          text: 'De meeste zelfstandige developers publiceren vrijwel alleen aan de awareness-kant, omdat dat het schrijven is dat als schrijven voelt. Het gat zit bijna altijd bij consideration — het materiaal dat iemand helpt jou te kiezen in plaats van je alleen te vinden.',
        },
        {
          kind: 'h',
          text: 'SEO-vriendelijk schrijven is vooral structuur',
        },
        {
          kind: 'p',
          text: 'Schrijven voor zoekmachines betekent niet zinnen volstoppen met termen. Zoekmachines proberen te bepalen of een pagina een vraag echt beantwoordt, en wat hen daarbij helpt is precies wat een gehaaste lezer helpt.',
        },
        {
          kind: 'ul',
          items: [
            'Beantwoord de vraag in de eerste alinea. Hem achterhouden om de tijd op de pagina te rekken irriteert de lezer en helpt niemand.',
            'Gebruik de woorden van je lezer, ook de onglamoureuze — mensen zoeken op het probleem, niet op jouw productnaam.',
            'Geef de pagina één onderwerp. Twee onderwerpen zijn twee middelmatige pagina’s die één URL delen.',
            'Structureer met echte koppen die beschrijven wat volgt, zodat zowel een scanner als een crawler kan navigeren.',
            'Schrijf een title tag en meta description die als een belofte lezen, niet als een samenvatting; het is de advertentie voor de pagina.',
            'Link naar je eigen verwante pagina’s waar het echt helpt — zo leert een crawler welke van je pagina’s ertoe doen.',
          ],
        },
        {
          kind: 'note',
          label: 'Het ene dat het allemaal overtreft',
          text: 'Een pagina die zijn vraag volledig beantwoordt verslaat een pagina die goed geoptimaliseerd en licht ontwijkend is. Elke techniek hierboven maakt een goed antwoord vindbaar — geen ervan vervangt het hebben van dat antwoord.',
        },
        {
          kind: 'h',
          text: 'Een kalender die je echt volhoudt',
        },
        {
          kind: 'p',
          text: 'Een contentkalender is een schema van wat uitgaat, waar en wanneer. Het echte doel is niet ordening maar dat je je vooraf vastlegt op een frequentie, op een moment dat je realistisch bent, in plaats van in het moment, als je ambitieus bent.',
        },
        {
          kind: 'ul',
          items: [
            'Zet de frequentie op het niveau dat je in je drukste maand zou volhouden, niet je rustigste.',
            'Plan één stevig stuk per periode, en laat de kleinere stukken daaruit afgeleid worden in plaats van los verzonnen.',
            'Houd een wachtrij van minstens twee publicaties diep, zodat één slechte week geen stilte wordt.',
            'Zet de schrijftijd in dezelfde agenda als je klantwerk, anders verliest het elke discussie van klantwerk.',
          ],
        },
        {
          kind: 'h',
          text: 'Hergebruik: één stuk, vijf uitkomsten',
        },
        {
          kind: 'p',
          text: 'Hergebruik is niet herplaatsen. Het is inzien dat een stevig stuk werk meerdere losse ideeën bevat, elk passend bij een ander formaat, en dat ze los publiceren mensen bereikt die het origineel nooit zou halen.',
        },
        {
          kind: 'ol',
          items: [
            'Het origineel — het volledige artikel op je eigen site, waar het kan scoren en waar de link heen wijst.',
            'De sterkste bewering, als social post met één beeld gemaakt in Canva.',
            'De stappen of de lijst, als carrousel of draad — het formaat dat lezen in een feed overleeft.',
            'De voor-en-na, de screenshot of het schema, als losstaand beeld dat zonder woorden klopt.',
            'De samenvatting met de link, in je e-mailnieuwsbrief, waar de mensen zitten die je al vertrouwen.',
          ],
        },
        {
          kind: 'p',
          text: 'Plan de afgeleide stukken in Hootsuite over de twee weken erna in plaats van ze allemaal te publiceren op de dag dat het artikel uitkomt. Het artikel is niet oud voor wie het nog niet las.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Maak van één post vijf stukken',
        brief: [
          {
            kind: 'p',
            text: 'Neem één stevig ding dat je al schreef — een blogpost, een lange README, een uitgebreid antwoord dat je iemand gaf. Je schrijft niets nieuws.',
          },
          {
            kind: 'ul',
            items: [
              'Bepaal de sterkste bewering erin en schrijf die als losstaande social post.',
              'Haal er een lijst of een reeks stappen uit en zet die om voor een feed.',
              'Maak één beeld in Canva dat een idee uit het stuk draagt zonder de tekst nodig te hebben.',
              'Schrijf de nieuwsbriefversie van twee zinnen, met de link.',
              'Bepaal de data voor alle vier en zet ze in een wachtrij in Hootsuite.',
            ],
          },
          {
            kind: 'p',
            text: 'Beantwoord daarna eerlijk de strategievraag: welke funnelfase bedient het origineel, en voor welke fase heb je nog steeds niets?',
          },
        ],
        deliverable:
          'De vier afgeleide stukken, hun geplande data, en één zin die benoemt welke funnelfase je mist.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm10-funnel-content',
          prompt: 'Koppel elk contenttype aan de funnelfase die het bedient.',
          lefts: [
            'Een gids die een vraag beantwoordt van iemand die niet wist dat jij bestond',
            'Een eerlijke post over wanneer jouw aanpak de verkeerde keuze is',
            'Een pagina die precies beschrijft wat er gebeurt nadat iemand contact opneemt',
            'Documentatie die een bestaande klant beter maakt in wat jij bouwde',
          ],
          rights: ['Awareness', 'Consideration', 'Conversion', 'Loyalty'],
          answer: [0, 1, 2, 3],
          explain:
            'De "wanneer je dit niet moet gebruiken"-post vinden mensen tegenintuïtief: benoemen waar jij de verkeerde keuze bent is overwegingscontent, en het overtuigt meer dan een pagina met voordelen.',
        },
        {
          kind: 'choice',
          id: 'm10-strategy-vs-creation',
          prompt:
            'Iemand publiceerde dertig posts in een jaar en kan niet zeggen welke iets opleverde. Wat ontbreekt er?',
          options: [
            'Een strategie — beslissingen over publiek, doel en meting, genomen vóór het maken',
            'Meer posts, om genoeg volume op te bouwen om een patroon te zien',
            'Een beter contentmanagementsysteem',
            'Een groter socialmediapubliek',
          ],
          answer: 0,
          explain:
            'Volume zonder beslissingen is een dagboek. Strategie is de set keuzes van één pagina — voor wie, wat ze moeten weten, waar het heen gaat, hoe je ziet of het werkte — die de eenendertigste post het schrijven waard maakt.',
        },
        {
          kind: 'multi',
          id: 'm10-seo-writing',
          prompt: 'Welke hiervan helpen een pagina echt in zoekresultaten?',
          options: [
            'De vraag in de eerste alinea beantwoorden',
            'De pagina één duidelijk onderwerp geven',
            'De woorden gebruiken waarop je lezer zou zoeken, ook de gewone',
            'De doelzin zo vaak herhalen als erin past',
          ],
          answers: [0, 1, 2],
          explain:
            'De eerste drie helpen een gehaaste lezer en een crawler om dezelfde reden. Termen volstoppen is een techniek uit een veel ouder internet en leest nu voor beide als lage kwaliteit.',
        },
        {
          kind: 'order',
          id: 'm10-repurpose-order',
          prompt:
            'Je hebt één stevig artikel geschreven. Zet de hergebruikreeks in een zinnige volgorde.',
          steps: [
            'Publiceer het volledige artikel op je eigen site, waar het kan scoren',
            'Post de sterkste bewering, met één beeld, in een social feed',
            'Zet de lijst of stappen om voor een feed als carrousel of draad',
            'Publiceer een losstaand beeld dat een idee draagt zonder de tekst',
            'Stuur de samenvatting met de link naar je nieuwsbrief',
          ],
          explain:
            'Het artikel gaat eerst omdat al het andere ernaar terugverwijst. De afgeleide stukken over de twee weken erna spreiden bereikt mensen die het origineel misten — het is niet oud voor wie het nog niet las.',
        },
        {
          kind: 'choice',
          id: 'm10-calendar',
          prompt:
            'Je bepaalt een publicatiefrequentie. Welke grondslag overleeft het jaar echt?',
          options: [
            'Wat je in je drukste maand zou volhouden',
            'Wat je haalde in die rustige week toen je enthousiast was',
            'Wat je meest productieve concurrent publiceert',
            'Zo vaak als je iets te zeggen hebt',
          ],
          answer: 0,
          explain:
            'Een frequentie gebaseerd op een goede week stort in tijdens een slechte, en een concurrent evenaren importeert hun capaciteit, niet die van jou. "Als ik iets te zeggen heb" is hoe een blog stilletjes stopt.',
        },
        {
          kind: 'reflect',
          id: 'm10-reflect-gap',
          prompt:
            'Noem de laatste vijf dingen die je publiceerde en plaats elk in een funnelfase. Welke fase is leeg, en wat zou het eerste stuk ervoor zijn?',
        },
      ],
      recap: [
        'Strategie is de set beslissingen van één pagina die je vóór het maken neemt; zonder die set levert volume een dagboek op.',
        'Content ligt over de funnel, en het gat bij de meeste zelfstandige developers zit bij overweging — materiaal dat helpt jou te kiezen, niet alleen te vinden.',
        'SEO-vriendelijk schrijven is structuur en directheid: eerst antwoorden, één onderwerp per pagina, echte koppen, de woorden van de lezer.',
        'Zet je publicatiefrequentie op wat je drukste maand overleeft, en zet de schrijftijd tegenover je klantwerk in de agenda.',
        'Hergebruik is de losse ideeën in één stuk herkennen en ze over de weken erna inplannen in plaats van allemaal tegelijk.',
      ],
    },
  },
};

export default module10;
