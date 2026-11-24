"use client";

import { useMemo, useRef, useState } from "react";
import type { TouchEventHandler } from "react";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import SectionDivider from "@/components/shared/section-divider";
import dynamic from "next/dynamic";
import { Card } from "./components/card";

const CardSwap = dynamic(() => import("./components/card-swap"), {
  ssr: false,
  loading: () => <div className="h-130 w-full" />,
});

const N8nWorkflowsModal = dynamic(
  () =>
    import("./components/n8n-workflows-modal").then(
      (mod) => mod.N8nWorkflowsModal,
    ),
  { ssr: false },
);

const ProjectDetailModal = dynamic(
  () =>
    import("./components/project-detail-modal").then(
      (mod) => mod.ProjectDetailModal,
    ),
  { ssr: false },
);

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Store,
  Download,
  Bot,
  Globe,
  Blocks,
  Layers,
  Workflow,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Project, ProjectSectionId } from "@/lib/types";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type ProjectFilterTab =
  | "ai-automation"
  | "web-saas"
  | "extensions-tools"
  | "all";

interface TabConfig {
  id: ProjectFilterTab;
  label: { es: string; en: string };
  icon: typeof Bot;
}

const FILTER_TABS: TabConfig[] = [
  {
    id: "ai-automation",
    label: { es: "IA & Automatización", en: "AI & Automation" },
    icon: Bot,
  },
  {
    id: "web-saas",
    label: { es: "Web & SaaS", en: "Web & SaaS" },
    icon: Globe,
  },
  {
    id: "extensions-tools",
    label: { es: "Extensiones & Tools", en: "Extensions & Tools" },
    icon: Blocks,
  },
  {
    id: "all",
    label: { es: "Todos", en: "All" },
    icon: Layers,
  },
];

export function Projects() {
  const { locale } = useLocale();
  const badge = useT(siteConfig.sections.projects.badge);
  const title = useT(siteConfig.sections.projects.title);
  const subtitle = siteConfig.sections.projects.subtitle?.[locale] ?? "";
  const inProductionLabel = useT(siteConfig.labels.inProduction);
  const prevLabel = useT(siteConfig.labels.prevProject);
  const nextLabel = useT(siteConfig.labels.nextProject);
  const shouldReduceMotion = useReducedMotion();

  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterTab>("ai-automation");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isStackHovered, setIsStackHovered] = useState(false);
  const [isWorkflowsModalOpen, setIsWorkflowsModalOpen] = useState(false);
  const [selectedDetailProject, setSelectedDetailProject] =
    useState<Project | null>(null);

  // Grouped project mapping by tab
  const projectsByTab = useMemo<Record<ProjectFilterTab, Project[]>>(() => {
    const production = siteConfig.projects.filter(
      (p) => p.category === "production",
    );

    return {
      "ai-automation": production.filter((p) => p.sectionId === "ai-automation"),
      "web-saas": production.filter((p) => p.sectionId === "web-saas"),
      "extensions-tools": production.filter(
        (p) => p.sectionId === "extensions-tools",
      ),
      all: production,
    };
  }, []);

  const projectsToRender = projectsByTab[activeFilter] ?? [];
  const activeProject = projectsToRender[activeIndex] ?? projectsToRender[0] ?? null;

  const handleTabChange = (tabId: ProjectFilterTab) => {
    setActiveFilter(tabId);
    setActiveIndex(0);
  };

  const goPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + projectsToRender.length) % projectsToRender.length,
    );
  };
  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsToRender.length);
  };

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
      className="scroll-mt-20 px-4 pb-10 pt-20 md:px-6"
    >
      <SectionDivider variant="terminal" label={badge.toLowerCase()} />
      <div className="mx-auto mt-6 w-full max-w-6xl">
        {/* ─── Section Header + Filter Tabs in Header ─── */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            className="space-y-2 text-left"
            variants={!shouldReduceMotion ? fadeUp : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {badge}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="max-w-xl text-xs text-muted-foreground md:text-sm">
                {subtitle}
              </p>
            ) : null}
          </motion.div>

          {/* Minimalist Filter Tabs in the Header */}
          <motion.div
            className="flex flex-wrap items-center gap-1.5 rounded-full border border-border/60 bg-background/60 p-1 backdrop-blur-md"
            variants={!shouldReduceMotion ? fadeUp : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab.id;
              const count = projectsByTab[tab.id]?.length ?? 0;
              const TabIcon = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border border-primary/45 bg-primary/15 font-semibold text-primary shadow-[0_0_14px_color-mix(in_oklch,var(--primary)_20%,transparent)]"
                      : "border border-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                  <span>{tab.label[locale]}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                      isSelected
                        ? "bg-primary/25 font-bold text-primary"
                        : "bg-muted/60 text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ─── Interactive Stacked View (Left Info + Right CardSwap) ─── */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text + Navigation (Left) */}
          <div className="relative z-10 flex h-full flex-col justify-center lg:col-span-5 lg:min-h-115">
            <AnimatePresence mode="wait" initial={false}>
              {activeProject ? (
                <motion.div
                  key={`${activeFilter}-${activeProject.id ?? activeProject.title.en}`}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }
                  }
                  animate={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                  }
                  exit={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }
                  }
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-left"
                >
                  <ProjectInfo
                    project={activeProject}
                    onOpenWorkflows={() => setIsWorkflowsModalOpen(true)}
                    onOpenDetail={(proj) => setSelectedDetailProject(proj)}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Navigation arrows */}
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
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                {activeIndex + 1} / {projectsToRender.length}
              </span>
            </div>
          </div>

          {/* Card Swap Stack Area (Desktop + Mobile) */}
          <div
            className="relative z-0 lg:col-span-7 lg:w-130.5 lg:self-center lg:justify-self-end"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Desktop CardSwap Stack */}
            <div
              className="hidden h-115 w-full overflow-visible md:block"
              onMouseEnter={() => setIsStackHovered(true)}
              onMouseLeave={() => setIsStackHovered(false)}
            >
              <CardSwap
                key={activeFilter}
                width={390}
                height={330}
                cardDistance={62}
                verticalDistance={34}
                maxVisibleCards={5}
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
                  const isProduction =
                    project.statusBadge?.es.toLowerCase().includes("producción") ||
                    project.statusBadge?.en.toLowerCase().includes("production") ||
                    project.isProduction;

                  const statusLabel =
                    project.statusBadge?.[locale] ??
                    (isProduction ? inProductionLabel : "ACTIVO");

                  return (
                    <Card key={`${activeFilter}-${project.id ?? project.title.en}`}>
                      <div
                        className={
                          `relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/90 backdrop-blur-[28px] ` +
                          `${isFront ? "shadow-[0_28px_80px_color-mix(in_oklch,var(--primary)_16%,transparent)]" : "shadow-[0_18px_50px_rgba(23,21,15,0.18)]"}`
                        }
                      >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/60" />
                        {/* File-tab header with project name & status */}
                        <div className="flex items-center gap-2.5 border-b border-border/60 bg-background/70 px-4 py-2.5 backdrop-blur-sm">
                          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-teal shadow-[0_0_6px_color-mix(in_oklch,var(--accent-teal)_50%,transparent)]" />
                          <span className="truncate text-sm font-semibold text-foreground">
                            {project.title[locale]}
                          </span>
                          <span
                            className={`ml-auto inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
                              isProduction
                                ? "border-green/25 bg-green/10 text-green"
                                : "border-accent-teal/30 bg-accent-teal/10 text-accent-teal"
                            }`}
                          >
                            {statusLabel}
                          </span>
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
                            className="object-cover transition-opacity duration-300"
                            priority={index === 0}
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

            {/* Mobile single card view */}
            <div className="block w-full md:hidden">
              <AnimatePresence mode="wait" initial={false}>
                {activeProject ? (
                  <motion.div
                    key={`${activeFilter}-${activeProject.id ?? activeProject.title.en}`}
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
                      {/* File-tab header */}
                      <div className="flex items-center gap-2.5 border-b border-border/60 bg-background/70 px-4 py-2.5 backdrop-blur-sm">
                        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-teal shadow-[0_0_6px_color-mix(in_oklch,var(--accent-teal)_50%,transparent)]" />
                        <span className="truncate text-sm font-semibold text-foreground">
                          {activeProject.title[locale]}
                        </span>
                        <span
                          className={`ml-auto inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
                            activeProject.isProduction
                              ? "border-green/25 bg-green/10 text-green"
                              : "border-accent-teal/30 bg-accent-teal/10 text-accent-teal"
                          }`}
                        >
                          {activeProject.statusBadge?.[locale] ??
                            (activeProject.isProduction
                              ? inProductionLabel
                              : "ACTIVO")}
                        </span>
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
                          className="object-cover transition-opacity duration-300"
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
      </div>

      <N8nWorkflowsModal
        open={isWorkflowsModalOpen}
        onOpenChange={setIsWorkflowsModalOpen}
      />

      <ProjectDetailModal
        project={selectedDetailProject}
        open={!!selectedDetailProject}
        onOpenChange={(open) => {
          if (!open) setSelectedDetailProject(null);
        }}
      />
    </section>
  );
}

function ProjectInfo({
  project,
  onOpenWorkflows,
  onOpenDetail,
}: {
  project: Project;
  onOpenWorkflows?: () => void;
  onOpenDetail?: (project: Project) => void;
}) {
  const { locale } = useLocale();
  const liveDemoLabel = useT(siteConfig.labels.liveDemo);
  const technologiesLabel = useT(siteConfig.labels.technologies);
  const demoAriaPrefix = useT(siteConfig.labels.openDemo);
  const demoLabel = project.demoLabel
    ? project.demoLabel[locale]
    : liveDemoLabel;

  const isStoreLink =
    project.demoLabel?.en.toLowerCase().includes("store") ||
    project.demoLabel?.en.toLowerCase().includes("add-ons") ||
    project.demoLabel?.es.toLowerCase().includes("store") ||
    project.demoLabel?.es.toLowerCase().includes("add-ons");

  const isDownloadLink =
    project.demoLabel?.en.toLowerCase().includes("download") ||
    project.demoLabel?.es.toLowerCase().includes("descargar");

  return (
    <div className="space-y-4 lg:max-w-prose">
      {/* Category Tag */}
      {project.sectionBadge ? (
        <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-primary">
          {project.sectionBadge[locale]}
        </span>
      ) : null}

      {/* Project title */}
      <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {project.title[locale]}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description[locale]}
      </p>

      {/* Technologies (max 6-7 tags) */}
      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
          {technologiesLabel}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 7).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2">
        {project.id === "n8n-pipelines" ? (
          <Button
            type="button"
            size="sm"
            className="neon-button rounded-full cursor-pointer"
            onClick={onOpenWorkflows}
          >
            <Workflow className="mr-1.5 h-3.5 w-3.5" />
            {locale === "es" ? "Ver flujos" : "View workflows"}
          </Button>
        ) : null}

        {project.links.demo ? (
          <Button asChild size="sm" className="neon-button rounded-full">
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${demoAriaPrefix} ${project.title[locale]}`}
            >
              {isStoreLink && <Store className="h-3.5 w-3.5" />}
              {isDownloadLink && <Download className="h-3.5 w-3.5" />}
              {!isStoreLink && !isDownloadLink && (
                <ExternalLink className="h-3.5 w-3.5" />
              )}
              {demoLabel}
            </Link>
          </Button>
        ) : null}

        {project.technicalDetails ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-full cursor-pointer border-border/80 bg-background/50 hover:border-primary/50 hover:text-primary transition-colors"
            onClick={() => onOpenDetail?.(project)}
          >
            <FileText className="mr-1.5 h-3.5 w-3.5 text-primary" />
            {locale === "es" ? "Ver detalle" : "View details"}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
