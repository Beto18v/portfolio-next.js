"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import { Briefcase, Rocket, Code2, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import SectionDivider from "@/components/shared/section-divider";
import { useLocale } from "@/components/shared/locale-provider";
import { ActivityTicker } from "@/components/shared/activity-ticker";

function StatIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Rocket":
      return <Rocket className={className} />;
    case "Code2":
      return <Code2 className={className} />;
    case "CheckCircle2":
      return <CheckCircle2 className={className} />;
    default:
      return null;
  }
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedValue({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      const id = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(id);
    }

    const duration = 1500;
    const start = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      setCount(Math.round(eased * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [value, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { locale } = useLocale();
  const sectionBadge = siteConfig.sections.stats.badge[locale];
  const sectionTitle = siteConfig.sections.stats.title[locale];
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    Promise.resolve().then(() => setNow(Date.now()));
  }, []);

  // ── "Vida + hover": cada card respira sutilmente (flotación yoyo) y al
  //    pasar el mouse se inclina en 3D hacia el cursor y se eleva. ──
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (shouldReduceMotion) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>(".stat-card"));
    if (cards.length === 0) return;

    const breathers = cards.map((card, i) =>
      gsap.to(card, {
        y: "+=3",
        duration: 2.6 + (i % 4) * 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.4,
      }),
    );

    const hoverCleanups = cards.map((card) => {
      const tilt = gsap.quickTo(card, "rotationX", { duration: 0.35, ease: "power2.out" });
      const rotate = gsap.quickTo(card, "rotationY", { duration: 0.35, ease: "power2.out" });
      const lift = gsap.quickTo(card, "y", { duration: 0.35, ease: "power2.out" });

      const onEnter = () => {
        gsap.to(card, { z: 30, scale: 1.04, duration: 0.3, ease: "power2.out" });
      };
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotate(px * 12);
        tilt(-py * 8);
        lift(-4);
      };
      const onLeave = () => {
        rotate(0);
        tilt(0);
        lift(0);
        gsap.to(card, { z: 0, scale: 1, duration: 0.3, ease: "power2.out" });
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
      breathers.forEach((b) => b.kill());
      hoverCleanups.forEach((c) => c());
    };
  }, [shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-20 px-4 pb-10 pt-24 md:px-6"
    >
      <SectionDivider variant="glow" label={sectionBadge.toLowerCase()} />
      <div className="mx-auto mt-8 w-full max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {sectionTitle}
          </h2>
        </div>

        <div className="stat-grid grid grid-cols-2 gap-4 md:grid-cols-4">
          {siteConfig.stats.map((stat) => {
            const displayValue =
              stat.since && now
                ? Math.round(
                    (now -
                      new Date(
                        stat.since.year,
                        stat.since.month - 1,
                      ).getTime()) /
                      (365.25 * 86400000),
                  )
                : stat.value;
            return (
              <div
                key={stat.icon}
                className="stat-card rounded-2xl border border-accent-teal/20 bg-card/60 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/40 hover:shadow-[0_0_16px_color-mix(in_oklch,var(--accent-teal)_15%,transparent)]"
              >
                <StatIcon
                  name={stat.icon}
                  className="mx-auto h-8 w-8 text-primary"
                />
                <div className="mt-3 text-3xl font-bold md:text-4xl">
                  <AnimatedValue value={displayValue} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label[locale]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ticker de actividad en vivo, debajo de las cards de métricas */}
        <ActivityTicker />
      </div>
    </section>
  );
}
