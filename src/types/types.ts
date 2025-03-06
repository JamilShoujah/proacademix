import translations from "@/locales/translations.json";


export type LanguageCode = "EN" | "AR" | "FR"; 

export type TranslationKeys = keyof typeof translations;

export type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};
