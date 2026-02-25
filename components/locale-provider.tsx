"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site";
import { Locale } from "@/lib/types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>(siteConfig.defaultLocale);

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
