import type { Locale } from "./index";
import sl from "../../messages/sl.json";
import en from "../../messages/en.json";

export type Translations = typeof sl;

const translations: Record<Locale, Translations> = {
  sl,
  en,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.sl;
}

export { sl, en };
