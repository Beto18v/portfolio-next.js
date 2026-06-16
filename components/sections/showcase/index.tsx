"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useLocale } from "@/components/shared/locale-provider";
import type { LocalizedText } from "@/lib/types";

// ─── Editable data ─────────────────────────────────────────────────

interface ShowcaseProject {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  /** Hex color used for accent borders, backgrounds, and text */
  accent: string;
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: "dinerance",
    title: { es: "Dinerance", en: "Dinerance" },
    description: {
      es: "Plataforma SaaS para gestión de finanzas personales con dashboard interactivo, autenticación robusta y Row-Level Security (RLS) para máxima privacidad.",
      en: "Personal finance management SaaS platform with interactive dashboard, robust auth, and Row-Level Security (RLS) for maximum privacy.",
    },
    tags: ["Next.js", "Supabase", "FastAPI", "PostgreSQL"],
    accent: "#6366F1",
  },
  {
    id: "nuncacierro",
    title: { es: "Nunca Cierro", en: "Nunca Cierro" },
    description: {
      es: "Bots inteligentes que responden automáticamente mensajes de clientes en WhatsApp y Telegram 24/7: preguntas frecuentes, citas, domicilios y más.",
      en: "Intelligent bots that auto-respond to customer messages on WhatsApp and Telegram 24/7: FAQs, appointments, deliveries, and more.",
    },
    tags: ["WhatsApp API", "Ollama", "FastAPI", "Next.js"],
    accent: "#10B981",
  },
  {
    id: "pianio",
    title: { es: "Pianio", en: "Pianio" },
    description: {
      es: "Aplicación web interactiva para la práctica de piano con conexión MIDI, visualización de partituras y modo de aprendizaje auto-guiado.",
      en: "Interactive web app for piano practice with MIDI connection, sheet music visualization, and self-guided learning mode.",
    },
    tags: ["Angular", "Web MIDI API", "TypeScript", "RxJS"],
    accent: "#F59E0B",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────

function hexWithAlpha(hex: string, alpha: number): string {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
}

// ─── Animation presets ─────────────────────────────────────────────

const slideTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.92, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -20 },
};

// ─── Component ─────────────────────────────────────────────────────

export function Showcase() {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const threshold = showcaseProjects.length;
    const index = Math.min(Math.floor(latest * threshold), threshold - 1);
    setActiveIndex(index);
  });

  const project = showcaseProjects[activeIndex];
  const accent = project.accent;

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative scroll-mt-20"
      // 300vh scroll space on desktop, auto on mobile
      style={{ height: "300vh" }}
    >
      {/* ── Sticky panel ── */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 md:px-6">
        {/* ══════ Desktop: animated panel ══════ */}
        <div className="mx-auto hidden w-full max-w-6xl md:block">
          <div className="grid grid-cols-12 items-center gap-8">
            {/* ── Left: project info ── */}
            <div className="col-span-7 space-y-6">
              {/* Step indicator */}
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: accent }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span
                  className="h-px w-8"
                  style={{ backgroundColor: hexWithAlpha(accent, 0.3) }}
                />
                <span className="text-xs text-muted-foreground">
                  {String(showcaseProjects.length).padStart(2, "0")}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={slideTransition}
                  className="space-y-4"
                >
                  <h2
                    className="text-4xl font-bold tracking-tight md:text-5xl"
                    style={{ color: accent }}
                  >
                    {project.title[locale]}
                  </h2>
                  <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                    {project.description[locale]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-medium"
                        style={{
                          borderColor: hexWithAlpha(accent, 0.25),
                          backgroundColor: hexWithAlpha(accent, 0.08),
                          color: accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right: visual panel ── */}
            <div className="col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={slideTransition}
                  className="aspect-[4/3] w-full rounded-2xl border p-1"
                  style={{
                    borderColor: hexWithAlpha(accent, 0.2),
                    background: `linear-gradient(135deg, ${hexWithAlpha(accent, 0.1)}, ${hexWithAlpha(accent, 0.05)})`,
                  }}
                >
                  <div
                    className="flex h-full w-full items-center justify-center rounded-xl text-2xl font-bold tracking-tight"
                    style={{
                      backgroundColor: hexWithAlpha(accent, 0.1),
                      color: accent,
                    }}
                  >
                    {project.title[locale]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {showcaseProjects.map((_, i) => (
              <button
                key={i}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 32 : 8,
                  backgroundColor:
                    i === activeIndex ? accent : "hsl(var(--muted-foreground) / 0.2)",
                }}
                aria-label={`Go to project ${i + 1}`}
                disabled
              />
            ))}
          </div>
        </div>

        {/* ══════ Mobile: vertical list ══════ */}
        <div className="mx-auto w-full max-w-6xl md:hidden">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Proyectos destacados
            </p>
            {showcaseProjects.map((p, i) => (
              <div
                key={p.id}
                className="space-y-3 rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span
                    className="font-semibold"
                    style={{ color: p.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-4 bg-border" />
                  <span>{String(showcaseProjects.length).padStart(2, "0")}</span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: p.accent }}
                >
                  {p.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description[locale]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium"
                      style={{
                        borderColor: hexWithAlpha(p.accent, 0.2),
                        backgroundColor: hexWithAlpha(p.accent, 0.08),
                        color: p.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
