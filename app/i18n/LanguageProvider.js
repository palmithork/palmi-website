"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultLanguage, languages, storageKey } from "./config";
import is from "./translations/is";
import en from "./translations/en";
import es from "./translations/es";

const dictionaries = { is, en, es };

const LanguageContext = createContext(null);

function lookup(dictionary, key) {
  return key.split(".").reduce((value, part) => (value == null ? undefined : value[part]), dictionary);
}

export function LanguageProvider({ children }) {
  // Server render and first client render both use the default, then the saved choice is applied.
  const [language, setLanguageState] = useState(defaultLanguage);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (dictionaries[saved]) setLanguageState(saved);
    } catch {
      // Storage unavailable (private mode etc.) — stay on the default.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((code) => {
    if (!dictionaries[code]) return;
    setLanguageState(code);
    try {
      window.localStorage.setItem(storageKey, code);
    } catch {
      // Ignore — the choice just won't persist.
    }
  }, []);

  // Missing keys fall back to Icelandic, then to the key itself.
  const t = useCallback(
    (key) => lookup(dictionaries[language], key) ?? lookup(dictionaries[defaultLanguage], key) ?? key,
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return context;
}

// Sets the browser tab title in the current language, e.g. "Myndbönd — Pálmi Þór K.".
// Next.js may write the default (Icelandic) metadata title after hydration, so we
// re-apply ours whenever <head> changes.
export function usePageTitle(key) {
  const { t } = useLanguage();

  useEffect(() => {
    const title = key ? `${t(key)} — Pálmi Þór K.` : "Pálmi Þór K.";
    const apply = () => {
      if (document.title !== title) document.title = title;
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [key, t]);
}
