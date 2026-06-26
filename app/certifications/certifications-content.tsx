"use client";

import { useLocale } from "@/components/shared/locale-provider";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export function CertificationsContent({
  certifications,
}: {
  certifications: { title: string; file: string }[];
}) {
  const { locale } = useLocale();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const title = locale === "es" ? "Certificaciones" : "Certifications";
  const subtitle =
    locale === "es"
      ? "Formación continua y certificaciones profesionales"
      : "Continuous learning and professional certifications";
  const backLabel = locale === "es" ? "Volver al inicio" : "Back to home";
  const emptyLabel =
    locale === "es"
      ? "No hay certificaciones disponibles por el momento."
      : "No certifications available at the moment.";

  const animProps = shouldReduceMotion ? {} : { variants: fadeUp };

  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] px-4 py-20 md:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          variants={!shouldReduceMotion ? staggerContainer : undefined}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* ── Header ── */}
          <motion.div className="space-y-3 text-center" {...animProps}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {locale === "es" ? "Formación" : "Education"}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gradient md:text-4xl">
              {title}
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground">{subtitle}</p>
          </motion.div>

          {/* ── Certifications List ── */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            {...animProps}
          >
            {certifications.length > 0 ? (
              certifications.map((cert, i) => (
                <Link
                  key={i}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-indigo-500/20 bg-card/60 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-indigo-400/40 hover:bg-card/80 hover:shadow-[0_0_28px_hsl(250_84%_60%/.12)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 transition-colors group-hover:border-indigo-400/40 group-hover:bg-indigo-500/15">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground">PDF</p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-indigo-300" />
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-sm text-muted-foreground">
                {emptyLabel}
              </p>
            )}
          </motion.div>

          {/* ── Back to Home ── */}
          <motion.div className="flex justify-center pt-4" {...animProps}>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-indigo-500/30 bg-background/70 px-7 hover:border-indigo-400/60"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLabel}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating Back Button ── */}
      <div className="fixed top-20 left-6 z-50 hidden md:block">
        <Button
          size="icon"
          onClick={() => router.push("/")}
          className="h-10 w-10 rounded-full shadow-lg shadow-slate-400/20"
          aria-label={locale === "es" ? "Volver atrás" : "Go back"}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
