"use client";

import { Project } from "@/lib/types";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale, useT } from "./locale-provider";
import { siteConfig } from "@/lib/site";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLocale();
  const codeLabel = useT(siteConfig.labels.code);
  const frontendLabel = useT(siteConfig.labels.frontend);
  const backendLabel = useT(siteConfig.labels.backend);
  const liveDemoLabel = useT(siteConfig.labels.liveDemo);
  const codeAriaPrefix = useT(siteConfig.labels.openCode);
  const demoAriaPrefix = useT(siteConfig.labels.openDemo);

  const codeLinks: Array<{ href: string; labelSuffix?: string }> = [];
  const code = project.links.code;
  if (typeof code === "string") {
    const href = code.trim();
    if (href) {
      codeLinks.push({ href });
    }
  } else if (code) {
    const frontendHref = code.frontend?.trim();
    if (frontendHref) {
      codeLinks.push({ href: frontendHref, labelSuffix: frontendLabel });
    }

    const backendHref = code.backend?.trim();
    if (backendHref) {
      codeLinks.push({ href: backendHref, labelSuffix: backendLabel });
    }
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-card/60 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_14px_38px_hsl(250_90%_60%/.24)]">
      <div className="relative aspect-4/4 overflow-hidden border-b border-indigo-500/20">
        <Image
          src={project.image}
          alt={project.imageAlt[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="flex h-full flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {project.title[locale]}
        </h3>
        <p className="mt-2 text-muted-foreground">
          {project.description[locale]}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
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
                aria-label={`${codeAriaPrefix} ${project.title[locale]}${
                  link.labelSuffix ? ` (${link.labelSuffix})` : ""
                }`}
              >
                <Github className="h-4 w-4" />
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
                <ExternalLink className="h-4 w-4" />
                {liveDemoLabel}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
