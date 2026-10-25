export const locales = ["es", "eu"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** One value per language; the compiler flags a missing translation. */
export type Localized<T> = Record<Locale, T>;

export const SITE_URL = "https://gorobelgara.com";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Castilian lives at the root, Basque under /eu. */
export function localePath(locale: Locale, path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function localeUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

/** hreflang block for Next metadata `alternates` of a given path. */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localeUrl(locale, path),
    languages: {
      "es-ES": localeUrl("es", path),
      "eu-ES": localeUrl("eu", path),
      "x-default": localeUrl("es", path),
    },
  };
}
