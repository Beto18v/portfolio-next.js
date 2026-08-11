"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { SkillIcon } from "@/components/sections/skills/components/skill-icons";
import SectionDivider from "@/components/shared/section-divider";
import { staggerContainer } from "@/lib/motion";
import type { SkillCategory, Skill } from "@/lib/types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SkillCard({ skill }: { skill: Skill }) {
  const shouldReduceMotion = useReducedMotion();
  const sharedClasses =
    "group flex flex-col items-center gap-1.5 rounded-xl border border-accent-teal/20 bg-card/40 p-3 transition-all duration-200 hover:border-accent-teal/40 hover:bg-card/80 hover:shadow-[0_0_16px_color-mix(in_oklch,var(--accent-teal)_15%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

  const content = (
    <>
      {skill.icon ? (
        <SkillIcon
          name={skill.icon}
          className="h-7 w-7 text-muted-foreground transition-all duration-200 group-hover:scale-110"
        />
      ) : (
        <div className="h-7 w-7 flex items-center justify-center">
          <span className="text-xs font-bold text-muted-foreground/40">◆</span>
        </div>
      )}
      <span className="text-[10px] font-medium leading-tight text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        {skill.name}
      </span>
    </>
  );

  if (shouldReduceMotion) {
    if (skill.docsUrl) {
      return (
        <a href={skill.docsUrl} target="_blank" rel="noopener noreferrer" className={sharedClasses} aria-label={`${skill.name} documentation`}>
          {content}
        </a>
      );
    }
    return <div className={sharedClasses}>{content}</div>;
  }

  if (skill.docsUrl) {
    return (
      <motion.a
        href={skill.docsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        aria-label={`${skill.name} documentation`}
        variants={cardVariants}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className={sharedClasses} variants={cardVariants}>
      {content}
    </motion.div>
  );
}

export function Skills() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const sectionBadge = useT(siteConfig.sections.skills.badge);
  const sectionTitle = useT(siteConfig.sections.skills.title);
  const sectionSubtitle = siteConfig.sections.skills.subtitle?.[locale] ?? "";
  const categories = siteConfig.skills;
  const coreExpertiseTitle = useT(siteConfig.coreExpertise.title);
  const coreExpertiseDesc = useT(siteConfig.coreExpertise.description);
  const coreExpertiseSkills = siteConfig.coreExpertise.skills;

  return (
    <section
      id={siteConfig.sections.skills.id}
      className="scroll-mt-16 px-4 pb-20 pt-0 md:px-6"
    >
      <SectionDivider variant="terminal" label={sectionBadge.toLowerCase()} />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gradient md:text-4xl">
            {sectionTitle}
          </h2>
          {sectionSubtitle ? (
            <p className="max-w-2xl text-muted-foreground">{sectionSubtitle}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* ─── Category Grids (Left) ─── */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {categories.map((category: SkillCategory) => {
                if (category.skills.length === 0) return null;

                return (
                    <div key={category.id}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
                      {category.title[locale]}
                    </h3>
                    <motion.div
                      className="grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-4"
                      variants={!shouldReduceMotion ? staggerContainer : undefined}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {category.skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── AI Engineering Sidebar (Right) ─── */}
          <div className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 rounded-2xl border border-accent-teal/25 bg-linear-to-br from-accent-teal/10 to-accent-teal/5 p-5 shadow-[0_0_24px_color-mix(in_oklch,var(--accent-teal)_8%,transparent)]">
              <div className="mb-1 inline-block rounded-full border border-accent-teal/30 bg-accent-teal/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-teal">
                {coreExpertiseTitle}
              </div>
              <p className="mb-4 mt-2 text-xs leading-relaxed text-muted-foreground">
                {coreExpertiseDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {coreExpertiseSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-accent-teal/20 bg-accent-teal/10 px-2.5 py-1.5 text-xs font-medium text-accent-teal"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
