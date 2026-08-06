import type { MetadataRoute } from 'next';
import { UI } from '@/content/ui';
import { APP_ICON, APP_ICON_SIZE } from '@/lib/site';

/**
 * Installed to a phone home screen, the site uses the same square artwork as
 * the link preview. `purpose: 'any maskable'` lets Android crop it to whatever
 * shape the launcher uses instead of putting it in a white box.
 */
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: UI.siteTitle.en,
    short_name: 'DM&E Course',
    description: UI.footerNote.en,
    start_url: '/en/',
    scope: '/',
    display: 'standalone',
    background_color: '#faf7f0',
    theme_color: '#faf7f0',
    icons: [
      {
        src: APP_ICON,
        sizes: `${APP_ICON_SIZE}x${APP_ICON_SIZE}`,
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: APP_ICON,
        sizes: `${APP_ICON_SIZE}x${APP_ICON_SIZE}`,
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
