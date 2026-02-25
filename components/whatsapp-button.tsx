"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useT } from "./locale-provider";

export function WhatsAppButton() {
  const { countryCode, number } = siteConfig.contact.whatsapp;
  const defaultMessage = useT(siteConfig.contact.whatsapp.defaultMessage);
  const aria = useT(siteConfig.labels.contactWhatsapp);
  const label = useT(siteConfig.labels.whatsappLabel);
  const encodedMessage = encodeURIComponent(defaultMessage);
  const url = `https://wa.me/${countryCode}${number}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/40 bg-background/80 px-4 text-sm font-semibold text-foreground shadow-[0_0_24px_hsl(var(--primary)/0.28)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={aria}
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
