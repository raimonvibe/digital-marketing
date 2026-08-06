import { LOCALES, type Locale } from './types';

export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function coerceLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

/** BCP-47 tags, used for <html lang> and for picking a speech-synthesis voice. */
export const SPEECH_LANG: Record<Locale, string> = {
  en: 'en-GB',
  nl: 'nl-NL',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
};

export function href(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}
