"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { SkillIcon } from "@/components/sections/skills/components/skill-icons";
import type { SkillCategory, Skill } from "@/lib/types";

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function SkillCard({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const sharedClasses =
    "group flex flex-col items-center gap-1.5 rounded-xl border border-indigo-500/20 bg-card/40 p-3 transition-all duration-200 hover:border-indigo-400/40 hover:bg-card/80 hover:shadow-[0_0_16px_hsl(250_90%_60%/0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={index}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={sharedClasses}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      {content}
    </motion.div>
  );
}

export function Skills() {
  const { locale } = useLocale();
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
      className="scroll-mt-20 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 space-y-3">
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
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-4">
                      {category.skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── AI Engineering Sidebar (Right) ─── */}
          <div className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 rounded-2xl border border-indigo-500/25 bg-linear-to-br from-indigo-500/5 to-indigo-500/2 p-5 shadow-[0_0_24px_hsl(250_90%_60%/0.08)]">
              <div className="mb-1 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                {coreExpertiseTitle}
              </div>
              <p className="mb-4 mt-2 text-xs leading-relaxed text-muted-foreground">
                {coreExpertiseDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {coreExpertiseSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/4 px-2.5 py-1.5 text-xs font-medium text-indigo-300/90"
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
