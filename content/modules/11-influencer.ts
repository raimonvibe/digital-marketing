import type { Module } from '@/lib/types';

const module11: Module = {
  slug: 'influencer',
  number: 11,
  accent: 'plum',
  minutes: 50,
  content: {
    en: {
      title: "Borrow Someone Else's Audience",
      subtitle:
        'Why the smaller account often outperforms the larger one, how commission structures actually work, and the arithmetic that tells you whether a deal is worth signing.',
      abstract:
        'Influencer partnerships, micro versus macro, affiliate programmes and commission structures, vetting partners and measuring return. Conceptual — no tools.',
      objectives: [
        'Explain the difference between an influencer partnership and an affiliate arrangement.',
        'Match an influencer tier to the job it is suited for.',
        'Read a commission structure and work out what it costs you per sale.',
        'Vet a potential partner beyond their follower count.',
        'Calculate whether a partnership returned more than it cost.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Every other module has been about building your own audience. This one is about renting someone else’s — which is faster, more expensive, and much easier to get wrong, because you are buying something you cannot inspect directly.',
        },
        {
          kind: 'h',
          text: 'Two different arrangements, routinely confused',
        },
        {
          kind: 'ul',
          items: [
            'Influencer partnership — you pay for access and endorsement. The fee is usually fixed and paid whether or not anything sells. You are buying attention and association, and you carry the risk.',
            'Affiliate arrangement — the partner is paid a share of what they actually sell, tracked by a link or code. You pay only for results, which moves the risk onto them.',
          ],
        },
        {
          kind: 'p',
          text: 'The practical consequence is that a fixed fee is a bet on an audience you have not met, while an affiliate deal is nearly free to try and correspondingly harder to interest anyone in. The hybrid — a smaller fee plus commission — is where most real agreements land.',
        },
        {
          kind: 'h',
          text: 'Micro and macro are different products',
        },
        {
          kind: 'p',
          text: 'Follower count is the least useful number in the room, because engagement rate tends to fall as an audience grows. A creator with 8,000 followers who reads their replies frequently outperforms one with 800,000 who does not, for anything requiring trust rather than mere exposure.',
        },
        {
          kind: 'ul',
          items: [
            'Nano, roughly under 10,000 — high engagement, cheap or free, and a genuine relationship with their audience. Best for niche products and honest recommendation. The overhead is that you need several of them.',
            'Micro, roughly 10,000 to 100,000 — the usual sweet spot: still credible, still affordable, and large enough that one partnership is worth the administration.',
            'Macro, roughly 100,000 to a million — reach and legitimacy. You are buying awareness, not persuasion, and paying accordingly.',
            'Mega, above a million — brand association at scale, priced for companies with brand budgets. Almost never the right instrument for a small business.',
          ],
        },
        {
          kind: 'note',
          label: 'What to ask for before the follower count',
          text: 'Ask for screenshots of recent audience-demographic and reach figures — where their audience actually is, and how many people saw the last few posts. Reach on recent posts against follower count is the single most revealing ratio, and a partner who will not show it is telling you something.',
        },
        {
          kind: 'h',
          text: 'Commission structures',
        },
        {
          kind: 'ul',
          items: [
            'Percentage of sale — the standard. Simple, aligns interests, and needs a floor if your margins vary by product.',
            'Fixed amount per sale — better when your prices vary but your margin per unit does not.',
            'Per lead or per sign-up — used when the sale happens later or offline. Invites low-quality volume unless you define what counts as a lead precisely.',
            'Tiered — the rate rises after a threshold. Motivating for serious partners, and it means your cost per sale increases exactly when volume does; check that the maths still works at the top tier.',
            'Recurring — a share of a subscription for its lifetime, or a fixed number of months. Expensive over time and the strongest incentive there is, so cap it deliberately rather than by accident.',
          ],
        },
        {
          kind: 'p',
          text: 'Two clauses matter more than the rate: the cookie window, which decides how long after a click a sale still counts, and the attribution rule, which decides who gets paid when a customer clicked two partners’ links. Leaving either unstated is how affiliate programmes end in arguments.',
        },
        {
          kind: 'h',
          text: 'Vetting, and the ways it goes wrong',
        },
        {
          kind: 'ol',
          items: [
            'Check reach against followers on recent posts. A large gap means either bought followers or an audience that has stopped paying attention.',
            'Read the replies, not the like count. Generic praise in broken English is a bot signature; real questions from real accounts are the thing you are buying.',
            'Check who else they have promoted, and how often. An account that endorses something new every week has trained its audience to ignore endorsements.',
            'Check the audience is where your customers are. Enthusiastic engagement from a country you do not sell in is a cost, not a benefit.',
            'Agree the disclosure. Undisclosed paid promotion is illegal in most jurisdictions, including the Netherlands and the wider EU, and the reputational damage lands on you as much as on them.',
          ],
        },
        {
          kind: 'h',
          text: 'Measuring whether it worked',
        },
        {
          kind: 'p',
          text: 'Give every partner a unique code or link, because without one you are guessing. Then the arithmetic is straightforward: total cost — fee plus commissions plus the product you gave away — against revenue attributed to that partner.',
        },
        {
          kind: 'p',
          text: 'Two adjustments make the number honest. Subtract the sales that would have happened anyway, which for a small audience is usually near zero but is not always. And if what you sell repeats, judge against the customer’s expected value over time rather than the first order — a partnership that loses money on the first purchase can still be the best acquisition channel you have.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Evaluate a partnership offer',
        brief: [
          {
            kind: 'p',
            text: 'A creator with 40,000 followers in your field offers a package: €600 for two posts and a story, plus 10% commission on anything sold through their code, with a 30-day cookie window. Your product sells for €80 with a €48 margin.',
          },
          {
            kind: 'ul',
            items: [
              'Work out how many sales the fixed fee alone needs before it breaks even, accounting for the commission on each of those sales.',
              'Decide what reach and engagement figures you would need to see before believing that number is achievable.',
              'List the three questions you would ask them before agreeing, and say what answer would make you walk away.',
              'Propose a counter-offer that moves more of the risk onto results, and say why a partner might reasonably refuse it.',
            ],
          },
        ],
        deliverable:
          'The break-even calculation, the evidence you would require, your three questions, and the counter-offer with its likely objection.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm11-tiers',
          prompt: 'Match each job to the influencer tier that suits it.',
          lefts: [
            'A niche developer tool that needs a credible personal recommendation',
            'A launch that needs to be seen widely and quickly by a general audience',
            'A tight budget and a willingness to coordinate several partners at once',
            'A national brand campaign with a brand budget behind it',
          ],
          rights: [
            'Micro (10k–100k)',
            'Macro (100k–1M)',
            'Nano (under 10k)',
            'Mega (over 1M)',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Trust falls and reach rises as you go up the tiers. Buy persuasion at the bottom and exposure at the top — and note that a small business almost never needs the top.',
        },
        {
          kind: 'choice',
          id: 'm11-scenario-affiliate',
          prompt:
            'An affiliate offers to promote your €80 product for 25% commission with a 90-day cookie window. Your margin is €30 per sale. What is the problem?',
          options: [
            '25% of €80 is €20, leaving €10 — and the 90-day window means you pay it on sales you would likely have made anyway',
            'Nothing; commission-only deals carry no risk',
            'The cookie window is too short to be useful',
            '25% is below the standard rate for affiliates',
          ],
          answer: 0,
          explain:
            'Commission is calculated on price but paid out of margin. €20 out of a €30 margin leaves almost nothing, and a long cookie window means anyone who clicked once in three months counts as theirs.',
        },
        {
          kind: 'choice',
          id: 'm11-vetting',
          prompt:
            'A potential partner has 200,000 followers, but their recent posts reach about 3,000 people each and the replies are short generic praise. What does this suggest?',
          options: [
            'The follower count does not reflect a live audience — likely bought followers or one that stopped paying attention',
            'They are a bargain, since you pay for followers and get engagement free',
            'The platform is suppressing their posts and will stop soon',
            'Nothing can be inferred from reach figures',
          ],
          answer: 0,
          explain:
            'Reach on recent posts against follower count is the most revealing ratio available. Roughly 1.5% reach with generic replies is the classic signature of an audience that is not really there.',
        },
        {
          kind: 'choice',
          id: 'm11-tf-disclosure',
          prompt:
            'True or false: as long as the content is honest, a paid partnership does not need to be labelled as paid.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. Disclosure of paid promotion is a legal requirement in the Netherlands and across the EU, not a courtesy — and when it comes out, the damage falls on the brand at least as heavily as on the creator.',
        },
        {
          kind: 'multi',
          id: 'm11-terms',
          prompt:
            'Which terms need to be agreed in writing before an affiliate arrangement starts?',
          options: [
            'The cookie window',
            'What happens when a customer clicked two partners’ links',
            'Whether the commission is recurring, and for how long',
            'The partner’s follower count on the day of signing',
          ],
          answers: [0, 1, 2],
          explain:
            'Window, attribution and recurrence are the three that produce disputes when left unstated. Follower count is a reason to sign, not a term of the agreement.',
        },
        {
          kind: 'reflect',
          id: 'm11-reflect-fit',
          prompt:
            'Name one person in your field whose audience overlaps with your customers. What could you offer that would be worth their while, and would you structure it as a fee, commission, or both?',
          hint: 'For a solo developer the answer is often neither — a genuine collaboration or a piece of work they can use is worth more than a small fee.',
        },
      ],
      recap: [
        'An influencer fee buys attention and carries your risk; an affiliate commission pays for results and moves the risk to the partner.',
        'Engagement falls as audiences grow — buy persuasion from small accounts and exposure from large ones.',
        'Reach on recent posts against follower count is the most revealing ratio, and a partner who will not show it is answering you.',
        'Commission is calculated on price but paid out of margin. Check the arithmetic at the top tier and cap recurring deals deliberately.',
        'Cookie window and attribution rules are the clauses that cause disputes; agree them in writing before anything starts.',
        'Disclosure of paid promotion is a legal requirement, and the reputational cost of skipping it lands on you.',
      ],
    },

    nl: {
      title: 'Leen andermans publiek',
      subtitle:
        'Waarom het kleinere account het grotere vaak verslaat, hoe commissiestructuren echt werken, en het rekensommetje dat zegt of een deal het tekenen waard is.',
      abstract:
        'Influencersamenwerkingen, micro versus macro, affiliateprogramma’s en commissiestructuren, partners doorlichten en rendement meten. Conceptueel — geen tools.',
      objectives: [
        'Het verschil uitleggen tussen een influencersamenwerking en een affiliateafspraak.',
        'Een influencercategorie koppelen aan het werk waar hij bij past.',
        'Een commissiestructuur lezen en uitrekenen wat die je per verkoop kost.',
        'Een mogelijke partner doorlichten voorbij het aantal volgers.',
        'Berekenen of een samenwerking meer opleverde dan hij kostte.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Elke andere module ging over je eigen publiek opbouwen. Deze gaat over dat van iemand anders huren — sneller, duurder, en veel makkelijker fout te doen, omdat je iets koopt dat je niet zelf kunt inspecteren.',
        },
        {
          kind: 'h',
          text: 'Twee verschillende afspraken, stelselmatig verward',
        },
        {
          kind: 'ul',
          items: [
            'Influencersamenwerking — je betaalt voor toegang en aanbeveling. Het bedrag ligt meestal vast en wordt betaald of er nu iets verkoopt of niet. Je koopt aandacht en associatie, en jij draagt het risico.',
            'Affiliateafspraak — de partner krijgt een deel van wat hij daadwerkelijk verkoopt, gemeten via een link of code. Je betaalt alleen voor resultaat, waarmee het risico bij hen ligt.',
          ],
        },
        {
          kind: 'p',
          text: 'Het praktische gevolg: een vast bedrag is een gok op een publiek dat je niet hebt ontmoet, terwijl een affiliatedeal bijna gratis te proberen is en juist daarom lastiger om iemand voor te interesseren. De hybride — een kleiner bedrag plus commissie — is waar de meeste echte afspraken landen.',
        },
        {
          kind: 'h',
          text: 'Micro en macro zijn verschillende producten',
        },
        {
          kind: 'p',
          text: 'Het aantal volgers is het minst bruikbare getal in de kamer, omdat de betrokkenheid meestal daalt naarmate een publiek groeit. Een maker met 8.000 volgers die zijn reacties leest verslaat er regelmatig één met 800.000 die dat niet doet, voor alles wat vertrouwen vraagt in plaats van louter zichtbaarheid.',
        },
        {
          kind: 'ul',
          items: [
            'Nano, ruwweg onder 10.000 — hoge betrokkenheid, goedkoop of gratis, en een echte band met hun publiek. Het best voor nicheproducten en oprechte aanbeveling. De rompslomp is dat je er meerdere nodig hebt.',
            'Micro, ruwweg 10.000 tot 100.000 — meestal de zoete plek: nog geloofwaardig, nog betaalbaar, en groot genoeg dat één samenwerking het papierwerk waard is.',
            'Macro, ruwweg 100.000 tot een miljoen — bereik en legitimiteit. Je koopt bekendheid, geen overtuiging, en betaalt daarnaar.',
            'Mega, boven een miljoen — merkassociatie op schaal, geprijsd voor bedrijven met merkbudgetten. Vrijwel nooit het juiste instrument voor een klein bedrijf.',
          ],
        },
        {
          kind: 'note',
          label: 'Wat je vraagt voordat je naar volgers kijkt',
          text: 'Vraag om screenshots van recente publieksdemografie en bereikcijfers — waar hun publiek echt zit, en hoeveel mensen de laatste posts zagen. Bereik op recente posts afgezet tegen het aantal volgers is de meest onthullende verhouding, en een partner die het niet wil laten zien vertelt je iets.',
        },
        {
          kind: 'h',
          text: 'Commissiestructuren',
        },
        {
          kind: 'ul',
          items: [
            'Percentage van de verkoop — de standaard. Eenvoudig, belangen lopen gelijk, en er hoort een ondergrens bij als je marges per product verschillen.',
            'Vast bedrag per verkoop — beter als je prijzen variëren maar je marge per stuk niet.',
            'Per lead of per aanmelding — gebruikt als de verkoop later of offline plaatsvindt. Nodigt uit tot volume van lage kwaliteit tenzij je precies definieert wat als lead telt.',
            'Getrapt — het tarief stijgt na een drempel. Motiverend voor serieuze partners, en het betekent dat je kosten per verkoop stijgen precies wanneer het volume stijgt; controleer of de som ook in de bovenste trap nog klopt.',
            'Terugkerend — een deel van een abonnement voor de looptijd, of een vast aantal maanden. Op termijn duur en de sterkste prikkel die er is, dus begrens hem bewust in plaats van per ongeluk.',
          ],
        },
        {
          kind: 'p',
          text: 'Twee bepalingen tellen zwaarder dan het tarief: het cookievenster, dat bepaalt hoe lang na een klik een verkoop nog meetelt, en de attributieregel, die bepaalt wie betaald krijgt als een klant op de links van twee partners klikte. Een van beide onbenoemd laten is hoe affiliateprogramma’s in ruzie eindigen.',
        },
        {
          kind: 'h',
          text: 'Doorlichten, en hoe dat misgaat',
        },
        {
          kind: 'ol',
          items: [
            'Vergelijk bereik met volgers op recente posts. Een groot gat betekent gekochte volgers of een publiek dat niet meer oplet.',
            'Lees de reacties, niet het aantal likes. Algemene lof in gebrekkig Engels is het handschrift van bots; echte vragen van echte accounts zijn wat je koopt.',
            'Kijk wie ze verder hebben gepromoot, en hoe vaak. Een account dat elke week iets nieuws aanbeveelt heeft zijn publiek geleerd aanbevelingen te negeren.',
            'Controleer of het publiek zit waar jouw klanten zitten. Enthousiaste betrokkenheid uit een land waar je niet verkoopt is een kostenpost, geen voordeel.',
            'Spreek de vermelding af. Niet-vermelde betaalde promotie is in de meeste rechtsgebieden verboden, ook in Nederland en de rest van de EU, en de reputatieschade komt net zo hard bij jou terecht als bij hen.',
          ],
        },
        {
          kind: 'h',
          text: 'Meten of het werkte',
        },
        {
          kind: 'p',
          text: 'Geef elke partner een eigen code of link, want zonder gok je. Daarna is de rekensom recht-toe-recht-aan: totale kosten — vergoeding plus commissies plus het product dat je weggaf — tegenover de omzet die aan die partner is toe te schrijven.',
        },
        {
          kind: 'p',
          text: 'Twee correcties maken het getal eerlijk. Trek de verkopen af die er toch wel waren gekomen, wat bij een klein publiek meestal bijna nul is maar niet altijd. En herhaalt wat je verkoopt zich, beoordeel dan tegen de verwachte waarde van de klant over tijd in plaats van tegen de eerste bestelling — een samenwerking die op de eerste aankoop verlies draait kan nog steeds je beste acquisitiekanaal zijn.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Beoordeel een samenwerkingsvoorstel',
        brief: [
          {
            kind: 'p',
            text: 'Een maker met 40.000 volgers in jouw vakgebied biedt een pakket: €600 voor twee posts en een story, plus 10% commissie op alles dat via hun code verkoopt, met een cookievenster van 30 dagen. Jouw product kost €80 met een marge van €48.',
          },
          {
            kind: 'ul',
            items: [
              'Reken uit hoeveel verkopen alleen al de vaste vergoeding nodig heeft om quitte te spelen, inclusief de commissie op elk van die verkopen.',
              'Bepaal welke bereik- en betrokkenheidscijfers je zou moeten zien voordat je gelooft dat dat aantal haalbaar is.',
              'Noteer de drie vragen die je zou stellen voor je akkoord gaat, en zeg welk antwoord je zou doen afhaken.',
              'Stel een tegenvoorstel op dat meer risico naar resultaat verschuift, en zeg waarom een partner dat redelijkerwijs zou kunnen weigeren.',
            ],
          },
        ],
        deliverable:
          'De break-evenberekening, het bewijs dat je zou eisen, je drie vragen, en het tegenvoorstel met het te verwachten bezwaar.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm11-tiers',
          prompt: 'Koppel elk doel aan de influencercategorie die erbij past.',
          lefts: [
            'Een niche-developertool die een geloofwaardige persoonlijke aanbeveling nodig heeft',
            'Een lancering die breed en snel gezien moet worden door een algemeen publiek',
            'Een krap budget en de bereidheid meerdere partners tegelijk te coördineren',
            'Een landelijke merkcampagne met een merkbudget erachter',
          ],
          rights: [
            'Micro (10k–100k)',
            'Macro (100k–1M)',
            'Nano (onder 10k)',
            'Mega (boven 1M)',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Vertrouwen daalt en bereik stijgt naarmate je de categorieën opgaat. Koop overtuiging onderaan en zichtbaarheid bovenaan — en merk op dat een klein bedrijf de bovenkant vrijwel nooit nodig heeft.',
        },
        {
          kind: 'choice',
          id: 'm11-scenario-affiliate',
          prompt:
            'Een affiliate biedt aan je product van €80 te promoten voor 25% commissie met een cookievenster van 90 dagen. Je marge is €30 per verkoop. Wat is het probleem?',
          options: [
            '25% van €80 is €20, er blijft €10 over — en met 90 dagen betaal je die ook over verkopen die er waarschijnlijk toch waren gekomen',
            'Niets; deals op commissiebasis dragen geen risico',
            'Het cookievenster is te kort om nuttig te zijn',
            '25% ligt onder het gangbare tarief voor affiliates',
          ],
          answer: 0,
          explain:
            'Commissie wordt berekend over de prijs maar betaald uit de marge. €20 uit een marge van €30 laat vrijwel niets over, en een lang cookievenster betekent dat iedereen die in drie maanden één keer klikte voor hen telt.',
        },
        {
          kind: 'choice',
          id: 'm11-vetting',
          prompt:
            'Een mogelijke partner heeft 200.000 volgers, maar recente posts bereiken zo’n 3.000 mensen elk en de reacties zijn korte algemene lof. Wat zegt dat?',
          options: [
            'Het volgersaantal weerspiegelt geen levend publiek — waarschijnlijk gekochte volgers of een publiek dat is afgehaakt',
            'Ze zijn een koopje: je betaalt voor volgers en krijgt betrokkenheid gratis',
            'Het platform onderdrukt hun posts en stopt daar binnenkort mee',
            'Uit bereikcijfers valt niets af te leiden',
          ],
          answer: 0,
          explain:
            'Bereik op recente posts afgezet tegen volgers is de meest onthullende verhouding die er is. Ruwweg 1,5% bereik met algemene reacties is het klassieke handschrift van een publiek dat er niet echt is.',
        },
        {
          kind: 'choice',
          id: 'm11-tf-disclosure',
          prompt:
            'Waar of niet waar: zolang de inhoud eerlijk is, hoeft een betaalde samenwerking niet als betaald te worden aangeduid.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Het vermelden van betaalde promotie is een wettelijke eis in Nederland en de hele EU, geen beleefdheid — en als het uitkomt valt de schade minstens zo hard op het merk als op de maker.',
        },
        {
          kind: 'multi',
          id: 'm11-terms',
          prompt:
            'Welke voorwaarden moeten op papier staan voordat een affiliateafspraak begint?',
          options: [
            'Het cookievenster',
            'Wat er gebeurt als een klant op de links van twee partners klikte',
            'Of de commissie terugkerend is, en hoe lang',
            'Het aantal volgers van de partner op de dag van tekenen',
          ],
          answers: [0, 1, 2],
          explain:
            'Venster, attributie en herhaling zijn de drie die tot conflicten leiden als ze onbenoemd blijven. Het volgersaantal is een reden om te tekenen, geen bepaling in de overeenkomst.',
        },
        {
          kind: 'reflect',
          id: 'm11-reflect-fit',
          prompt:
            'Noem één persoon in je vakgebied wiens publiek overlapt met jouw klanten. Wat zou je kunnen bieden dat voor hen de moeite waard is, en zou je het als vergoeding, commissie of allebei opzetten?',
          hint: 'Voor een zelfstandige developer is het antwoord vaak geen van beide — een echte samenwerking of een stuk werk dat ze kunnen gebruiken is meer waard dan een klein bedrag.',
        },
      ],
      recap: [
        'Een influencervergoeding koopt aandacht en laat het risico bij jou; een affiliatecommissie betaalt voor resultaat en verschuift het risico naar de partner.',
        'Betrokkenheid daalt naarmate publiek groeit — koop overtuiging bij kleine accounts en zichtbaarheid bij grote.',
        'Bereik op recente posts tegenover volgers is de meest onthullende verhouding, en een partner die het niet toont geeft daarmee antwoord.',
        'Commissie wordt over de prijs berekend maar uit de marge betaald. Controleer de som in de bovenste trap en begrens terugkerende deals bewust.',
        'Cookievenster en attributieregels zijn de bepalingen die conflicten geven; leg ze vast voordat er iets begint.',
        'Betaalde promotie vermelden is een wettelijke eis, en de reputatiekosten van het overslaan komen bij jou terecht.',
      ],
    },
  },
};

export default module11;
