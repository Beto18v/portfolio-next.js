"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site";
import { ProjectCard } from "./project-card";
import { useLocale, useT } from "./locale-provider";

export function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { locale } = useLocale();
  const featuredProjects = siteConfig.projects.filter(
    (project) => project.featured,
  );
  const projectsToRender =
    featuredProjects.length > 0 ? featuredProjects : siteConfig.projects;
  useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const badge = useT(siteConfig.sections.projects.badge);
  const title = useT(siteConfig.sections.projects.title);
  const subtitle = siteConfig.sections.projects.subtitle?.[locale] ?? "";

  return (
    <section
      ref={sectionRef}
      id={siteConfig.sections.projects.id}
      className="scroll-mt-20 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>

        {/* Mobile */}
        <div className="space-y-6 md:hidden">
          {projectsToRender.map((project) => (
            <ProjectCard key={project.title.en} project={project} />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {projectsToRender.map((project) => (
            <ProjectCard key={project.title.en} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
