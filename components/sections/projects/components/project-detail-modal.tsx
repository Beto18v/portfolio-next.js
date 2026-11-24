"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import { useLocale } from "@/components/shared/locale-provider";
import { useLenis } from "@/components/shared/lenis-provider";
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  Target,
  TrendingUp,
  CheckCircle2,
  Code2,
  Sparkles,
  AlertTriangle,
  Zap,
  Terminal,
  Activity,
  Boxes,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) {
  const { locale } = useLocale();
  const lenis = useLenis();

  // Stop Lenis background scroll while the modal is open
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [open, lenis]);

  if (!project) return null;

  const tech = project.technicalDetails;
  const isEs = locale === "es";
  const displayTitle = (project.modalTitle ?? project.title)[locale];

  // Code repository links extraction
  const codeLinks: Array<{ href: string; label: string }> = [];
  const code = project.links.code;
  if (typeof code === "string") {
    if (code.trim()) {
      codeLinks.push({
        href: code.trim(),
        label: isEs ? "Repositorio GitHub" : "GitHub Repository",
      });
    }
  } else if (code) {
    if (code.frontend?.trim()) {
      codeLinks.push({
        href: code.frontend.trim(),
        label: isEs ? "Código Frontend" : "Frontend Code",
      });
    }
    if (code.backend?.trim()) {
      codeLinks.push({
        href: code.backend.trim(),
        label: isEs ? "Código Backend" : "Backend Code",
      });
    }
  }

  const demoLabel = project.demoLabel
    ? project.demoLabel[locale]
    : isEs
      ? "Ver sitio"
      : "Visit Site";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#0c0d10]/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          className="fixed top-1/2 left-1/2 z-50 flex max-h-[92vh] w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-primary/30 bg-[#12141a]/95 backdrop-blur-[24px] p-0 shadow-[0_0_50px_rgba(232,163,61,0.16)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {/* ─── Window Header (Titlebar) ─── */}
          <div className="flex items-center justify-between border-b border-border/70 bg-[#161820]/90 px-4 py-3 sm:px-6">
            {/* Left: Project Brand / Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Boxes className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground/90 truncate">
                {displayTitle}
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-muted-foreground truncate">
                · {project.sectionBadge?.[locale] ?? (isEs ? "Detalle Técnico" : "Technical Specs")}
              </span>
            </div>

            {/* Right: Live Status & Red Close Button */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-green sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                {project.statusBadge?.[locale] ?? (project.isProduction ? (isEs ? "EN PRODUCCIÓN" : "IN PRODUCTION") : (isEs ? "ACTIVO" : "ACTIVE"))}
              </span>

              {/* Red Close Button */}
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="group relative flex h-4 w-4 items-center justify-center rounded-full bg-red-500/80 transition-all hover:bg-red-400 hover:scale-110 cursor-pointer shadow-[0_0_8px_rgba(239,68,68,0.5)] border border-red-400/40"
                title={isEs ? "Cerrar" : "Close"}
                aria-label={isEs ? "Cerrar" : "Close"}
              >
                <X className="h-2.5 w-2.5 text-white/90 transition-opacity" />
              </button>
            </div>
          </div>

          {/* ─── Hero Banner & Action Deck ─── */}
          <div className="relative border-b border-border/70 bg-linear-to-b from-[#181a24] to-[#12141a] px-5 py-5 sm:px-6">
            {/* Background Project Image Layer with Gradient Fade */}
            {project.image && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={displayTitle}
                  fill
                  className="object-cover object-right opacity-40 transition-opacity sm:opacity-45"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#12141a] via-[#12141a]/85 via-50% to-[#12141a]/25" />
                <div className="absolute inset-0 bg-linear-to-t from-[#12141a] via-transparent to-black/20" />
              </div>
            )}

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {project.sectionBadge?.[locale] ?? (isEs ? "Especificación Técnica" : "Technical Specification")}
                  </span>
                </div>
                <DialogPrimitive.Title className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                  {displayTitle}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.description[locale]}
                </DialogPrimitive.Description>
              </div>

              {/* Action Buttons (stacked vertically for compact width) */}
              <div className="flex shrink-0 flex-col sm:items-end gap-2 pt-2 sm:pt-0 w-full sm:w-auto">
                {project.links.demo && (
                  <Button
                    asChild
                    size="sm"
                    className="neon-button rounded-full text-xs font-semibold cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      {demoLabel}
                    </a>
                  </Button>
                )}

                {codeLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full border-border/70 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Scrollable Content Body (Full Specs in One Unified Page) ─── */}
          <div
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 space-y-8 sm:px-8 text-sm"
          >
            {/* ═══ SECTION 1: ARCHITECTURE & ENGINEERING DECISIONS ═══ */}
            {tech?.technicalArchitecture && (
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    <Cpu className="h-4 w-4" />
                    <span className="font-bold">{isEs ? "[ 01 // ARQUITECTURA TÉCNICA ]" : "[ 01 // TECHNICAL ARCHITECTURE ]"}</span>
                  </div>
                  {tech.technicalArchitecture.components && (
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {tech.technicalArchitecture.components.length} {isEs ? "módulos activos" : "active modules"}
                    </span>
                  )}
                </div>

                {/* Architecture Narrative Card */}
                <div className="rounded-xl border border-primary/25 bg-card/60 p-4 sm:p-5 backdrop-blur-sm space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>{isEs ? "Decisiones de Ingeniería & Patrón de Diseño" : "Engineering Decisions & Architecture Pattern"}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                    {tech.technicalArchitecture.description[locale]}
                  </p>
                </div>

                {/* Microservices & Modular Components */}
                {tech.technicalArchitecture.components && (
                  <div className="space-y-2.5 pt-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2">
                      <Boxes className="h-3.5 w-3.5 text-primary" />
                      <span>{isEs ? "Módulos y Componentes Clave" : "Key Modules & Components"}</span>
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {tech.technicalArchitecture.components.map((comp) => (
                        <div
                          key={comp.name}
                          className="group rounded-xl border border-border/70 bg-background/50 p-4 transition-all duration-200 hover:border-primary/45 hover:bg-card/70 hover:shadow-[0_4px_20px_rgba(232,163,61,0.08)]"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="flex h-5 w-5 items-center justify-center rounded border border-primary/40 bg-primary/10 text-primary font-mono text-[10px] font-bold">
                              &lt;/&gt;
                            </span>
                            <p className="font-mono text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                              {comp.name}
                            </p>
                          </div>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {comp.role[locale]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges Solved */}
                {tech.technicalArchitecture.challengesSolved && (
                  <div className="space-y-2.5 pt-2">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5 text-accent-teal" />
                      <span>{isEs ? "Retos de Ingeniería Resueltos" : "Engineering Challenges Solved"}</span>
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {tech.technicalArchitecture.challengesSolved.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/30 p-3 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-green mt-0.5" />
                          <span className="leading-relaxed text-foreground/90">{item[locale]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* ═══ SECTION 2: BUSINESS IMPACT & ROI ═══ */}
            {tech?.commercialImpact && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border/60 pb-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Target className="h-4 w-4" />
                  <span className="font-bold">{isEs ? "[ 02 // ENFOQUE COMERCIAL & IMPACTO DE NEGOCIO ]" : "[ 02 // COMMERCIAL FOCUS & BUSINESS IMPACT ]"}</span>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Problem Card */}
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                      <AlertTriangle className="h-4 w-4 text-amber-400" />
                      <span>{isEs ? "Problema de Negocio / Pain Point" : "Business Pain / Problem"}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                      {tech.commercialImpact.problem[locale]}
                    </p>
                  </div>

                  {/* Solution Card */}
                  <div className="rounded-xl border border-primary/35 bg-primary/5 p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>{isEs ? "Solución Técnica Implementada" : "Technical Solution Applied"}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                      {tech.commercialImpact.solution[locale]}
                    </p>
                  </div>
                </div>

                {/* Value Proposition & ROI */}
                {tech.commercialImpact.valueProposition && (
                  <div className="rounded-xl border border-green/30 bg-green/5 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-green">
                      <TrendingUp className="h-4 w-4 text-green" />
                      <span>{isEs ? "Propuesta de Valor & Retorno de Inversión" : "Value Proposition & Return on Investment"}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                      {tech.commercialImpact.valueProposition[locale]}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* ═══ SECTION 3: KEY PERFORMANCE METRICS ═══ */}
            {tech?.metrics && tech.metrics.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border/60 pb-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Activity className="h-4 w-4" />
                  <span className="font-bold">{isEs ? "[ 03 // MÉTRICAS CLAVE DE RENDIMIENTO ]" : "[ 03 // KEY PERFORMANCE METRICS ]"}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {tech.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border/70 bg-card/60 p-4 text-center backdrop-blur-sm transition-all hover:border-primary/40"
                    >
                      <p className="font-display text-2xl font-extrabold text-gradient sm:text-3xl tabular-nums">
                        {metric.value}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                        {metric.label[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ═══ SECTION 4: COMPLETE TECHNOLOGY STACK ═══ */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-border/60 pb-2 font-mono text-xs uppercase tracking-wider text-primary">
                <Code2 className="h-4 w-4" />
                <span className="font-bold">{isEs ? "[ 04 // STACK TECNOLÓGICO ]" : "[ 04 // TECHNOLOGIES & STACK ]"}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/20"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
