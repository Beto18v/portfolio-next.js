"use client";

import { useRef } from "react";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Github, MapPin, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useT } from "@/components/shared/locale-provider";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SplitTextTitle } from "./components/split-text-title";
import { MagneticButton } from "./components/magnetic-button";
import { ProjectPreview } from "./components/project-preview";

export function Hero() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const role = useT(siteConfig.profile.role);
  const title = useT(siteConfig.hero.title);
  const subtitle = useT(siteConfig.hero.subtitle);
  const badge = useT(siteConfig.hero.badge);
  const status = siteConfig.profile.status?.[locale] ?? "";
  const location = siteConfig.profile.location?.[locale] ?? null;
  const primaryLabel = useT(siteConfig.hero.primaryCTA.label);
  const secondaryLabel = useT(siteConfig.hero.secondaryCTA.label);
  const githubAria = useT(siteConfig.labels.openGithub);
  const proof = siteConfig.hero.proof;

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const enter = (delay: number) =>
    shouldReduceMotion
      ? {}
      : ({
          variants: fadeUp,
          initial: "hidden" as const,
          animate: "visible" as const,
          transition: { delay },
        } as const);
  const springScale = !shouldReduceMotion
    ? {
        scale: 1.02,
        transition: { type: "spring" as const, stiffness: 300, damping: 15 },
      }
    : undefined;
  const springTapScale = !shouldReduceMotion ? { scale: 0.98 } : undefined;

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-[calc(100svh-64px)] items-center overflow-hidden px-4 pt-10 md:px-6 md:pt-8"
    >
      {/* Fondo: cuadrícula ámbar grande. */}
      <div
        className="hero-grid absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      {/* Desvanecido superior: gradiente del color de fondo que funde la
          cuadrícula con el navbar (simétrico al inferior). */}
      <div
        className="hero-fade-top pointer-events-none absolute inset-x-0 top-0 z-1 h-32 bg-linear-to-b from-background via-background/70 to-transparent"
        aria-hidden="true"
      />
      {/* Desvanecido inferior: gradiente del color de fondo sobre la
          cuadrícula para que se funda con la siguiente sección (no depende
          de mask-image, siempre se ve). */}
      <div
        className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-t from-background via-background/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-2 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Left: copy */}
          <motion.div
            className="lg:col-span-7"
            variants={!shouldReduceMotion ? staggerContainer : undefined}
            initial="hidden"
            animate="visible"
          >
            {/* Top row: badge pill + online status */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              {...enter(0.45)}
            >
              <span className="inline-flex rounded-full border border-accent-teal/35 bg-accent-teal/10 px-3 py-1 text-xs font-medium tracking-wide text-accent-teal">
                {badge}
              </span>
              <span className="flex items-center gap-2.5 rounded-full border border-border/70 bg-background/40 px-4 py-1.5 backdrop-blur-sm">
                <span className="animate-dotPulse h-2 w-2 shrink-0 rounded-full bg-green shadow-[0_0_10px_color-mix(in_oklch,var(--green)_75%,transparent)]" />
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {status}
                </span>
                {location && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground/70">
                    <MapPin className="h-3 w-3" />
                    {location}
                  </span>
                )}
              </span>
            </motion.div>

            {/* Name headline in serif display with scroll parallax */}
            <motion.div
              className="mt-4"
              style={
                !shouldReduceMotion
                  ? { y: titleY, opacity: titleOpacity }
                  : undefined
              }
            >
              <SplitTextTitle
                text={title}
                className="hero-heading font-display font-medium text-foreground"
              />
            </motion.div>

            {/* Role line under the name */}
            <motion.p
              className="mt-3 text-base font-medium text-primary md:text-lg"
              {...enter(0.5)}
            >
              {role}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              {...enter(0.55)}
            >
              {subtitle}
            </motion.p>

            {/* CTAs: primary (View projects) + GitHub + CV */}
            <motion.div
              className="mt-5 flex flex-wrap items-center gap-3"
              {...enter(0.65)}
            >
              <MagneticButton>
                <motion.span
                  style={{ display: "inline-flex" }}
                  whileHover={springScale}
                  whileTap={springTapScale}
                >
                  <Button asChild size="lg" className="h-11 rounded-full px-7">
                    <Link
                      href={siteConfig.hero.primaryCTA.href}
                      aria-label={primaryLabel}
                    >
                      {primaryLabel}
                    </Link>
                  </Button>
                </motion.span>
              </MagneticButton>
              <MagneticButton>
                <motion.span
                  style={{ display: "inline-flex" }}
                  whileHover={springScale}
                  whileTap={springTapScale}
                >
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 rounded-full border-border/70 px-7 hover:border-primary/40"
                  >
                    <Link
                      href={siteConfig.hero.secondaryCTA.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={githubAria}
                    >
                      <Github className="h-4 w-4" />
                      {secondaryLabel}
                    </Link>
                  </Button>
                </motion.span>
              </MagneticButton>
              <MagneticButton>
                <motion.span
                  style={{ display: "inline-flex" }}
                  whileHover={springScale}
                  whileTap={springTapScale}
                >
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 rounded-full border-border/70 px-7 hover:border-primary/40"
                  >
                    <Link
                      href="/cv"
                      aria-label={
                        locale === "es"
                          ? "Ver currículum (CV)"
                          : "View resume (CV)"
                      }
                    >
                      <FileText className="h-4 w-4" />
                      CV
                    </Link>
                  </Button>
                </motion.span>
              </MagneticButton>
              <MagneticButton>
                <motion.span
                  style={{ display: "inline-flex" }}
                  whileHover={springScale}
                  whileTap={springTapScale}
                >
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 rounded-full border-border/70 px-7 hover:border-primary/40"
                  >
                    <Link
                      href="/certifications"
                      aria-label={
                        locale === "es"
                          ? "Ver certificaciones"
                          : "View certifications"
                      }
                    >
                      <Award className="h-4 w-4" />
                      {locale === "es" ? "Certificaciones" : "Certifications"}
                    </Link>
                  </Button>
                </motion.span>
              </MagneticButton>
            </motion.div>

            {/* Proof strip */}
            <motion.div
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2"
              {...enter(0.7)}
            >
              {proof.map((item, i) => (
                <span
                  key={item.en}
                  className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"
                >
                  {i === 0 && (
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                      aria-hidden="true"
                    />
                  )}
                  {item[locale]}
                  {i < proof.length - 1 && (
                    <span
                      className="ml-1 h-1 w-1 shrink-0 rounded-full bg-border"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: production work preview (desktop only — on mobile the
              Projects section below already shows the work, and hiding it
              lets the hero fit exactly one viewport) */}
          <div className="hidden lg:col-span-5 lg:block lg:pl-2">
            <ProjectPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
