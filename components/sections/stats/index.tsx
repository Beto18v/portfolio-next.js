"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Rocket, Code2, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import SectionDivider from "@/components/shared/section-divider";
import { useLocale } from "@/components/shared/locale-provider";
import { staggerContainer, fadeUp, springHover } from "@/lib/motion";

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
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      const id = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(id);
    }

    if (!inView) return;

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
  }, [inView, value, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const sectionBadge = siteConfig.sections.stats.badge[locale];
  const sectionTitle = siteConfig.sections.stats.title[locale];

  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    Promise.resolve().then(() => setNow(Date.now()));
  }, []);

  const containerVariants = shouldReduceMotion ? {} : staggerContainer;

  return (
    <section className="scroll-mt-20 px-4 py-20 md:px-6">
      <SectionDivider variant="glow" label={sectionBadge.toLowerCase()} />
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <motion.div
          className="space-y-3"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {sectionTitle}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
              <motion.div
                key={stat.icon}
                variants={!shouldReduceMotion ? fadeUp : undefined}
                className="rounded-2xl border border-indigo-500/20 bg-card/60 backdrop-blur-md p-6 text-center transition-all duration-300"
                whileHover={
                  !shouldReduceMotion
                    ? { y: -6, scale: 1.02, ...springHover }
                    : undefined
                }
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
