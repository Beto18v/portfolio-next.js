"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { Locale } from "@/lib/types";
import { Languages } from "lucide-react";
import { useLocale, useT } from "./locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const label = useT(siteConfig.labels.toggleLanguage);

  const nextLocale = locale === "es" ? "en" : "es";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="h-9 rounded-full border-border/70 bg-background/70 px-3 backdrop-blur-md hover:border-primary/50 hover:text-primary"
      onClick={() => setLocale(nextLocale as Locale)}
      aria-label={label}
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-semibold uppercase tracking-wider">
        {locale}
      </span>
    </Button>
  );
}
