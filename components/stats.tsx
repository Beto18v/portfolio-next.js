"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Rocket, Code2, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLocale } from "./locale-provider";
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

function AnimatedValue({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

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
