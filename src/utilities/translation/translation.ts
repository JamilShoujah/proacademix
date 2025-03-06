import { useLanguage } from "@/context/languageContext";
import { LanguageCode, TranslationKeys } from "@/types/types";
import translations from "@/locales/translations.json";

export const useTranslation = () => {
  const { language } = useLanguage(); // Get current language from context

  const getTranslation = (key: TranslationKeys) => {
     return translations[key]?.[language as LanguageCode] || key;
  };

  return { getTranslation };
};