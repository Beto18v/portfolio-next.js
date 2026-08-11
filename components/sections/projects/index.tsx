"use client";

import { useCallback, useRef, useState } from "react";
import type { TouchEventHandler } from "react";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { useLenis } from "@/components/shared/lenis-provider";
import SectionDivider from "@/components/shared/section-divider";
import CardSwap, { Card } from "./components/card-swap";
import { Coverflow, type CoverflowChildProps, CARD_HEIGHT } from "./components/coverflow";
import { ChevronDown, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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

interface OtherProjectCardProps extends Partial<CoverflowChildProps> {
  project: Project;
  codeLinks: { href: string; labelSuffix?: string }[];
  codeLabel: string;
  codeAriaPrefix: string;
}

function OtherProjectCard({
  project,
  codeLinks,
  codeLabel,
  codeAriaPrefix,
  isFront,
}: OtherProjectCardProps) {
  const { locale } = useLocale();

  return (
    <div
      className={
        // `will-change-transform` + shadow/filter deltas minimizan el repintado
        // durante la rotación 3D (backdrop-blur grande se recalcula por frame).
        `flex h-full flex-col overflow-hidden rounded-2xl border bg-card/95 text-left will-change-transform [backface-visibility:hidden] transition-colors duration-300 ` +
        (isFront
          ? "border-accent-teal/30 shadow-[0_28px_80px_color-mix(in_oklch,var(--primary)_16%,transparent)]"
          : "border-border/60 shadow-[0_18px_50px_rgba(0,0,0,0.18)]")
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/60" />
      <div className="relative aspect-video shrink-0 overflow-hidden border-b border-border/60">
        <Image
          src={project.image}
          alt={project.imageAlt?.[locale] ?? project.title[locale]}
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/85 via-transparent to-transparent" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-5">
        <h4 className="text-base font-bold tracking-tight text-foreground">
          {project.title[locale]}
        </h4>
        {/* Descripción completa en la card frontal */}
        <p
          className={
            "mt-1.5 text-xs leading-relaxed text-muted-foreground " +
            (isFront ? "" : "line-clamp-2")
          }
        >
          {project.description[locale]}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-[9px] font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {codeLinks.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pb-1 pt-4">
            {codeLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                variant="outline"
                size="xs"
                className="rounded-full"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${codeAriaPrefix} ${project.title[locale]}${link.labelSuffix ? ` (${link.labelSuffix})` : ""}`}
                >
                  <Github className="h-3 w-3" />
                  {codeLabel}
                  {link.labelSuffix ? ` ${link.labelSuffix}` : ""}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function OtherProjects({ projects }: { projects: Project[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const bodyRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const otherProjectsLabel = useT(siteConfig.labels.otherProjects);
  const codeLabel = useT(siteConfig.labels.code);
  const frontendLabel = useT(siteConfig.labels.frontend);
  const backendLabel = useT(siteConfig.labels.backend);
  const codeAriaPrefix = useT(siteConfig.labels.openCode);
  const prevLabel = useT(siteConfig.labels.prevProject);
  const nextLabel = useT(siteConfig.labels.nextProject);

  const goPrev = useCallback(
    () =>
      setActiveIndex(
        (prev) => (prev - 1 + projects.length) % projects.length,
      ),
    [projects.length],
  );
  const goNext = useCallback(
    () => setActiveIndex((prev) => (prev + 1) % projects.length),
    [projects.length],
  );

  const toggleOpen = useCallback(() => {
    setActiveIndex(0);
    setIsOpen((open) => {
      const next = !open;
      if (next) {
        // Scroll IMMEDIATELY (no waiting for the expand animation). The
        // carousel sits `mt-8` below the button and is CARD_HEIGHT tall, so
        // we can compute its center deterministically and let Lenis glide
        // while the accordion expands underneath.
        const btn = buttonRef.current;
        if (btn && lenis) {
          const rect = btn.getBoundingClientRect();
          const carouselCenter = window.scrollY + rect.top + rect.height + 32 + CARD_HEIGHT / 2;
          lenis.scrollTo(carouselCenter - window.innerHeight / 2, { duration: 1 });
        }
      }
      return next;
    });
  }, [lenis]);

  if (projects.length === 0) return null;

  return (
    <div className="mt-20">
      {/* ─── Desplegable: título de la sección ─── */}
      <button
        type="button"
        ref={buttonRef}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="other-projects-body"
        className="group mx-auto flex items-center justify-center gap-3 rounded-full border border-border/60 bg-background/50 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-accent-teal/40 hover:bg-accent-teal/10"
      >
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          {otherProjectsLabel}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors duration-300 group-hover:border-accent-teal/40 group-hover:text-accent-teal"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="other-projects-body"
            id="other-projects-body"
            ref={bodyRef}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, height: 0, y: -8 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto", y: 0 }
            }
            exit={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0, y: -8 }
            }
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* pb-32 da espacio a la sombra azul del front card para que no se
                corte con el overflow-hidden del accordion durante la animación */}
            <div className="mx-auto mt-8 max-w-[1000px] px-2 pb-32">
              <Coverflow
                activeIndex={activeIndex}
                onActiveIndexChange={setActiveIndex}
                delay={shouldReduceMotion ? 0 : 4000}
              >
                {projects.map((project) => {
                  const { codeLinks } = getProjectLinks(project, {
                    frontend: frontendLabel,
                    backend: backendLabel,
                  });

                  return (
                    <OtherProjectCard
                      key={project.title.en}
                      project={project}
                      codeLinks={codeLinks}
                      codeLabel={codeLabel}
                      codeAriaPrefix={codeAriaPrefix}
                    />
                  );
                })}
              </Coverflow>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="group rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-accent-teal/40 hover:bg-accent-teal/10 hover:text-accent-teal"
                onClick={goPrev}
                aria-label={prevLabel}
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="group rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-accent-teal/40 hover:bg-accent-teal/10 hover:text-accent-teal"
                onClick={goNext}
                aria-label={nextLabel}
              >
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
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

  const featuredProjects = siteConfig.projects.filter(
    (p) => p.category === "production",
  );
  const academicProjects = siteConfig.projects.filter(
    (p) => p.category === "academic",
  );
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
      <SectionDivider variant="terminal" label={badge.toLowerCase()} />
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="mb-10 space-y-3"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gradient md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
          ) : null}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-8"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
                className="group rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-accent-teal/40 hover:bg-accent-teal/10 hover:text-accent-teal hover:shadow-[0_0_18px_color-mix(in_oklch,var(--accent-teal)_18%,transparent)]"
                onClick={goPrev}
                aria-label={prevLabel}
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="group rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-accent-teal/40 hover:bg-accent-teal/10 hover:text-accent-teal hover:shadow-[0_0_18px_color-mix(in_oklch,var(--accent-teal)_18%,transparent)]"
                onClick={goNext}
                aria-label={nextLabel}
              >
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* ─── Card Swap area (desktop + mobile) ─── */}
          <div
            className="relative z-0 lg:col-span-7 lg:self-center lg:justify-self-start"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* ─── CardSwap Stack (Desktop only) ─── */}
            <div
              className="hidden h-130 w-full overflow-visible pb-6 md:block"
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
                          `relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/90 backdrop-blur-[28px] ` +
                          `${isFront ? "shadow-[0_28px_80px_color-mix(in_oklch,var(--primary)_16%,transparent)]" : "shadow-[0_18px_50px_rgba(0,0,0,0.18)]"}`
                        }
                      >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/60" />
                        {/* File-tab header with project name */}
                        <div className="flex items-center gap-2.5 border-b border-border/60 bg-background/70 px-4 py-2.5 backdrop-blur-sm">
                          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-teal shadow-[0_0_6px_color-mix(in_oklch,var(--accent-teal)_50%,transparent)]" />
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
                              project.imageAlt?.[locale] ??
                              project.title[locale]
                            }
                            fill
                            sizes="(max-width: 1024px) 320px, 400px"
                            className="object-cover"
                            priority={false}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/55 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 bg-background/55 px-4 py-4 backdrop-blur-sm">
                            <p className="line-clamp-3 text-center text-xs leading-relaxed text-muted-foreground">
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

            {/* ─── Mobile single card view ─── */}
            <div className="block w-full md:hidden">
              <AnimatePresence mode="wait" initial={false}>
                {activeProject ? (
                  <motion.div
                    key={activeProject.title.en}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: 40 }
                    }
                    animate={
                      shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                    }
                    exit={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: -40 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto w-full max-w-sm"
                  >
                    <div className="relative flex h-90 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/90 shadow-[0_28px_80px_color-mix(in_oklch,var(--primary)_16%,transparent)] backdrop-blur-[28px]">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/60" />
                      {/* File-tab header with project name */}
                      <div className="flex items-center gap-2.5 border-b border-border/60 bg-background/70 px-4 py-2.5 backdrop-blur-sm">
                        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-teal shadow-[0_0_6px_color-mix(in_oklch,var(--accent-teal)_50%,transparent)]" />
                        <span className="truncate text-sm font-semibold text-foreground">
                          {activeProject.title[locale]}
                        </span>
                        {activeProject.isProduction ? (
                          <span className="ml-auto inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                            {inProductionLabel}
                          </span>
                        ) : null}
                      </div>
                      {/* Card body */}
                      <div className="relative flex-1">
                        <Image
                          src={activeProject.image}
                          alt={
                            activeProject.imageAlt?.[locale] ??
                            activeProject.title[locale]
                          }
                          fill
                          sizes="(max-width: 768px) 90vw, 400px"
                          className="object-cover"
                          priority={activeIndex === 0}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/55 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 bg-background/55 px-4 py-4 backdrop-blur-sm">
                          <p className="line-clamp-3 text-center text-xs leading-relaxed text-muted-foreground">
                            {activeProject.description[locale]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ─── Other (academic) projects grid ─── */}
        <OtherProjects projects={academicProjects} />
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
  const demoLabel = project.demoLabel
    ? project.demoLabel[locale]
    : liveDemoLabel;

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

      {/* Metrics (rendered only when real data is provided) */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-6 border-y border-border/60 py-3">
          {project.metrics.map((m) => (
            <div key={m.label.en}>
              <span className="block text-xl font-bold text-primary">
                {m.value}
              </span>
              <span className="text-xs text-muted-foreground">
                {m.label[locale]}
              </span>
            </div>
          ))}
        </div>
      )}

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
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal" />
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
              {demoLabel}
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
