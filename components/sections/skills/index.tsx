"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { SkillIcon } from "@/components/sections/skills/components/skill-icons";
import SectionDivider from "@/components/shared/section-divider";
import type { SkillCategory, Skill } from "@/lib/types";

function SkillCard({ skill }: { skill: Skill }) {
  const sharedClasses =
    "group flex h-16 w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-accent-teal/20 bg-card/40 px-1.5 py-2 transition-all duration-200 will-change-transform hover:-translate-y-1 hover:scale-[1.03] hover:border-accent-teal/40 hover:bg-card/80 hover:shadow-[0_0_20px_color-mix(in_oklch,var(--accent-teal)_20%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

  const content = (
    <>
      {skill.icon ? (
        <SkillIcon
          name={skill.icon}
          className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:scale-115"
        />
      ) : (
        <div className="flex h-6 w-6 shrink-0 items-center justify-center">
          <span className="text-xs font-bold text-muted-foreground/40">◆</span>
        </div>
      )}
      {/* Una línea siempre: el nombre largo no debe estirar la card */}
      <span className="w-full truncate text-center text-[10px] font-medium leading-tight text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        {skill.name}
      </span>
    </>
  );

  if (skill.docsUrl) {
    return (
      <a
        href={skill.docsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        aria-label={`${skill.name} documentation`}
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClasses}>{content}</div>;
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
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (shouldReduceMotion) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".skill-grid > *"),
    );
    const sidebar = section.querySelector<HTMLElement>(".core-expertise-panel");
    if (cards.length === 0) return;

    let entered = false;

    // ── Entrada: reveal escalonado al entrar en viewport (corre 1 sola vez) ──
    const entrance = gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.025,
        paused: true,
      },
    );

    const sidebarEntrance = sidebar
      ? gsap.fromTo(
          sidebar,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", paused: true },
        )
      : null;

    const entranceIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !entered) {
          entered = true;
          entrance.play();
          sidebarEntrance?.play();
          entranceIo.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    entranceIo.observe(section);

    return () => {
      entrance.kill();
      sidebarEntrance?.kill();
      gsap.set(cards, { clearProps: "opacity,transform" });
      if (sidebar) gsap.set(sidebar, { clearProps: "opacity,transform" });
      entranceIo.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      id={siteConfig.sections.skills.id}
      className="scroll-mt-16 px-4 pb-10 pt-2 md:px-6"
    >
      <SectionDivider variant="terminal" label={sectionBadge.toLowerCase()} />
      <div className="mx-auto mt-8 w-full max-w-6xl">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">
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
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                      {category.title[locale]}
                    </h3>
                    <div className="skill-grid grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-4">
                      {category.skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── AI Engineering Sidebar (Right) ─── */}
          <div className="w-full shrink-0 lg:w-64">
            <div className="core-expertise-panel sticky top-24 rounded-2xl border border-accent-teal/25 bg-linear-to-br from-accent-teal/10 to-accent-teal/5 p-5 shadow-[0_0_24px_color-mix(in_oklch,var(--accent-teal)_8%,transparent)]">
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
