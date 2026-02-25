"use client";

import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useT } from "./locale-provider";
import DotGridBg from "@/components/hero/dot-grid-bg";
import FuturisticOrb from "@/components/hero/orb";

export function Hero() {
  const { locale } = useLocale();
  const role = useT(siteConfig.profile.role);
  const title = useT(siteConfig.hero.title);
  const subtitle = useT(siteConfig.hero.subtitle);
  const badge = useT(siteConfig.hero.badge);
  const location = siteConfig.profile.location?.[locale] ?? null;
  const primaryLabel = useT(siteConfig.hero.primaryCTA.label);
  const secondaryLabel = useT(siteConfig.hero.secondaryCTA.label);
  const projectsAria = useT(siteConfig.labels.viewProjects);
  const githubAria = useT(siteConfig.labels.openGithub);

  return (
    <section className="relative isolate flex min-h-[95vh] items-center overflow-hidden px-4 pb-20 pt-24 md:px-6 md:pt-28">
      <DotGridBg />
      <FuturisticOrb />

      <div className="absolute right-8 top-24 hidden h-28 w-28 rounded-xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm md:block" />
      <div className="absolute bottom-16 left-8 hidden h-20 w-44 rounded-xl border border-emerald-400/25 bg-emerald-400/10 backdrop-blur-sm md:block" />

      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          <div className="hero-reveal space-y-4">
            <p className="inline-flex rounded-full border border-indigo-500/35 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-wide text-indigo-300">
              {badge}
            </p>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_0_8px_hsl(160_84%_55%/.45)]">
              {role}
            </h2>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-linear-to-r from-indigo-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_hsl(252_100%_75%/.45)]">
                {title}
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
              {subtitle}
            </p>
            {location ? (
              <p className="text-sm text-muted-foreground/90">{location}</p>
            ) : null}
          </div>

          <div className="hero-reveal flex flex-wrap gap-4 [animation-delay:220ms]">
            <Button
              asChild
              size="lg"
              className="neon-button h-11 rounded-full px-7 font-semibold"
            >
              <Link
                href={siteConfig.hero.primaryCTA.href}
                aria-label={projectsAria}
              >
                {primaryLabel}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
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
          </div>

          <div className="hero-reveal [animation-delay:340ms]">
            <div className="flex w-fit items-center gap-3 rounded-full border border-indigo-500/25 bg-background/40 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_hsl(160_84%_55%/.75)]" />
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {siteConfig.profile.status?.[locale] ?? ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
