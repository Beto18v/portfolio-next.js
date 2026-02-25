"use client";

import { siteConfig } from "@/lib/site";
import { ProjectCard } from "./project-card";
import { useLocale, useT } from "./locale-provider";

export function Projects() {
  const { locale } = useLocale();
  const featuredProjects = siteConfig.projects.filter(
    (project) => project.featured,
  );
  const projectsToRender =
    featuredProjects.length > 0 ? featuredProjects : siteConfig.projects;
  const badge = useT(siteConfig.sections.projects.badge);
  const title = useT(siteConfig.sections.projects.title);
  const subtitle = siteConfig.sections.projects.subtitle?.[locale] ?? "";

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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsToRender.map((project) => (
            <ProjectCard key={project.title.en} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
