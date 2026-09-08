import type { Module } from '@/lib/types';

const module08: Module = {
  slug: 'loyalty',
  number: 8,
  accent: 'rose',
  minutes: 60,
  content: {
    en: {
      title: 'Keep the Customers You Win',
      subtitle:
        'The cheapest growth available, why client relationships fail on communication rather than quality, and what to do with the portfolio nobody is paying you for.',
      abstract:
        'Repeat business, managing client relationships, measuring satisfaction, and portfolio building. Conceptual — no tools.',
      objectives: [
        'Explain why retention is cheaper than acquisition and what that changes about where you spend effort.',
        'Match a loyalty tactic to the type of customer it suits.',
        'Name the communication habits that keep client relationships intact.',
        'Describe how satisfaction is measured, and the limits of each measure.',
        'Decide what a portfolio is for when you are not selling anything.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Everything up to here has been about being found and being chosen. This module is about the part that decides whether any of it was worth doing: whether the people who chose you once do it again.',
        },
        {
          kind: 'h',
          text: 'The arithmetic of repeat business',
        },
        {
          kind: 'p',
          text: 'Winning a new customer costs money and time — the ad, the proposal, the calls, the negotiation. Serving an existing one who already trusts you skips most of that. The second project with the same client is more profitable than the first even at the same price, because the cost of getting it was a conversation rather than a campaign.',
        },
        {
          kind: 'p',
          text: 'That has a practical consequence most small businesses ignore: an hour spent on a past client is usually worth more than an hour spent on a stranger, and almost nobody allocates their time that way. Marketing is more visibly productive, which is exactly why it wins the hour it should not.',
        },
        {
          kind: 'h',
          text: 'Loyalty tactics are not one thing',
        },
        {
          kind: 'p',
          text: 'The tactic has to fit the customer, and the commonest mistake is applying a high-frequency retail tactic to a low-frequency professional relationship. Points do not work on someone who hires you twice a year.',
        },
        {
          kind: 'ul',
          items: [
            'Frequent, low-value purchases — a reason to come back that accumulates: a card, points, a subscription, a members’ price.',
            'Infrequent, high-value purchases — proactive contact, remembering context, and being the person they think of first. No scheme; a relationship.',
            'One-off purchases with a long life — support that continues after the sale, and useful contact when something changes that affects them.',
            'Subscribers — onboarding that gets them to the point of value quickly, then not going quiet between renewals.',
            'People who bought once and vanished — one honest, specific message asking whether they still need what you do, and taking silence as an answer.',
          ],
        },
        {
          kind: 'h',
          text: 'Client relationships fail on communication first',
        },
        {
          kind: 'p',
          text: 'Long-running relationships rarely end over the work being bad. They end over silence, surprises and the sense that something was hidden. Four habits cover most of it.',
        },
        {
          kind: 'ol',
          items: [
            'Say when things will happen, and say something when they will not. A delay announced in advance is a fact; a delay discovered by the client is a character flaw.',
            'Put money in writing before the work, not after. Almost every serious dispute is a scope conversation that never happened.',
            'Report progress on a rhythm the client did not have to ask for. Silence is read as trouble, and reading it that way is reasonable.',
            'When something goes wrong, be the one who says so first. The cost of a mistake you reported is a fraction of the cost of a mistake they found.',
          ],
        },
        {
          kind: 'note',
          label: 'The most valuable sentence in client work',
          text: '"That is outside what we agreed — here is what it would take." It protects the project, it protects the relationship, and it is much easier to say early than three unpaid changes later.',
        },
        {
          kind: 'h',
          text: 'Measuring satisfaction, and the limits of it',
        },
        {
          kind: 'p',
          text: 'You can measure satisfaction, but every measure is a proxy and each fails differently. Knowing how they fail is more useful than the numbers.',
        },
        {
          kind: 'ul',
          items: [
            'Net Promoter Score — "how likely are you to recommend us". Widely used, easy to compare, and easy to game; a single number that hides why.',
            'Customer satisfaction score — asked right after an interaction, so it captures the moment rather than the relationship.',
            'Repeat purchase rate — behaviour rather than opinion, and therefore the honest one, but slow.',
            'Churn — the share who leave in a period. The clearest signal, arriving after it is too late to act on that customer.',
            'What they actually say — the least structured, hardest to chart, and usually the only one that tells you what to change.',
          ],
        },
        {
          kind: 'h',
          text: 'A portfolio when nothing is for sale',
        },
        {
          kind: 'p',
          text: 'Portfolio work has a different job when you are not monetising: it is a record of what you can do, an argument that you finish things, and — most usefully — a set of concrete artefacts to point at in conversations that have not happened yet.',
        },
        {
          kind: 'p',
          text: 'What makes a portfolio piece work is not the polish of the screenshot. It is that it states the problem, what you decided, and what happened as a result. A project with no stated problem is decoration; a project with a problem, a decision and an outcome is evidence.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Turn one past client into a second project',
        brief: [
          {
            kind: 'p',
            text: 'Pick a real client or contact you worked with more than six months ago and have not spoken to since. You are going to plan the re-approach properly rather than sending a "just checking in" message.',
          },
          {
            kind: 'ul',
            items: [
              'Write down what you actually know about their situation, and what has probably changed since you finished.',
              'Identify one specific, useful thing you could tell them that is true whether or not they hire you — a risk, an expiry, something that has moved on since you built it.',
              'Draft the message around that thing. It should be sendable even if they never reply, and it should not contain the phrase "just checking in".',
              'Decide what you will do if there is no reply, and when. Then write that date down.',
            ],
          },
        ],
        deliverable:
          'The drafted message, the specific useful thing it leads with, and the date you have set for the follow-up.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm8-tactics-match',
          prompt: 'Match each type of customer to the loyalty tactic that suits them.',
          lefts: [
            'Buys something small most weeks',
            'Hires you for a large project roughly once a year',
            'Bought one thing that will last a decade',
            'Pays monthly and has not logged in for five weeks',
          ],
          rights: [
            'An accumulating reward — points, a card, a members’ price',
            'Proactive personal contact and remembered context',
            'Post-sale support and useful notice when something changes',
            'Onboarding help to reach the point of value',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Frequency decides the tactic. A points scheme is wasted on someone who buys annually, and a personal check-in does not scale to a weekly purchase — applying either to the wrong customer is the standard mistake.',
        },
        {
          kind: 'choice',
          id: 'm8-scenario-repeat',
          prompt:
            'A client had one site built by you eighteen months ago and has not been in touch. What is the strongest way to reopen the conversation?',
          options: [
            'Tell them one specific, useful thing about their situation that is true whether or not they hire you',
            'Send a general "just checking in, let me know if you need anything"',
            'Send your updated rate card',
            'Wait — if they need something they will get in touch',
          ],
          answer: 0,
          explain:
            'A specific observation earns the reply: it proves you looked, and it is useful even if they do nothing. "Just checking in" asks them to do the work of finding a reason, and waiting cedes the relationship to whoever does make contact.',
        },
        {
          kind: 'choice',
          id: 'm8-scenario-delay',
          prompt:
            'You will miss a deadline by a week. When do you tell the client?',
          options: [
            'As soon as you know, with a new date and what changed',
            'On the deadline itself, with the finished work as far as it goes',
            'After it is delivered, if they mention it',
            'Only if they ask for a status update',
          ],
          answer: 0,
          explain:
            'A delay announced in advance is information the client can plan around. The same delay discovered by them is a trust problem, and trust problems outlast the schedule they came from.',
        },
        {
          kind: 'multi',
          id: 'm8-measures',
          prompt:
            'Which of these measure behaviour rather than stated opinion?',
          options: [
            'Repeat purchase rate',
            'Churn rate',
            'Net Promoter Score',
            'Customer satisfaction score after a support ticket',
          ],
          answers: [0, 1],
          explain:
            'Repeat purchases and churn are things people did. NPS and CSAT are things people said, which makes them faster to collect and easier to flatter yourself with.',
        },
        {
          kind: 'choice',
          id: 'm8-tf-portfolio',
          prompt:
            'True or false: a portfolio piece works best when it leads with how the finished thing looks.',
          options: ['True', 'False'],
          answer: 1,
          explain:
            'False. A screenshot shows you can produce something. Stating the problem, the decision you made and what resulted shows you can think — which is the thing anyone hiring you is actually trying to establish.',
        },
        {
          kind: 'reflect',
          id: 'm8-reflect-hour',
          prompt:
            'Of the last ten hours you spent on getting work, how many went to people who have already paid you once? If the answer is zero, what would you move?',
        },
      ],
      recap: [
        'Retention is cheaper than acquisition, so an hour on a past client usually beats an hour on a stranger — and almost nobody spends it that way.',
        'Loyalty tactics have to match purchase frequency; points schemes fail on people who hire you twice a year.',
        'Client relationships end over silence, surprises and hidden problems far more often than over bad work.',
        'Every satisfaction measure is a proxy: NPS and CSAT capture opinion, repeat rate and churn capture behaviour, and comments capture the reason.',
        'A portfolio piece is evidence when it states a problem, a decision and an outcome — and decoration when it only shows a screenshot.',
      ],
    },

    nl: {
      title: 'Houd de klanten die je wint',
      subtitle:
        'De goedkoopste groei die er is, waarom klantrelaties stuklopen op communicatie en niet op kwaliteit, en wat je doet met een portfolio waar niemand voor betaalt.',
      abstract:
        'Herhaalopdrachten, klantrelaties beheren, tevredenheid meten en portfolio-opbouw. Conceptueel — geen tools.',
      objectives: [
        'Uitleggen waarom retentie goedkoper is dan acquisitie en wat dat verandert aan waar je je inspanning steekt.',
        'Een loyaliteitstactiek koppelen aan het type klant waar hij bij past.',
        'De communicatiegewoontes benoemen die klantrelaties heel houden.',
        'Beschrijven hoe tevredenheid wordt gemeten, en waar elke meting tekortschiet.',
        'Bepalen waar een portfolio voor dient als je niets verkoopt.',
      ],
      lesson: [
        {
          kind: 'p',
          text: 'Alles tot hier ging over gevonden en gekozen worden. Deze module gaat over het deel dat bepaalt of dat alles de moeite waard was: of de mensen die je één keer kozen, dat nog een keer doen.',
        },
        {
          kind: 'h',
          text: 'De rekensom van herhaalopdrachten',
        },
        {
          kind: 'p',
          text: 'Een nieuwe klant winnen kost geld en tijd — de advertentie, het voorstel, de gesprekken, de onderhandeling. Een bestaande klant bedienen die je al vertrouwt slaat het meeste daarvan over. Het tweede project bij dezelfde klant is winstgevender dan het eerste, zelfs bij dezelfde prijs, omdat het binnenhalen een gesprek was in plaats van een campagne.',
        },
        {
          kind: 'p',
          text: 'Dat heeft een praktisch gevolg dat de meeste kleine bedrijven negeren: een uur besteed aan een oude klant is meestal meer waard dan een uur besteed aan een vreemde, en vrijwel niemand verdeelt zijn tijd zo. Marketing voelt zichtbaarder productief, en precies daarom wint het het uur dat het niet zou moeten winnen.',
        },
        {
          kind: 'h',
          text: 'Loyaliteitstactieken zijn niet één ding',
        },
        {
          kind: 'p',
          text: 'De tactiek moet bij de klant passen, en de meest gemaakte fout is een tactiek uit de frequente detailhandel loslaten op een laagfrequente professionele relatie. Punten werken niet bij iemand die je twee keer per jaar inhuurt.',
        },
        {
          kind: 'ul',
          items: [
            'Frequente aankopen met lage waarde — een reden om terug te komen die zich opstapelt: een kaart, punten, een abonnement, een ledenprijs.',
            'Zeldzame aankopen met hoge waarde — proactief contact, context onthouden, en degene zijn aan wie ze het eerst denken. Geen spaarsysteem; een relatie.',
            'Eenmalige aankopen met een lang leven — ondersteuning die doorloopt na de verkoop, en nuttig contact zodra er iets verandert dat hen raakt.',
            'Abonnees — onboarding die ze snel op het punt van waarde brengt, en daarna niet stil vallen tussen verlengingen.',
            'Mensen die één keer kochten en verdwenen — één eerlijk, specifiek bericht met de vraag of ze nog nodig hebben wat jij doet, en stilte als antwoord accepteren.',
          ],
        },
        {
          kind: 'h',
          text: 'Klantrelaties lopen eerst stuk op communicatie',
        },
        {
          kind: 'p',
          text: 'Langlopende relaties eindigen zelden doordat het werk slecht is. Ze eindigen door stilte, verrassingen en het gevoel dat iets werd achtergehouden. Vier gewoontes dekken het meeste.',
        },
        {
          kind: 'ol',
          items: [
            'Zeg wanneer dingen gebeuren, en zeg iets als ze niet gebeuren. Een vooraf gemelde vertraging is een feit; een vertraging die de klant zelf ontdekt is een karaktereigenschap.',
            'Zet geld op papier vóór het werk, niet erna. Bijna elk serieus conflict is een scopegesprek dat nooit plaatsvond.',
            'Rapporteer voortgang in een ritme waar de klant niet om hoefde te vragen. Stilte wordt gelezen als problemen, en dat is een redelijke lezing.',
            'Gaat er iets mis, wees dan degene die het als eerste zegt. De kosten van een fout die jij meldde zijn een fractie van die van een fout die zij vonden.',
          ],
        },
        {
          kind: 'note',
          label: 'De waardevolste zin in klantwerk',
          text: '"Dat valt buiten wat we hebben afgesproken — dit is wat het zou kosten." Het beschermt het project, het beschermt de relatie, en het is veel makkelijker vroeg te zeggen dan na drie onbetaalde wijzigingen.',
        },
        {
          kind: 'h',
          text: 'Tevredenheid meten, en de grenzen daarvan',
        },
        {
          kind: 'p',
          text: 'Je kunt tevredenheid meten, maar elke maat is een benadering en ze falen elk anders. Weten hóé ze falen is nuttiger dan de cijfers.',
        },
        {
          kind: 'ul',
          items: [
            'Net Promoter Score — "hoe waarschijnlijk beveel je ons aan". Breed gebruikt, makkelijk te vergelijken en makkelijk te bespelen; één getal dat het waarom verbergt.',
            'Klanttevredenheidsscore — direct na een interactie gevraagd, dus hij vangt het moment en niet de relatie.',
            'Herhaalaankooppercentage — gedrag in plaats van mening, en daarom de eerlijke, maar traag.',
            'Verloop (churn) — het aandeel dat in een periode vertrekt. Het duidelijkste signaal, en het komt aan als het voor die klant te laat is.',
            'Wat ze werkelijk zeggen — het minst gestructureerd, het lastigst in een grafiek, en meestal het enige dat je vertelt wat je moet veranderen.',
          ],
        },
        {
          kind: 'h',
          text: 'Een portfolio als er niets te koop is',
        },
        {
          kind: 'p',
          text: 'Portfoliowerk heeft een andere taak als je niet monetiseert: het is een verslag van wat je kunt, een argument dat je dingen afmaakt, en — het nuttigst — een set concrete artefacten om naar te wijzen in gesprekken die nog niet hebben plaatsgevonden.',
        },
        {
          kind: 'p',
          text: 'Wat een portfoliostuk laat werken is niet de glans van de screenshot. Het is dat het het probleem benoemt, wat je besloot, en wat daarvan het gevolg was. Een project zonder benoemd probleem is decoratie; een project met een probleem, een beslissing en een uitkomst is bewijs.',
        },
      ],
      lessons: [],
      assignment: {
        title: 'Maak van één oude klant een tweede project',
        brief: [
          {
            kind: 'p',
            text: 'Kies een echte klant of contactpersoon met wie je meer dan een half jaar geleden werkte en die je sindsdien niet sprak. Je gaat de herbenadering fatsoenlijk plannen in plaats van een "even checken hoe het gaat"-bericht te sturen.',
          },
          {
            kind: 'ul',
            items: [
              'Schrijf op wat je echt weet over hun situatie, en wat er sinds jouw oplevering waarschijnlijk is veranderd.',
              'Bepaal één specifiek, nuttig ding dat je ze kunt vertellen en dat waar is of ze je nu inhuren of niet — een risico, een aflopende termijn, iets dat sinds jouw bouw is doorontwikkeld.',
              'Schrijf het bericht rond dat ene ding. Het moet verstuurbaar zijn ook als ze nooit antwoorden, en de zin "even checken hoe het gaat" mag er niet in staan.',
              'Bepaal wat je doet als er geen antwoord komt, en wanneer. Zet die datum op papier.',
            ],
          },
        ],
        deliverable:
          'Het geschreven bericht, het specifieke nuttige punt waarmee het opent, en de datum die je voor de opvolging hebt gezet.',
      },
      quiz: [
        {
          kind: 'match',
          id: 'm8-tactics-match',
          prompt: 'Koppel elk type klant aan de loyaliteitstactiek die bij ze past.',
          lefts: [
            'Koopt bijna elke week iets kleins',
            'Huurt je ongeveer één keer per jaar in voor een groot project',
            'Kocht één ding dat tien jaar meegaat',
            'Betaalt maandelijks en logde vijf weken niet in',
          ],
          rights: [
            'Een opbouwende beloning — punten, een kaart, een ledenprijs',
            'Proactief persoonlijk contact en onthouden context',
            'Ondersteuning na de verkoop en een seintje als er iets verandert',
            'Onboardinghulp om het punt van waarde te bereiken',
          ],
          answer: [0, 1, 2, 3],
          explain:
            'Frequentie bepaalt de tactiek. Een puntensysteem is verspild aan iemand die jaarlijks koopt, en een persoonlijk belletje schaalt niet naar een wekelijkse aankoop — een van beide op de verkeerde klant loslaten is de standaardfout.',
        },
        {
          kind: 'choice',
          id: 'm8-scenario-repeat',
          prompt:
            'Een klant liet achttien maanden geleden één site door je bouwen en heeft sindsdien niets laten horen. Wat is de sterkste manier om het gesprek te heropenen?',
          options: [
            'Vertel ze één specifiek, nuttig ding over hun situatie dat waar is of ze je nu inhuren of niet',
            'Stuur een algemeen "even checken, laat het weten als je iets nodig hebt"',
            'Stuur je vernieuwde tarievenlijst',
            'Wachten — hebben ze iets nodig, dan nemen ze contact op',
          ],
          answer: 0,
          explain:
            'Een specifieke observatie verdient het antwoord: het bewijst dat je gekeken hebt, en het is nuttig ook als ze niets doen. "Even checken" legt het werk om een reden te vinden bij hen, en wachten geeft de relatie weg aan wie wel contact opneemt.',
        },
        {
          kind: 'choice',
          id: 'm8-scenario-delay',
          prompt: 'Je gaat een deadline met een week missen. Wanneer vertel je het de klant?',
          options: [
            'Zodra je het weet, met een nieuwe datum en wat er veranderde',
            'Op de deadline zelf, met het werk zover als het is',
            'Na oplevering, als ze erover beginnen',
            'Alleen als ze om een statusupdate vragen',
          ],
          answer: 0,
          explain:
            'Een vooraf gemelde vertraging is informatie waar de klant omheen kan plannen. Dezelfde vertraging die zij ontdekken is een vertrouwensprobleem, en vertrouwensproblemen leven langer dan de planning waar ze uit voortkwamen.',
        },
        {
          kind: 'multi',
          id: 'm8-measures',
          prompt: 'Welke hiervan meten gedrag in plaats van uitgesproken mening?',
          options: [
            'Herhaalaankooppercentage',
            'Verlooppercentage',
            'Net Promoter Score',
            'Klanttevredenheidsscore na een supportticket',
          ],
          answers: [0, 1],
          explain:
            'Herhaalaankopen en verloop zijn dingen die mensen deden. NPS en CSAT zijn dingen die mensen zeiden, wat ze sneller verzamelbaar maakt en makkelijker om jezelf mee te vleien.',
        },
        {
          kind: 'choice',
          id: 'm8-tf-portfolio',
          prompt:
            'Waar of niet waar: een portfoliostuk werkt het best als het opent met hoe het eindresultaat eruitziet.',
          options: ['Waar', 'Niet waar'],
          answer: 1,
          explain:
            'Niet waar. Een screenshot laat zien dat je iets kunt maken. Het probleem benoemen, de beslissing die je nam en wat eruit kwam laat zien dat je kunt denken — en dat is wat iemand die je inhuurt echt probeert vast te stellen.',
        },
        {
          kind: 'reflect',
          id: 'm8-reflect-hour',
          prompt:
            'Van de laatste tien uur die je aan werk werven besteedde: hoeveel gingen er naar mensen die je al eens betaalden? Is het antwoord nul, wat zou je verschuiven?',
        },
      ],
      recap: [
        'Retentie is goedkoper dan acquisitie, dus een uur aan een oude klant verslaat meestal een uur aan een vreemde — en vrijwel niemand besteedt het zo.',
        'Loyaliteitstactieken moeten passen bij de aankoopfrequentie; puntensystemen falen bij mensen die je twee keer per jaar inhuren.',
        'Klantrelaties eindigen veel vaker door stilte, verrassingen en verzwegen problemen dan door slecht werk.',
        'Elke tevredenheidsmaat is een benadering: NPS en CSAT vangen mening, herhaalpercentage en verloop vangen gedrag, en opmerkingen vangen de reden.',
        'Een portfoliostuk is bewijs als het een probleem, een beslissing en een uitkomst benoemt — en decoratie als het alleen een screenshot toont.',
      ],
    },
  },
};

export default module08;
