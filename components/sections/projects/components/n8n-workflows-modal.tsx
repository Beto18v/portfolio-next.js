"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import { useLocale } from "@/components/shared/locale-provider";
import { useLenis } from "@/components/shared/lenis-provider";
import { siteConfig } from "@/lib/site";
import {
  X,
  Workflow,
  Clock,
  FileSpreadsheet,
  MapPin,
  Cpu,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Share2,
  Check,
  TrendingUp,
  Zap,
  Copy,
  Download,
  Code2,
  ListTree,
  FileJson,
  FolderArchive,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  n8nWorkflows,
  type WorkflowStep,
  type N8nWorkflowConfig,
} from "@/lib/n8n-workflows";

interface N8nWorkflowsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type PipelineKey = "pipeline1" | "pipeline2" | "pipeline3";

export function N8nWorkflowsModal({
  open,
  onOpenChange,
}: N8nWorkflowsModalProps) {
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

  const [activeTab, setActiveTab] = useState<PipelineKey>("pipeline1");
  const [viewMode, setViewMode] = useState<"visual" | "json">("visual");
  const [copied, setCopied] = useState(false);

  const isEs = locale === "es";
  const n8nProject = siteConfig.projects.find((p) => p.id === "n8n-pipelines");
  const displayTitle =
    n8nProject?.title[locale] ?? (isEs ? "Flujos n8n" : "Workflows n8n");
  const displayDesc =
    n8nProject?.description[locale] ??
    (isEs
      ? "Automatizaciones que trabajan solas a diario. Encuentran y filtran clientes potenciales, crean y programan publicaciones en LinkedIn y envían alertas inmediatas por Telegram ante cualquier error."
      : "Autonomous automations working daily: finds and filters potential leads, creates and schedules LinkedIn posts, and dispatches instant Telegram alerts upon errors.");

  const currentWorkflow: N8nWorkflowConfig = n8nWorkflows[activeTab];
  const jsonString = JSON.stringify(currentWorkflow.rawJson, null, 2);

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copying JSON to clipboard", err);
    }
  };

  const handleDownloadJson = () => {
    try {
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = currentWorkflow.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error downloading JSON", err);
    }
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#0c0d10]/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          className="fixed top-1/2 left-1/2 z-50 flex max-h-[92vh] w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-primary/30 bg-[#12141a] p-0 shadow-[0_0_50px_rgba(232,163,61,0.14)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {/* ─── Window Header (Titlebar) ─── */}
          <div className="flex items-center justify-between border-b border-border/70 bg-[#161820]/90 px-4 py-3 sm:px-6">
            {/* Left: Project Brand / Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Workflow className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground/90 truncate">
                {displayTitle}
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-muted-foreground truncate">
                · {n8nProject?.sectionBadge?.[locale] ?? (isEs ? "IA & Automatización" : "AI & Automation")}
              </span>
            </div>

            {/* Right: Live Status & Red Close Button */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-green sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                {isEs ? "EN PRODUCCIÓN" : "IN PRODUCTION"}
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
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/projects/n8n-pipelines.svg"
                alt={displayTitle}
                fill
                className="object-cover object-right opacity-45 transition-opacity sm:opacity-50"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#12141a] via-[#12141a]/85 via-50% to-[#12141a]/25" />
              <div className="absolute inset-0 bg-linear-to-t from-[#12141a] via-transparent to-black/20" />
            </div>

            <div className="relative flex flex-col gap-4">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {isEs
                      ? "Flujos Autónomos · Hetzner VPS Self-Hosted"
                      : "Autonomous Workflows · Hetzner VPS Self-Hosted"}
                  </span>
                </div>
                <DialogPrimitive.Title className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                  {displayTitle}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {displayDesc}
                </DialogPrimitive.Description>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6 sm:py-5"
          >
            {/* Pipeline Tabs Selector & Controls (Top) */}
            <div className="mb-5 flex flex-col justify-between gap-3 border-b border-border/60 pb-3 sm:flex-row sm:items-center">
              {/* Tab Switcher */}
              <div className="flex flex-wrap gap-2">
                {Object.values(n8nWorkflows).map((wf, idx) => {
                  const isSelected = activeTab === wf.id;
                  return (
                    <button
                      key={wf.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(wf.id);
                        setCopied(false);
                      }}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                        isSelected
                          ? "border border-primary/45 bg-primary/15 text-primary shadow-[0_0_15px_color-mix(in_oklch,var(--primary)_20%,transparent)]"
                          : "border border-border/50 bg-background/40 text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                      )}
                    >
                      <div className="flex h-4.5 w-4.5 items-center justify-center rounded border border-current text-[9px] font-bold">
                        {idx + 1}
                      </div>
                      <span>{wf.tabLabel[locale]}</span>
                    </button>
                  );
                })}
              </div>

              {/* View Mode & Actions (Copy / Download) */}
              <div className="flex items-center gap-2">
                <div className="flex rounded-lg border border-border/60 bg-background/50 p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewMode("visual")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer",
                      viewMode === "visual"
                        ? "bg-primary/20 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <ListTree className="h-3 w-3" />
                    <span>{locale === "es" ? "Diagrama" : "Diagram"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("json")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer",
                      viewMode === "json"
                        ? "bg-primary/20 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Code2 className="h-3 w-3" />
                    <span>JSON</span>
                  </button>
                </div>

                {/* Download JSON Button */}
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleDownloadJson}
                  className="h-7 rounded-lg px-2.5 text-xs hover:border-primary/50 hover:bg-primary/10 hover:text-primary cursor-pointer"
                >
                  <Download className="mr-1 h-3.5 w-3.5" />
                  <span>{locale === "es" ? "Descargar" : "Download"}</span>
                </Button>
              </div>
            </div>

            {/* Pipeline Header */}
            <div className="mb-5">
              <div className="mb-1 flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  {activeTab === "pipeline1"
                    ? "Pipeline 01"
                    : activeTab === "pipeline2"
                      ? "Pipeline 02"
                      : "Pipeline 03"}
                </span>
                <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  {currentWorkflow.badge[locale]}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  ({currentWorkflow.nodeCount} {locale === "es" ? "nodos n8n" : "n8n nodes"})
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground sm:text-xl">
                {currentWorkflow.title[locale]}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {currentWorkflow.description[locale]}
              </p>
            </div>

            {/* Conditional Display: Visual Diagram vs Raw JSON */}
            {viewMode === "visual" ? (
              <div className="space-y-6">
                {/* Steps Timeline */}
                <div>
                  <h5 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {locale === "es"
                      ? "Pasos del flujo en n8n"
                      : "Workflow steps in n8n"}
                  </h5>
                  <div
                    className={cn(
                      "grid grid-cols-1 gap-2.5",
                      currentWorkflow.steps.length >= 7
                        ? "sm:grid-cols-2 md:grid-cols-4"
                        : currentWorkflow.steps.length >= 5
                          ? "sm:grid-cols-2 md:grid-cols-3"
                          : "sm:grid-cols-3",
                    )}
                  >
                    {currentWorkflow.steps.map((step) => {
                      const isFirst = step.stepNumber === "01";
                      const isLast =
                        step.stepNumber ===
                        String(currentWorkflow.steps.length).padStart(2, "0");

                      return (
                        <div
                          key={step.stepNumber}
                          className={cn(
                            "relative rounded-xl border p-3 text-left transition-colors",
                            isLast
                              ? "border-green/40 bg-green/10"
                              : isFirst
                                ? "border-primary/40 bg-card/70"
                                : "border-border/70 bg-card/70",
                          )}
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <div
                              className={cn(
                                "flex h-7 w-7 items-center justify-center rounded-md border",
                                isLast
                                  ? "border-green/40 bg-green/20 text-green"
                                  : isFirst
                                    ? "border-primary/40 bg-primary/10 text-primary"
                                    : "border-border/80 bg-muted/30 text-muted-foreground",
                              )}
                            >
                              {getStepIcon(step.iconName)}
                            </div>
                            <span
                              className={cn(
                                "font-mono text-[10px] font-semibold",
                                isLast
                                  ? "text-green"
                                  : isFirst
                                    ? "text-primary"
                                    : "text-muted-foreground",
                              )}
                            >
                              {step.stepNumber}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-foreground">
                            {step.title[locale]}
                          </p>
                          <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                            {step.description[locale]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Impact Metrics Grid */}
                <div>
                  <h5 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {locale === "es"
                      ? "Métricas de impacto"
                      : "Impact metrics"}
                  </h5>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {currentWorkflow.metrics.map((metric) => (
                      <div
                        key={metric.label.en}
                        className="rounded-xl border border-border/60 bg-card/50 p-3.5 text-left"
                      >
                        <div
                          className={cn(
                            "flex items-center gap-1.5",
                            metric.accent === "green"
                              ? "text-green"
                              : "text-primary",
                          )}
                        >
                          <TrendingUp className="h-3.5 w-3.5" />
                          <span className="font-mono text-lg font-bold">
                            {metric.value}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-foreground">
                          {metric.label[locale]}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {metric.sublabel[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Raw JSON View */
              <div className="rounded-xl border border-border/80 bg-[#0c0d10] p-4 text-left">
                <div className="mb-3 flex items-center justify-between border-b border-border/50 pb-2">
                  <div className="flex items-center gap-2">
                    <FileJson className="h-4 w-4 text-primary" />
                    <span className="font-mono text-xs font-semibold text-foreground">
                      data/workflows/{currentWorkflow.filename}
                    </span>
                    <span className="rounded bg-muted/40 px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground">
                      {(new Blob([jsonString]).size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={handleCopyJson}
                    className="h-6 gap-1 px-2 text-[11px] text-primary hover:bg-primary/10"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-green" />
                        <span className="text-green">
                          {locale === "es" ? "Copiado" : "Copied"}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>{locale === "es" ? "Copiar" : "Copy"}</span>
                      </>
                    )}
                  </Button>
                </div>

                <pre className="max-h-85 overflow-auto font-mono text-[11px] leading-relaxed text-muted-foreground selection:bg-primary/30 selection:text-foreground">
                  <code>{jsonString}</code>
                </pre>
              </div>
            )}

            {/* Tech Stack Pills at bottom */}
            <div className="mt-4 border-t border-border/60 pt-4 text-left">
              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
                {locale === "es"
                  ? "Tecnologías y Servicios Conectados"
                  : "Technologies & Connected Services"}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "n8n (Self-Hosted)",
                  "Node.js",
                  "Gemini API",
                  "Google Places API",
                  "Telegram Bot API",
                  "Google Sheets",
                  "Hetzner VPS",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function getStepIcon(name: WorkflowStep["iconName"]) {
  switch (name) {
    case "clock":
      return <Clock className="h-4 w-4" />;
    case "sheets":
      return <FileSpreadsheet className="h-4 w-4" />;
    case "places":
      return <MapPin className="h-4 w-4" />;
    case "cpu":
      return <Cpu className="h-4 w-4" />;
    case "telegram":
      return <Send className="h-4 w-4" />;
    case "gemini":
      return <Sparkles className="h-4 w-4" />;
    case "validation":
      return <CheckCircle2 className="h-4 w-4" />;
    case "linkedin":
      return <Share2 className="h-4 w-4" />;
    case "drive":
      return <FolderArchive className="h-4 w-4" />;
    case "alert":
      return <AlertTriangle className="h-4 w-4" />;
    default:
      return <Workflow className="h-4 w-4" />;
  }
}
