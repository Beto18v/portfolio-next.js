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
 * - cloudflare — edge routing for this site (nival.is-a.dev)
 * - azure — Dinerance backend
 * - supabase — Dinerance database
 * - vercel — Dinerance frontend
 * - hetzner — nunca-cierro environment
 * - github — Actions CI
 * - n8n — LinkedIn automation
 */
const TICKER_EVENTS: TickerEvent[] = [
  {
    project: "cloudflare",
    action: { es: "nival.is-a.dev · edge", en: "nival.is-a.dev · edge" },
    result: "✓ 99.98%",
  },
  {
    project: "azure",
    action: { es: "back de dinerance", en: "dinerance backend" },
    result: "✓",
  },
  {
    project: "supabase",
    action: { es: "db de dinerance", en: "dinerance database" },
    result: "✓",
  },
  {
    project: "vercel",
    action: { es: "front de dinerance", en: "dinerance frontend" },
    result: "✓",
  },
  {
    project: "hetzner",
    action: { es: "entorno de nunca-cierro", en: "nunca-cierro environment" },
    result: "✓ 24/7",
  },
  {
    project: "github",
    action: { es: "actions · CI", en: "actions · CI" },
    result: "✓",
  },
  {
    project: "n8n",
    action: { es: "automatización · linkedin", en: "linkedin automation" },
    result: "✓",
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
  // loop. Más confiable que keyframes CSS (que no se aplicaban). Se pausa
  // cuando queda fuera de viewport para no robar frames del scroll de Lenis.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (shouldReduceMotion) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
      paused: true,
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tween.play();
        else tween.pause();
      },
      { threshold: 0 },
    );
    io.observe(track);

    return () => {
      io.disconnect();
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
