"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
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
                {category.skills.map((skill) => {
                  const proficiency = Math.min(
                    100,
                    Math.max(0, skill.percentage ?? 0),
                  );

                  return (
                    <li
                      key={skill.name}
                      className="space-y-2 rounded-md border border-transparent px-2 py-1.5 transition-colors hover:border-border/70"
                      aria-label={`${skill.name} proficiency ${proficiency}%`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted/70">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${proficiency}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
