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
      className="fixed bottom-5 right-5 z-50"
      aria-label={aria}
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:scale-110 transition-transform duration-200 shadow-lg">
        <FaWhatsapp className="h-8 w-8 text-white transition-colors duration-200" />
      </span>
    </a>
  );
}
