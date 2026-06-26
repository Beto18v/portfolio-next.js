"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Github, MapPin, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import DotGridBg from "./components/dot-grid-bg";
import FuturisticOrb from "./components/orb";

export function Hero() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const role = useT(siteConfig.profile.role);
  const title = useT(siteConfig.hero.title);
  const subtitle = useT(siteConfig.hero.subtitle);
  const badge = useT(siteConfig.hero.badge);
  const location = siteConfig.profile.location?.[locale] ?? null;
  const secondaryLabel = useT(siteConfig.hero.secondaryCTA.label);
  const githubAria = useT(siteConfig.labels.openGithub);

  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // Avoid setting state synchronously in the effect body.
    Promise.resolve().then(() => setNow(Date.now()));
  }, []);

  const stats = siteConfig.stats.slice(0, 2);
  const firstStatValue =
    stats[0]?.since && now
      ? Math.round(
          (now -
            new Date(stats[0].since.year, stats[0].since.month - 1).getTime()) /
            (365.25 * 86400000),
        )
      : (stats[0]?.value ?? 0);
  const secondStatValue = stats[1]?.value ?? 0;

  const animProps = shouldReduceMotion ? {} : { variants: fadeUp };
  const springScale = !shouldReduceMotion
    ? {
        scale: 1.02,
        transition: { type: "spring" as const, stiffness: 300, damping: 15 },
      }
    : undefined;
  const springTapScale = !shouldReduceMotion ? { scale: 0.98 } : undefined;

  return (
    <section className="relative isolate flex min-h-[95vh] items-center overflow-hidden px-4 pb-20 pt-24 md:px-6 md:pt-28">
      <DotGridBg />
      <FuturisticOrb />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={!shouldReduceMotion ? staggerContainer : undefined}
          initial="hidden"
          animate="visible"
        >
          {/* Cell A: Name + Role + Tagline — spans 2 cols on md+ */}
          <motion.div
            className="space-y-4 md:col-span-2 lg:col-span-2"
            {...animProps}
          >
            <p className="inline-flex rounded-full border border-indigo-500/35 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-wide text-indigo-300">
              {badge}
            </p>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_0_8px_hsl(160_84%_55%/.45)]">
              {role}
            </h2>
            <h1
              className="fluid-heading font-display font-extrabold tracking-[-0.03em] leading-[0.9]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-gradient drop-shadow-[0_0_14px_hsl(252_100%_75%/.45)]">
                {title}
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </motion.div>

          {/* Cell B: Status + Location */}
          <motion.div className="flex items-start pt-2" {...animProps}>
            <div className="flex w-fit items-center gap-3 rounded-full border border-indigo-500/25 bg-background/40 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_hsl(160_84%_55%/.75)]" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {siteConfig.profile.status?.[locale] ?? ""}
                </span>
                {location && (
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground/70">
                    <MapPin className="h-3 w-3" />
                    {location}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Cell C: CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-2"
            {...animProps}
          >
            <motion.span
              style={{ display: "inline-flex" }}
              whileHover={springScale}
              whileTap={springTapScale}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-indigo-500/30 bg-background/70 px-7 hover:border-indigo-400/60"
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
            <motion.span
              style={{ display: "inline-flex" }}
              whileHover={springScale}
              whileTap={springTapScale}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-indigo-500/30 bg-background/70 px-7 hover:border-indigo-400/60"
              >
                <Link
                  href="/cv"
                  aria-label={locale === "es" ? "Ver currículum (CV)" : "View resume (CV)"}
                >
                  <FileText className="h-4 w-4" />
                  CV
                </Link>
              </Button>
            </motion.span>
            <motion.span
              style={{ display: "inline-flex" }}
              whileHover={springScale}
              whileTap={springTapScale}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-indigo-500/30 bg-background/70 px-7 hover:border-indigo-400/60"
              >
                <Link
                  href="/certifications"
                  aria-label={locale === "es" ? "Ver certificaciones" : "View certifications"}
                >
                  <Award className="h-4 w-4" />
                  {locale === "es" ? "Certificaciones" : "Certifications"}
                </Link>
              </Button>
            </motion.span>
          </motion.div>

          {/* Cell D: Mini Stats Preview — spans 2 cols on md+ */}
          <motion.div
            className="flex flex-wrap items-center gap-6 pt-2 md:col-span-2 lg:col-span-2"
            {...animProps}
          >
            {stats.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">
                    {firstStatValue}
                    {stats[0]?.suffix ?? ""}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {stats[0]?.label[locale]}
                  </p>
                </div>
                {stats.length > 1 && (
                  <>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">
                        {secondStatValue}
                        {stats[1]?.suffix ?? ""}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {stats[1]?.label[locale]}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
