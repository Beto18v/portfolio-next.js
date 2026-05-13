"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";
import { useT } from "./locale-provider";

export function WhatsAppButton() {
  const { countryCode, number } = siteConfig.contact.whatsapp;
  const defaultMessage = useT(siteConfig.contact.whatsapp.defaultMessage);
  const aria = useT(siteConfig.labels.contactWhatsapp);
  const encodedMessage = encodeURIComponent(defaultMessage);
  const url = `https://wa.me/${countryCode}${number}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 z-60 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-5 sm:right-5"
      aria-label={aria}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform duration-200 hover:scale-110 sm:h-14 sm:w-14">
        <FaWhatsapp className="h-8 w-8 text-white transition-colors duration-200" />
      </span>
    </a>
  );
}
