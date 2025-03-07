import translations from "@/locales/translations.json";


export type LanguageCode = "EN" | "AR" | "FR"; 

export type TranslationKeys = keyof typeof translations;

export type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
