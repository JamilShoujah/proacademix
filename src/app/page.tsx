"use client";

import { useLanguage } from "@/context/languageContext";
import { getTranslation } from "@/utilities/translation/translation";

type LanguageCode = "EN" | "AR" | "FR"; // Explicitly define valid languages

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const validLanguage = (lang: string): lang is LanguageCode => {
    return ["EN", "AR", "FR"].includes(lang);
  };

  return (
    <div>
      <h1>{getTranslation("GREETING_GENERAL", validLanguage(language) ? language : "EN")}</h1>
      <p>{getTranslation("WELCOME_MESSAGE", validLanguage(language) ? language : "EN")}</p>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="EN">English</option>
        <option value="AR">العربية</option>
        <option value="FR">Français</option>
      </select>
    </div>
  );
}
