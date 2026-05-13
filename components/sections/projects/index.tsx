"use client";

import { useState, useRef } from "react";
import type { TouchEventHandler } from "react";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import CardSwap, { Card } from "./components/card-swap";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function getProjectLinks(
  project: Project,
  labels: { frontend: string; backend: string },
) {
  const codeLinks: Array<{ href: string; labelSuffix?: string }> = [];
  const code = project.links.code;
  if (typeof code === "string") {
    const href = code.trim();
    if (href) codeLinks.push({ href });
  } else if (code) {
    if (code.frontend?.trim())
      codeLinks.push({
        href: code.frontend.trim(),
        labelSuffix: labels.frontend,
      });
    if (code.backend?.trim())
      codeLinks.push({
        href: code.backend.trim(),
        labelSuffix: labels.backend,
      });
  }
  return { codeLinks };
}

export function Projects() {
  const { locale } = useLocale();
  const badge = useT(siteConfig.sections.projects.badge);
  const title = useT(siteConfig.sections.projects.title);
  const subtitle = siteConfig.sections.projects.subtitle?.[locale] ?? "";
  const inProductionLabel = useT(siteConfig.labels.inProduction);
  const prevLabel = useT(siteConfig.labels.prevProject);
  const nextLabel = useT(siteConfig.labels.nextProject);
  const shouldReduceMotion = useReducedMotion();

  const featuredProjects = siteConfig.projects.filter((p) => p.featured);
  const projectsToRender =
    featuredProjects.length > 0 ? featuredProjects : siteConfig.projects;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isStackHovered, setIsStackHovered] = useState(false);
  const activeProject = projectsToRender[activeIndex] ?? null;

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + projectsToRender.length) % projectsToRender.length,
    );
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % projectsToRender.length);

  const touchStartRef = useRef<{ x: number; y: number; t: number } | null>(
    null,
  );
  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      t: Date.now(),
    };
  };
  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;
    const touch = e.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    const dt = Date.now() - start.t;

    // Mobile vertical swipe navigation (avoid scroll/diagonal gestures)
    if (dt > 650) return;
    if (Math.abs(dy) < 60) return;
    if (Math.abs(dy) < Math.abs(dx) * 1.2) return;

    if (dy < 0) goNext();
    else goPrev();
  };

  if (projectsToRender.length === 0) return null;

  return (
    <section
      id={siteConfig.sections.projects.id}
      className="scroll-mt-20 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gradient md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* ─── Text + Navigation (Left) ─── */}
          <div className="relative z-10 flex h-full flex-col justify-center lg:col-span-5 lg:min-h-130">
            <AnimatePresence mode="wait" initial={false}>
              {activeProject ? (
                <motion.div
                  key={activeProject.title.en}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }
                  }
                  animate={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                  }
                  exit={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }
                  }
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="text-left"
                >
                  <ProjectInfo project={activeProject} />
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-start gap-3">
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="group rounded-full border border-white/10 bg-white/5 text-zinc-200 backdrop-blur-md transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 hover:shadow-[0_0_18px_rgba(16,185,129,0.18)]"
                onClick={goPrev}
                aria-label={prevLabel}
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="group rounded-full border border-white/10 bg-white/5 text-zinc-200 backdrop-blur-md transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 hover:shadow-[0_0_18px_rgba(16,185,129,0.18)]"
                onClick={goNext}
                aria-label={nextLabel}
              >
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* ─── CardSwap Stack (Right) ─── */}
          <div
            className="relative z-0 h-130 w-full overflow-visible pb-6 lg:col-span-7 lg:self-center lg:justify-self-start"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsStackHovered(true)}
            onMouseLeave={() => setIsStackHovered(false)}
          >
            <CardSwap
              width={390}
              height={330}
              cardDistance={64}
              verticalDistance={38}
              delay={5000}
              pauseOnHover
              skewAmount={0}
              easing="linear"
              anchor="left"
              stackDirection="right"
              controlledDuration={0.38}
              controlledEase="power3.inOut"
              hovered={isStackHovered}
              activeIndex={activeIndex}
              onCardClick={(idx) => setActiveIndex(idx)}
              onActiveIndexChange={(idx) =>
                setActiveIndex((curr) => (curr === idx ? curr : idx))
              }
            >
              {projectsToRender.map((project, index) => {
                const isFront = index === activeIndex;

                return (
                  <Card key={project.title.en}>
                    <div
                      className={
                        `relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 border-t border-t-white/20 bg-slate-950/80 backdrop-blur-[28px] ` +
                        `${isFront ? "shadow-[0_28px_80px_rgba(16,185,129,0.10)]" : "shadow-[0_18px_50px_rgba(0,0,0,0.32)]"}`
                      }
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
                      {/* File-tab header with project name */}
                      <div className="flex items-center gap-2.5 border-b border-white/10 bg-black/35 px-4 py-2.5 backdrop-blur-sm">
                        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_hsl(160_84%_55%/0.5)]" />
                        <span className="truncate text-sm font-semibold text-foreground">
                          {project.title[locale]}
                        </span>
                        {project.isProduction ? (
                          <span className="ml-auto inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                            {inProductionLabel}
                          </span>
                        ) : null}
                      </div>
                      {/* Card body */}
                      <div className="relative flex-1">
                        <Image
                          src={project.image}
                          alt={
                            project.imageAlt?.[locale] ?? project.title[locale]
                          }
                          fill
                          sizes="(max-width: 1024px) 320px, 400px"
                          className="object-cover"
                          priority={false}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/92 via-slate-950/50 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 bg-slate-950/45 px-4 py-4 backdrop-blur-sm">
                          <p className="line-clamp-3 text-center text-xs leading-relaxed text-zinc-300">
                            {project.description[locale]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  const { locale } = useLocale();
  const codeLabel = useT(siteConfig.labels.code);
  const liveDemoLabel = useT(siteConfig.labels.liveDemo);
  const technologiesLabel = useT(siteConfig.labels.technologies);
  const featuresLabel = useT(siteConfig.labels.features);
  const frontendLabel = useT(siteConfig.labels.frontend);
  const backendLabel = useT(siteConfig.labels.backend);
  const codeAriaPrefix = useT(siteConfig.labels.openCode);
  const demoAriaPrefix = useT(siteConfig.labels.openDemo);

  const { codeLinks } = getProjectLinks(project, {
    frontend: frontendLabel,
    backend: backendLabel,
  });

  return (
    <div className="space-y-4 lg:max-w-prose">
      {/* Project title */}
      <h3 className="text-2xl font-bold tracking-tight text-foreground">
        {project.title[locale]}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description[locale]}
      </p>

      {/* Technologies */}
      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
          {technologiesLabel}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {featuresLabel}
          </h4>
          <ul className="space-y-1">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 pt-2">
        {codeLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant="outline"
            size="sm"
            className="rounded-full"
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${codeAriaPrefix} ${project.title[locale]}${link.labelSuffix ? ` (${link.labelSuffix})` : ""}`}
            >
              <Github className="h-3.5 w-3.5" />
              {codeLabel}
              {link.labelSuffix ? ` ${link.labelSuffix}` : ""}
            </Link>
          </Button>
        ))}
        {project.links.demo ? (
          <Button asChild size="sm" className="neon-button rounded-full">
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${demoAriaPrefix} ${project.title[locale]}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {liveDemoLabel}
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
