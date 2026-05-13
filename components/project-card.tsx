"use client";

import { Project } from "@/lib/types";
import { Github, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale, useT } from "./locale-provider";
import { siteConfig } from "@/lib/site";
import { useReducedMotion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const codeLabel = useT(siteConfig.labels.code);
  const frontendLabel = useT(siteConfig.labels.frontend);
  const backendLabel = useT(siteConfig.labels.backend);
  const liveDemoLabel = useT(siteConfig.labels.liveDemo);
  const codeAriaPrefix = useT(siteConfig.labels.openCode);
  const demoAriaPrefix = useT(siteConfig.labels.openDemo);
  const viewDetailsLabel = useT(siteConfig.labels.viewDetails);

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
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-card/60 shadow-sm backdrop-blur-md transition-all duration-300 ease-out"
      style={
        !shouldReduceMotion
          ? { transition: "transform 0.3s ease, box-shadow 0.3s ease" }
          : undefined
      }
      onMouseEnter={(e) => {
        if (shouldReduceMotion) return;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 14px 38px hsl(250 90% 60% / 0.24)";
        e.currentTarget.style.borderColor = "hsl(250 90% 60% / 0.4)";
      }}
      onMouseLeave={(e) => {
        if (shouldReduceMotion) return;
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "";
      }}
    >
      <div className="relative aspect-3/2 overflow-hidden border-b border-indigo-500/20">
        <Image
          src={project.image}
          alt={project.imageAlt[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="flex h-full flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight text-foreground">
          {project.title[locale]}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {project.description[locale]}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 6 && (
            <span className="inline-flex items-center text-[11px] text-muted-foreground">
              +{project.tags.length - 6}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {/* View Details */}
          {onViewDetails && (
            <Button
              variant="outline"
              size="xs"
              className="rounded-full"
              onClick={() => onViewDetails(project)}
            >
              <Eye className="h-3 w-3" />
              {viewDetailsLabel}
            </Button>
          )}

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
                aria-label={`${codeAriaPrefix} ${project.title[locale]}${
                  link.labelSuffix ? ` (${link.labelSuffix})` : ""
                }`}
              >
                <Github className="h-3 w-3" />
                {codeLabel}
                {link.labelSuffix ? ` ${link.labelSuffix}` : ""}
              </Link>
            </Button>
          ))}
          {project.links.demo ? (
            <Button asChild size="xs" className="neon-button rounded-full">
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${demoAriaPrefix} ${project.title[locale]}`}
              >
                <ExternalLink className="h-3 w-3" />
                {liveDemoLabel}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
