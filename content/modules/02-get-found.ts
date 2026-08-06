import type { Module } from '@/lib/types';

const module02: Module = {
  slug: 'get-found',
  number: 2,
  accent: 'green',
  minutes: 120,
  content: {
    en: {
      title: 'Get Found',
      subtitle:
        'Five accounts, one afternoon. By the end you will know what your own site already ranks for, what it would cost to buy the same attention, and whether Google thinks your business exists.',
      abstract:
        'SEO, paid search and social discovery — with Search Console, Semrush, Ahrefs, Google Ads and Google Business Profile pointed at a site you actually own.',
      objectives: [
        'Explain the difference between earned search visibility and bought search visibility, and when each is the right call.',
        'Read a Search Console report and name the queries that already bring people to your site.',
        'Look up a keyword’s search volume and difficulty, and say whether it is worth pursuing.',
        'Check which sites link to yours, and explain why that number matters.',
        'Find the estimated cost per click for a term you would actually bid on.',
        'Verify how your business appears in Google Search and Maps.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'There are exactly three ways a stranger arrives at your site: they searched for something and found you, someone paid to put you in front of them, or another human mentioned you. This module is the first two, plus the part of the third that search engines can see.',
        },
        {
          kind: 'h',
          text: 'SEO is the long game and it is mostly not about keywords',
        },
        {
          kind: 'p',
          text: 'Search engine optimisation means making your site the best available answer to a question someone is actually typing, and making it easy for a crawler to work that out. In practice that splits three ways.',
        },
        {
          kind: 'ul',
          items: [
            'Technical — can a crawler reach every page, does it load quickly, does it work on a phone, is there one canonical URL per thing. As a developer this is the part you are already best at.',
            'On-page — does the page use the words a searcher would use, is the title tag honest and specific, does the heading structure describe the content rather than decorate it.',
            'Off-page — do other sites link to yours, and are those sites themselves credible. This is the part you cannot fix in an afternoon.',
          ],
        },
        {
          kind: 'p',
          text: 'The pay-off is slow and compounding: a page that ranks keeps delivering visitors for years at no marginal cost. The catch is that you cannot switch it on next Tuesday because a client asked where the leads are.',
        },
        {
          kind: 'h',
          text: 'SEM is the short game and it is entirely about money',
        },
        {
          kind: 'p',
          text: 'Search engine marketing — paid search — puts you above the organic results for a term, and charges you every time someone clicks. It is instant, it is measurable to the cent, and it stops the moment you stop paying.',
        },
        {
          kind: 'p',
          text: 'The decision between the two is not philosophical. Ask how urgently you need the traffic, how long the term will stay valuable, and what a click is worth to you. A term you will still want in three years, with a click worth two euros, is an SEO project. A term you need traffic on this month, with a click worth two hundred euros, is an ad.',
        },
        {
          kind: 'note',
          label: 'The honest answer for most small businesses',
          text: 'Run ads to find out which terms actually convert, then invest SEO effort in the handful that did. Paid search is the cheapest market research you can buy, and you get the traffic as a side effect.',
        },
        {
          kind: 'h',
          text: 'Social discovery is a different kind of search',
        },
        {
          kind: 'p',
          text: 'People also find things on social platforms, but the mechanism is not a query — it is a feed deciding what to show. That changes what works: search rewards the complete answer, feeds reward the thing worth stopping for.',
        },
        {
          kind: 'p',
          text: 'The practical consequence is that content does not transfer between them unchanged. A thorough guide is a good search asset and a bad post. The same guide cut into one surprising claim with a screenshot is a good post and a thin page. Module 10 is about doing that conversion deliberately.',
        },
      ],
      lessons: [
        {
          id: 'search-console',
          tool: 'search-console',
          title: 'Find Out What You Already Rank For',
          what: [
            {
              kind: 'p',
              text: 'Google Search Console is the only report where the numbers come from Google itself rather than from someone modelling Google. It shows the actual queries that put your pages in front of people, how often they were shown, how often they were clicked, and where you sat in the results.',
            },
            {
              kind: 'p',
              text: 'It is free, it requires proving you own the domain, and it starts collecting from the day you verify — so the sooner you add a site, the more history you have later.',
            },
          ],
          why: 'Almost everyone guesses wrong about what their site ranks for. The queries you were built to win are usually not the queries bringing people in, and the gap between the two is the most useful list of content ideas you will get for free.',
          mission:
            'Add a site you own — raimonvibe.eu, or another project — to Search Console, verify it, then open Performance and read the query list. Sort by impressions, not clicks, so you see the terms you appear for but nobody clicks.',
          missionUrl: 'https://search.google.com/search-console',
          missionCta: 'Open Search Console',
          check: {
            kind: 'reflect',
            id: 'm2-gsc-reflect',
            prompt:
              'What is one keyword in that list that surprised you — either because you never wrote for it, or because you rank far better or worse on it than you expected?',
            hint: 'High impressions with almost no clicks usually means your title tag is not answering the question the searcher asked.',
          },
        },
        {
          id: 'semrush',
          tool: 'semrush',
          title: 'Size Up a Keyword Before You Chase It',
          what: [
            {
              kind: 'p',
              text: 'Semrush estimates how many people search a term each month and how hard it would be to rank for it, alongside what your competitors already rank for. Search Console tells you where you are; Semrush tells you where you could go.',
            },
            {
              kind: 'p',
              text: 'The two numbers that matter are volume and difficulty. High volume with high difficulty is a term dominated by sites with budgets. Modest volume with low difficulty, on a term that describes exactly what you sell, is the one worth writing for.',
            },
          ],
          why: 'Keyword difficulty is a proxy for how many well-linked pages already answer that query. It is the single number that stops you spending a fortnight on a page that was never going to reach page one.',
          mission:
            'Open the free Keyword Overview tool and look up a term related to what you build — "static website", "Next.js developer", "web development freelance" or similar. Note the volume and the difficulty score, then look at the related terms it suggests.',
          missionUrl: 'https://www.semrush.com/analytics/keywordoverview/',
          missionCta: 'Open Keyword Overview',
          check: {
            kind: 'reflect',
            id: 'm2-semrush-reflect',
            prompt:
              'What search volume and difficulty did your term come back with — and given those two numbers, would you actually write a page for it?',
            hint: 'Write down the term, the volume, the difficulty, and a yes or no. The yes/no is the part you will want later.',
          },
        },
        {
          id: 'ahrefs',
          tool: 'ahrefs',
          title: 'See Who Is Already Linking to You',
          what: [
            {
              kind: 'p',
              text: 'Ahrefs is the alternative to Semrush, and it is strongest on backlinks — the links from other sites pointing at yours. Its free backlink checker will show you the top links to any domain without an account.',
            },
            {
              kind: 'p',
              text: 'Backlinks matter because search engines treat them as other people vouching for you. Ten links from real, relevant sites beat a thousand from directories nobody reads, and a link from a site in your field is worth more than one from a general-purpose list.',
            },
          ],
          why: 'Backlinks are the hardest part of SEO to fake and the hardest to build, which is exactly why they carry weight. Knowing your current count also tells you whether a difficulty score is realistic for you specifically.',
          mission:
            'Run your own domain through the free backlink checker and read the referring domains. Then run one competitor — someone who ranks for the term you looked up in Semrush — and compare.',
          missionUrl: 'https://ahrefs.com/backlink-checker',
          missionCta: 'Open the backlink checker',
          check: {
            kind: 'reflect',
            id: 'm2-ahrefs-reflect',
            prompt:
              'Did you find any backlinks you did not know about? Where did they come from, and is there a pattern you could deliberately repeat?',
            hint: 'Conference listings, GitHub profiles, client sites and directory entries are the usual surprises for developers.',
          },
        },
        {
          id: 'google-ads',
          tool: 'google-ads',
          title: 'Price the Attention You Would Have to Buy',
          what: [
            {
              kind: 'p',
              text: 'Google Ads places paid results above the organic ones and charges per click. The part you need today is the Keyword Planner, which is free and works without ever running an ad or spending money.',
            },
            {
              kind: 'p',
              text: 'It gives you an estimated cost per click for a term. That figure is the market’s own valuation of a visitor for that query — which makes it useful even if you never intend to advertise.',
            },
          ],
          why: 'Cost per click is the fastest read on commercial intent. A term costing four euros a click has businesses making money from it; a term costing four cents does not, however many people search it. That tells you which SEO targets are worth the effort.',
          mission:
            'Open Keyword Planner, choose "Discover new keywords", and enter a term related to your services. Read the estimated cost per click and the competition rating — no ad, no budget, no campaign needed.',
          missionUrl: 'https://ads.google.com/home/tools/keyword-planner/',
          missionCta: 'Open Keyword Planner',
          check: {
            kind: 'reflect',
            id: 'm2-ads-reflect',
            prompt:
              'What is the estimated cost per click for your term? Multiply it by the clicks you would need to win one job — is that number smaller or larger than what the job pays?',
            hint: 'If ten clicks produce one enquiry and one in three enquiries becomes a job, you need about thirty clicks per job. Multiply.',
          },
        },
        {
          id: 'business-profile',
          tool: 'business-profile',
          title: 'Check Whether Google Thinks You Exist',
          what: [
            {
              kind: 'p',
              text: 'Google Business Profile is the free listing that puts a business into Maps and into the panel beside search results: hours, location, photos, reviews, a link to your site.',
            },
            {
              kind: 'p',
              text: 'It matters more than its effort suggests, because it is the one place where you control what Google shows for your own name — and for anyone nearby searching for what you do.',
            },
          ],
          why: 'Local and branded searches convert far better than generic ones: the person searching your name has already decided to look you up. A missing or wrong profile loses the easiest visitors you will ever get.',
          mission:
            'Go to Google Business Profile and either set up your business or check the profile that already exists. Then search your own business name in a private window and look at what appears beside the results.',
          missionUrl: 'https://www.google.com/business/',
          missionCta: 'Open Business Profile',
          check: {
            kind: 'reflect',
            id: 'm2-gbp-reflect',
            prompt:
              'Is your business currently showing up when you search your own name? If it is, what is wrong or missing in what Google displays?',
            hint: 'Check the site link, the description and the category first — those are the three that are most often stale.',
          },
        },
      ],
      quiz: [
        {
          kind: 'choice',
          id: 'm2-tf-seo-instant',
          prompt:
            'True or false: good SEO work should show up in your traffic within a few days.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. SEO compounds over months. Anything that moves traffic within days is either paid, a technical fix to something that was broken, or a fluke. Expecting SEO to behave like advertising is how people conclude it does not work.',
        },
        {
          kind: 'choice',
          id: 'm2-tf-backlinks',
          prompt:
            'True or false: a hundred links from unrelated directory sites are worth more than five links from well-regarded sites in your field.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. Relevance and credibility beat volume, and low-quality link building can actively hurt you. Five real mentions from your industry are the better outcome.',
        },
        {
          kind: 'choice',
          id: 'm2-scenario-paid',
          prompt:
            'A client needs enquiries for a service they are launching in three weeks, on a term with high commercial value. What do you recommend first?',
          options: [
            'Paid search now, and start SEO work in parallel for the terms that convert',
            'A twelve-post blog campaign targeting the term',
            'Rewriting the title tags across the whole site and waiting',
            'Nothing — three weeks is not enough time to market anything',
          ],
          answer: 0,
          explain:
            'The deadline decides it. Paid search delivers traffic immediately and, more usefully, tells you within a fortnight which terms actually produce enquiries — which is precisely the list you then invest SEO effort in.',
        },
        {
          kind: 'choice',
          id: 'm2-scenario-seo',
          prompt:
            'You maintain a documentation page that has ranked steadily for three years and costs nothing to keep. A term related to it has low difficulty and a four-euro cost per click. What is the strongest move?',
          options: [
            'Write the page targeting that term — it is proven ground and the CPC shows the traffic is commercially valuable',
            'Bid on the term indefinitely instead',
            'Ignore it; low difficulty means low value',
            'Delete the documentation page and start over',
          ],
          answer: 0,
          explain:
            'Low difficulty means you can realistically rank; a four-euro CPC means businesses are paying real money for that visitor. Low difficulty plus high commercial value on a site that already ranks is the best SEO opportunity there is.',
        },
        {
          kind: 'match',
          id: 'm2-platform-content',
          prompt: 'Match each piece of content to the channel it is actually suited to.',
          lefts: [
            'A 2,000-word guide answering one specific technical question',
            'A single surprising before-and-after screenshot',
            'A short thread reacting to news in your field the day it breaks',
            'A listing with your opening hours, location and photos',
          ],
          rights: [
            'Organic search (a page on your site)',
            'A visual social feed',
            'Twitter / X',
            'Google Business Profile',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Search rewards the complete answer; feeds reward the thing worth stopping for; X rewards timeliness; Business Profile handles the facts people look up about you specifically. The same idea has to be recut for each.',
        },
        {
          kind: 'multi',
          id: 'm2-technical-seo',
          prompt: 'Which of these are technical SEO concerns rather than content ones?',
          options: [
            'Pages that take eight seconds to load on mobile',
            'A title tag that does not match what the page is about',
            'Three URLs serving the same content with no canonical tag',
            'A crawler blocked from a whole section by robots.txt',
          ],
          answers: [0, 2, 3],
          explain:
            'Load time, duplicate URLs and crawler access are technical. The title tag is on-page content work. As a developer the technical column is the one you can fix this afternoon.',
        },
        {
          kind: 'reflect',
          id: 'm2-reflect-strategy',
          prompt:
            'Given everything you looked up today — your real queries, one keyword’s volume and difficulty, your backlink count and one cost per click — what is the single term you would commit to over the next three months, and would you chase it with SEO or buy it?',
        },
      ],
      recap: [
        'Search Console is the only report with Google’s own numbers, and the queries in it are almost never the ones you expected.',
        'Volume tells you how many people are asking; difficulty tells you whether you can realistically be the answer. You need both before committing to a term.',
        'Backlinks are other people vouching for you — relevance beats volume, and they are the slowest part of SEO to build.',
        'Cost per click is the market pricing a visitor. Use it to judge commercial intent even when you have no intention of advertising.',
        'The SEO-versus-ads decision comes down to urgency, how long the term stays valuable, and what a click is worth. Ads are also the cheapest way to find out which terms deserve SEO.',
        'A Business Profile controls what Google shows for your own name, which is the highest-converting search you have.',
      ],
    },

    nl: {
      title: 'Word gevonden',
      subtitle:
        'Vijf accounts, één middag. Aan het eind weet je waar je site al op scoort, wat dezelfde aandacht zou kosten om te kopen, en of Google denkt dat je bedrijf bestaat.',
      abstract:
        'SEO, betaald zoeken en sociale vindbaarheid — met Search Console, Semrush, Ahrefs, Google Ads en Google Bedrijfsprofiel, gericht op een site die echt van jou is.',
      objectives: [
        'Het verschil uitleggen tussen verdiende en gekochte zichtbaarheid in zoekresultaten, en wanneer elk de juiste keuze is.',
        'Een Search Console-rapport lezen en de zoekopdrachten benoemen die nu al bezoekers opleveren.',
        'Het zoekvolume en de moeilijkheidsgraad van een zoekwoord opzoeken en beoordelen of het de moeite waard is.',
        'Nagaan welke sites naar die van jou linken, en uitleggen waarom dat aantal telt.',
        'De geschatte kosten per klik vinden voor een term waarop je echt zou bieden.',
        'Controleren hoe je bedrijf verschijnt in Google Zoeken en Maps.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Er zijn precies drie manieren waarop een vreemde op je site komt: ze zochten iets en vonden jou, iemand betaalde om jou aan hen te tonen, of een ander mens noemde je. Deze module gaat over de eerste twee, plus het deel van de derde dat zoekmachines kunnen zien.',
        },
        {
          kind: 'h',
          text: 'SEO is het lange spel en gaat grotendeels niet over zoekwoorden',
        },
        {
          kind: 'p',
          text: 'Zoekmachineoptimalisatie betekent dat je site het beste beschikbare antwoord wordt op een vraag die iemand echt intypt, en dat een crawler dat makkelijk kan vaststellen. In de praktijk valt dat in drieën uiteen.',
        },
        {
          kind: 'ul',
          items: [
            'Technisch — kan een crawler elke pagina bereiken, laadt het snel, werkt het op een telefoon, is er één canonieke URL per ding. Als developer ben je hier al het beste in.',
            'On-page — gebruikt de pagina de woorden die een zoeker zou gebruiken, is de title tag eerlijk en specifiek, beschrijft de kopstructuur de inhoud in plaats van hem te versieren.',
            'Off-page — linken andere sites naar de jouwe, en zijn die sites zelf geloofwaardig. Dit is het deel dat je niet in één middag repareert.',
          ],
        },
        {
          kind: 'p',
          text: 'De opbrengst is traag en cumulatief: een pagina die scoort levert jarenlang bezoekers op zonder extra kosten. Het addertje is dat je hem niet volgende dinsdag kunt aanzetten omdat een klant vraagt waar de leads blijven.',
        },
        {
          kind: 'h',
          text: 'SEM is het korte spel en gaat volledig over geld',
        },
        {
          kind: 'p',
          text: 'Search engine marketing — betaald zoeken — zet je boven de organische resultaten voor een term, en rekent af per klik. Het is direct, tot op de cent meetbaar, en het stopt op het moment dat jij stopt met betalen.',
        },
        {
          kind: 'p',
          text: 'De keuze tussen beide is niet filosofisch. Vraag hoe dringend je het verkeer nodig hebt, hoe lang de term waardevol blijft, en wat een klik jou waard is. Een term die je over drie jaar nog wilt, met een klik van twee euro waard, is een SEO-project. Een term waar je deze maand verkeer op nodig hebt, met een klik van tweehonderd euro waard, is een advertentie.',
        },
        {
          kind: 'note',
          label: 'Het eerlijke antwoord voor de meeste kleine bedrijven',
          text: 'Zet advertenties in om te ontdekken welke termen echt converteren, en steek daarna SEO-inspanning in het handjevol dat werkte. Betaald zoeken is het goedkoopste marktonderzoek dat je kunt kopen, en het verkeer krijg je er gratis bij.',
        },
        {
          kind: 'h',
          text: 'Sociale vindbaarheid is een ander soort zoeken',
        },
        {
          kind: 'p',
          text: 'Mensen vinden dingen ook op social platforms, maar het mechanisme is geen zoekopdracht — het is een feed die beslist wat hij toont. Dat verandert wat werkt: zoeken beloont het complete antwoord, feeds belonen datgene waarvoor je stopt met scrollen.',
        },
        {
          kind: 'p',
          text: 'Het praktische gevolg: content gaat niet onveranderd van het één naar het ander. Een grondige gids is een goed zoekmiddel en een slechte post. Diezelfde gids teruggebracht tot één verrassende bewering met een screenshot is een goede post en een magere pagina. Module 10 gaat over die omzetting bewust doen.',
        },
      ],
      lessons: [
        {
          id: 'search-console',
          tool: 'search-console',
          title: 'Ontdek waar je al op scoort',
          what: [
            {
              kind: 'p',
              text: 'Google Search Console is het enige rapport waarin de cijfers van Google zelf komen in plaats van van iemand die Google modelleert. Het toont de werkelijke zoekopdrachten die je pagina’s aan mensen lieten zien, hoe vaak ze verschenen, hoe vaak erop werd geklikt, en op welke positie je stond.',
            },
            {
              kind: 'p',
              text: 'Het is gratis, je moet bewijzen dat je het domein bezit, en het begint te verzamelen vanaf de dag dat je verifieert — dus hoe eerder je een site toevoegt, hoe meer historie je later hebt.',
            },
          ],
          why: 'Bijna iedereen gokt verkeerd over waar hun site op scoort. De zoekopdrachten waarvoor je bouwde zijn zelden de zoekopdrachten die bezoekers opleveren, en het gat daartussen is de nuttigste lijst met contentideeën die je gratis krijgt.',
          mission:
            'Voeg een site van jezelf toe aan Search Console — raimonvibe.eu of een ander project — verifieer hem, en open dan Prestaties om de lijst met zoekopdrachten te lezen. Sorteer op vertoningen, niet op klikken, zodat je de termen ziet waarop je verschijnt maar niemand klikt.',
          missionUrl: 'https://search.google.com/search-console',
          missionCta: 'Open Search Console',
          check: {
            kind: 'reflect',
            id: 'm2-gsc-reflect',
            prompt:
              'Welk zoekwoord in die lijst verraste je — omdat je er nooit voor schreef, of omdat je er veel beter of slechter op scoort dan verwacht?',
            hint: 'Veel vertoningen met bijna geen klikken betekent meestal dat je title tag de vraag van de zoeker niet beantwoordt.',
          },
        },
        {
          id: 'semrush',
          tool: 'semrush',
          title: 'Schat een zoekwoord in voor je erachteraan gaat',
          what: [
            {
              kind: 'p',
              text: 'Semrush schat hoeveel mensen een term per maand zoeken en hoe moeilijk het zou zijn om erop te scoren, naast waar je concurrenten al op scoren. Search Console vertelt je waar je bent; Semrush waar je heen zou kunnen.',
            },
            {
              kind: 'p',
              text: 'De twee getallen die tellen zijn volume en moeilijkheidsgraad. Hoog volume met hoge moeilijkheid is een term die wordt gedomineerd door sites met budget. Bescheiden volume met lage moeilijkheid, op een term die precies beschrijft wat jij verkoopt, is degene waar het schrijven de moeite waard is.',
            },
          ],
          why: 'Keyword difficulty is een maat voor hoeveel goed gelinkte pagina’s die vraag al beantwoorden. Het is het ene getal dat voorkomt dat je twee weken besteedt aan een pagina die pagina één nooit ging halen.',
          mission:
            'Open de gratis Keyword Overview-tool en zoek een term op die past bij wat jij bouwt — "statische website", "Next.js developer", "webdevelopment freelance" of iets dergelijks. Noteer het volume en de moeilijkheidsscore, en bekijk daarna de verwante termen die hij voorstelt.',
          missionUrl: 'https://www.semrush.com/analytics/keywordoverview/',
          missionCta: 'Open Keyword Overview',
          check: {
            kind: 'reflect',
            id: 'm2-semrush-reflect',
            prompt:
              'Welk zoekvolume en welke moeilijkheidsgraad kwamen er uit — en zou je met die twee getallen er echt een pagina voor schrijven?',
            hint: 'Schrijf de term, het volume, de moeilijkheid en een ja of nee op. Die ja/nee is het deel dat je later nodig hebt.',
          },
        },
        {
          id: 'ahrefs',
          tool: 'ahrefs',
          title: 'Kijk wie er al naar je linkt',
          what: [
            {
              kind: 'p',
              text: 'Ahrefs is het alternatief voor Semrush, en is het sterkst in backlinks — de links van andere sites naar de jouwe. De gratis backlink checker toont de belangrijkste links naar elk domein, zonder account.',
            },
            {
              kind: 'p',
              text: 'Backlinks tellen omdat zoekmachines ze zien als anderen die voor je instaan. Tien links van echte, relevante sites verslaan er duizend uit mappen die niemand leest, en een link uit jouw vakgebied is meer waard dan één uit een algemene lijst.',
            },
          ],
          why: 'Backlinks zijn het moeilijkst te faken deel van SEO en het moeilijkst op te bouwen — precies daarom wegen ze zwaar. Je huidige aantal vertelt je ook of een moeilijkheidsscore realistisch is voor jou specifiek.',
          mission:
            'Haal je eigen domein door de gratis backlink checker en lees de verwijzende domeinen. Doe daarna één concurrent — iemand die scoort op de term die je in Semrush opzocht — en vergelijk.',
          missionUrl: 'https://ahrefs.com/backlink-checker',
          missionCta: 'Open de backlink checker',
          check: {
            kind: 'reflect',
            id: 'm2-ahrefs-reflect',
            prompt:
              'Vond je backlinks waarvan je niet wist? Waar kwamen ze vandaan, en zit er een patroon in dat je bewust zou kunnen herhalen?',
            hint: 'Congresvermeldingen, GitHub-profielen, klantsites en directoryvermeldingen zijn de gebruikelijke verrassingen voor developers.',
          },
        },
        {
          id: 'google-ads',
          tool: 'google-ads',
          title: 'Bereken wat die aandacht zou kosten',
          what: [
            {
              kind: 'p',
              text: 'Google Ads plaatst betaalde resultaten boven de organische en rekent per klik af. Wat je vandaag nodig hebt is de Zoekwoordplanner, die gratis is en werkt zonder ooit een advertentie te draaien of geld uit te geven.',
            },
            {
              kind: 'p',
              text: 'Hij geeft je geschatte kosten per klik voor een term. Dat cijfer is de waardering die de markt zelf aan een bezoeker voor die zoekopdracht geeft — nuttig zelfs als je nooit van plan bent te adverteren.',
            },
          ],
          why: 'Kosten per klik is de snelste indicatie van commerciële intentie. Een term van vier euro per klik heeft bedrijven die er geld mee verdienen; een term van vier cent niet, hoeveel mensen er ook op zoeken. Dat vertelt je welke SEO-doelen de moeite waard zijn.',
          mission:
            'Open de Zoekwoordplanner, kies "Nieuwe zoekwoorden ontdekken" en voer een term in die past bij je diensten. Lees de geschatte kosten per klik en de concurrentiescore — geen advertentie, geen budget, geen campagne nodig.',
          missionUrl: 'https://ads.google.com/home/tools/keyword-planner/',
          missionCta: 'Open Zoekwoordplanner',
          check: {
            kind: 'reflect',
            id: 'm2-ads-reflect',
            prompt:
              'Wat zijn de geschatte kosten per klik voor jouw term? Vermenigvuldig dat met het aantal klikken dat je nodig hebt voor één opdracht — is dat bedrag kleiner of groter dan wat de opdracht oplevert?',
            hint: 'Als tien klikken één aanvraag opleveren en één op de drie aanvragen een opdracht wordt, heb je ongeveer dertig klikken per opdracht nodig. Vermenigvuldig.',
          },
        },
        {
          id: 'business-profile',
          tool: 'business-profile',
          title: 'Controleer of Google denkt dat je bestaat',
          what: [
            {
              kind: 'p',
              text: 'Google Bedrijfsprofiel is de gratis vermelding die een bedrijf in Maps zet en in het paneel naast de zoekresultaten: openingstijden, locatie, foto’s, recensies, een link naar je site.',
            },
            {
              kind: 'p',
              text: 'Het telt zwaarder dan de moeite doet vermoeden, want het is de enige plek waar jij bepaalt wat Google toont voor je eigen naam — en voor iedereen in de buurt die zoekt naar wat jij doet.',
            },
          ],
          why: 'Lokale en merkgebonden zoekopdrachten converteren veel beter dan algemene: wie jouw naam zoekt, heeft al besloten je op te zoeken. Een ontbrekend of verkeerd profiel verliest de makkelijkste bezoekers die je ooit krijgt.',
          mission:
            'Ga naar Google Bedrijfsprofiel en zet je bedrijf op of controleer het profiel dat al bestaat. Zoek daarna je eigen bedrijfsnaam in een privévenster en kijk wat er naast de resultaten verschijnt.',
          missionUrl: 'https://www.google.com/business/',
          missionCta: 'Open Bedrijfsprofiel',
          check: {
            kind: 'reflect',
            id: 'm2-gbp-reflect',
            prompt:
              'Verschijnt je bedrijf nu als je je eigen naam zoekt? En zo ja, wat klopt er niet of ontbreekt er in wat Google laat zien?',
            hint: 'Controleer eerst de sitelink, de omschrijving en de categorie — die zijn het vaakst verouderd.',
          },
        },
      ],
      quiz: [
        {
          kind: 'choice',
          id: 'm2-tf-seo-instant',
          prompt:
            'Waar of niet waar: goed SEO-werk zou binnen een paar dagen zichtbaar moeten zijn in je verkeer.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. SEO bouwt zich op over maanden. Alles wat binnen dagen verkeer verplaatst is betaald, een technische reparatie van iets dat stuk was, of toeval. Verwachten dat SEO zich als adverteren gedraagt, is hoe mensen concluderen dat het niet werkt.',
        },
        {
          kind: 'choice',
          id: 'm2-tf-backlinks',
          prompt:
            'Waar of niet waar: honderd links van niet-verwante directorysites zijn meer waard dan vijf links van gerespecteerde sites in jouw vakgebied.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Relevantie en geloofwaardigheid verslaan aantallen, en linkbuilding van lage kwaliteit kan je actief schaden. Vijf echte vermeldingen uit je branche zijn de betere uitkomst.',
        },
        {
          kind: 'choice',
          id: 'm2-scenario-paid',
          prompt:
            'Een klant heeft over drie weken aanvragen nodig voor een dienst die dan lanceert, op een term met hoge commerciële waarde. Wat adviseer je als eerste?',
          options: [
            'Nu betaald zoeken, en parallel SEO opstarten voor de termen die converteren',
            'Een blogcampagne van twaalf posts gericht op die term',
            'De title tags van de hele site herschrijven en afwachten',
            'Niets — drie weken is te kort om iets te marketen',
          ],
          answer: 0,
          explain:
            'De deadline beslist. Betaald zoeken levert direct verkeer en, nuttiger nog, vertelt je binnen twee weken welke termen echt aanvragen opleveren — precies de lijst waarin je daarna SEO steekt.',
        },
        {
          kind: 'choice',
          id: 'm2-scenario-seo',
          prompt:
            'Je onderhoudt een documentatiepagina die al drie jaar stabiel scoort en niets kost. Een verwante term heeft lage moeilijkheid en vier euro kosten per klik. Wat is de sterkste zet?',
          options: [
            'Schrijf de pagina gericht op die term — bewezen terrein, en de CPC laat zien dat het verkeer commercieel waardevol is',
            'Bied in plaats daarvan onbeperkt op die term',
            'Negeer het; lage moeilijkheid betekent lage waarde',
            'Verwijder de documentatiepagina en begin opnieuw',
          ],
          answer: 0,
          explain:
            'Lage moeilijkheid betekent dat je realistisch kunt scoren; vier euro per klik betekent dat bedrijven echt geld betalen voor die bezoeker. Lage moeilijkheid plus hoge commerciële waarde op een site die al scoort is de beste SEO-kans die er is.',
        },
        {
          kind: 'match',
          id: 'm2-platform-content',
          prompt: 'Koppel elk stuk content aan het kanaal waar het echt bij past.',
          lefts: [
            'Een gids van 2.000 woorden die één specifieke technische vraag beantwoordt',
            'Eén verrassende voor-en-na screenshot',
            'Een korte draad over nieuws in je vakgebied op de dag dat het speelt',
            'Een vermelding met je openingstijden, locatie en foto’s',
          ],
          rights: [
            'Organisch zoeken (een pagina op je site)',
            'Een visuele social feed',
            'Twitter / X',
            'Google Bedrijfsprofiel',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Zoeken beloont het complete antwoord; feeds belonen waar je voor stopt; X beloont actualiteit; het Bedrijfsprofiel regelt de feiten die mensen specifiek over jou opzoeken. Hetzelfde idee moet voor elk opnieuw gesneden worden.',
        },
        {
          kind: 'multi',
          id: 'm2-technical-seo',
          prompt: 'Welke hiervan zijn technische SEO-kwesties in plaats van contentkwesties?',
          options: [
            'Pagina’s die acht seconden laden op mobiel',
            'Een title tag die niet klopt met waar de pagina over gaat',
            'Drie URL’s met dezelfde inhoud zonder canonical tag',
            'Een crawler die door robots.txt uit een hele sectie wordt geweerd',
          ],
          answers: [0, 2, 3],
          explain:
            'Laadtijd, dubbele URL’s en crawlertoegang zijn technisch. De title tag is on-page contentwerk. Als developer is de technische kolom degene die je vanmiddag kunt oplossen.',
        },
        {
          kind: 'reflect',
          id: 'm2-reflect-strategy',
          prompt:
            'Gegeven alles wat je vandaag opzocht — je echte zoekopdrachten, het volume en de moeilijkheid van één zoekwoord, je aantal backlinks en één kostprijs per klik — op welke ene term zou je je de komende drie maanden vastleggen, en zou je die met SEO najagen of kopen?',
        },
      ],
      recap: [
        'Search Console is het enige rapport met Google’s eigen cijfers, en de zoekopdrachten erin zijn bijna nooit degene die je verwachtte.',
        'Volume zegt hoeveel mensen het vragen; moeilijkheid zegt of jij realistisch het antwoord kunt zijn. Je hebt beide nodig voordat je je op een term vastlegt.',
        'Backlinks zijn anderen die voor je instaan — relevantie verslaat aantallen, en ze zijn het traagste deel van SEO om op te bouwen.',
        'Kosten per klik is de markt die een bezoeker prijst. Gebruik het om commerciële intentie te beoordelen, ook zonder plannen om te adverteren.',
        'De keuze SEO of advertenties draait om urgentie, hoe lang de term waardevol blijft, en wat een klik waard is. Advertenties zijn bovendien de goedkoopste manier om te ontdekken welke termen SEO verdienen.',
        'Een Bedrijfsprofiel bepaalt wat Google toont voor je eigen naam, en dat is de best converterende zoekopdracht die je hebt.',
      ],
    },
  },
};

export default module02;
