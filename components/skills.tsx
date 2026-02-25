"use client";

import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useLocale, useT } from "./locale-provider";

export function Skills() {
  const { locale } = useLocale();
  const sectionBadge = useT(siteConfig.sections.skills.badge);
  const sectionTitle = useT(siteConfig.sections.skills.title);
  const sectionSubtitle = siteConfig.sections.skills.subtitle?.[locale] ?? "";

  return (
    <section
      id={siteConfig.sections.skills.id}
      className="scroll-mt-20 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {sectionTitle}
          </h2>
          {sectionSubtitle ? (
            <p className="max-w-2xl text-muted-foreground">{sectionSubtitle}</p>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.skills.map((category) => (
            <article
              key={category.id}
              className="group rounded-2xl border border-indigo-500/20 bg-card/60 p-6 shadow-sm backdrop-blur-md transition-all hover:border-indigo-500/40 hover:shadow-[0_0_24px_hsl(250_90%_60%/.18)]"
            >
              <h3 className="mb-4 text-lg font-semibold text-primary">
                {category.title[locale]}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3 rounded-md border border-transparent px-2 py-1.5 transition-colors hover:border-border/70"
                    aria-label={`${skill.name} level ${skill.level} of 5`}
                  >
                    <span className="text-sm text-foreground">
                      {skill.name}
                    </span>
                    <span
                      className="flex items-center gap-0.5"
                      role="img"
                      aria-label={`${skill.level} stars`}
                    >
                      {Array.from({ length: 5 }).map((_, index) => {
                        const active = index < skill.level;
                        return (
                          <Star
                            key={`${skill.name}-${index}`}
                            className={cn(
                              "h-3.5 w-3.5 transition-all duration-300",
                              active
                                ? "fill-primary text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                                : "text-muted-foreground/50",
                            )}
                          />
                        );
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
