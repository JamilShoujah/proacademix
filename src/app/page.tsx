"use client";

import ThemeToggle from "@/components/toggleTheme/index";
import { useLanguage } from "@/context/languageContext";
import { useTranslation } from "@/utilities/translation/translation";
import { useTheme } from "@/context/ThemeProvider"; 

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const { getTranslation } = useTranslation();
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <div className={`theme-${theme}`}>
      <h1>{getTranslation("GREETING_GENERAL")}</h1>
      <ThemeToggle />

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="EN">English</option>
        <option value="AR">العربية</option>
        <option value="FR">Français</option>
      </select>
    </div>
  );
}
