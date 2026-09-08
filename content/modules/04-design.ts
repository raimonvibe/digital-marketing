import type { Module } from '@/lib/types';

const module04: Module = {
  slug: 'design',
  number: 4,
  accent: 'purple',
  minutes: 60,
  content: {
    en: {
      title: 'Design It Yourself',
      subtitle:
        'Three principles that do most of the work, the formats each channel actually wants, and one Instagram post for a project you built.',
      abstract:
        'Contrast, hierarchy and whitespace, applied in Canva to make marketing graphics without hiring a designer.',
      objectives: [
        'Apply contrast, hierarchy and whitespace to judge whether a graphic works.',
        'Choose the right dimensions and format for a given channel.',
        'Produce a finished social graphic in Canva from a template you have changed on purpose.',
        'Explain why using a template unmodified is a branding problem.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'You do not need taste to make a usable marketing graphic. You need three principles applied consistently, and the discipline to change a template enough that it stops looking like the template.',
        },
        {
          kind: 'h',
          text: 'Contrast: the thing that must be seen, is seen',
        },
        {
          kind: 'p',
          text: 'Contrast is difference big enough to register — in size, weight, colour or space. The commonest failure is timidity: a headline slightly larger than the body text, in a slightly darker grey, reads as a mistake rather than a decision. If two things have different jobs, make them obviously different.',
        },
        {
          kind: 'p',
          text: 'Contrast is also an accessibility requirement, not a preference. Text needs a real luminance difference from its background to be readable by people with low vision, on a phone in daylight, or on a cheap screen. Light grey text on white fails all three.',
        },
        {
          kind: 'h',
          text: 'Hierarchy: one thing first, and only one',
        },
        {
          kind: 'p',
          text: 'Hierarchy is the order in which a viewer takes things in. Every graphic should have exactly one element that arrives first, and everything else should be visibly subordinate to it. The test is simple: show it to someone for one second and ask what it said. If they cannot answer, there are two first things and no hierarchy.',
        },
        {
          kind: 'p',
          text: 'This is where most self-made graphics fail, because everything on them feels important to the person who made it. Deciding what comes second is the actual work.',
        },
        {
          kind: 'h',
          text: 'Whitespace: the cheapest quality signal there is',
        },
        {
          kind: 'p',
          text: 'Whitespace is unfilled area, and treating it as waste is what makes a design look amateur. Space around an element is what makes it look deliberate; space between groups is what tells the eye which things belong together. Increasing the margins is the single fastest improvement to almost any first draft.',
        },
        {
          kind: 'note',
          label: 'The one-second test',
          text: 'Before publishing anything, look at it for one second, then look away and say what it told you. If the answer is "something about a website", the hierarchy is not doing its job — no amount of colour will fix that.',
        },
        {
          kind: 'h',
          text: 'Formats: the channel decides the shape',
        },
        {
          kind: 'ul',
          items: [
            'Square (1:1) — the safe default for a feed post; it survives most crops.',
            'Portrait (4:5) — takes more vertical space in a feed, which is why it outperforms square when the platform allows it.',
            'Vertical full-screen (9:16) — stories and short video. Keep anything important away from the top and bottom, where the interface sits.',
            'Landscape (16:9) — video thumbnails, presentation slides, link previews.',
            'Wide banner (roughly 3:1) — email headers and site heroes, where the height is constrained but the width is not.',
          ],
        },
        {
          kind: 'p',
          text: 'Two file-format rules cover almost everything: PNG for graphics with text and flat colour, JPEG for photographs, and SVG whenever it is a logo or icon you control. Text rendered as a JPEG at low quality is the most common self-inflicted quality problem in marketing graphics.',
        },
      ],
      lessons: [
        {
          id: 'canva',
          tool: 'canva',
          title: 'Make One Post for Something You Built',
          what: [
            {
              kind: 'p',
              text: 'Canva is a browser design tool built around templates with the correct dimensions already set for every channel. The free tier covers everything in this module.',
            },
            {
              kind: 'p',
              text: 'Its real value is not the templates but the constraints: correct sizes, alignment guides, and a font pairing that is at least defensible. It removes the excuses for not producing anything.',
            },
            {
              kind: 'p',
              text: 'Its risk is the same thing. A template used unchanged is recognisable as that template, and being recognisably generic is worse than being plain.',
            },
          ],
          why: 'Designing your own assets means you can publish the day you have something to say, instead of waiting on someone else. For a solo business, speed of publishing beats polish almost every time — as long as the result is legible and does not look like everyone else’s.',
          mission:
            'Create a free Canva account and design one Instagram post promoting a project of your own — Metro Amsterdam Live, Eleven Up, or whatever you are building now. Start from a template, then change at least the type, the colours and the layout so it no longer looks like the original.',
          missionUrl: 'https://www.canva.com/',
          missionCta: 'Open Canva',
          check: {
            kind: 'reflect',
            id: 'm4-canva-reflect',
            prompt:
              'What template did you start from, and what did you change? Then apply the one-second test to your result and write down what it told you.',
            hint: 'If your answer to "what did you change" is only the words and the photo, it is still the template.',
          },
        },
      ],
      quiz: [
        {
          kind: 'choice',
          id: 'm4-hierarchy',
          prompt:
            'A poster has a headline, a photo, a paragraph and a button, and all four are competing for attention. Which principle is being broken?',
          options: [
            'Hierarchy — nothing has been made clearly first',
            'Contrast — the colours are too similar',
            'Whitespace — the margins are too wide',
            'None; four elements is simply too many for one graphic',
          ],
          answer: 0,
          explain:
            'Four elements is fine. The problem is that none of them has been made subordinate. Hierarchy means deciding what arrives first and making everything else visibly second.',
        },
        {
          kind: 'choice',
          id: 'm4-whitespace',
          prompt:
            'A client says your draft "looks empty" and asks you to fill the space. What is the strongest reply?',
          options: [
            'The space is what makes the message read as one clear thing rather than a crowded notice',
            'Agree and add a stock photo and a border',
            'Agree and increase every font size until the space is used',
            'Explain that whitespace is required by Instagram',
          ],
          answer: 0,
          explain:
            'Whitespace is what makes an element look deliberate and shows which things belong together. Filling space is the fastest way to make a design look cheap — and it is not a platform requirement, so do not pretend it is.',
        },
        {
          kind: 'match',
          id: 'm4-formats',
          prompt: 'Match each use to the format that fits it.',
          lefts: [
            'A story that fills a phone screen top to bottom',
            'A header image across the top of a marketing email',
            'A logo that must stay sharp at every size',
            'A photograph of a workspace, for a feed post',
          ],
          rights: [
            'Vertical 9:16',
            'Wide banner, roughly 3:1',
            'SVG',
            'JPEG at 4:5',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Shape is decided by where it will be seen; file type is decided by what it contains. Flat colour and text want PNG or SVG; photographs want JPEG.',
        },
        {
          kind: 'multi',
          id: 'm4-contrast',
          prompt: 'Which of these are genuine contrast problems?',
          options: [
            'Light grey body text on a white background',
            'A headline only two points larger than the body text',
            'A headline in a different typeface from the body text',
            'A pale yellow call-to-action button with white text on it',
          ],
          answers: [0, 1, 3],
          explain:
            'Insufficient luminance difference and a barely-larger headline are both failures of contrast — and the pale button fails the same test where it matters most. Using a different typeface for headings is contrast working correctly.',
        },
        {
          kind: 'choice',
          id: 'm4-tf-template',
          prompt:
            'True or false: publishing a Canva template with only the text swapped is fine, because nobody notices templates.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. People may not name the template, but they recognise the genre — and looking like every other business using the same tool undoes the reason you made a branded graphic at all.',
        },
        {
          kind: 'reflect',
          id: 'm4-reflect-brand',
          prompt:
            'Pick two typefaces and three colours you would use for everything you publish for the next year. Write them down here — that list is your design system, and having one is most of the battle.',
          hint: 'One display face, one text face, one ink colour, one background, one accent. Anything more is a decision you will keep re-making.',
        },
      ],
      recap: [
        'Contrast means differences big enough to register, and it is an accessibility requirement rather than a taste preference.',
        'Hierarchy means exactly one element arrives first; the one-second test tells you whether it does.',
        'Whitespace is what makes a design look deliberate — widening the margins improves almost every first draft.',
        'The channel decides the shape and the content decides the file type: PNG or SVG for flat colour and text, JPEG for photographs.',
        'A template used unmodified is recognisable as a template. Change the type, colour and layout, or the graphic works against you.',
      ],
    },

    nl: {
      title: 'Ontwerp het zelf',
      subtitle:
        'Drie principes die het meeste werk doen, de formaten die elk kanaal echt wil, en één Instagrampost voor een project dat je zelf bouwde.',
      abstract:
        'Contrast, hiërarchie en witruimte, toegepast in Canva om marketinggraphics te maken zonder ontwerper.',
      objectives: [
        'Contrast, hiërarchie en witruimte toepassen om te beoordelen of een graphic werkt.',
        'De juiste afmetingen en bestandsindeling kiezen voor een bepaald kanaal.',
        'Een afgeronde social graphic maken in Canva, uit een sjabloon dat je bewust hebt veranderd.',
        'Uitleggen waarom een ongewijzigd sjabloon een merkprobleem is.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Je hebt geen smaak nodig om een bruikbare marketinggraphic te maken. Je hebt drie principes nodig die je consequent toepast, en de discipline om een sjabloon zo ver te veranderen dat het niet meer op het sjabloon lijkt.',
        },
        {
          kind: 'h',
          text: 'Contrast: wat gezien moet worden, wordt gezien',
        },
        {
          kind: 'p',
          text: 'Contrast is verschil dat groot genoeg is om te registreren — in grootte, gewicht, kleur of ruimte. De meest gemaakte fout is schroom: een kop die iets groter is dan de broodtekst, in een iets donkerder grijs, leest als een vergissing en niet als een keuze. Hebben twee dingen een andere taak, maak ze dan zichtbaar anders.',
        },
        {
          kind: 'p',
          text: 'Contrast is bovendien een toegankelijkheidseis, geen voorkeur. Tekst heeft een echt luminantieverschil met de achtergrond nodig om leesbaar te zijn voor mensen met een visuele beperking, op een telefoon in daglicht, of op een goedkoop scherm. Lichtgrijze tekst op wit faalt op alle drie.',
        },
        {
          kind: 'h',
          text: 'Hiërarchie: één ding eerst, en maar één',
        },
        {
          kind: 'p',
          text: 'Hiërarchie is de volgorde waarin een kijker dingen opneemt. Elke graphic hoort precies één element te hebben dat als eerste binnenkomt, en al het andere hoort daar zichtbaar onder te staan. De toets is simpel: laat het iemand één seconde zien en vraag wat er stond. Kunnen ze dat niet zeggen, dan zijn er twee eerste dingen en geen hiërarchie.',
        },
        {
          kind: 'p',
          text: 'Hier gaan de meeste zelfgemaakte graphics de mist in, omdat alles erop belangrijk voelt voor degene die het maakte. Bepalen wat als tweede komt, is het eigenlijke werk.',
        },
        {
          kind: 'h',
          text: 'Witruimte: het goedkoopste kwaliteitssignaal dat er is',
        },
        {
          kind: 'p',
          text: 'Witruimte is onbenut vlak, en het als verspilling behandelen is precies wat een ontwerp amateuristisch maakt. Ruimte rond een element laat het doelbewust lijken; ruimte tussen groepen vertelt het oog wat bij elkaar hoort. De marges vergroten is de snelste verbetering van vrijwel elke eerste versie.',
        },
        {
          kind: 'note',
          label: 'De één-secondetoets',
          text: 'Kijk voor je iets publiceert één seconde, kijk dan weg en zeg wat het je vertelde. Is het antwoord "iets over een website", dan doet de hiërarchie haar werk niet — en geen hoeveelheid kleur repareert dat.',
        },
        {
          kind: 'h',
          text: 'Formaten: het kanaal bepaalt de vorm',
        },
        {
          kind: 'ul',
          items: [
            'Vierkant (1:1) — de veilige standaard voor een feedpost; overleeft de meeste bijsnijdingen.',
            'Portret (4:5) — neemt meer verticale ruimte in een feed, en presteert daarom beter dan vierkant als het platform het toestaat.',
            'Verticaal schermvullend (9:16) — stories en korte video. Houd alles wat telt weg van boven- en onderkant, waar de interface zit.',
            'Liggend (16:9) — videothumbnails, presentatiedia’s, linkvoorbeelden.',
            'Brede banner (ongeveer 3:1) — e-mailkoppen en site-headers, waar de hoogte beperkt is en de breedte niet.',
          ],
        },
        {
          kind: 'p',
          text: 'Twee regels over bestandsformaten dekken bijna alles: PNG voor graphics met tekst en vlakke kleur, JPEG voor foto’s, en SVG zodra het een logo of icoon is dat jij beheert. Tekst weggeschreven als JPEG met lage kwaliteit is het meest zelf veroorzaakte kwaliteitsprobleem in marketinggraphics.',
        },
      ],
      lessons: [
        {
          id: 'canva',
          tool: 'canva',
          title: 'Maak één post voor iets dat je bouwde',
          what: [
            {
              kind: 'p',
              text: 'Canva is een ontwerptool in de browser, opgebouwd rond sjablonen waarvan de afmetingen voor elk kanaal al kloppen. Het gratis pakket dekt alles in deze module.',
            },
            {
              kind: 'p',
              text: 'De echte waarde zit niet in de sjablonen maar in de beperkingen: kloppende maten, uitlijnhulplijnen en een lettercombinatie die op zijn minst te verdedigen is. Het haalt de excuses weg om niets te maken.',
            },
            {
              kind: 'p',
              text: 'Het risico is hetzelfde. Een ongewijzigd sjabloon is herkenbaar als dát sjabloon, en herkenbaar generiek zijn is erger dan sober zijn.',
            },
          ],
          why: 'Je eigen materiaal ontwerpen betekent dat je kunt publiceren op de dag dat je iets te zeggen hebt, in plaats van op iemand anders te wachten. Voor een eenmanszaak wint publicatiesnelheid het bijna altijd van glans — zolang het resultaat leesbaar is en niet op ieders werk lijkt.',
          mission:
            'Maak een gratis Canva-account en ontwerp één Instagrampost voor een eigen project — Metro Amsterdam Live, Eleven Up, of waar je nu aan bouwt. Begin bij een sjabloon en verander minstens de typografie, de kleuren en de indeling, zodat het niet meer op het origineel lijkt.',
          missionUrl: 'https://www.canva.com/',
          missionCta: 'Open Canva',
          check: {
            kind: 'reflect',
            id: 'm4-canva-reflect',
            prompt:
              'Met welk sjabloon begon je, en wat heb je veranderd? Doe daarna de één-secondetoets op je resultaat en schrijf op wat het je vertelde.',
            hint: 'Is je antwoord op "wat heb je veranderd" alleen de tekst en de foto, dan is het nog steeds het sjabloon.',
          },
        },
      ],
      quiz: [
        {
          kind: 'choice',
          id: 'm4-hierarchy',
          prompt:
            'Een poster heeft een kop, een foto, een alinea en een knop, en alle vier vechten om aandacht. Welk principe wordt geschonden?',
          options: [
            'Hiërarchie — niets is duidelijk als eerste aangewezen',
            'Contrast — de kleuren lijken te veel op elkaar',
            'Witruimte — de marges zijn te breed',
            'Geen; vier elementen zijn simpelweg te veel voor één graphic',
          ],
          answer: 0,
          explain:
            'Vier elementen is prima. Het probleem is dat geen ervan ondergeschikt is gemaakt. Hiërarchie betekent bepalen wat als eerste binnenkomt en de rest zichtbaar tweede maken.',
        },
        {
          kind: 'choice',
          id: 'm4-whitespace',
          prompt:
            'Een klant zegt dat je ontwerp "leeg oogt" en vraagt de ruimte op te vullen. Wat is het sterkste antwoord?',
          options: [
            'Die ruimte zorgt juist dat de boodschap als één duidelijk ding leest en niet als een volgeplakt bord',
            'Instemmen en er een stockfoto en een kader bij zetten',
            'Instemmen en alle tekstgroottes ophogen tot de ruimte op is',
            'Uitleggen dat witruimte verplicht is van Instagram',
          ],
          answer: 0,
          explain:
            'Witruimte laat een element doelbewust lijken en toont wat bij elkaar hoort. Ruimte opvullen is de snelste manier om een ontwerp goedkoop te laten ogen — en het is geen platformeis, dus doe niet alsof.',
        },
        {
          kind: 'match',
          id: 'm4-formats',
          prompt: 'Koppel elk gebruik aan het formaat dat erbij past.',
          lefts: [
            'Een story die een telefoonscherm van boven tot onder vult',
            'Een koptekstafbeelding bovenaan een marketingmail',
            'Een logo dat op elk formaat scherp moet blijven',
            'Een foto van een werkplek, voor een feedpost',
          ],
          rights: [
            'Verticaal 9:16',
            'Brede banner, ongeveer 3:1',
            'SVG',
            'JPEG op 4:5',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'De vorm wordt bepaald door waar het te zien is; het bestandstype door wat erin zit. Vlakke kleur en tekst willen PNG of SVG; foto’s willen JPEG.',
        },
        {
          kind: 'multi',
          id: 'm4-contrast',
          prompt: 'Welke hiervan zijn echte contrastproblemen?',
          options: [
            'Lichtgrijze broodtekst op een witte achtergrond',
            'Een kop die maar twee punten groter is dan de broodtekst',
            'Een kop in een ander lettertype dan de broodtekst',
            'Een lichtgele call-to-action-knop met witte tekst erop',
          ],
          answers: [0, 1, 3],
          explain:
            'Te weinig luminantieverschil en een nauwelijks grotere kop zijn beide contrastfouten — en de bleke knop faalt dezelfde toets waar het het meest telt. Een ander lettertype voor koppen is contrast dat juist goed werkt.',
        },
        {
          kind: 'choice',
          id: 'm4-tf-template',
          prompt:
            'Waar of niet waar: een Canva-sjabloon publiceren met alleen de tekst vervangen kan prima, want niemand herkent sjablonen.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Mensen benoemen het sjabloon misschien niet, maar ze herkennen het genre — en eruitzien als elk ander bedrijf met dezelfde tool haalt precies de reden onderuit waarom je een eigen graphic maakte.',
        },
        {
          kind: 'reflect',
          id: 'm4-reflect-brand',
          prompt:
            'Kies twee lettertypen en drie kleuren die je het komende jaar voor alles gebruikt wat je publiceert. Schrijf ze hier op — dat lijstje is je designsysteem, en er één hebben is het halve werk.',
          hint: 'Eén displayletter, één tekstletter, één inktkleur, één achtergrond, één accent. Meer is een beslissing die je steeds opnieuw gaat nemen.',
        },
      ],
      recap: [
        'Contrast betekent verschillen die groot genoeg zijn om te registreren, en het is een toegankelijkheidseis, geen smaakkwestie.',
        'Hiërarchie betekent dat precies één element als eerste binnenkomt; de één-secondetoets vertelt je of dat lukt.',
        'Witruimte laat een ontwerp doelbewust ogen — bredere marges verbeteren vrijwel elke eerste versie.',
        'Het kanaal bepaalt de vorm en de inhoud bepaalt het bestandstype: PNG of SVG voor vlakke kleur en tekst, JPEG voor foto’s.',
        'Een ongewijzigd sjabloon is herkenbaar als sjabloon. Verander typografie, kleur en indeling, of de graphic werkt tegen je.',
      ],
    },
  },
};

export default module04;
