"use client";

import type { Project } from "@/lib/types";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "./locale-provider";
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale } = useLocale();
  const featuresLabel = useT(siteConfig.labels.features);
  const technologiesLabel = useT(siteConfig.labels.technologies);
  const codeLabel = useT(siteConfig.labels.code);
  const frontendLabel = useT(siteConfig.labels.frontend);
  const backendLabel = useT(siteConfig.labels.backend);
  const liveDemoLabel = useT(siteConfig.labels.liveDemo);

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
    <div className="flex h-full flex-col overflow-y-auto">
      {/* Hero Image */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt[locale]}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-5">
        <SheetHeader className="p-0">
          <SheetTitle className="text-xl font-bold tracking-tight">
            {project.title[locale]}
          </SheetTitle>
          <SheetDescription className="text-sm leading-relaxed text-muted-foreground">
            {project.description[locale]}
          </SheetDescription>
        </SheetHeader>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              {featuresLabel}
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">
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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          {codeLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
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
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {liveDemoLabel}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
