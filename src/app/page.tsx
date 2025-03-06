"use client";

import { useLanguage } from "@/context/languageContext";
import { LanguageCode } from "@/types/types";
import { useTranslation } from "@/utilities/translation/translation";


export default function Home() {
  const { language, setLanguage } = useLanguage();

  const validLanguage = (lang: string): lang is LanguageCode => {
    return ["EN", "AR", "FR"].includes(lang);
  };

   const { getTranslation } = useTranslation();

  return (
    <div>
      <h1>{getTranslation("GREETING_GENERAL")}</h1>


      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="EN">English</option>
        <option value="AR">العربية</option>
        <option value="FR">Français</option>
      </select>
    </div>
  );
}
