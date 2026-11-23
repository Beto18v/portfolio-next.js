"use client";

import Image from "next/image";
import { useReducedMotion, motion } from "framer-motion";
import { Linkedin, ExternalLink, Quote } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { useLocale } from "@/components/shared/locale-provider";
import SectionDivider from "@/components/shared/section-divider";
import { fadeUp } from "@/lib/motion";
import type { Testimonial } from "@/lib/types";

function SourceBadge({ source }: { source: Testimonial["source"] }) {
  if (source === "linkedin") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-400">
        <Linkedin className="h-3 w-3" />
        LinkedIn
      </span>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-accent-teal/25 bg-accent-teal/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-teal">
      Verificado
    </span>
  );
}

export function Testimonials() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const testimonials = siteConfig.testimonials ?? [];

  // Regla crítica: si no hay testimonios reales aún, la sección se oculta por completo
  if (testimonials.length === 0) {
    return null;
  }

  const sectionConfig = siteConfig.sections.testimonials;
  const sectionBadge = sectionConfig ? sectionConfig.badge[locale] : "Testimonios";
  const sectionTitle = sectionConfig
    ? sectionConfig.title[locale]
    : "Lo que dicen quienes han trabajado conmigo";
  const sectionSubtitle = sectionConfig?.subtitle?.[locale] ?? "";

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 px-4 pb-10 pt-24 md:px-6"
    >
      <SectionDivider variant="terminal" label={sectionBadge.toLowerCase()} />
      <div className="mx-auto mt-8 w-full max-w-6xl">
        <motion.div
          className="mb-10 space-y-3"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="max-w-2xl text-muted-foreground">{sectionSubtitle}</p>
          )}
        </motion.div>

        {/* Grid de testimonios */}
        <motion.div
          className={`grid grid-cols-1 gap-6 ${
            testimonials.length === 1
              ? "mx-auto max-w-xl"
              : testimonials.length === 2
                ? "mx-auto max-w-3xl md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((t) => {
            const authorInitials = t.author
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={t.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent-teal/30 hover:bg-card/80 hover:shadow-[0_0_28px_color-mix(in_oklch,var(--accent-teal)_8%,transparent)]"
              >
                <div className="space-y-4">
                  {/* Encabezado: Avatar + Autor + Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      {t.avatar ? (
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-accent-teal/30">
                          <Image
                            src={t.avatar}
                            alt={t.author}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-teal/30 bg-accent-teal/10 font-mono text-xs font-bold text-accent-teal">
                          {authorInitials}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-foreground">
                          {t.author}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {t.role[locale]}
                          {t.company ? ` · ${t.company}` : ""}
                        </p>
                      </div>
                    </div>
                    <SourceBadge source={t.source} />
                  </div>

                  {/* Cita textual */}
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote[locale]}&rdquo;
                  </p>
                </div>

                {/* Comilla de fondo decorativa en la esquina inferior */}
                <Quote
                  className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 text-muted-foreground/5 transition-colors duration-300 group-hover:text-accent-teal/10"
                  aria-hidden="true"
                />

                {/* Footer de la tarjeta con link verificable */}
                {t.verifiedUrl && (
                  <div className="relative z-1 mt-6 border-t border-border/50 pt-4">
                    <Link
                      href={t.verifiedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-teal transition-colors hover:text-primary"
                    >
                      {t.source === "linkedin"
                        ? locale === "es"
                          ? "Ver en LinkedIn"
                          : "View on LinkedIn"
                        : locale === "es"
                          ? "Verificar recomendación"
                          : "Verify recommendation"}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Footer invitando a dejar reseña */}
        <div className="mt-10 rounded-xl border border-border/50 bg-background/40 p-4 text-center backdrop-blur-sm">
          <p className="text-xs text-muted-foreground">
            {locale === "es"
              ? "¿Hemos trabajado juntos en algún proyecto? Puedes dejarme una recomendación en "
              : "Have we worked together on a project? You can leave a recommendation on "}
            <Link
              href="https://www.linkedin.com/in/beto18v/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-teal underline underline-offset-2 hover:text-primary"
            >
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
