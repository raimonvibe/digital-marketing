import type { Module } from '@/lib/types';

const module07: Module = {
  slug: 'analytics',
  number: 7,
  accent: 'rust',
  minutes: 75,
  content: {
    en: {
      title: 'Read the Numbers',
      subtitle:
        'What GA4 actually measures, how to tell a real drop from a broken tag, and the four questions to ask before you touch a single setting.',
      abstract:
        'Setting up Google Analytics 4 on a site you own, reading the report, and diagnosing a conversion drop without guessing.',
      objectives: [
        'Install GA4 on a live site and confirm it is receiving data.',
        'Name your top traffic sources and say what each is worth.',
        'Read a basic report and describe what it says about behaviour.',
        'Work through a conversion drop in a sensible diagnostic order.',
        'Recognise the measurements that are unreliable and stop optimising them.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Analytics answers one question well: what happened. It is very bad at why, and every misuse of it comes from forgetting that. Numbers narrow down where to look; they do not tell you what to think.',
        },
        {
          kind: 'h',
          text: 'What GA4 is counting',
        },
        {
          kind: 'p',
          text: 'Google Analytics 4 is event-based. Everything is an event with parameters — a page view, a click, a scroll, a purchase — which is a better fit for how people actually use sites than the older session-and-pageview model. The vocabulary worth knowing is short.',
        },
        {
          kind: 'ul',
          items: [
            'Users — distinct people, approximately, because it depends on cookies, devices and consent.',
            'Sessions — a visit; it ends after inactivity or at the day boundary.',
            'Events — anything you chose to record. Some are automatic, the useful ones you define.',
            'Conversions (key events) — the events that mean something happened: a form sent, a purchase, a booking.',
            'Engagement rate — the share of sessions that lasted, scrolled or converted. It replaced bounce rate, which measured the opposite and was routinely misread.',
            'Traffic source — where the visit came from: organic search, direct, referral, social, paid, email.',
          ],
        },
        {
          kind: 'note',
          label: 'Direct traffic is a lie you have to live with',
          text: '"Direct" does not mean people typed your URL. It is the bucket for anything with no referrer: links opened from a PDF, a desktop mail client, a messaging app, or a browser stripping the referrer for privacy. A big direct number usually means untracked links, not brand loyalty.',
        },
        {
          kind: 'h',
          text: 'The four questions worth asking of any report',
        },
        {
          kind: 'ol',
          items: [
            'Compared with what? A number with no comparison period is not information. Sixty visitors is good or terrible depending entirely on last month.',
            'Is the change bigger than the noise? Small sites are noisy. A 15% weekly swing on 200 visits is usually weather, not a trend.',
            'Did the measurement change, or did reality? Whenever a metric moves sharply on one day, suspect the tag, the consent banner or a deploy before you suspect your customers.',
            'What would I do differently if this number were double? If the answer is nothing, you are collecting it out of habit.',
          ],
        },
        {
          kind: 'h',
          text: 'Diagnosing a conversion drop',
        },
        {
          kind: 'p',
          text: 'Conversions fall. The instinct is to redesign something, and the correct move is to find out where the loss actually happens before changing anything a customer can see.',
        },
        {
          kind: 'ol',
          items: [
            'Confirm the tracking still works. Submit the form yourself and watch the event arrive. An astonishing share of "conversion drops" are a deploy that removed a script.',
            'Split traffic from conversion rate. Fewer conversions with steady traffic is a site problem; steady conversion rate with less traffic is an acquisition problem. They lead in opposite directions.',
            'Segment by source. A drop confined to one channel is a channel problem — an ad group paused, a ranking lost, a newsletter not sent.',
            'Segment by device and browser. A drop confined to mobile Safari is a bug, not a market shift.',
            'Look at the step before the conversion. Most losses happen one screen earlier than where you noticed them.',
            'Only now, look at the page itself.',
          ],
        },
        {
          kind: 'p',
          text: 'Following that order costs twenty minutes and routinely finds a broken form, an expired card on an ad account, or a consent banner change that stopped recording half your visitors — none of which a redesign would have fixed.',
        },
      ],
      lessons: [
        {
          id: 'ga4',
          tool: 'ga4',
          title: 'Find Out Where Your Visitors Actually Come From',
          what: [
            {
              kind: 'p',
              text: 'GA4 is the free, near-universal analytics tool: a measurement snippet on your pages, and reports on who arrived, from where, and what they did.',
            },
            {
              kind: 'p',
              text: 'Setup is a property, a data stream, and one tag on the site. The reports worth your time on day one are Acquisition — traffic sources — and Engagement — which pages people actually looked at.',
            },
          ],
          why: 'Without traffic sources you cannot tell which of your efforts is producing anything. Most people are surprised at least once: the channel they spend the most time on is rarely the channel producing the most visits.',
          mission:
            'Set up GA4 on one of your live sites if it is not there already, confirm data is arriving in Realtime, then open Acquisition and read your traffic sources for the last 28 days.',
          missionUrl: 'https://analytics.google.com/',
          missionCta: 'Open Google Analytics',
          check: {
            kind: 'reflect',
            id: 'm7-ga4-reflect',
            prompt:
              'What is your top traffic source right now? And how much of your total is "direct" — which, per the lesson, is mostly untracked links rather than people typing your name.',
            hint: 'If direct is over half your traffic, your links from email and social are probably not tagged.',
          },
        },
      ],
      quiz: [
        {
          kind: 'choice',
          id: 'm7-dashboard-read',
          prompt:
            'A report shows 1,200 users, 1,900 sessions, an engagement rate of 31% and 14 key events, against 2,400 users last month. What is the clearest reading?',
          options: [
            'Traffic roughly halved and engagement is weak — find out what changed in acquisition first',
            'The site is performing well; 1,900 sessions is a healthy number',
            'The engagement rate is the only figure that matters here',
            'Nothing can be said without knowing the bounce rate',
          ],
          answer: 0,
          explain:
            'The comparison is the story: users are down about 50% month on month, which is far outside noise. The 31% engagement rate is a second concern, and bounce rate is not the metric GA4 leads with any more.',
        },
        {
          kind: 'choice',
          id: 'm7-scenario-drop',
          prompt:
            'Conversions dropped 60% overnight. Traffic is unchanged. What do you check first?',
          options: [
            'Whether the conversion is still being tracked — submit the form yourself and watch for the event',
            'Redesign the landing page',
            'Increase the ad budget to compensate',
            'Rewrite the call-to-action copy',
          ],
          answer: 0,
          explain:
            'An overnight cliff with flat traffic is the signature of a measurement break, not a change in customer behaviour. People do not change their minds in unison at midnight; deploys happen at midnight all the time.',
        },
        {
          kind: 'choice',
          id: 'm7-scenario-segment',
          prompt:
            'Conversions are down 20% over a month. Traffic is steady, tracking is verified working. What is the most useful next step?',
          options: [
            'Segment by source, then by device, to find where the loss is concentrated',
            'Change the button colour and wait a week',
            'Conclude the market has softened',
            'Turn off the channels that convert worst',
          ],
          answer: 0,
          explain:
            'Segmenting turns one blurry number into a located problem. A drop concentrated in one channel or one browser is a specific, fixable fault; an even drop across everything is a genuinely different conversation.',
        },
        {
          kind: 'choice',
          id: 'm7-tf-direct',
          prompt:
            'True or false: a large "direct" traffic figure means most of your visitors are typing your address from memory.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. Direct is the no-referrer bucket: links from mail clients, PDFs, messaging apps and privacy-stripped referrers all land there. A large direct share usually means your links are not tagged.',
        },
        {
          kind: 'multi',
          id: 'm7-noise',
          prompt: 'Which of these should make you suspect measurement rather than reality?',
          options: [
            'A metric drops to exactly zero on one day and recovers the next',
            'A 15% week-on-week swing on a site with 200 visits a week',
            'Conversions fall the same day a release went out',
            'Organic traffic declines gradually over four months',
          ],
          answers: [0, 1, 2],
          explain:
            'Exact zeros, small-sample noise and same-day-as-deploy changes are all measurement stories. A gradual four-month decline in organic traffic is slow enough and steady enough to be real, and is the one worth investigating properly.',
        },
        {
          kind: 'reflect',
          id: 'm7-reflect-metric',
          prompt:
            'Name one number you currently look at that would not change a single decision if it doubled. Then name the one number you would actually act on.',
          hint: 'The second one is the metric worth putting on a dashboard. The first is worth deleting.',
        },
      ],
      recap: [
        'Analytics tells you what happened, not why. It narrows where to look.',
        'GA4 is event-based: users, sessions, events, key events, engagement rate and traffic source cover most of what you need.',
        '"Direct" is the no-referrer bucket, not brand loyalty — a large share usually means untagged links.',
        'Ask of any number: compared with what, is it bigger than the noise, did the measurement change, and would I act differently if it doubled.',
        'Diagnose a conversion drop in order — tracking, traffic versus rate, source, device, the previous step — and only then the page.',
      ],
    },

    nl: {
      title: 'Lees de cijfers',
      subtitle:
        'Wat GA4 echt meet, hoe je een echte daling van een kapotte tag onderscheidt, en de vier vragen die je stelt voordat je één instelling aanraakt.',
      abstract:
        'Google Analytics 4 opzetten op een eigen site, het rapport lezen, en een conversiedaling diagnosticeren zonder te gokken.',
      objectives: [
        'GA4 installeren op een live site en bevestigen dat er data binnenkomt.',
        'Je belangrijkste verkeersbronnen benoemen en zeggen wat elk waard is.',
        'Een basisrapport lezen en beschrijven wat het over gedrag zegt.',
        'Een conversiedaling in een zinnige diagnostische volgorde doorlopen.',
        'De metingen herkennen die onbetrouwbaar zijn en stoppen ze te optimaliseren.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Analytics beantwoordt één vraag goed: wat er is gebeurd. Het is heel slecht in waarom, en elk misbruik ervan komt voort uit dat vergeten. Cijfers bakenen af waar je moet kijken; ze vertellen je niet wat je moet denken.',
        },
        {
          kind: 'h',
          text: 'Wat GA4 telt',
        },
        {
          kind: 'p',
          text: 'Google Analytics 4 is event-gebaseerd. Alles is een gebeurtenis met parameters — een paginaweergave, een klik, een scroll, een aankoop — wat beter past bij hoe mensen sites echt gebruiken dan het oudere sessie-en-paginaweergavemodel. De woordenschat die je nodig hebt is kort.',
        },
        {
          kind: 'ul',
          items: [
            'Gebruikers — verschillende mensen, bij benadering, want het hangt af van cookies, apparaten en toestemming.',
            'Sessies — een bezoek; het eindigt na inactiviteit of bij de dagovergang.',
            'Events — alles wat je hebt gekozen vast te leggen. Sommige zijn automatisch, de nuttige definieer je zelf.',
            'Conversies (key events) — de events die betekenen dat er iets gebeurde: een verzonden formulier, een aankoop, een reservering.',
            'Betrokkenheidspercentage — het aandeel sessies dat duurde, scrollde of converteerde. Het verving bouncepercentage, dat het omgekeerde mat en stelselmatig verkeerd werd gelezen.',
            'Verkeersbron — waar het bezoek vandaan kwam: organisch zoeken, direct, verwijzing, social, betaald, e-mail.',
          ],
        },
        {
          kind: 'note',
          label: 'Direct verkeer is een leugen waar je mee moet leven',
          text: '"Direct" betekent niet dat mensen je URL intypten. Het is de bak voor alles zonder verwijzer: links geopend uit een pdf, een desktopmailclient, een chat-app, of een browser die de verwijzer om privacyredenen weghaalt. Een groot direct-cijfer betekent meestal ongetagde links, geen merktrouw.',
        },
        {
          kind: 'h',
          text: 'De vier vragen die elk rapport verdient',
        },
        {
          kind: 'ol',
          items: [
            'Vergeleken waarmee? Een getal zonder vergelijkingsperiode is geen informatie. Zestig bezoekers is goed of dramatisch, volledig afhankelijk van vorige maand.',
            'Is de verandering groter dan de ruis? Kleine sites zijn rumoerig. Een schommeling van 15% per week op 200 bezoeken is meestal weer, geen trend.',
            'Veranderde de meting of de werkelijkheid? Beweegt een cijfer op één dag scherp, verdenk dan de tag, de cookiebanner of een deploy voordat je je klanten verdenkt.',
            'Wat zou ik anders doen als dit getal verdubbelde? Is het antwoord niets, dan verzamel je het uit gewoonte.',
          ],
        },
        {
          kind: 'h',
          text: 'Een conversiedaling diagnosticeren',
        },
        {
          kind: 'p',
          text: 'Conversies dalen. De reflex is iets herontwerpen; de juiste zet is uitzoeken wáár het verlies optreedt voordat je iets verandert dat een klant kan zien.',
        },
        {
          kind: 'ol',
          items: [
            'Bevestig dat de tracking nog werkt. Verstuur het formulier zelf en kijk of het event binnenkomt. Een verbazingwekkend deel van alle "conversiedalingen" is een deploy die een script verwijderde.',
            'Scheid verkeer van conversieratio. Minder conversies bij gelijk verkeer is een siteprobleem; gelijke conversieratio bij minder verkeer is een acquisitieprobleem. Die wijzen precies de andere kant op.',
            'Segmenteer op bron. Een daling in één kanaal is een kanaalprobleem — een gepauzeerde advertentiegroep, een verloren positie, een niet-verzonden nieuwsbrief.',
            'Segmenteer op apparaat en browser. Een daling die zich beperkt tot mobiele Safari is een bug, geen marktverschuiving.',
            'Kijk naar de stap vóór de conversie. De meeste verliezen gebeuren één scherm eerder dan waar je ze opmerkte.',
            'Pas dán naar de pagina zelf.',
          ],
        },
        {
          kind: 'p',
          text: 'Die volgorde volgen kost twintig minuten en vindt routinematig een kapot formulier, een verlopen kaart op een advertentieaccount, of een gewijzigde cookiebanner die de helft van je bezoekers niet meer registreerde — geen daarvan zou een herontwerp hebben opgelost.',
        },
      ],
      lessons: [
        {
          id: 'ga4',
          tool: 'ga4',
          title: 'Ontdek waar je bezoekers echt vandaan komen',
          what: [
            {
              kind: 'p',
              text: 'GA4 is de gratis, vrijwel universele analyticstool: een meetsnippet op je pagina’s en rapporten over wie er kwam, waarvandaan, en wat ze deden.',
            },
            {
              kind: 'p',
              text: 'Opzetten is een property, een datastream en één tag op de site. De rapporten die op dag één je tijd waard zijn: Acquisitie — verkeersbronnen — en Betrokkenheid — welke pagina’s mensen echt bekeken.',
            },
          ],
          why: 'Zonder verkeersbronnen kun je niet zien welke van je inspanningen iets oplevert. De meeste mensen worden minstens één keer verrast: het kanaal waar je de meeste tijd in steekt is zelden het kanaal dat de meeste bezoeken oplevert.',
          mission:
            'Zet GA4 op een van je live sites als het er nog niet staat, bevestig in Realtime dat er data binnenkomt, en open dan Acquisitie om je verkeersbronnen van de laatste 28 dagen te lezen.',
          missionUrl: 'https://analytics.google.com/',
          missionCta: 'Open Google Analytics',
          check: {
            kind: 'reflect',
            id: 'm7-ga4-reflect',
            prompt:
              'Wat is nu je grootste verkeersbron? En welk deel van je totaal is "direct" — wat volgens de les vooral ongetagde links zijn en niet mensen die je naam intypen.',
            hint: 'Is direct meer dan de helft van je verkeer, dan zijn je links uit e-mail en social waarschijnlijk niet getagd.',
          },
        },
      ],
      quiz: [
        {
          kind: 'choice',
          id: 'm7-dashboard-read',
          prompt:
            'Een rapport toont 1.200 gebruikers, 1.900 sessies, een betrokkenheidspercentage van 31% en 14 key events, tegenover 2.400 gebruikers vorige maand. Wat is de duidelijkste lezing?',
          options: [
            'Het verkeer is ruwweg gehalveerd en de betrokkenheid is zwak — zoek eerst uit wat er in de acquisitie veranderde',
            'De site presteert goed; 1.900 sessies is een gezond getal',
            'Het betrokkenheidspercentage is hier het enige cijfer dat telt',
            'Er valt niets te zeggen zonder het bouncepercentage',
          ],
          answer: 0,
          explain:
            'De vergelijking is het verhaal: gebruikers zijn zo’n 50% gedaald ten opzichte van vorige maand, ver buiten de ruis. Die 31% betrokkenheid is een tweede zorg, en bouncepercentage is niet meer het cijfer waarmee GA4 opent.',
        },
        {
          kind: 'choice',
          id: 'm7-scenario-drop',
          prompt:
            'Conversies zakten van de ene op de andere dag met 60%. Het verkeer is onveranderd. Wat controleer je eerst?',
          options: [
            'Of de conversie nog wordt gemeten — verstuur het formulier zelf en kijk of het event binnenkomt',
            'De landingspagina herontwerpen',
            'Het advertentiebudget verhogen om te compenseren',
            'De call-to-action herschrijven',
          ],
          answer: 0,
          explain:
            'Een klif van de ene dag op de andere bij vlak verkeer is het handschrift van een kapotte meting, niet van veranderd klantgedrag. Mensen veranderen niet gelijktijdig van gedachten om middernacht; deploys gebeuren juist dan.',
        },
        {
          kind: 'choice',
          id: 'm7-scenario-segment',
          prompt:
            'Conversies zijn over een maand 20% gedaald. Verkeer is stabiel, tracking is aantoonbaar in orde. Wat is de nuttigste volgende stap?',
          options: [
            'Segmenteren op bron, daarna op apparaat, om te vinden waar het verlies zit',
            'De knopkleur veranderen en een week wachten',
            'Concluderen dat de markt is verzwakt',
            'De kanalen uitzetten die het slechtst converteren',
          ],
          answer: 0,
          explain:
            'Segmenteren maakt van één vaag getal een gelokaliseerd probleem. Een daling geconcentreerd in één kanaal of één browser is een specifieke, oplosbare fout; een gelijkmatige daling over alles is echt een ander gesprek.',
        },
        {
          kind: 'choice',
          id: 'm7-tf-direct',
          prompt:
            'Waar of niet waar: een groot "direct"-cijfer betekent dat de meeste bezoekers je adres uit hun hoofd intypen.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Direct is de bak zonder verwijzer: links uit mailclients, pdf’s, chat-apps en om privacyredenen gestripte verwijzers komen er allemaal in terecht. Een groot direct-aandeel betekent meestal dat je links niet getagd zijn.',
        },
        {
          kind: 'multi',
          id: 'm7-noise',
          prompt: 'Bij welke hiervan verdenk je de meting in plaats van de werkelijkheid?',
          options: [
            'Een cijfer zakt op één dag naar precies nul en herstelt de dag erna',
            'Een schommeling van 15% week op week op een site met 200 bezoeken per week',
            'Conversies dalen op dezelfde dag als een release',
            'Organisch verkeer daalt geleidelijk over vier maanden',
          ],
          answers: [0, 1, 2],
          explain:
            'Exacte nullen, ruis bij kleine aantallen en veranderingen op de dag van een deploy zijn allemaal meetverhalen. Een geleidelijke daling van organisch verkeer over vier maanden is traag en stabiel genoeg om echt te zijn — en die is het grondig uitzoeken waard.',
        },
        {
          kind: 'reflect',
          id: 'm7-reflect-metric',
          prompt:
            'Noem één cijfer waar je nu naar kijkt dat geen enkele beslissing zou veranderen als het verdubbelde. Noem daarna het ene cijfer waar je echt naar zou handelen.',
          hint: 'Het tweede hoort op een dashboard. Het eerste mag weg.',
        },
      ],
      recap: [
        'Analytics vertelt wat er gebeurde, niet waarom. Het bakent af waar je moet kijken.',
        'GA4 is event-gebaseerd: gebruikers, sessies, events, key events, betrokkenheidspercentage en verkeersbron dekken het meeste.',
        '"Direct" is de bak zonder verwijzer, geen merktrouw — een groot aandeel betekent meestal ongetagde links.',
        'Vraag bij elk getal: vergeleken waarmee, is het groter dan de ruis, veranderde de meting, en zou ik anders handelen als het verdubbelde.',
        'Diagnosticeer een conversiedaling op volgorde — tracking, verkeer versus ratio, bron, apparaat, de vorige stap — en pas dan de pagina.',
      ],
    },
  },
};

export default module07;
