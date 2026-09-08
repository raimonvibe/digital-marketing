import type { Tool, ToolId } from './types';

/**
 * Icons come from Google's favicon service rather than downloaded logo files,
 * so the tool list stays maintainable: add a domain, get an icon.
 */
export function faviconUrl(domain: string, size = 64): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

export const TOOLS: Record<ToolId, Tool> = {
  'search-console': {
    id: 'search-console',
    name: 'Google Search Console',
    domain: 'search.google.com',
    url: 'https://search.google.com/search-console',
    blurb: {
      en: 'Shows which search terms already bring people to your site.',
      nl: 'Laat zien met welke zoektermen mensen je site nu al vinden.',
    },
  },
  semrush: {
    id: 'semrush',
    name: 'Semrush',
    domain: 'semrush.com',
    url: 'https://www.semrush.com/analytics/keywordoverview/',
    blurb: {
      en: 'Keyword research and competitor rankings in one place.',
      nl: 'Zoekwoordonderzoek en concurrentieposities op één plek.',
    },
  },
  ahrefs: {
    id: 'ahrefs',
    name: 'Ahrefs',
    domain: 'ahrefs.com',
    url: 'https://ahrefs.com/backlink-checker',
    blurb: {
      en: 'Backlink research — who links to you, and to your competitors.',
      nl: 'Backlink-onderzoek — wie linkt naar jou, en naar je concurrenten.',
    },
  },
  'google-ads': {
    id: 'google-ads',
    name: 'Google Ads',
    domain: 'ads.google.com',
    url: 'https://ads.google.com/home/tools/keyword-planner/',
    blurb: {
      en: 'Paid search ads, plus a free Keyword Planner you can use without spending.',
      nl: 'Betaalde zoekadvertenties, plus een gratis Zoekwoordplanner zonder budget.',
    },
  },
  'business-profile': {
    id: 'business-profile',
    name: 'Google Business Profile',
    domain: 'google.com',
    url: 'https://www.google.com/business/',
    blurb: {
      en: 'Free listing that puts your business on Google Maps and search.',
      nl: 'Gratis vermelding die je bedrijf op Google Maps en in zoekresultaten zet.',
    },
  },
  mailchimp: {
    id: 'mailchimp',
    name: 'Mailchimp',
    domain: 'mailchimp.com',
    url: 'https://mailchimp.com/pricing/marketing/',
    blurb: {
      en: 'Email marketing platform with a workable free tier.',
      nl: 'E-mailmarketingplatform met een bruikbaar gratis pakket.',
    },
  },
  'constant-contact': {
    id: 'constant-contact',
    name: 'Constant Contact',
    domain: 'constantcontact.com',
    url: 'https://www.constantcontact.com/features/email-templates',
    blurb: {
      en: 'Email platform aimed squarely at small businesses.',
      nl: 'E-mailplatform dat zich vooral op kleine bedrijven richt.',
    },
  },
  klaviyo: {
    id: 'klaviyo',
    name: 'Klaviyo',
    domain: 'klaviyo.com',
    url: 'https://www.klaviyo.com/pricing',
    blurb: {
      en: 'Email automation built for e-commerce flows.',
      nl: 'E-mailautomatisering gebouwd voor e-commerce flows.',
    },
  },
  canva: {
    id: 'canva',
    name: 'Canva',
    domain: 'canva.com',
    url: 'https://www.canva.com/',
    blurb: {
      en: 'Design graphics for social, email and ads without design training.',
      nl: 'Ontwerp graphics voor social, e-mail en ads zonder ontwerpopleiding.',
    },
  },
  hootsuite: {
    id: 'hootsuite',
    name: 'Hootsuite',
    domain: 'hootsuite.com',
    url: 'https://www.hootsuite.com/',
    blurb: {
      en: 'Schedule posts across several social platforms from one dashboard.',
      nl: 'Plan posts voor meerdere social platforms vanuit één dashboard.',
    },
  },
  hubspot: {
    id: 'hubspot',
    name: 'HubSpot',
    domain: 'hubspot.com',
    url: 'https://www.hubspot.com/products/crm',
    blurb: {
      en: 'Marketing platform and free CRM for tracking leads and contacts.',
      nl: 'Marketingplatform en gratis CRM om leads en contacten bij te houden.',
    },
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify',
    domain: 'shopify.com',
    url: 'https://www.shopify.com/free-trial',
    blurb: {
      en: 'The standard platform for building an online store.',
      nl: 'Het standaardplatform om een webshop te bouwen.',
    },
  },
  wix: {
    id: 'wix',
    name: 'Wix',
    domain: 'wix.com',
    url: 'https://www.wix.com/',
    blurb: {
      en: 'Drag-and-drop site builder — simpler than Shopify, less commerce-focused.',
      nl: 'Drag-and-drop websitebouwer — simpeler dan Shopify, minder op verkoop gericht.',
    },
  },
  ga4: {
    id: 'ga4',
    name: 'Google Analytics 4',
    domain: 'analytics.google.com',
    url: 'https://analytics.google.com/',
    blurb: {
      en: 'Tracks who visits your site, where they come from and what they do.',
      nl: 'Volgt wie je site bezoekt, waar ze vandaan komen en wat ze doen.',
    },
  },
  x: {
    id: 'x',
    name: 'Twitter / X',
    domain: 'x.com',
    url: 'https://x.com/',
    blurb: {
      en: 'Short-form public posting — useful for reach and industry listening.',
      nl: 'Korte publieke berichten — handig voor bereik en meeluisteren in je vak.',
    },
  },
};

/* Order used on the tool index page — mirrors the outline's tool list. */
export const TOOL_ORDER: ToolId[] = [
  'canva',
  'mailchimp',
  'constant-contact',
  'klaviyo',
  'hootsuite',
  'hubspot',
  'shopify',
  'wix',
  'google-ads',
  'ga4',
  'search-console',
  'business-profile',
  'semrush',
  'ahrefs',
  'x',
];
