import type { Module } from '@/lib/types';

const module06: Module = {
  slug: 'store',
  number: 6,
  accent: 'blue',
  minutes: 90,
  content: {
    en: {
      title: 'Open the Shop',
      subtitle:
        'What a product page has to answer, the order the setup actually goes in, and why a developer building a store by hand is usually making a mistake.',
      abstract:
        'Building a working store on Shopify, comparing it with Wix, and learning what makes a product page convert or fail.',
      objectives: [
        'Put the steps of setting up an online store in a workable order.',
        'Build a real product page on a hosted platform.',
        'Identify what a confusing product page is failing to answer.',
        'Choose between a commerce platform and a general site builder for a given business.',
        'Explain why hand-building a checkout is rarely the right call.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'This is the module where being a developer works against you. You can build a store. The question is whether you should, and for anything involving payments, tax and fraud the answer is almost always no — not because it is hard to write, but because it is expensive to keep correct as tax rules, card standards and fraud patterns change underneath you.',
        },
        {
          kind: 'p',
          text: 'Hosted platforms are what they are because someone has to maintain PCI compliance, VAT rates across jurisdictions, and a checkout that works on nine-year-old phones. Renting that is not a compromise, it is the sensible allocation of your attention.',
        },
        {
          kind: 'h',
          text: 'The order the setup goes in',
        },
        {
          kind: 'p',
          text: 'Most first stores are built in the wrong order, and the wrong order is expensive because the theme work gets thrown away when the catalogue turns out not to fit it. Products and payments first; appearance last.',
        },
        {
          kind: 'ol',
          items: [
            'Decide what you are selling and how it is priced — including whether it ships, and where to.',
            'Create the store and add the products, with real descriptions and real images.',
            'Set up payments, tax and shipping, and place a test order end to end.',
            'Write the policy pages — returns, delivery, contact. Missing ones cost sales and, in the EU, are a legal problem.',
            'Then pick and adjust the theme, once you know what the catalogue actually looks like.',
            'Connect the domain, and only then let it be found: analytics on, and the search engines let in.',
          ],
        },
        {
          kind: 'h',
          text: 'What a product page has to answer',
        },
        {
          kind: 'p',
          text: 'A product page is not a description, it is a set of answers to the questions standing between someone and their card. A page that "looks nice" but leaves one of these unanswered will underperform an ugly page that answers all of them.',
        },
        {
          kind: 'ul',
          items: [
            'What is it, in the first line, in the words a customer would use rather than the ones you use internally.',
            'What does it cost, including delivery — a surprise at checkout is the single biggest cause of abandonment.',
            'What do I get exactly: size, format, duration, what is and is not included.',
            'What does it look like, from more than one angle, at a size worth looking at.',
            'Why should I believe you: reviews, a client name, a guarantee, anything that is not your own adjective.',
            'What if it is wrong: returns, support, how to reach a human.',
            'What do I do next — one obvious action, not three competing ones.',
          ],
        },
        {
          kind: 'note',
          label: 'The abandonment test',
          text: 'Open your own product page on a phone, on mobile data, and try to buy something without touching anything you built. Every hesitation you feel is a paragraph you have not written or a field you should delete.',
        },
        {
          kind: 'h',
          text: 'Platform or site builder',
        },
        {
          kind: 'p',
          text: 'Shopify is a commerce platform with a website attached. Wix is a website builder with commerce attached. The distinction decides the choice: if the catalogue, inventory, variants and shipping rules are the complicated part, you want the commerce platform. If you are selling three things beside a portfolio and the site is the point, the builder is less machinery to carry.',
        },
      ],
      lessons: [
        {
          id: 'shopify',
          tool: 'shopify',
          title: 'Build One Product Page That Could Take Money',
          what: [
            {
              kind: 'p',
              text: 'Shopify is the default platform for selling online: catalogue, variants, inventory, checkout, payments, tax and shipping, with a theme system on top.',
            },
            {
              kind: 'p',
              text: 'You are not here for the theme. You are here to see how much of the work is in the parts that are not visible — the variant that changes the price, the shipping rule that only applies outside the country, the tax setting that is wrong until you set it.',
            },
          ],
          why: 'Building a product page in a real commerce platform shows you the fields a serious store needs. Even if you never sell on Shopify, that field list is the specification for any store you build or review afterwards.',
          mission:
            'Start a Shopify free trial and build one mock product page for a digital product you would actually sell — a template, a component library, a small tool. Fill in every field: title, description, images, price, variants.',
          missionUrl: 'https://www.shopify.com/free-trial',
          missionCta: 'Start the Shopify trial',
          check: {
            kind: 'reflect',
            id: 'm6-shopify-reflect',
            prompt:
              'What price did you set, and why? Then check your page against the seven questions from the lesson and name the one it answers worst.',
            hint: 'If the price came from "what feels reasonable", say so — that is the honest answer and it is worth noticing.',
          },
        },
        {
          id: 'wix',
          tool: 'wix',
          title: 'Spend Five Minutes in a Drag-and-Drop Editor',
          what: [
            {
              kind: 'p',
              text: 'Wix is a website builder where you position elements directly on a canvas. It has commerce features, but its centre of gravity is the site rather than the catalogue.',
            },
            {
              kind: 'p',
              text: 'For a developer it is a strange experience: enormously fast for the first screen, and increasingly awkward as you ask for things a canvas does not model well — consistent components, responsive rules, anything repeated across pages.',
            },
          ],
          why: 'Knowing what these builders are genuinely good at tells you when to recommend one instead of quoting for a build. A client who needs four pages and will edit them weekly is often better served by Wix than by anything you would write, and saying so builds more trust than taking the job.',
          mission:
            'Start a free Wix site and spend five minutes with the drag-and-drop editor on a sample page. Try to change something structural — not just text — and notice where it fights you.',
          missionUrl: 'https://www.wix.com/',
          missionCta: 'Open Wix',
          check: {
            kind: 'reflect',
            id: 'm6-wix-reflect',
            prompt:
              'Did Wix feel easier or harder than coding your own site by hand? Name one thing it did faster than you could, and one thing that would drive you out of it.',
          },
        },
      ],
      quiz: [
        {
          kind: 'order',
          id: 'm6-setup-order',
          prompt: 'Put the store setup steps in a sensible order.',
          steps: [
            'Decide what you sell, how it is priced, and whether it ships',
            'Add the products with real descriptions and images',
            'Configure payments, tax and shipping, then place a test order',
            'Write the returns, delivery and contact pages',
            'Choose and adjust the theme',
            'Connect the domain, turn on analytics and let search engines in',
          ],
          explain:
            'Theme work comes late because it is the thing most likely to be thrown away. You cannot design a catalogue page before you know what is in the catalogue, and you should never be findable before a test order has gone through.',
        },
        {
          kind: 'choice',
          id: 'm6-scenario-confusing',
          prompt:
            'A product page gets plenty of visitors and almost no sales. The design is clean, the photos are good, and the delivery cost only appears at checkout. What is the most likely problem?',
          options: [
            'The total cost is a surprise at the last step, which is the biggest single cause of abandonment',
            'The photographs need to be larger',
            'There is not enough copy on the page',
            'The theme colours are wrong for the product',
          ],
          answer: 0,
          explain:
            'A cost that appears only at checkout breaks the decision someone had already made. Put delivery cost on the product page even when it is bad news — people abandon over the surprise far more than over the amount.',
        },
        {
          kind: 'choice',
          id: 'm6-platform-choice',
          prompt:
            'A client sells two hundred products with sizes and colours, ships across the EU, and needs stock to stay accurate. What do you recommend?',
          options: [
            'A commerce platform like Shopify — variants, inventory and shipping rules are the hard part here',
            'A site builder like Wix, because the site design matters most',
            'A hand-built static site with a payment link per product',
            'A single page listing everything with an email address to order',
          ],
          answer: 0,
          explain:
            'When the catalogue, variants, stock and cross-border shipping are the complicated part, that is exactly what a commerce platform exists to manage. A builder or a static site would put that burden back on the client.',
        },
        {
          kind: 'choice',
          id: 'm6-tf-checkout',
          prompt:
            'True or false: for most small businesses, writing your own checkout is a reasonable way to save on platform fees.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. The cost is not writing it, it is keeping it correct: PCI compliance, changing VAT rules, fraud patterns and payment methods that appear and vanish. The fee is buying continuous maintenance you would otherwise owe forever.',
        },
        {
          kind: 'multi',
          id: 'm6-product-page',
          prompt:
            'Which of these must a product page answer before someone will buy?',
          options: [
            'The full cost including delivery',
            'What exactly is included',
            'What happens if it is wrong',
            'How long the company has existed',
          ],
          answers: [0, 1, 2],
          explain:
            'Cost, contents and recourse are the three that block a purchase when missing. Company history is reassurance, not a blocker — useful if you have it, but nobody abandoned a cart over its absence.',
        },
        {
          kind: 'reflect',
          id: 'm6-reflect-own',
          prompt:
            'Take the mock product you built. If you had to launch it for real next Monday, what is still missing — and is any of it a legal requirement rather than a nice-to-have?',
          hint: 'Returns policy, delivery terms and a real contact route are legal requirements for consumer sales in the EU, not optional pages.',
        },
      ],
      recap: [
        'Renting a commerce platform buys continuous compliance and maintenance, which is why hand-building a checkout is usually the wrong call.',
        'Set up in order: products and payments first, a test order before anything is public, theme work last.',
        'A product page is a set of answers — what it is, what it costs in total, what you get, what it looks like, why to believe you, what if it is wrong, what to do next.',
        'Surprise delivery costs at checkout abandon more carts than high delivery costs shown early.',
        'Shopify is commerce with a site attached; Wix is a site with commerce attached. Pick by which part is complicated.',
      ],
    },

    nl: {
      title: 'Open de winkel',
      subtitle:
        'Wat een productpagina moet beantwoorden, in welke volgorde het opzetten echt gaat, en waarom een developer die zelf een winkel bouwt meestal een fout maakt.',
      abstract:
        'Een werkende winkel bouwen op Shopify, vergelijken met Wix, en leren wat een productpagina laat converteren of falen.',
      objectives: [
        'De stappen van het opzetten van een webwinkel in een werkbare volgorde zetten.',
        'Een echte productpagina bouwen op een gehost platform.',
        'Vaststellen wat een verwarrende productpagina niet beantwoordt.',
        'Kiezen tussen een commerceplatform en een algemene websitebouwer voor een bepaald bedrijf.',
        'Uitleggen waarom zelf een checkout bouwen zelden de juiste keuze is.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Dit is de module waarin developer zijn tegen je werkt. Je kunt een winkel bouwen. De vraag is of je dat moet doen, en voor alles met betalingen, belasting en fraude is het antwoord vrijwel altijd nee — niet omdat het moeilijk te schrijven is, maar omdat het duur is om het correct te hóúden terwijl belastingregels, kaartstandaarden en fraudepatronen onder je vandaan veranderen.',
        },
        {
          kind: 'p',
          text: 'Gehoste platforms zijn wat ze zijn omdat iemand PCI-compliance, btw-tarieven per rechtsgebied en een checkout die het op negen jaar oude telefoons doet moet onderhouden. Dat huren is geen compromis, het is een verstandige verdeling van je aandacht.',
        },
        {
          kind: 'h',
          text: 'De volgorde waarin het opzetten gaat',
        },
        {
          kind: 'p',
          text: 'De meeste eerste winkels worden in de verkeerde volgorde gebouwd, en die verkeerde volgorde is duur omdat het themawerk weggegooid wordt zodra blijkt dat de catalogus er niet in past. Eerst producten en betalingen; uiterlijk als laatste.',
        },
        {
          kind: 'ol',
          items: [
            'Bepaal wat je verkoopt en hoe het geprijsd is — inclusief of het verzonden wordt, en waarheen.',
            'Maak de winkel aan en voeg de producten toe, met echte omschrijvingen en echte afbeeldingen.',
            'Zet betalingen, belasting en verzending op, en plaats van begin tot eind een testbestelling.',
            'Schrijf de beleidspagina’s — retourneren, levering, contact. Ontbreken ze, dan kost dat verkopen en in de EU is het een juridisch probleem.',
            'Kies en pas dan pas het thema aan, als je weet hoe de catalogus er werkelijk uitziet.',
            'Koppel het domein, en laat het pas dán vinden: analytics aan en de zoekmachines toegelaten.',
          ],
        },
        {
          kind: 'h',
          text: 'Wat een productpagina moet beantwoorden',
        },
        {
          kind: 'p',
          text: 'Een productpagina is geen beschrijving, het is een set antwoorden op de vragen die tussen iemand en hun betaalkaart staan. Een pagina die "er mooi uitziet" maar er één onbeantwoord laat, presteert slechter dan een lelijke pagina die ze allemaal beantwoordt.',
        },
        {
          kind: 'ul',
          items: [
            'Wat is het, in de eerste regel, in de woorden die een klant zou gebruiken en niet die van jullie intern.',
            'Wat kost het, inclusief bezorging — een verrassing bij de checkout is verreweg de grootste oorzaak van afhaken.',
            'Wat krijg ik precies: maat, formaat, duur, wat er wel en niet bij zit.',
            'Hoe ziet het eruit, vanuit meer dan één hoek, op een formaat dat het bekijken waard is.',
            'Waarom zou ik je geloven: recensies, een klantnaam, een garantie, iets anders dan je eigen bijvoeglijk naamwoord.',
            'Wat als het niet klopt: retourneren, support, hoe je een mens bereikt.',
            'Wat doe ik nu — één duidelijke actie, niet drie die om aandacht vechten.',
          ],
        },
        {
          kind: 'note',
          label: 'De afhaaktoets',
          text: 'Open je eigen productpagina op een telefoon, op mobiele data, en probeer iets te kopen zonder iets aan te raken dat je zelf bouwde. Elke aarzeling die je voelt is een alinea die je niet schreef of een veld dat je zou moeten schrappen.',
        },
        {
          kind: 'h',
          text: 'Platform of websitebouwer',
        },
        {
          kind: 'p',
          text: 'Shopify is een commerceplatform met een website eraan vast. Wix is een websitebouwer met commerce eraan vast. Dat onderscheid bepaalt de keuze: zijn de catalogus, voorraad, varianten en verzendregels het ingewikkelde deel, dan wil je het commerceplatform. Verkoop je drie dingen naast een portfolio en gaat het om de site, dan is de bouwer minder machinerie om mee te zeulen.',
        },
      ],
      lessons: [
        {
          id: 'shopify',
          tool: 'shopify',
          title: 'Bouw één productpagina die geld zou kunnen aannemen',
          what: [
            {
              kind: 'p',
              text: 'Shopify is het standaardplatform om online te verkopen: catalogus, varianten, voorraad, checkout, betalingen, belasting en verzending, met een themasysteem erbovenop.',
            },
            {
              kind: 'p',
              text: 'Je bent hier niet voor het thema. Je bent hier om te zien hoeveel van het werk zit in de delen die je niet ziet — de variant die de prijs verandert, de verzendregel die alleen buiten het land geldt, de belastinginstelling die fout is tot je hem zet.',
            },
          ],
          why: 'Een productpagina bouwen in een echt commerceplatform laat je zien welke velden een serieuze winkel nodig heeft. Ook als je nooit op Shopify verkoopt, is dat lijstje de specificatie voor elke winkel die je daarna bouwt of beoordeelt.',
          mission:
            'Start een gratis Shopify-proefperiode en bouw één fictieve productpagina voor een digitaal product dat je echt zou verkopen — een template, een componentenbibliotheek, een klein tool. Vul elk veld in: titel, omschrijving, afbeeldingen, prijs, varianten.',
          missionUrl: 'https://www.shopify.com/free-trial',
          missionCta: 'Start de Shopify-proef',
          check: {
            kind: 'reflect',
            id: 'm6-shopify-reflect',
            prompt:
              'Welke prijs zette je, en waarom? Leg je pagina daarna langs de zeven vragen uit de les en benoem welke hij het slechtst beantwoordt.',
            hint: 'Kwam de prijs uit "wat redelijk voelt", schrijf dat dan op — dat is het eerlijke antwoord en het is het opmerken waard.',
          },
        },
        {
          id: 'wix',
          tool: 'wix',
          title: 'Breng vijf minuten door in een drag-and-drop editor',
          what: [
            {
              kind: 'p',
              text: 'Wix is een websitebouwer waarin je elementen rechtstreeks op een canvas plaatst. Er zitten commercefuncties in, maar het zwaartepunt ligt bij de site, niet bij de catalogus.',
            },
            {
              kind: 'p',
              text: 'Voor een developer is het een vreemde ervaring: enorm snel voor het eerste scherm, en steeds onhandiger zodra je dingen vraagt die een canvas slecht modelleert — consistente componenten, responsieve regels, alles wat over pagina’s heen herhaald wordt.',
            },
          ],
          why: 'Weten waar deze bouwers echt goed in zijn, vertelt je wanneer je er één aanraadt in plaats van een offerte te maken. Een klant die vier pagina’s nodig heeft en die wekelijks wil bewerken is vaak beter af met Wix dan met wat jij zou schrijven, en dat zeggen wekt meer vertrouwen dan de opdracht aannemen.',
          mission:
            'Start een gratis Wix-site en breng vijf minuten door met de drag-and-drop editor op een voorbeeldpagina. Probeer iets structureels te veranderen — niet alleen tekst — en let op waar hij je tegenwerkt.',
          missionUrl: 'https://www.wix.com/',
          missionCta: 'Open Wix',
          check: {
            kind: 'reflect',
            id: 'm6-wix-reflect',
            prompt:
              'Voelde Wix makkelijker of moeilijker dan je site met de hand coderen? Noem één ding dat sneller ging dan jij het kon, en één ding dat je eruit zou jagen.',
          },
        },
      ],
      quiz: [
        {
          kind: 'order',
          id: 'm6-setup-order',
          prompt: 'Zet de stappen voor het opzetten van een winkel in een zinnige volgorde.',
          steps: [
            'Bepaal wat je verkoopt, hoe het geprijsd is en of het verzonden wordt',
            'Voeg de producten toe met echte omschrijvingen en afbeeldingen',
            'Stel betalingen, belasting en verzending in en plaats een testbestelling',
            'Schrijf de pagina’s over retourneren, levering en contact',
            'Kies en pas het thema aan',
            'Koppel het domein, zet analytics aan en laat zoekmachines toe',
          ],
          explain:
            'Themawerk komt laat omdat het het meest waarschijnlijk wordt weggegooid. Je kunt geen cataloguspagina ontwerpen voordat je weet wat erin zit, en je moet nooit vindbaar zijn voordat er een testbestelling doorheen is.',
        },
        {
          kind: 'choice',
          id: 'm6-scenario-confusing',
          prompt:
            'Een productpagina krijgt genoeg bezoekers en bijna geen verkopen. Het ontwerp is strak, de foto’s zijn goed, en de bezorgkosten verschijnen pas bij de checkout. Wat is het waarschijnlijkste probleem?',
          options: [
            'De totaalprijs is een verrassing bij de laatste stap, de grootste oorzaak van afhaken',
            'De foto’s moeten groter',
            'Er staat te weinig tekst op de pagina',
            'De themakleuren passen niet bij het product',
          ],
          answer: 0,
          explain:
            'Een bedrag dat pas bij de checkout verschijnt breekt een beslissing die iemand al had genomen. Zet bezorgkosten op de productpagina, ook als het slecht nieuws is — mensen haken veel vaker af op de verrassing dan op het bedrag.',
        },
        {
          kind: 'choice',
          id: 'm6-platform-choice',
          prompt:
            'Een klant verkoopt tweehonderd producten met maten en kleuren, verzendt door de hele EU, en de voorraad moet kloppen. Wat adviseer je?',
          options: [
            'Een commerceplatform als Shopify — varianten, voorraad en verzendregels zijn hier het moeilijke deel',
            'Een sitebouwer als Wix, omdat het siteontwerp het zwaarst weegt',
            'Een handgebouwde statische site met een betaallink per product',
            'Eén pagina met alles erop en een e-mailadres om te bestellen',
          ],
          answer: 0,
          explain:
            'Als catalogus, varianten, voorraad en grensoverschrijdende verzending het ingewikkelde deel zijn, is dat precies waarvoor een commerceplatform bestaat. Een bouwer of statische site legt die last terug bij de klant.',
        },
        {
          kind: 'choice',
          id: 'm6-tf-checkout',
          prompt:
            'Waar of niet waar: voor de meeste kleine bedrijven is zelf een checkout schrijven een redelijke manier om platformkosten te besparen.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. De kosten zitten niet in het schrijven maar in het correct hóúden: PCI-compliance, veranderende btw-regels, fraudepatronen en betaalmethodes die opkomen en verdwijnen. De fee koopt doorlopend onderhoud dat je anders eeuwig zelf schuldig bent.',
        },
        {
          kind: 'multi',
          id: 'm6-product-page',
          prompt:
            'Welke hiervan moet een productpagina beantwoorden voordat iemand koopt?',
          options: [
            'De totaalprijs inclusief bezorging',
            'Wat er precies bij zit',
            'Wat er gebeurt als het niet klopt',
            'Hoe lang het bedrijf al bestaat',
          ],
          answers: [0, 1, 2],
          explain:
            'Prijs, inhoud en verhaal bij problemen zijn de drie die een aankoop blokkeren als ze ontbreken. Bedrijfsgeschiedenis is geruststelling, geen blokkade — fijn als je het hebt, maar niemand liet er een winkelwagen om staan.',
        },
        {
          kind: 'reflect',
          id: 'm6-reflect-own',
          prompt:
            'Neem het fictieve product dat je bouwde. Als je het maandag echt zou moeten lanceren, wat ontbreekt er dan nog — en is daar iets bij dat een wettelijke eis is in plaats van een luxe?',
          hint: 'Retourbeleid, leveringsvoorwaarden en een echte contactroute zijn wettelijke eisen bij consumentenverkoop in de EU, geen optionele pagina’s.',
        },
      ],
      recap: [
        'Een commerceplatform huren koopt doorlopende compliance en onderhoud, en daarom is zelf een checkout bouwen meestal de verkeerde keuze.',
        'Zet op in volgorde: eerst producten en betalingen, een testbestelling voor er iets publiek is, themawerk als laatste.',
        'Een productpagina is een set antwoorden — wat het is, wat het totaal kost, wat je krijgt, hoe het eruitziet, waarom je te geloven bent, wat als het misgaat, wat je nu doet.',
        'Onverwachte bezorgkosten bij de checkout laten meer winkelwagens staan dan hoge bezorgkosten die je vroeg toont.',
        'Shopify is commerce met een site eraan; Wix is een site met commerce eraan. Kies op basis van welk deel ingewikkeld is.',
      ],
    },
  },
};

export default module06;
