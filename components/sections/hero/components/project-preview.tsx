"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import type { Project } from "@/lib/types";

function FeaturedProject({ project }: { project: Project }) {
  const { locale } = useLocale();
  const inProduction = useT(siteConfig.labels.inProduction);
  const href = project.links.demo ?? `#${siteConfig.sections.projects.id}`;
  const external = !!project.links.demo;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${project.title[locale]} — ${inProduction}`}
      className="group relative block overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-[0_8px_32px_color-mix(in_oklch,var(--primary)_8%,transparent)] backdrop-blur-md transition-colors duration-300 hover:border-primary/35"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt?.[locale] ?? project.title[locale]}
          fill
          sizes="(max-width: 1024px) 90vw, 480px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div className="min-w-0">
            <h4 className="truncate text-lg font-semibold tracking-tight text-foreground">
              {project.title[locale]}
            </h4>
            {project.tags[0] ? (
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {project.tags[0]}
              </p>
            ) : null}
          </div>
          <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            {inProduction}
          </span>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 bg-background/70 text-primary opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const { locale } = useLocale();
  const inProduction = useT(siteConfig.labels.inProduction);
  const href = project.links.demo ?? `#${siteConfig.sections.projects.id}`;
  const external = !!project.links.demo;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${project.title[locale]} — ${inProduction}`}
      className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-2 backdrop-blur-md transition-colors duration-300 hover:border-accent/35 hover:bg-card/80"
    >
      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-border/50">
        <Image
          src={project.image}
          alt={project.imageAlt?.[locale] ?? project.title[locale]}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-foreground">
          {project.title[locale]}
        </h4>
        {project.tags[0] ? (
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {project.tags[0]}
          </p>
        ) : null}
      </div>
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent"
      >
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

export function ProjectPreview() {
  const caption = useT(siteConfig.hero.workPreview.title);
  const projects = siteConfig.projects.filter(
    (p) => p.category === "production" && p.featured,
  );

  if (projects.length === 0) return null;

  const [featured, ...rest] = projects;

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {featured ? <FeaturedProject project={featured} /> : null}
        {rest.map((project) => (
          <ProjectRow key={project.title.en} project={project} />
        ))}
      </div>
    </div>
  );
}
