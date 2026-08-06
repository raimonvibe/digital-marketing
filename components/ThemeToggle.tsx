'use client';

import { useEffect } from 'react';
import { useStoredValue, useHydrated } from '@/lib/store';
import { UI } from '@/content/ui';
import type { Locale } from '@/lib/types';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useStoredValue<Theme | null>('theme', null);
  const hydrated = useHydrated();

  /* The blocking script in <head> sets the initial attribute; this keeps it in
     step with later toggles and with a stored value from a previous visit. */
  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const current: Theme =
    theme ??
    (hydrated && typeof document !== 'undefined'
      ? ((document.documentElement.getAttribute('data-theme') as Theme) ?? 'light')
      : 'light');

  const next: Theme = current === 'dark' ? 'light' : 'dark';
  const label = next === 'dark' ? UI.themeToDark[locale] : UI.themeToLight[locale];

  return (
    <button
      type="button"
      className="btn btn-quiet"
      onClick={() => setTheme(next)}
      title={label}
      aria-label={label}
    >
      <span aria-hidden="true">{current === 'dark' ? '☾' : '☀'}</span>
    </button>
  );
}
