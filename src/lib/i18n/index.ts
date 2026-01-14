export type Locale = "sl" | "en";

export const defaultLocale: Locale = "sl";

export const locales: Locale[] = ["sl", "en"];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
