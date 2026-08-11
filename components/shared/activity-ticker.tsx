"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/shared/locale-provider";
import type { Locale } from "@/lib/types";

interface TickerEvent {
  project: string;
  action: Record<Locale, string>;
  result: string;
}

/**
 * Events reflect the REAL infrastructure behind the portfolio:
 * - Nunca Cierro runs on Hetzner (Docker, Cloudflare, PostgreSQL)
 * - Dinerance on Vercel + Supabase
 * - This site on Vercel, repo on GitHub, domain on is-a.dev via Cloudflare
 */
const TICKER_EVENTS: TickerEvent[] = [
  {
    project: "hetzner",
    action: { es: "nunca-cierro · contenedor activo", en: "nunca-cierro · container up" },
    result: "✓ 24/7",
  },
  {
    project: "nunca-cierro",
    action: { es: "agente de WhatsApp respondió un pedido", en: "WhatsApp agent replied to an order" },
    result: "✓ 1.4s",
  },
  {
    project: "nunca-cierro",
    action: { es: "booking sincronizado al calendario", en: "booking synced to calendar" },
    result: "✓",
  },
  {
    project: "postgres",
    action: { es: "nunca-cierro · consulta en producción", en: "nunca-cierro · prod query" },
    result: "✓ 12ms",
  },
  {
    project: "dinerance",
    action: { es: "deploy en Vercel", en: "deploy on Vercel" },
    result: "✓",
  },
  {
    project: "dinerance",
    action: { es: "balances sincronizados · Supabase", en: "balances synced · Supabase" },
    result: "✓ 1.2s",
  },
  {
    project: "dinerance",
    action: { es: "consulta protegida por RLS", en: "RLS-protected query" },
    result: "✓ 8ms",
  },
  {
    project: "cloudflare",
    action: { es: "nival.is-a.dev · edge", en: "nival.is-a.dev · edge" },
    result: "✓ 99.98%",
  },
  {
    project: "github",
    action: { es: "github.com/beto18v · CI verde", en: "github.com/beto18v · CI green" },
    result: "✓",
  },
  {
    project: "vercel",
    action: { es: "portfolio · build ok", en: "portfolio · build ok" },
    result: "✓ 12.4s",
  },
];

function TickerStrip({ locale }: { locale: Locale }) {
  return (
    <div className="flex w-max items-center">
      {TICKER_EVENTS.map((event, i) => (
        <span key={`${event.project}-${i}`} className="flex items-center">
          <span className="inline-flex items-center gap-2.5 px-6 md:px-8">
            <span className="font-mono text-accent">{event.project}</span>
            <span className="text-text-dim">{event.action[locale]}</span>
            <span className="font-mono text-green">{event.result}</span>
          </span>
          <span
            aria-hidden="true"
            className="h-3.5 w-px shrink-0 bg-line"
          />
        </span>
      ))}
    </div>
  );
}

export function ActivityTicker() {
  const { locale } = useLocale();
  const label = locale === "es" ? "Actividad en vivo" : "Live activity";
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Marquee infinito con GSAP: duplica el contenido y lo desplaza -50% en
  // loop. Más confiable que keyframes CSS (que no se aplicaban).
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (shouldReduceMotion) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative z-[2]">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 pt-5 md:px-6">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-green"
          aria-hidden="true"
        />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim">
          {label}
        </span>
      </div>
      <div className="ticker-mask mt-2 overflow-hidden border-y border-line bg-background/70">
        <div ref={trackRef} className="flex w-max py-2.5 text-xs md:text-sm">
          <TickerStrip locale={locale} />
          <div aria-hidden="true">
            <TickerStrip locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
