"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site";
import { Locale } from "@/lib/types";

const LOCALE_STORAGE_KEY = "portfolio-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

function getSavedLocale(): Locale {
  if (typeof window === "undefined") return siteConfig.defaultLocale;
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved && siteConfig.locales.includes(saved as Locale)) {
    return saved as Locale;
  }
  return siteConfig.defaultLocale;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(siteConfig.defaultLocale);

  React.useEffect(() => {
    setLocaleState(getSavedLocale());
  }, []);

  const setLocale = React.useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = React.useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}

export function useT<T extends Record<Locale, string>>(localized: T) {
  const { locale } = useLocale();
  return localized[locale];
}
