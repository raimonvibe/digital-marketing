/**
 * Where this site is deployed.
 *
 * Open Graph images have to be absolute URLs — a relative path will not render
 * in a link preview — so the origin has to be known at build time. Set
 * NEXT_PUBLIC_SITE_URL to override it (for a custom domain, say) rather than
 * editing this file.
 *
 * The site is served from the domain root, so no basePath is needed. If it
 * ever moves under a subpath, set `basePath` and `assetPrefix` in
 * next.config.mjs to match or every asset link will 404.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://digital-marketing-ten-snowy.vercel.app'
).replace(/\/+$/, '');

/**
 * Two different jobs, two different shapes.
 *
 * Link previews are wide: Slack, WhatsApp, X and iMessage all crop toward
 * 1.91:1, so a square image there renders as a small thumbnail rather than a
 * card. Home-screen and launcher icons are square and get masked to a circle
 * or squircle, so a wide image would be cropped to its middle.
 */
export const SHARE_CARD = '/social-share2.png';
export const SHARE_CARD_WIDTH = 1280;
export const SHARE_CARD_HEIGHT = 720;

export const APP_ICON = '/social-share.png';
export const APP_ICON_SIZE = 200;
