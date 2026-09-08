import type { GlossaryEntry } from '@/lib/types';

/** Every term the course introduces, with the module it first appears in. */
export const GLOSSARY: GlossaryEntry[] = [
  {
    id: 'digital-marketing',
    module: 1,
    term: { en: 'Digital marketing', nl: 'Digitale marketing' },
    definition: {
      en: 'Everything done to earn attention and interest through a screen — search, ads, email, social, video and your own pages. Its output is an interested person.',
      nl: 'Alles wat je doet om via een scherm aandacht en interesse te verdienen — zoeken, advertenties, e-mail, social, video en je eigen pagina’s. De uitkomst is een geïnteresseerde.',
    },
  },
  {
    id: 'ecommerce',
    module: 1,
    term: { en: 'E-commerce', nl: 'E-commerce' },
    definition: {
      en: 'The machinery of selling online: product page, cart, checkout, payment, confirmation and returns. Its output is a completed transaction.',
      nl: 'De machinerie van online verkopen: productpagina, winkelwagen, checkout, betaling, bevestiging en retouren. De uitkomst is een afgeronde transactie.',
    },
  },
  {
    id: 'funnel',
    module: 1,
    term: { en: 'Marketing funnel', nl: 'Marketingfunnel' },
    definition: {
      en: 'A model of how strangers become customers, in four stages — awareness, consideration, conversion, loyalty — each with a different question in the customer’s head.',
      nl: 'Een model van hoe vreemden klanten worden, in vier fasen — bekendheid, overweging, conversie, loyaliteit — met in elke fase een andere vraag bij de klant.',
    },
  },
  {
    id: 'awareness',
    module: 1,
    term: { en: 'Awareness', nl: 'Awareness (bekendheid)' },
    definition: {
      en: 'The funnel stage where the person does not know you exist. Their question is "does this exist?" and your job is to be found or noticed.',
      nl: 'De funnelfase waarin iemand niet weet dat je bestaat. Hun vraag is "bestaat dit?" en jouw taak is gevonden of opgemerkt worden.',
    },
  },
  {
    id: 'consideration',
    module: 1,
    term: { en: 'Consideration', nl: 'Consideration (overweging)' },
    definition: {
      en: 'The funnel stage where someone is comparing options. Their question is "is this for me?" and your job is evidence rather than persuasion.',
      nl: 'De funnelfase waarin iemand opties vergelijkt. Hun vraag is "is dit iets voor mij?" en jouw taak is bewijs, geen overreding.',
    },
  },
  {
    id: 'conversion',
    module: 1,
    term: { en: 'Conversion', nl: 'Conversie' },
    definition: {
      en: 'Both a funnel stage and an event: the moment an interested person does the thing you wanted — buys, books, or sends the form.',
      nl: 'Zowel een funnelfase als een gebeurtenis: het moment waarop een geïnteresseerde doet wat je wilde — koopt, boekt of het formulier verstuurt.',
    },
  },
  {
    id: 'loyalty',
    module: 1,
    term: { en: 'Loyalty', nl: 'Loyaliteit' },
    definition: {
      en: 'The stage after the first purchase, where the question is "am I doing this again?". Cheaper than acquisition because the finding is already paid for.',
      nl: 'De fase na de eerste aankoop, waar de vraag is "doe ik dit nog een keer?". Goedkoper dan acquisitie omdat het zoeken al betaald is.',
    },
  },
  {
    id: 'customer-lifecycle',
    module: 1,
    term: { en: 'Customer lifecycle', nl: 'Klantlevenscyclus' },
    definition: {
      en: 'Reach, acquisition, conversion, retention, advocacy. Unlike the funnel it does not end at the transaction.',
      nl: 'Bereik, acquisitie, conversie, retentie, ambassadeurschap. Anders dan de funnel eindigt hij niet bij de transactie.',
    },
  },
  {
    id: 'retention',
    module: 1,
    term: { en: 'Retention', nl: 'Retentie' },
    definition: {
      en: 'Everything that makes the second purchase happen — the product working, the useful follow-up, the reminder that arrives in time.',
      nl: 'Alles waardoor de tweede aankoop gebeurt — een werkend product, nuttige opvolging, de herinnering die op tijd komt.',
    },
  },
  {
    id: 'advocacy',
    module: 1,
    term: { en: 'Advocacy', nl: 'Ambassadeurschap' },
    definition: {
      en: 'When a customer brings you someone else. The only channel that gets cheaper as it grows.',
      nl: 'Wanneer een klant iemand anders meebrengt. Het enige kanaal dat goedkoper wordt naarmate het groeit.',
    },
  },

  {
    id: 'seo',
    module: 2,
    term: { en: 'SEO', nl: 'SEO' },
    definition: {
      en: 'Search engine optimisation: making your site the best available answer to a real question, and easy for a crawler to understand. Splits into technical, on-page and off-page.',
      nl: 'Zoekmachineoptimalisatie: je site het beste beschikbare antwoord op een echte vraag maken, en begrijpelijk voor een crawler. Valt uiteen in technisch, on-page en off-page.',
    },
  },
  {
    id: 'sem',
    module: 2,
    term: { en: 'SEM', nl: 'SEM' },
    definition: {
      en: 'Search engine marketing — paid search. Instant, measurable to the cent, and it stops the moment you stop paying.',
      nl: 'Search engine marketing — betaald zoeken. Direct, tot op de cent meetbaar, en het stopt zodra je stopt met betalen.',
    },
  },
  {
    id: 'search-volume',
    module: 2,
    term: { en: 'Search volume', nl: 'Zoekvolume' },
    definition: {
      en: 'Roughly how many people search a term each month. Tells you how many are asking, not whether you can be the answer.',
      nl: 'Ruwweg hoeveel mensen een term per maand zoeken. Zegt hoeveel er vragen, niet of jij het antwoord kunt zijn.',
    },
  },
  {
    id: 'keyword-difficulty',
    module: 2,
    term: { en: 'Keyword difficulty', nl: 'Zoekwoordmoeilijkheid' },
    definition: {
      en: 'A proxy for how many well-linked pages already answer a query. The number that stops you writing a page that could never reach page one.',
      nl: 'Een maat voor hoeveel goed gelinkte pagina’s een vraag al beantwoorden. Het getal dat voorkomt dat je een pagina schrijft die pagina één nooit haalt.',
    },
  },
  {
    id: 'backlink',
    module: 2,
    term: { en: 'Backlink', nl: 'Backlink' },
    definition: {
      en: 'A link from another site to yours, treated by search engines as someone vouching for you. Relevance and credibility beat volume.',
      nl: 'Een link van een andere site naar de jouwe, door zoekmachines gezien als iemand die voor je instaat. Relevantie en geloofwaardigheid verslaan aantallen.',
    },
  },
  {
    id: 'cpc',
    module: 2,
    term: { en: 'Cost per click (CPC)', nl: 'Kosten per klik (CPC)' },
    definition: {
      en: 'What an advertiser pays for one click on a term. Useful even if you never advertise: it is the market pricing a visitor for that query.',
      nl: 'Wat een adverteerder betaalt voor één klik op een term. Nuttig ook als je nooit adverteert: het is de markt die een bezoeker voor die zoekopdracht prijst.',
    },
  },
  {
    id: 'title-tag',
    module: 2,
    term: { en: 'Title tag', nl: 'Title tag' },
    definition: {
      en: 'The page title search engines show in results. On-page work, not technical — and the usual cause of high impressions with no clicks.',
      nl: 'De paginatitel die zoekmachines in de resultaten tonen. On-page werk, niet technisch — en de gebruikelijke oorzaak van veel vertoningen zonder klikken.',
    },
  },
  {
    id: 'canonical',
    module: 2,
    term: { en: 'Canonical URL', nl: 'Canonieke URL' },
    definition: {
      en: 'The one address you declare as authoritative when the same content is reachable at several URLs. A technical SEO concern.',
      nl: 'Het ene adres dat je als gezaghebbend aanwijst wanneer dezelfde inhoud op meerdere URL’s bereikbaar is. Een technische SEO-kwestie.',
    },
  },

  {
    id: 'deliverability',
    module: 3,
    term: { en: 'Deliverability', nl: 'Afleverbaarheid' },
    definition: {
      en: 'Whether your email reaches the inbox at all. Governed by authentication records, sending reputation and list quality — and no subject line fixes it.',
      nl: 'Of je mail de inbox überhaupt haalt. Bepaald door authenticatierecords, verzendreputatie en lijstkwaliteit — en geen onderwerpregel repareert het.',
    },
  },
  {
    id: 'spf-dkim-dmarc',
    module: 3,
    term: { en: 'SPF, DKIM, DMARC', nl: 'SPF, DKIM, DMARC' },
    definition: {
      en: 'DNS records that prove mail claiming to be from your domain really is. Missing them is a direct cause of landing in spam.',
      nl: 'DNS-records die bewijzen dat mail die zegt van jouw domein te komen dat ook echt is. Ontbreken ze, dan beland je rechtstreeks in spam.',
    },
  },
  {
    id: 'open-rate',
    module: 3,
    term: { en: 'Open rate', nl: 'Openingsratio' },
    definition: {
      en: 'The share of recipients recorded as opening an email. Inflated by privacy features that pre-load images, so treat it as a trend and judge on clicks.',
      nl: 'Het aandeel ontvangers dat als opener wordt geregistreerd. Opgeblazen door privacyfuncties die afbeeldingen vooraf laden, dus behandel het als trend en oordeel op klikken.',
    },
  },
  {
    id: 'preview-text',
    module: 3,
    term: { en: 'Preview text', nl: 'Previewtekst' },
    definition: {
      en: 'The line shown beside the subject in an inbox. A second headline you control, and one most senders waste.',
      nl: 'De regel die naast het onderwerp in een inbox staat. Een tweede kop die jij bepaalt, en die de meeste afzenders verspillen.',
    },
  },
  {
    id: 'abandoned-cart',
    module: 3,
    term: { en: 'Abandoned cart email', nl: 'Verlaten-winkelwagenmail' },
    definition: {
      en: 'A reminder triggered when someone leaves items unbought. The highest-return automation in e-commerce.',
      nl: 'Een herinnering die afgaat als iemand artikelen ongekocht laat staan. De automatisering met het hoogste rendement in e-commerce.',
    },
  },
  {
    id: 'flow',
    module: 3,
    term: { en: 'Flow (automation)', nl: 'Flow (automatisering)' },
    definition: {
      en: 'A sequence of messages triggered by what someone did or did not do, branching on their response. The difference between a mailing list and a system.',
      nl: 'Een reeks berichten die wordt getriggerd door wat iemand deed of naliet, vertakkend op hun reactie. Het verschil tussen een mailinglijst en een systeem.',
    },
  },

  {
    id: 'contrast',
    module: 4,
    term: { en: 'Contrast', nl: 'Contrast' },
    definition: {
      en: 'Difference big enough to register — in size, weight, colour or space. An accessibility requirement, not a taste preference.',
      nl: 'Verschil dat groot genoeg is om te registreren — in grootte, gewicht, kleur of ruimte. Een toegankelijkheidseis, geen smaakkwestie.',
    },
  },
  {
    id: 'hierarchy',
    module: 4,
    term: { en: 'Visual hierarchy', nl: 'Visuele hiërarchie' },
    definition: {
      en: 'The order in which a viewer takes things in. Exactly one element should arrive first; the one-second test tells you whether it does.',
      nl: 'De volgorde waarin een kijker dingen opneemt. Precies één element hoort als eerste binnen te komen; de één-secondetoets zegt of dat lukt.',
    },
  },
  {
    id: 'whitespace',
    module: 4,
    term: { en: 'Whitespace', nl: 'Witruimte' },
    definition: {
      en: 'Unfilled area. Space around an element makes it look deliberate; space between groups shows what belongs together.',
      nl: 'Onbenut vlak. Ruimte rond een element laat het doelbewust lijken; ruimte tussen groepen toont wat bij elkaar hoort.',
    },
  },

  {
    id: 'crm',
    module: 5,
    term: { en: 'CRM', nl: 'CRM' },
    definition: {
      en: 'Customer relationship management: a record of every person connected to your business and everything that has passed between you. Memory you cannot lose.',
      nl: 'Customer relationship management: een register van iedereen die met je bedrijf te maken heeft en alles wat er tussen jullie is gepasseerd. Geheugen dat je niet kwijtraakt.',
    },
  },
  {
    id: 'lifecycle-stage',
    module: 5,
    term: { en: 'Lifecycle stage', nl: 'Levensfase' },
    definition: {
      en: 'The CRM field recording where a contact stands in the relationship. One of the fields that turns a contact list into a pipeline.',
      nl: 'Het CRM-veld dat vastlegt waar een contact in de relatie staat. Een van de velden die van een contactenlijst een pijplijn maken.',
    },
  },

  {
    id: 'variant',
    module: 6,
    term: { en: 'Variant', nl: 'Variant' },
    definition: {
      en: 'A version of a product differing by size, colour or format, often with its own price and stock. Where most of a catalogue’s complexity lives.',
      nl: 'Een versie van een product die verschilt in maat, kleur of formaat, vaak met eigen prijs en voorraad. Waar de meeste complexiteit van een catalogus zit.',
    },
  },
  {
    id: 'pci',
    module: 6,
    term: { en: 'PCI compliance', nl: 'PCI-compliance' },
    definition: {
      en: 'The security standard governing how card data is handled. A continuing obligation, which is the real reason not to hand-build a checkout.',
      nl: 'De beveiligingsstandaard voor het omgaan met kaartgegevens. Een doorlopende verplichting, en de echte reden om geen eigen checkout te bouwen.',
    },
  },
  {
    id: 'cart-abandonment',
    module: 6,
    term: { en: 'Cart abandonment', nl: 'Winkelwagenverlating' },
    definition: {
      en: 'Leaving without completing a purchase. Most often caused by a total cost that only appears at checkout.',
      nl: 'Vertrekken zonder de aankoop af te ronden. Meestal veroorzaakt door een totaalprijs die pas bij de checkout verschijnt.',
    },
  },

  {
    id: 'event',
    module: 7,
    term: { en: 'Event', nl: 'Event' },
    definition: {
      en: 'The unit GA4 records everything in: a page view, click, scroll or purchase, with parameters attached.',
      nl: 'De eenheid waarin GA4 alles vastlegt: een paginaweergave, klik, scroll of aankoop, met parameters erbij.',
    },
  },
  {
    id: 'key-event',
    module: 7,
    term: { en: 'Key event', nl: 'Key event' },
    definition: {
      en: 'An event you have marked as meaning something happened — a form sent, a purchase, a booking. What GA4 calls a conversion.',
      nl: 'Een event dat je hebt aangemerkt als betekenisvol — een verzonden formulier, een aankoop, een reservering. Wat GA4 een conversie noemt.',
    },
  },
  {
    id: 'engagement-rate',
    module: 7,
    term: { en: 'Engagement rate', nl: 'Betrokkenheidspercentage' },
    definition: {
      en: 'The share of sessions that lasted, scrolled or converted. Replaced bounce rate, which measured the opposite and was routinely misread.',
      nl: 'Het aandeel sessies dat duurde, scrollde of converteerde. Verving het bouncepercentage, dat het omgekeerde mat en stelselmatig verkeerd werd gelezen.',
    },
  },
  {
    id: 'direct-traffic',
    module: 7,
    term: { en: 'Direct traffic', nl: 'Direct verkeer' },
    definition: {
      en: 'The bucket for visits with no referrer — mail clients, PDFs, messaging apps, privacy-stripped referrers. Rarely people typing your address.',
      nl: 'De bak voor bezoeken zonder verwijzer — mailclients, pdf’s, chat-apps, om privacyredenen gestripte verwijzers. Zelden mensen die je adres intypen.',
    },
  },

  {
    id: 'nps',
    module: 8,
    term: { en: 'Net Promoter Score (NPS)', nl: 'Net Promoter Score (NPS)' },
    definition: {
      en: '"How likely are you to recommend us." Easy to compare, easy to game, and a single number that hides the reason.',
      nl: '"Hoe waarschijnlijk beveel je ons aan." Makkelijk te vergelijken, makkelijk te bespelen, en één getal dat de reden verbergt.',
    },
  },
  {
    id: 'churn',
    module: 8,
    term: { en: 'Churn', nl: 'Verloop (churn)' },
    definition: {
      en: 'The share of customers who leave in a period. The clearest satisfaction signal, arriving after it is too late to act on that customer.',
      nl: 'Het aandeel klanten dat in een periode vertrekt. Het duidelijkste tevredenheidssignaal, en het komt aan als het voor die klant te laat is.',
    },
  },

  {
    id: 'cta',
    module: 9,
    term: { en: 'Call-to-action (CTA)', nl: 'Call-to-action (CTA)' },
    definition: {
      en: 'The instruction to do the next thing. Works when it describes the reader’s next moment rather than your system — "Get the quote", not "Submit".',
      nl: 'De aansporing tot de volgende stap. Werkt als hij het volgende moment van de lezer beschrijft in plaats van jouw systeem — "Ontvang de offerte", niet "Verzenden".',
    },
  },
  {
    id: 'voice-tone',
    module: 9,
    term: { en: 'Voice and tone', nl: 'Stem en toon' },
    definition: {
      en: 'Voice is how you always sound and should not change; tone is the register for a particular moment and moves by channel.',
      nl: 'Stem is hoe je altijd klinkt en hoort niet te veranderen; toon is het register voor een bepaald moment en beweegt per kanaal.',
    },
  },
  {
    id: 'swap-test',
    module: 9,
    term: { en: 'The swap test', nl: 'De verwisseltoets' },
    definition: {
      en: 'Put a competitor’s name in your headline. If it still reads well, you wrote a category label rather than a headline.',
      nl: 'Zet de naam van een concurrent in je kop. Leest hij nog steeds prima, dan schreef je een categorielabel in plaats van een kop.',
    },
  },

  {
    id: 'content-strategy',
    module: 10,
    term: { en: 'Content strategy', nl: 'Contentstrategie' },
    definition: {
      en: 'The decisions made before creating: who it is for, what they need to know, what you will publish, where, how often, and how you will judge it. Fits on one page.',
      nl: 'De beslissingen die je vóór het maken neemt: voor wie, wat ze moeten weten, wat je publiceert, waar, hoe vaak, en hoe je het beoordeelt. Past op één pagina.',
    },
  },
  {
    id: 'repurposing',
    module: 10,
    term: { en: 'Repurposing', nl: 'Hergebruik' },
    definition: {
      en: 'Recognising the separate ideas inside one substantial piece and publishing each in the format that suits it. Not the same as reposting.',
      nl: 'De losse ideeën in één stevig stuk herkennen en elk publiceren in het formaat dat erbij past. Niet hetzelfde als herplaatsen.',
    },
  },
  {
    id: 'meta-description',
    module: 10,
    term: { en: 'Meta description', nl: 'Meta description' },
    definition: {
      en: 'The summary shown under a result in search. Treat it as the advertisement for the page — a promise, not a synopsis.',
      nl: 'De samenvatting onder een zoekresultaat. Behandel het als de advertentie voor de pagina — een belofte, geen synopsis.',
    },
  },

  {
    id: 'affiliate',
    module: 11,
    term: { en: 'Affiliate arrangement', nl: 'Affiliateafspraak' },
    definition: {
      en: 'A partner paid a share of what they actually sell, tracked by link or code. You pay for results, so the risk sits with them.',
      nl: 'Een partner die een deel krijgt van wat hij daadwerkelijk verkoopt, gemeten via link of code. Je betaalt voor resultaat, dus het risico ligt bij hen.',
    },
  },
  {
    id: 'cookie-window',
    module: 11,
    term: { en: 'Cookie window', nl: 'Cookievenster' },
    definition: {
      en: 'How long after a click a sale still counts for the partner. Together with the attribution rule, the clause that causes most affiliate disputes.',
      nl: 'Hoe lang na een klik een verkoop nog voor de partner telt. Samen met de attributieregel de bepaling die de meeste affiliateconflicten veroorzaakt.',
    },
  },
  {
    id: 'micro-influencer',
    module: 11,
    term: { en: 'Micro-influencer', nl: 'Micro-influencer' },
    definition: {
      en: 'Roughly 10,000 to 100,000 followers — credible, affordable, and large enough that one partnership justifies the administration.',
      nl: 'Ruwweg 10.000 tot 100.000 volgers — geloofwaardig, betaalbaar, en groot genoeg dat één samenwerking het papierwerk rechtvaardigt.',
    },
  },
  {
    id: 'disclosure',
    module: 11,
    term: { en: 'Disclosure', nl: 'Vermeldingsplicht' },
    definition: {
      en: 'Labelling paid promotion as paid. A legal requirement in the Netherlands and the EU, and the damage from skipping it lands on the brand.',
      nl: 'Betaalde promotie als betaald aanduiden. Een wettelijke eis in Nederland en de EU, en de schade van het overslaan komt bij het merk terecht.',
    },
  },
];
