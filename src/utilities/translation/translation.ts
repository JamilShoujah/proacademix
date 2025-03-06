import translations from "@/locales/translations.json";

type LanguageCode = "EN" | "AR" | "FR";
type TranslationKeys = keyof typeof translations;

export const getTranslation = (key: TranslationKeys, lang: LanguageCode = "EN") => {
  return translations[key]?.[lang] || key;
};
