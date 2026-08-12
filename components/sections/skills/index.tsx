"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { SkillIcon } from "@/components/sections/skills/components/skill-icons";
import SectionDivider from "@/components/shared/section-divider";
import type { SkillCategory, Skill } from "@/lib/types";

function SkillCard({ skill }: { skill: Skill }) {
  const sharedClasses =
    "group flex h-16 w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-accent-teal/20 bg-card/40 px-1.5 py-2 transition-all duration-200 hover:border-accent-teal/40 hover:bg-card/80 hover:shadow-[0_0_16px_color-mix(in_oklch,var(--accent-teal)_15%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

  const content = (
    <>
      {skill.icon ? (
        <SkillIcon
          name={skill.icon}
          className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-200 group-hover:scale-110"
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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (shouldReduceMotion) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".skill-grid > *"),
    );
    const sidebar = section.querySelector<HTMLElement>(".core-expertise-panel");
    if (cards.length === 0) return;

    let breathers: gsap.core.Tween[] = [];
    let breathersIo: IntersectionObserver | null = null;
    let entered = false;

    // ── "Vida": cada card respira sutilmente (flotación yoyo con delay
    //    aleatorio). Arranca SOLO cuando termina la entrada (ambas animan `y`)
    //    y se pausa cuando la sección sale de vista. ──
    const startLifeAnimations = () => {
      breathers = cards.map((card, i) =>
        gsap.to(card, {
          y: "+=3",
          duration: 2.4 + (i % 5) * 0.35,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: (i * 0.37) % 2,
        }),
      );

      breathersIo = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) breathers.forEach((b) => b.play());
          else breathers.forEach((b) => b.pause());
        },
        { threshold: 0 },
      );
      breathersIo.observe(section);
    };

    // ── Entrada: reveal escalonado al entrar en viewport. `paused: true` +
    //    fromTo aplica el estado oculto en el primer paint (useLayoutEffect)
    //    y la IO lo dispara cuando la sección es visible. ──
    const entrance = gsap.fromTo(
      cards,
      { opacity: 0, y: 24, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.04,
        paused: true,
        onComplete: startLifeAnimations,
      },
    );

    const sidebarEntrance = sidebar
      ? gsap.fromTo(
          sidebar,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", paused: true },
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

    // ── Hover 3D: la card se inclina hacia el mouse y se eleva. ──
    const hoverCleanups = cards.map((card, i) => {
      const icon = card.querySelector("svg");
      const tilt = gsap.quickTo(card, "rotationX", { duration: 0.35, ease: "power2.out" });
      const rotate = gsap.quickTo(card, "rotationY", { duration: 0.35, ease: "power2.out" });
      const lift = gsap.quickTo(card, "y", { duration: 0.35, ease: "power2.out" });

      const onEnter = () => {
        breathers[i]?.pause();
        gsap.to(card, { z: 30, scale: 1.05, duration: 0.3, ease: "power2.out" });
        if (icon) gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "back.out(2)" });
      };
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotate(px * 14);
        tilt(-py * 10);
        lift(-4);
      };
      const onLeave = () => {
        rotate(0);
        tilt(0);
        gsap.to(card, {
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => breathers[i]?.play(),
        });
        gsap.to(card, { z: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
      };

      card.style.transformStyle = "preserve-3d";
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => {
      entrance.kill();
      sidebarEntrance?.kill();
      gsap.set(cards, { clearProps: "opacity,transform" });
      if (sidebar) gsap.set(sidebar, { clearProps: "opacity,transform" });
      entranceIo.disconnect();
      breathersIo?.disconnect();
      breathers.forEach((b) => b.kill());
      hoverCleanups.forEach((c) => c());
      gsap.killTweensOf(cards);
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
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
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
