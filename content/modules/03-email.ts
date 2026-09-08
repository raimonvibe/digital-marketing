import type { Module } from '@/lib/types';

const module03: Module = {
  slug: 'email',
  number: 3,
  accent: 'ochre',
  minutes: 90,
  content: {
    en: {
      title: 'Write Email People Open',
      subtitle:
        'The only channel you own outright. Three platforms, one welcome email you actually build, and the uncomfortable truth about subject lines.',
      abstract:
        'Email types, deliverability, open rates and automation — comparing Mailchimp, Constant Contact and Klaviyo on their free tiers.',
      objectives: [
        'Explain why an email list is worth more than an equivalent social following.',
        'Choose the right type of email for a given moment in the customer lifecycle.',
        'Build a welcome email in a real platform and defend your subject line.',
        'Compare three email platforms and pick the one that fits your business.',
        'Name the main things that keep email out of the inbox.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Email is the only marketing channel where you own the connection. A social platform can change its algorithm on a Tuesday and halve your reach; a search engine can reshuffle results and you find out from a graph. An email list is a file of addresses that belongs to you and works the same next year.',
        },
        {
          kind: 'p',
          text: 'That ownership is also why it is the channel people most easily ruin. Nobody unfollows a search engine, but they will absolutely unsubscribe from you.',
        },
        {
          kind: 'h',
          text: 'The types of email, and when each earns its place',
        },
        {
          kind: 'ul',
          items: [
            'Welcome — sent immediately after someone signs up, while they still remember why. Consistently the highest-performing email you will ever send, and the one most businesses never set up.',
            'Newsletter — recurring, relationship-building, low direct return per send. Its job is to keep you in mind until the moment someone needs you.',
            'Promotional — a specific offer with a deadline. Effective in small doses; the fastest way to train people to ignore you in large ones.',
            'Transactional — order confirmations, receipts, password resets. Triggered by an action, opened at extraordinary rates, and almost always wasted as a chance to say one more useful thing.',
            'Re-engagement — sent to people who have gone quiet, asking directly whether they still want to hear from you. It shrinks your list, which is the point.',
            'Abandoned cart — a reminder that something is sitting unbought. The single highest-return automation in e-commerce.',
          ],
        },
        {
          kind: 'h',
          text: 'Open rate is a symptom, not a goal',
        },
        {
          kind: 'p',
          text: 'When an open rate falls, the instinct is to rewrite the subject line. Sometimes that is right. More often the problem is upstream, and the order to check things in is: are you reaching the inbox at all, are you sending to people who asked, are you sending at a useful frequency, and only then, is the subject line any good.',
        },
        {
          kind: 'ul',
          items: [
            'Deliverability — authentication records (SPF, DKIM, DMARC), sending from a domain you control, and a clean list. Mail in the spam folder has an open rate of roughly zero and no subject line fixes it.',
            'List quality — addresses that opted in beat addresses you collected. Bought lists poison your sending reputation and take months to recover from.',
            'Frequency and expectation — people who were told "monthly" and get weekly do not open, they unsubscribe.',
            'Sender name — often more predictive than the subject. People open mail from a person they recognise.',
            'The subject line itself — specific and honest beats clever. It is the last thing to tune, not the first.',
          ],
        },
        {
          kind: 'note',
          label: 'On measuring opens at all',
          text: 'Open tracking works by loading a hidden image, and privacy features on Apple Mail and elsewhere now load those images automatically whether or not anyone read the message. Treat open rate as a rough trend, and judge campaigns on clicks and replies.',
        },
        {
          kind: 'h',
          text: 'What makes a subject line work',
        },
        {
          kind: 'p',
          text: 'A good subject line makes a specific promise the email keeps. "Your site went down twice last month — here is why" works because it is concrete, relevant and honest about the contents. "Big news inside!" fails on all three, and the cost of failing is not just this email — it is that the next one gets less benefit of the doubt.',
        },
        {
          kind: 'p',
          text: 'The practical constraints: roughly forty characters survive on a phone, the preview text is a second line you control and most people waste, and anything that reads like a trick reads like spam to a filter as well as to a human.',
        },
      ],
      lessons: [
        {
          id: 'mailchimp',
          tool: 'mailchimp',
          title: 'Build Your First Welcome Email',
          what: [
            {
              kind: 'p',
              text: 'Mailchimp is the default first email platform: generous free tier, a drag-and-drop editor, and enough automation to send a welcome message without paying anything.',
            },
            {
              kind: 'p',
              text: 'Its strength is breadth — landing pages, forms, basic automation and reporting in one place. Its weakness is that the pricing gets steep as your list grows, and the e-commerce automations are shallower than a dedicated tool’s.',
            },
          ],
          why: 'The welcome email is the highest-performing message in most accounts because it arrives while interest is at its peak. Building one end to end teaches you the whole platform: list, form, template, automation, send.',
          mission:
            'Create a free Mailchimp account and build one simple welcome email template — the message someone gets the moment they sign up on your site. Write the subject line yourself rather than accepting the placeholder.',
          missionUrl: 'https://mailchimp.com/pricing/marketing/',
          missionCta: 'Open Mailchimp',
          check: {
            kind: 'reflect',
            id: 'm3-mailchimp-reflect',
            prompt:
              'What subject line did you write, and why? Say what specific promise it makes, and whether the email actually keeps it.',
            hint: 'If you cannot name the promise in one sentence, the subject line is decoration.',
          },
        },
        {
          id: 'constant-contact',
          tool: 'constant-contact',
          title: 'Compare a Second House Style',
          what: [
            {
              kind: 'p',
              text: 'Constant Contact aims squarely at small businesses that do not employ a marketer: fewer options, more hand-holding, templates that assume a shop or a local service rather than a startup.',
            },
            {
              kind: 'p',
              text: 'Comparing template libraries is a fast way to see what a platform believes its customers are. The defaults tell you who the tool is really for.',
            },
          ],
          why: 'Every platform has a house style baked into its defaults, and most users never leave those defaults. Knowing what a tool nudges you toward tells you whether its output will look like your business or like every other business using it.',
          mission:
            'Browse the Constant Contact email templates and compare them directly with the Mailchimp ones you just used. Look at density, imagery, button style and how much text the layout expects.',
          missionUrl: 'https://www.constantcontact.com/features/email-templates',
          missionCta: 'Browse the templates',
          check: {
            kind: 'reflect',
            id: 'm3-cc-reflect',
            prompt:
              'How is their template style different from Mailchimp’s? Which of the two would need less fighting to look like something you would send?',
          },
        },
        {
          id: 'klaviyo',
          tool: 'klaviyo',
          title: 'See What Automation Looks Like When It Is Serious',
          what: [
            {
              kind: 'p',
              text: 'Klaviyo is built for e-commerce. Where Mailchimp offers automation as a feature, Klaviyo is organised around flows: sequences triggered by what someone did, or conspicuously did not do, in a store.',
            },
            {
              kind: 'p',
              text: 'The canonical example is the welcome series — not one email but three or four over a fortnight, each branching on whether the last one was opened or acted on.',
            },
          ],
          why: 'A flow is the difference between a mailing list and a system. Once messages are triggered by behaviour rather than by you remembering to write, email stops competing for your attention and starts working while you are asleep.',
          mission:
            'Look at Klaviyo’s free plan and its pre-built e-commerce welcome series flows. Follow one flow through its branches and note where it decides to send a different message.',
          missionUrl: 'https://www.klaviyo.com/pricing',
          missionCta: 'Open Klaviyo',
          check: {
            kind: 'reflect',
            id: 'm3-klaviyo-reflect',
            prompt:
              'Would Klaviyo or Mailchimp fit your business better, and why? Be specific about what you actually sell and how often someone would buy it twice.',
            hint: 'Repeat purchases and cart abandonment favour Klaviyo. A newsletter and occasional announcements favour Mailchimp.',
          },
        },
      ],
      assignment: {
        title: 'Design one full email campaign for a fictional client',
        brief: [
          {
            kind: 'p',
            text: 'A local bicycle repair shop has just launched an online booking system. They have 400 email addresses collected at the counter over two years, and have never sent a single email to any of them.',
          },
          {
            kind: 'p',
            text: 'Plan the campaign that introduces the booking system. Decide how many emails it takes, what each one is for, and in what order they go out. For at least one of them, write the subject line, the preview text and the opening two sentences in full.',
          },
          {
            kind: 'ul',
            items: [
              'Name the type of each email in the sequence and the moment in the lifecycle it addresses.',
              'Say what you would do about a list of 400 addresses that has never been mailed — because sending to it cold is a deliverability decision, not just a marketing one.',
              'Decide which of the three platforms you would build it in, and justify it in one sentence.',
            ],
          },
        ],
        deliverable:
          'A short written plan: the sequence, one email drafted properly, the list decision, and the platform choice with its reason.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm3-types-match',
          prompt: 'Match each situation to the type of email that belongs there.',
          lefts: [
            'Someone just subscribed on your site and is still on the page',
            'A customer put three items in a basket and closed the tab',
            'Two hundred subscribers have not opened anything in a year',
            'You have a workshop with fifteen seats and it runs in ten days',
          ],
          rights: [
            'Welcome email',
            'Abandoned cart email',
            'Re-engagement email',
            'Promotional email',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Each is triggered by a different signal. The re-engagement one is the counter-intuitive one: its success looks like a smaller list, because removing people who never open protects your ability to reach the ones who do.',
        },
        {
          kind: 'choice',
          id: 'm3-scenario-open',
          prompt:
            'Open rates on a monthly newsletter have dropped from 34% to 11% over four months. Nothing about the content changed. What do you check first?',
          options: [
            'Whether the mail is still reaching inboxes — authentication, sending domain and list hygiene',
            'Rewrite the subject lines to be more exciting',
            'Add emoji to the subject lines',
            'Increase send frequency to weekly so people see you more',
          ],
          answer: 0,
          explain:
            'A steady slide across every send points at deliverability, not copy. If mail is landing in spam, no subject line rescues it — and sending more often would make the reputation problem worse.',
        },
        {
          kind: 'choice',
          id: 'm3-subject-good',
          prompt: 'Which of these subject lines is doing its job best?',
          options: [
            '"Your booking link changed — here’s the new one"',
            '"BIG NEWS you don’t want to miss!!"',
            '"Newsletter — March"',
            '"Quick question"',
          ],
          answer: 0,
          explain:
            'It makes a specific promise the email can keep, and the reader knows what happens if they ignore it. "Big news" promises nothing, "Newsletter — March" describes the container rather than the contents, and "Quick question" is a trick that costs you trust once opened.',
        },
        {
          kind: 'multi',
          id: 'm3-deliverability',
          prompt: 'Which of these genuinely damage your chances of landing in the inbox?',
          options: [
            'Sending to a purchased list of addresses that never opted in',
            'Missing SPF and DKIM records on your sending domain',
            'Using a plain-text-heavy layout instead of a heavy image template',
            'Keeping subscribers who have not opened anything in two years',
          ],
          answers: [0, 1, 3],
          explain:
            'Bought lists, missing authentication and long-dead subscribers all hurt sender reputation. A plain layout does not — if anything it helps, since image-only emails are a spam signal themselves.',
        },
        {
          kind: 'choice',
          id: 'm3-tf-opens',
          prompt:
            'True or false: because of privacy features that pre-load images, open rate should now be treated as a rough trend rather than a precise measure.',
          options: ['True', 'False'],
          answer: 0,
          explain:
            'True. Automatic image loading registers opens nobody performed. Clicks and replies are the honest signals; opens are still worth watching as a direction of travel, not as a number to optimise.',
        },
        {
          kind: 'reflect',
          id: 'm3-reflect-list',
          prompt:
            'If you started an email list this week for your own work, what would the welcome email say, and what would you promise about frequency?',
          hint: 'The frequency promise is a contract. Promise what you will still be doing in a year, not what you feel like doing this month.',
        },
      ],
      recap: [
        'Email is the only channel you own outright, which is why list quality matters more than list size.',
        'Each email type answers a different moment: welcome, newsletter, promotional, transactional, re-engagement, abandoned cart.',
        'When opens fall, check deliverability, list quality and frequency before you touch the subject line.',
        'A good subject line makes a specific promise the email keeps; clever costs you trust the next time.',
        'Mailchimp is the broad starting point, Constant Contact is aimed at small local businesses, and Klaviyo is the serious choice once behaviour-triggered flows matter.',
      ],
    },

    nl: {
      title: 'Schrijf e-mail die geopend wordt',
      subtitle:
        'Het enige kanaal dat echt van jou is. Drie platforms, één welkomstmail die je zelf bouwt, en de ongemakkelijke waarheid over onderwerpregels.',
      abstract:
        'E-mailtypen, afleverbaarheid, openingsratio’s en automatisering — Mailchimp, Constant Contact en Klaviyo vergeleken op hun gratis pakketten.',
      objectives: [
        'Uitleggen waarom een e-maillijst meer waard is dan een even groot socialmediapubliek.',
        'Het juiste type e-mail kiezen voor een bepaald moment in de klantlevenscyclus.',
        'Een welkomstmail bouwen in een echt platform en je onderwerpregel verdedigen.',
        'Drie e-mailplatforms vergelijken en degene kiezen die bij jouw bedrijf past.',
        'De belangrijkste oorzaken benoemen waardoor e-mail de inbox niet haalt.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'E-mail is het enige marketingkanaal waar jij de verbinding bezit. Een socialplatform kan op een dinsdag zijn algoritme wijzigen en je bereik halveren; een zoekmachine kan resultaten herschikken en je hoort het van een grafiek. Een e-maillijst is een bestand met adressen dat van jou is en volgend jaar hetzelfde werkt.',
        },
        {
          kind: 'p',
          text: 'Dat eigendom is ook waarom het het kanaal is dat mensen het makkelijkst verpesten. Niemand ontvolgt een zoekmachine, maar ze schrijven zich absoluut uit bij jou.',
        },
        {
          kind: 'h',
          text: 'De soorten e-mail, en wanneer elk zijn plek verdient',
        },
        {
          kind: 'ul',
          items: [
            'Welkom — direct na aanmelding verstuurd, terwijl ze nog weten waarom. Steevast de best presterende mail die je ooit stuurt, en degene die de meeste bedrijven nooit instellen.',
            'Nieuwsbrief — terugkerend, relatieopbouwend, weinig directe opbrengst per verzending. Zijn taak is dat je in beeld blijft tot het moment dat iemand je nodig heeft.',
            'Promotie — een specifiek aanbod met een deadline. Effectief in kleine doses; in grote doses de snelste manier om mensen te leren jou te negeren.',
            'Transactioneel — orderbevestigingen, bonnen, wachtwoordherstel. Getriggerd door een handeling, buitengewoon vaak geopend, en bijna altijd verspild als kans om nog één nuttig ding te zeggen.',
            'Heractivatie — naar mensen die stil zijn geworden, met de directe vraag of ze nog van je willen horen. Het maakt je lijst kleiner, en dat is de bedoeling.',
            'Verlaten winkelwagen — een herinnering dat er iets ongekocht blijft staan. De automatisering met het hoogste rendement in e-commerce.',
          ],
        },
        {
          kind: 'h',
          text: 'Openingsratio is een symptoom, geen doel',
        },
        {
          kind: 'p',
          text: 'Als een openingsratio daalt, is de reflex om de onderwerpregel te herschrijven. Soms klopt dat. Vaker zit het probleem eerder in de keten, en de volgorde om te controleren is: bereik je de inbox überhaupt, stuur je naar mensen die erom vroegen, is je frequentie bruikbaar, en pas dan: deugt de onderwerpregel.',
        },
        {
          kind: 'ul',
          items: [
            'Afleverbaarheid — authenticatierecords (SPF, DKIM, DMARC), verzenden vanaf een domein dat je beheert, en een schone lijst. Mail in de spammap heeft een openingsratio van ongeveer nul en geen onderwerpregel repareert dat.',
            'Lijstkwaliteit — adressen die zich aanmeldden verslaan adressen die je verzamelde. Gekochte lijsten vergiftigen je verzendreputatie en dat kost maanden herstel.',
            'Frequentie en verwachting — mensen aan wie "maandelijks" is beloofd en die wekelijks krijgen, openen niet, die schrijven zich uit.',
            'Afzendernaam — vaak voorspellender dan het onderwerp. Mensen openen post van iemand die ze herkennen.',
            'De onderwerpregel zelf — specifiek en eerlijk verslaat gevat. Het is het laatste wat je bijstelt, niet het eerste.',
          ],
        },
        {
          kind: 'note',
          label: 'Over het meten van opens',
          text: 'Open-tracking werkt via een verborgen afbeelding, en privacyfuncties in onder meer Apple Mail laden die afbeeldingen nu automatisch, of iemand het bericht las of niet. Behandel openingsratio als een ruwe trend en beoordeel campagnes op klikken en antwoorden.',
        },
        {
          kind: 'h',
          text: 'Wat een onderwerpregel laat werken',
        },
        {
          kind: 'p',
          text: 'Een goede onderwerpregel doet een specifieke belofte die de mail nakomt. "Je site lag vorige maand twee keer plat — dit is waarom" werkt omdat het concreet, relevant en eerlijk over de inhoud is. "Groot nieuws hierbinnen!" faalt op alle drie, en die kosten betaal je niet alleen bij deze mail — de volgende krijgt minder het voordeel van de twijfel.',
        },
        {
          kind: 'p',
          text: 'De praktische randvoorwaarden: ongeveer veertig tekens overleven op een telefoon, de previewtekst is een tweede regel die jij bepaalt en die de meesten verspillen, en alles wat als een trucje leest, leest ook voor een filter als spam.',
        },
      ],
      lessons: [
        {
          id: 'mailchimp',
          tool: 'mailchimp',
          title: 'Bouw je eerste welkomstmail',
          what: [
            {
              kind: 'p',
              text: 'Mailchimp is standaard het eerste e-mailplatform: een ruim gratis pakket, een drag-and-drop editor, en genoeg automatisering om zonder te betalen een welkomstbericht te versturen.',
            },
            {
              kind: 'p',
              text: 'Zijn kracht is breedte — landingspagina’s, formulieren, basisautomatisering en rapportage op één plek. Zijn zwakte is dat de prijs stevig oploopt naarmate je lijst groeit, en dat de e-commerce-automatiseringen ondieper zijn dan die van een gespecialiseerde tool.',
            },
          ],
          why: 'De welkomstmail is in de meeste accounts het best presterende bericht, omdat hij aankomt op het hoogtepunt van de interesse. Er één van begin tot eind bouwen leert je het hele platform: lijst, formulier, sjabloon, automatisering, verzending.',
          mission:
            'Maak een gratis Mailchimp-account en bouw één eenvoudig welkomstmailsjabloon — het bericht dat iemand krijgt zodra hij zich op je site aanmeldt. Schrijf de onderwerpregel zelf in plaats van de standaardtekst te laten staan.',
          missionUrl: 'https://mailchimp.com/pricing/marketing/',
          missionCta: 'Open Mailchimp',
          check: {
            kind: 'reflect',
            id: 'm3-mailchimp-reflect',
            prompt:
              'Welke onderwerpregel schreef je, en waarom? Benoem de specifieke belofte die hij doet, en of de mail die belofte ook nakomt.',
            hint: 'Kun je de belofte niet in één zin benoemen, dan is de onderwerpregel decoratie.',
          },
        },
        {
          id: 'constant-contact',
          tool: 'constant-contact',
          title: 'Vergelijk een tweede huisstijl',
          what: [
            {
              kind: 'p',
              text: 'Constant Contact richt zich pal op kleine bedrijven zonder marketeer in dienst: minder opties, meer begeleiding, sjablonen die uitgaan van een winkel of lokale dienst in plaats van een startup.',
            },
            {
              kind: 'p',
              text: 'Sjabloonbibliotheken vergelijken is een snelle manier om te zien wat een platform denkt dat zijn klanten zijn. De standaardinstellingen verraden voor wie de tool echt bedoeld is.',
            },
          ],
          why: 'Elk platform heeft een huisstijl ingebakken in zijn standaarden, en de meeste gebruikers verlaten die standaarden nooit. Weten waar een tool je heen duwt, vertelt je of het resultaat op jouw bedrijf gaat lijken of op elk ander bedrijf dat hem gebruikt.',
          mission:
            'Blader door de e-mailsjablonen van Constant Contact en vergelijk ze direct met de Mailchimp-sjablonen die je net gebruikte. Let op dichtheid, beeldgebruik, knopstijl en hoeveel tekst de opmaak verwacht.',
          missionUrl: 'https://www.constantcontact.com/features/email-templates',
          missionCta: 'Bekijk de sjablonen',
          check: {
            kind: 'reflect',
            id: 'm3-cc-reflect',
            prompt:
              'Hoe verschilt hun sjabloonstijl van die van Mailchimp? Welke van de twee zou minder tegenwerking geven om eruit te zien als iets dat jij zou versturen?',
          },
        },
        {
          id: 'klaviyo',
          tool: 'klaviyo',
          title: 'Zie hoe automatisering eruitziet als het menens is',
          what: [
            {
              kind: 'p',
              text: 'Klaviyo is gebouwd voor e-commerce. Waar Mailchimp automatisering als functie aanbiedt, is Klaviyo georganiseerd rond flows: reeksen die worden getriggerd door wat iemand deed, of opvallend genoeg niet deed, in een winkel.',
            },
            {
              kind: 'p',
              text: 'Het schoolvoorbeeld is de welkomstreeks — geen enkele mail maar drie of vier over twee weken, elk vertakkend op de vraag of de vorige is geopend of opgevolgd.',
            },
          ],
          why: 'Een flow is het verschil tussen een mailinglijst en een systeem. Zodra berichten worden getriggerd door gedrag in plaats van doordat jij eraan denkt te schrijven, concurreert e-mail niet meer om jouw aandacht maar werkt het terwijl je slaapt.',
          mission:
            'Bekijk het gratis pakket van Klaviyo en de kant-en-klare e-commerce welkomstreeksen. Volg één flow door zijn vertakkingen en noteer waar hij besluit een ander bericht te sturen.',
          missionUrl: 'https://www.klaviyo.com/pricing',
          missionCta: 'Open Klaviyo',
          check: {
            kind: 'reflect',
            id: 'm3-klaviyo-reflect',
            prompt:
              'Past Klaviyo of Mailchimp beter bij jouw bedrijf, en waarom? Wees specifiek over wat je echt verkoopt en hoe vaak iemand het twee keer zou kopen.',
            hint: 'Herhaalaankopen en verlaten winkelwagens pleiten voor Klaviyo. Een nieuwsbrief en incidentele aankondigingen pleiten voor Mailchimp.',
          },
        },
      ],
      assignment: {
        title: 'Ontwerp één volledige e-mailcampagne voor een fictieve klant',
        brief: [
          {
            kind: 'p',
            text: 'Een lokale fietsenmaker heeft net een online reserveringssysteem gelanceerd. Ze hebben 400 e-mailadressen die in twee jaar aan de balie zijn verzameld, en hebben er nog nooit één mail naartoe gestuurd.',
          },
          {
            kind: 'p',
            text: 'Plan de campagne die het reserveringssysteem introduceert. Bepaal hoeveel mails ervoor nodig zijn, waar elke mail voor dient, en in welke volgorde ze uitgaan. Schrijf van minstens één mail de onderwerpregel, de previewtekst en de eerste twee zinnen volledig uit.',
          },
          {
            kind: 'ul',
            items: [
              'Benoem het type van elke mail in de reeks en het moment in de levenscyclus dat hij aanspreekt.',
              'Zeg wat je zou doen met een lijst van 400 adressen die nooit gemaild is — koud versturen is namelijk een afleverbaarheidsbeslissing, niet alleen een marketingbeslissing.',
              'Kies in welk van de drie platforms je het zou bouwen, en onderbouw het in één zin.',
            ],
          },
        ],
        deliverable:
          'Een kort geschreven plan: de reeks, één mail netjes uitgeschreven, de beslissing over de lijst, en de platformkeuze met reden.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm3-types-match',
          prompt: 'Koppel elke situatie aan het type e-mail dat erbij hoort.',
          lefts: [
            'Iemand meldde zich net aan op je site en staat nog op de pagina',
            'Een klant legde drie artikelen in een mandje en sloot het tabblad',
            'Tweehonderd abonnees hebben in een jaar niets geopend',
            'Je hebt een workshop met vijftien plaatsen die over tien dagen begint',
          ],
          rights: [
            'Welkomstmail',
            'Verlaten-winkelwagenmail',
            'Heractivatiemail',
            'Promotiemail',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Elk wordt getriggerd door een ander signaal. De heractivatiemail is de tegenintuïtieve: succes ziet eruit als een kleinere lijst, want mensen verwijderen die nooit openen beschermt je vermogen om de rest te bereiken.',
        },
        {
          kind: 'choice',
          id: 'm3-scenario-open',
          prompt:
            'De openingsratio van een maandelijkse nieuwsbrief zakte in vier maanden van 34% naar 11%. Aan de inhoud veranderde niets. Wat controleer je eerst?',
          options: [
            'Of de mail de inbox nog haalt — authenticatie, verzenddomein en lijsthygiëne',
            'De onderwerpregels herschrijven zodat ze spannender zijn',
            'Emoji toevoegen aan de onderwerpregels',
            'Vaker versturen, wekelijks, zodat mensen je vaker zien',
          ],
          answer: 0,
          explain:
            'Een gestage daling over alle verzendingen wijst op afleverbaarheid, niet op tekst. Belandt mail in spam, dan redt geen enkele onderwerpregel het — en vaker sturen zou het reputatieprobleem verergeren.',
        },
        {
          kind: 'choice',
          id: 'm3-subject-good',
          prompt: 'Welke van deze onderwerpregels doet zijn werk het best?',
          options: [
            '"Je reserveringslink is gewijzigd — hier is de nieuwe"',
            '"GROOT NIEUWS dat je niet wilt missen!!"',
            '"Nieuwsbrief — maart"',
            '"Korte vraag"',
          ],
          answer: 0,
          explain:
            'Hij doet een specifieke belofte die de mail kan nakomen, en de lezer weet wat er gebeurt als hij hem negeert. "Groot nieuws" belooft niets, "Nieuwsbrief — maart" beschrijft de verpakking in plaats van de inhoud, en "Korte vraag" is een trucje dat je bij openen vertrouwen kost.',
        },
        {
          kind: 'multi',
          id: 'm3-deliverability',
          prompt: 'Welke hiervan schaden je kans om in de inbox te landen echt?',
          options: [
            'Sturen naar een gekochte lijst met adressen die zich nooit aanmeldden',
            'Ontbrekende SPF- en DKIM-records op je verzenddomein',
            'Een tekstrijke opmaak gebruiken in plaats van een beeldzwaar sjabloon',
            'Abonnees behouden die in twee jaar niets hebben geopend',
          ],
          answers: [0, 1, 3],
          explain:
            'Gekochte lijsten, ontbrekende authenticatie en al lang inactieve abonnees schaden allemaal je afzenderreputatie. Een sobere opmaak niet — die helpt eerder, want mails die alleen uit beeld bestaan zijn zelf een spamsignaal.',
        },
        {
          kind: 'choice',
          id: 'm3-tf-opens',
          prompt:
            'Waar of niet waar: door privacyfuncties die afbeeldingen vooraf laden, moet je openingsratio nu behandelen als een ruwe trend in plaats van een precieze meting.',
          options: ['Waar', 'Niet waar'],
          answer: 0,
          explain:
            'Waar. Automatisch laden van afbeeldingen registreert opens die niemand deed. Klikken en antwoorden zijn de eerlijke signalen; opens zijn nog een richting, geen getal om te optimaliseren.',
        },
        {
          kind: 'reflect',
          id: 'm3-reflect-list',
          prompt:
            'Als je deze week een e-maillijst zou starten voor je eigen werk, wat zou de welkomstmail zeggen, en wat zou je beloven over frequentie?',
          hint: 'De frequentiebelofte is een contract. Beloof wat je over een jaar nog doet, niet waar je deze maand zin in hebt.',
        },
      ],
      recap: [
        'E-mail is het enige kanaal dat echt van jou is, en daarom telt lijstkwaliteit zwaarder dan lijstomvang.',
        'Elk e-mailtype beantwoordt een ander moment: welkom, nieuwsbrief, promotie, transactioneel, heractivatie, verlaten winkelwagen.',
        'Zakken de opens, controleer dan afleverbaarheid, lijstkwaliteit en frequentie voordat je aan de onderwerpregel komt.',
        'Een goede onderwerpregel doet een specifieke belofte die de mail nakomt; gevat kost je de volgende keer vertrouwen.',
        'Mailchimp is het brede startpunt, Constant Contact mikt op kleine lokale bedrijven, en Klaviyo is de serieuze keuze zodra gedrag-getriggerde flows tellen.',
      ],
    },
  },
};

export default module03;
