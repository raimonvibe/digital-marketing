import type { Module } from '@/lib/types';

const module09: Module = {
  slug: 'copywriting',
  number: 9,
  accent: 'indigo',
  minutes: 60,
  content: {
    en: {
      title: 'Write Words That Work',
      subtitle:
        'Headlines that survive a scroll, calls-to-action that people actually click, and a blog structure you can reuse without it showing.',
      abstract:
        'Persuasive headlines, CTAs, tone and voice per channel, and a reusable blog post structure. No new tools — writing practice, formatted with Canva.',
      objectives: [
        'Rewrite a weak headline into one that makes a specific promise.',
        'Write a call-to-action that says what happens next rather than issuing an order.',
        'Adjust tone for the channel without abandoning your voice.',
        'Structure a blog post so that someone who reads only the headings still gets the point.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Copywriting is not decorative writing. It is the practical business of getting one specific idea into somebody’s head while they are busy, distracted and inclined to leave. Everything in this module is a way of respecting that.',
        },
        {
          kind: 'h',
          text: 'Headlines: specific beats clever, always',
        },
        {
          kind: 'p',
          text: 'A headline has one job: make the next line worth reading. It does that by being specific enough that the reader can tell whether it concerns them. Vagueness is the failure mode, and cleverness is vagueness wearing a good coat.',
        },
        {
          kind: 'ul',
          items: [
            'Say what the reader gets, not what you did. "We rebuilt our booking system" is your news; "Book a repair in thirty seconds" is theirs.',
            'Prefer a concrete noun and a real number to an adjective. "Faster" means nothing; "loads in under a second on 4G" means something.',
            'Front-load the words that matter — people read the first three or four and decide.',
            'If the headline could sit on a competitor’s page unchanged, it is not a headline, it is a category label.',
          ],
        },
        {
          kind: 'note',
          label: 'The swap test',
          text: 'Put a competitor’s name in your headline. If it still reads perfectly well, you have written something generic. The best headlines break when you swap the subject, because they contain something only true of you.',
        },
        {
          kind: 'h',
          text: 'Calls-to-action: describe the next moment',
        },
        {
          kind: 'p',
          text: 'A call-to-action fails when it asks for a commitment the reader has not yet agreed to, or when it hides what happens after the click. "Submit" describes your database. "Get the quote" describes their next five minutes.',
        },
        {
          kind: 'ul',
          items: [
            'Use the reader’s verb for the outcome: get, see, start, book, download, read.',
            'Say what happens next when it is not obvious — whether a call follows, whether payment is involved, how long it takes.',
            'One primary action per screen. A second, equally weighted button halves the effect of the first.',
            'Remove the risk in the words next to the button, not in the button itself: no card needed, unsubscribe any time, we reply within a day.',
            'Do not manufacture urgency you cannot justify. A fake deadline works once and costs you the next thing you say.',
          ],
        },
        {
          kind: 'h',
          text: 'Tone changes by channel; voice does not',
        },
        {
          kind: 'p',
          text: 'Voice is how you sound — the vocabulary, the level of formality, whether you make jokes, how much you hedge. It should be the same everywhere, because it is the thing people recognise. Tone is the register you use for a particular moment, and it moves.',
        },
        {
          kind: 'ul',
          items: [
            'A landing page is patient and specific: the reader chose to be there and will read if you give them a reason.',
            'An email is one-to-one. Write as though to a single named person, because that is how it is read.',
            'A social post has one idea and no preamble. If it needs a run-up, it is an article.',
            'A documentation page is plain to the point of boring, because someone is reading it while something is broken.',
            'An error message is short, honest, and tells the person what to do — the highest-stakes copy on any site, and the least often written on purpose.',
          ],
        },
        {
          kind: 'h',
          text: 'A blog structure you can reuse',
        },
        {
          kind: 'p',
          text: 'Most useful posts share the same skeleton. Reusing it is not formulaic if the content underneath is real — it is the same reason buildings have load-bearing walls in similar places.',
        },
        {
          kind: 'ol',
          items: [
            'The problem, stated as the reader would state it, in the first two sentences.',
            'Why the obvious approach falls short — this is what earns you the rest of the post.',
            'The approach you are proposing, named clearly enough to be remembered.',
            'How it works, in steps or sections, with a concrete example in each.',
            'What it costs — the trade-off, the caveat, the case where it does not apply. Omitting this is how posts lose credibility.',
            'What to do next, once, without a list of alternatives.',
          ],
        },
        {
          kind: 'p',
          text: 'Write the headings first and read them on their own. If that sequence alone tells a coherent story, the post will survive being skimmed — which is how most of it will actually be read.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Rewrite one page you already published',
        brief: [
          {
            kind: 'p',
            text: 'Take a real page of your own — a project page, a service description, a README. Do not write anything new; rewrite what is there.',
          },
          {
            kind: 'ul',
            items: [
              'Rewrite the headline so it fails the swap test — so that putting a competitor’s name in makes it untrue.',
              'Rewrite the primary call-to-action so it describes the reader’s next five minutes, and add one line beside it that removes a risk.',
              'Rewrite the headings so that reading only the headings tells the whole story.',
              'Cut ten per cent of the words without losing anything. There is always ten per cent.',
            ],
          },
          {
            kind: 'p',
            text: 'Format the result as a graphic in Canva if it is going anywhere social — the design work from Module 4 applies directly.',
          },
        ],
        deliverable:
          'The before and after of the headline and CTA, the new heading sequence, and the word count before and after.',
      },
      quiz: [
        {
          kind: 'choice',
          id: 'm9-headline-best',
          prompt: 'Which headline is doing the most work?',
          options: [
            '"Book a bike repair in thirty seconds — no phone call"',
            '"Excellence in bicycle maintenance since 1998"',
            '"Welcome to our new website"',
            '"Innovative solutions for your cycling needs"',
          ],
          answer: 0,
          explain:
            'It states what the reader gets, includes a real number, and would become untrue if you swapped in a competitor who still takes bookings by phone. The other three would sit unchanged on any bicycle shop’s site.',
        },
        {
          kind: 'reflect',
          id: 'm9-headline-rewrite',
          prompt:
            'Here is a weak headline: "Professional web development services tailored to your needs." Rewrite it so that it fails the swap test — so that putting a competitor’s name in front of it would make it untrue.',
          hint: 'Name the specific thing you do, for the specific person, with a number or a concrete outcome in it.',
        },
        {
          kind: 'multi',
          id: 'm9-cta-practice',
          prompt: 'Which of these are sound call-to-action practice?',
          options: [
            'Describing what happens after the click',
            'Using one primary action per screen',
            'Putting risk-removing text beside the button',
            'Adding a countdown timer to a deadline that does not exist',
          ],
          answers: [0, 1, 2],
          explain:
            'The first three all reduce the uncertainty that stops people clicking. A manufactured deadline works once, and costs you credibility on everything you say afterwards.',
        },
        {
          kind: 'choice',
          id: 'm9-tf-submit',
          prompt:
            'True or false: "Submit" is a reasonable default label for a form button, because everyone understands it.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. People understand it, but it describes your system rather than their outcome. "Get the quote" or "Send the enquiry" costs nothing to write and tells the reader what they are about to receive.',
        },
        {
          kind: 'match',
          id: 'm9-tone-match',
          prompt: 'Match each channel to the register that suits it.',
          lefts: [
            'A landing page for a service',
            'A message to your mailing list',
            'A post in a social feed',
            'The text shown when something has failed',
          ],
          rights: [
            'Patient and specific — they chose to be here',
            'One-to-one, as though to a single named person',
            'One idea, no run-up',
            'Short, honest, and says what to do now',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Tone moves by channel while voice stays constant. Error copy is the one people forget to write on purpose, and it is read at the moment someone is least patient with you.',
        },
        {
          kind: 'order',
          id: 'm9-post-structure',
          prompt: 'Put the reusable blog post structure into its working order.',
          steps: [
            'State the problem as the reader would state it',
            'Show why the obvious approach falls short',
            'Name the approach you are proposing',
            'Work through how it goes, with a concrete example at each step',
            'State the trade-off and where it does not apply',
            'Give one next action',
          ],
          explain:
            'The trade-off comes near the end and before the call to action: it is what makes the piece credible rather than promotional, and leaving it out is the most common way a good post reads like an advert.',
        },
        {
          kind: 'reflect',
          id: 'm9-reflect-voice',
          prompt:
            'Describe your own writing voice in three adjectives, then find a paragraph you published that does not match them. What would you change?',
        },
      ],
      recap: [
        'A headline earns the next line by being specific enough that the reader knows whether it concerns them.',
        'The swap test: if a competitor’s name fits your headline unchanged, you wrote a category label.',
        'A call-to-action describes the reader’s next moment, keeps one primary action per screen, and removes risk in the words beside the button.',
        'Voice stays constant; tone moves by channel. Error messages are the highest-stakes copy and the least deliberately written.',
        'Reuse the post skeleton — problem, why the obvious fails, the approach, how it works, the trade-off, one next action — and write the headings first.',
      ],
    },

    nl: {
      title: 'Schrijf woorden die werken',
      subtitle:
        'Koppen die een scroll overleven, calls-to-action waar mensen echt op klikken, en een blogstructuur die je kunt hergebruiken zonder dat het opvalt.',
      abstract:
        'Overtuigende koppen, CTA’s, toon en stem per kanaal, en een herbruikbare blogstructuur. Geen nieuwe tools — schrijfoefening, opgemaakt met Canva.',
      objectives: [
        'Een zwakke kop herschrijven tot één die een specifieke belofte doet.',
        'Een call-to-action schrijven die zegt wat er nu gebeurt in plaats van een bevel te geven.',
        'De toon aanpassen aan het kanaal zonder je stem op te geven.',
        'Een blogpost zo structureren dat wie alleen de koppen leest de strekking nog steeds meekrijgt.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Copywriting is geen decoratief schrijven. Het is de praktische bezigheid om één specifiek idee in iemands hoofd te krijgen terwijl die het druk heeft, wordt afgeleid en geneigd is weg te klikken. Alles in deze module is een manier om dat te respecteren.',
        },
        {
          kind: 'h',
          text: 'Koppen: specifiek verslaat gevat, altijd',
        },
        {
          kind: 'p',
          text: 'Een kop heeft één taak: de volgende regel het lezen waard maken. Dat lukt door specifiek genoeg te zijn dat de lezer kan zien of het over hem gaat. Vaagheid is de faalmodus, en gevatheid is vaagheid in een goede jas.',
        },
        {
          kind: 'ul',
          items: [
            'Zeg wat de lezer krijgt, niet wat jij deed. "We hebben ons reserveringssysteem herbouwd" is jouw nieuws; "Boek een reparatie in dertig seconden" is dat van hen.',
            'Kies een concreet zelfstandig naamwoord en een echt getal boven een bijvoeglijk naamwoord. "Sneller" zegt niets; "laadt binnen een seconde op 4G" zegt iets.',
            'Zet de woorden die tellen vooraan — mensen lezen de eerste drie of vier en beslissen.',
            'Zou de kop onveranderd op de pagina van een concurrent kunnen staan, dan is het geen kop maar een categorielabel.',
          ],
        },
        {
          kind: 'note',
          label: 'De verwisseltoets',
          text: 'Zet de naam van een concurrent in je kop. Leest hij dan nog prima, dan schreef je iets generieks. De beste koppen breken als je het onderwerp verwisselt, omdat er iets in staat dat alleen voor jou geldt.',
        },
        {
          kind: 'h',
          text: 'Calls-to-action: beschrijf het volgende moment',
        },
        {
          kind: 'p',
          text: 'Een call-to-action faalt als hij vraagt om een verbintenis waar de lezer nog niet mee instemde, of als hij verbergt wat er na de klik gebeurt. "Verzenden" beschrijft jouw database. "Ontvang de offerte" beschrijft hun komende vijf minuten.',
        },
        {
          kind: 'ul',
          items: [
            'Gebruik het werkwoord van de lezer voor de uitkomst: ontvang, bekijk, start, boek, download, lees.',
            'Zeg wat er daarna gebeurt als dat niet vanzelf spreekt — of er gebeld wordt, of er betaald moet worden, hoe lang het duurt.',
            'Eén hoofdactie per scherm. Een tweede, even zwaar aangezette knop halveert het effect van de eerste.',
            'Haal het risico weg in de woorden náást de knop, niet in de knop zelf: geen kaart nodig, altijd opzegbaar, we reageren binnen een dag.',
            'Verzin geen urgentie die je niet kunt verantwoorden. Een nepdeadline werkt één keer en kost je het volgende dat je zegt.',
          ],
        },
        {
          kind: 'h',
          text: 'Toon verandert per kanaal; stem niet',
        },
        {
          kind: 'p',
          text: 'Stem is hoe je klinkt — je woordkeus, je formaliteit, of je grappen maakt, hoeveel je slagen om de arm houdt. Die hoort overal hetzelfde te zijn, want daar herkennen mensen je aan. Toon is het register voor een bepaald moment, en dat beweegt.',
        },
        {
          kind: 'ul',
          items: [
            'Een landingspagina is geduldig en specifiek: de lezer koos ervoor hier te zijn en leest door als je een reden geeft.',
            'Een e-mail is één-op-één. Schrijf alsof je één persoon met naam aanspreekt, want zo wordt het gelezen.',
            'Een social post heeft één idee en geen aanloop. Is er aanloop nodig, dan is het een artikel.',
            'Een documentatiepagina is nuchter tot het saai wordt, want iemand leest het terwijl er iets stuk is.',
            'Een foutmelding is kort, eerlijk, en zegt wat de persoon nu moet doen — de tekst met de hoogste inzet op elke site, en het minst vaak bewust geschreven.',
          ],
        },
        {
          kind: 'h',
          text: 'Een blogstructuur die je kunt hergebruiken',
        },
        {
          kind: 'p',
          text: 'De meeste nuttige posts delen hetzelfde skelet. Dat hergebruiken is niet formulematig zolang de inhoud eronder echt is — om dezelfde reden dat gebouwen hun dragende muren op vergelijkbare plekken hebben.',
        },
        {
          kind: 'ol',
          items: [
            'Het probleem, geformuleerd zoals de lezer het zou formuleren, in de eerste twee zinnen.',
            'Waarom de voor de hand liggende aanpak tekortschiet — dit verdient je de rest van de post.',
            'De aanpak die je voorstelt, duidelijk genoeg benoemd om te onthouden.',
            'Hoe het werkt, in stappen of secties, met bij elke stap een concreet voorbeeld.',
            'Wat het kost — de afweging, het voorbehoud, het geval waarin het niet opgaat. Dit weglaten is hoe posts hun geloofwaardigheid verliezen.',
            'Wat je nu doet, één keer, zonder rijtje alternatieven.',
          ],
        },
        {
          kind: 'p',
          text: 'Schrijf eerst de koppen en lees ze los. Vertelt die reeks op zichzelf een samenhangend verhaal, dan overleeft de post het scannen — en zo wordt hij grotendeels gelezen.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Herschrijf één pagina die je al publiceerde',
        brief: [
          {
            kind: 'p',
            text: 'Neem een echte eigen pagina — een projectpagina, een dienstbeschrijving, een README. Schrijf niets nieuws; herschrijf wat er staat.',
          },
          {
            kind: 'ul',
            items: [
              'Herschrijf de kop zodat hij zakt voor de verwisseltoets — zodat de naam van een concurrent erin hem onwaar maakt.',
              'Herschrijf de belangrijkste call-to-action zodat hij de komende vijf minuten van de lezer beschrijft, en zet er één regel naast die een risico wegneemt.',
              'Herschrijf de koppen zodat alleen de koppen lezen het hele verhaal vertelt.',
              'Schrap tien procent van de woorden zonder iets te verliezen. Er zit altijd tien procent in.',
            ],
          },
          {
            kind: 'p',
            text: 'Maak er een graphic van in Canva als het ergens op social terechtkomt — het ontwerpwerk uit module 4 is hier direct van toepassing.',
          },
        ],
        deliverable:
          'De voor- en na-versie van de kop en de CTA, de nieuwe koppenreeks, en het aantal woorden voor en na.',
      },
      quiz: [
        {
          kind: 'choice',
          id: 'm9-headline-best',
          prompt: 'Welke kop doet het meeste werk?',
          options: [
            '"Boek een fietsreparatie in dertig seconden — zonder telefoontje"',
            '"Excellentie in fietsonderhoud sinds 1998"',
            '"Welkom op onze nieuwe website"',
            '"Innovatieve oplossingen voor al uw fietsbehoeften"',
          ],
          answer: 0,
          explain:
            'Hij zegt wat de lezer krijgt, bevat een echt getal, en wordt onwaar zodra je er een concurrent in zet die nog telefonisch werkt. De andere drie zouden onveranderd op de site van elke fietsenmaker passen.',
        },
        {
          kind: 'reflect',
          id: 'm9-headline-rewrite',
          prompt:
            'Hier is een zwakke kop: "Professionele webdevelopment-diensten afgestemd op uw wensen." Herschrijf hem zodat hij zakt voor de verwisseltoets — zodat de naam van een concurrent ervoor hem onwaar zou maken.',
          hint: 'Benoem het specifieke dat jij doet, voor de specifieke persoon, met een getal of een concrete uitkomst erin.',
        },
        {
          kind: 'multi',
          id: 'm9-cta-practice',
          prompt: 'Welke hiervan zijn goede praktijk voor calls-to-action?',
          options: [
            'Beschrijven wat er na de klik gebeurt',
            'Eén hoofdactie per scherm gebruiken',
            'Risico-wegnemende tekst naast de knop zetten',
            'Een aftelklok toevoegen bij een deadline die niet bestaat',
          ],
          answers: [0, 1, 2],
          explain:
            'De eerste drie verkleinen allemaal de onzekerheid die mensen tegenhoudt. Een verzonnen deadline werkt één keer, en kost je geloofwaardigheid bij alles wat je daarna zegt.',
        },
        {
          kind: 'choice',
          id: 'm9-tf-submit',
          prompt:
            'Waar of niet waar: "Verzenden" is een prima standaardlabel voor een formulierknop, want iedereen begrijpt het.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Mensen begrijpen het, maar het beschrijft jouw systeem in plaats van hun uitkomst. "Ontvang de offerte" of "Stuur de aanvraag" kost niets extra en vertelt de lezer wat hij gaat krijgen.',
        },
        {
          kind: 'match',
          id: 'm9-tone-match',
          prompt: 'Koppel elk kanaal aan het register dat erbij past.',
          lefts: [
            'Een landingspagina voor een dienst',
            'Een bericht aan je mailinglijst',
            'Een post in een social feed',
            'De tekst die verschijnt als er iets is misgegaan',
          ],
          rights: [
            'Geduldig en specifiek — ze kozen ervoor hier te zijn',
            'Één-op-één, alsof je één persoon met naam aanspreekt',
            'Één idee, geen aanloop',
            'Kort, eerlijk, en zegt wat je nu doet',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Toon beweegt per kanaal terwijl de stem gelijk blijft. Fouttekst is degene die mensen vergeten bewust te schrijven, en hij wordt gelezen op het moment dat iemand het minste geduld met je heeft.',
        },
        {
          kind: 'order',
          id: 'm9-post-structure',
          prompt: 'Zet de herbruikbare blogstructuur in de juiste werkvolgorde.',
          steps: [
            'Formuleer het probleem zoals de lezer het zou formuleren',
            'Laat zien waarom de voor de hand liggende aanpak tekortschiet',
            'Benoem de aanpak die je voorstelt',
            'Werk uit hoe het gaat, met bij elke stap een concreet voorbeeld',
            'Benoem de afweging en waar het niet opgaat',
            'Geef één volgende actie',
          ],
          explain:
            'De afweging staat achteraan en vóór de call to action: die maakt het stuk geloofwaardig in plaats van promotioneel, en hem weglaten is de meest voorkomende manier waarop een goede post als reclame gaat lezen.',
        },
        {
          kind: 'reflect',
          id: 'm9-reflect-voice',
          prompt:
            'Beschrijf je eigen schrijfstem in drie bijvoeglijke naamwoorden, en zoek dan een alinea die je publiceerde die er niet bij past. Wat zou je veranderen?',
        },
      ],
      recap: [
        'Een kop verdient de volgende regel door specifiek genoeg te zijn dat de lezer weet of het over hem gaat.',
        'De verwisseltoets: past de naam van een concurrent onveranderd in je kop, dan schreef je een categorielabel.',
        'Een call-to-action beschrijft het volgende moment van de lezer, houdt één hoofdactie per scherm aan, en haalt risico weg in de woorden naast de knop.',
        'Stem blijft gelijk; toon beweegt per kanaal. Foutmeldingen hebben de hoogste inzet en worden het minst bewust geschreven.',
        'Hergebruik het skelet — probleem, waarom het voor de hand liggende faalt, de aanpak, hoe het werkt, de afweging, één volgende actie — en schrijf eerst de koppen.',
      ],
    },
  },
};

export default module09;
