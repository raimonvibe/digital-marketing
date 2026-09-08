/**
 * Inline SVG icons for every control on the site.
 *
 * These used to be Unicode characters, which does not survive contact with
 * mobile. U+1F56A (🕪, the speaker used on the read-aloud button) has no glyph
 * at all in the iOS system fonts and rendered as nothing; several others —
 * ▶, ↗, ☀ — carry an emoji presentation that iOS and Android substitute with
 * a colour emoji, so a monochrome control turned into a cartoon.
 *
 * Drawing them means the same shape in the same colour on every platform, and
 * they inherit currentColor and font-size like text did.
 */

export type IconName =
  | 'speaker'
  | 'play'
  | 'pause'
  | 'stop'
  | 'quote'
  | 'close'
  | 'sun'
  | 'moon'
  | 'external'
  | 'chevron'
  | 'check'
  | 'cross'
  | 'caret-up'
  | 'caret-down'
  | 'info';

/* Solid marks read better at small sizes than stroked ones. */
const FILLED: ReadonlySet<IconName> = new Set([
  'play',
  'pause',
  'stop',
  'speaker',
  'caret-up',
  'caret-down',
  'chevron',
  'quote',
]);

const SHAPES: Record<IconName, React.ReactNode> = {
  speaker: (
    <>
      <path d="M11.3 3.3 6.4 7.6H3.2A1.2 1.2 0 0 0 2 8.8v6.4a1.2 1.2 0 0 0 1.2 1.2h3.2l4.9 4.3a.8.8 0 0 0 1.3-.6V3.9a.8.8 0 0 0-1.3-.6Z" />
      <path d="M15.6 8.4a.9.9 0 0 0-1.2 1.3 3.2 3.2 0 0 1 0 4.6.9.9 0 0 0 1.2 1.3 5 5 0 0 0 0-7.2Z" />
      <path d="M18.6 5a.9.9 0 0 0-1.2 1.3 8 8 0 0 1 0 11.4.9.9 0 0 0 1.2 1.3 9.8 9.8 0 0 0 0-14Z" />
    </>
  ),
  play: <path d="M7 4.4v15.2a.7.7 0 0 0 1.1.6l11.4-7.6a.7.7 0 0 0 0-1.2L8.1 3.8A.7.7 0 0 0 7 4.4Z" />,
  pause: (
    <>
      <rect x="6" y="4" width="4.2" height="16" rx="1" />
      <rect x="13.8" y="4" width="4.2" height="16" rx="1" />
    </>
  ),
  stop: <rect x="5" y="5" width="14" height="14" rx="1.5" />,
  quote: (
    <path d="M9.4 5.2c-3 1.4-4.7 3.9-4.7 7v6.6h6.9v-6.9H7.9c0-2 .9-3.3 2.7-4.2Zm9.9 0c-3 1.4-4.7 3.9-4.7 7v6.6h6.9v-6.9h-3.7c0-2 .9-3.3 2.7-4.2Z" />
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 1.8v2.6M12 19.6v2.6M4.8 4.8l1.9 1.9M17.3 17.3l1.9 1.9M1.8 12h2.6M19.6 12h2.6M4.8 19.2l1.9-1.9M17.3 6.7l1.9-1.9" />
    </>
  ),
  moon: <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" />,
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10.5 13.5" />
      <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10" />
    </>
  ),
  chevron: <path d="M9 5.5 16 12l-7 6.5v-13Z" />,
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  cross: <path d="M6 6l12 12M18 6 6 18" />,
  'caret-up': <path d="M12 8 18 15.5H6L12 8Z" />,
  'caret-down': <path d="M12 16 6 8.5h12L12 16Z" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 11v5.5" />
      <path d="M12 7.4h.01" />
    </>
  ),
};

export default function Icon({
  name,
  className,
  size = '1em',
}: {
  name: IconName;
  className?: string;
  /** Defaults to the current font size, so icons scale with their label. */
  size?: string | number;
}) {
  const filled = FILLED.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? undefined : 2}
      strokeLinecap={filled ? undefined : 'round'}
      strokeLinejoin={filled ? undefined : 'round'}
      /* Keeps the icon on the text baseline rather than sitting low. */
      style={{ flex: 'none', verticalAlign: '-0.125em' }}
    >
      {SHAPES[name]}
    </svg>
  );
}
