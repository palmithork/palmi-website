"use client";

import { useLanguage } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label={t("common.language")}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          lang={lang.code}
          title={lang.name}
          aria-pressed={language === lang.code}
          onClick={() => setLanguage(lang.code)}
        >
          <span className="lang-flag" aria-hidden="true">
            {lang.flag}
          </span>
          {lang.label}
        </button>
      ))}
    </div>
  );
}
