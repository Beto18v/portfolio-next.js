"use client";

import { motion, useReducedMotion } from "framer-motion";

type DividerVariant = "terminal" | "glow" | "fade";

interface SectionDividerProps {
  variant: DividerVariant;
  label?: string;
}

function TerminalDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      {label && (
        <span className="shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
          [ {label} ]
        </span>
      )}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function GlowDivider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex w-full items-center justify-center">
        <span className="h-px flex-1 bg-border/60" />
        <span className="absolute left-1/2 top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_6px_2px_hsl(250_90%_60%/0.45)]" />
        <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-[3px]" />
      </div>
      {label && (
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-indigo-400/80">
          {label}
        </span>
      )}
    </div>
  );
}

function FadeDivider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(var(--border) / 0.5), transparent)",
        }}
      />
      {label && (
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/60">
          {label}
        </span>
      )}
    </div>
  );
}

export default function SectionDivider({ variant, label }: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <>
      {variant === "terminal" && <TerminalDivider label={label} />}
      {variant === "glow" && <GlowDivider label={label} />}
      {variant === "fade" && <FadeDivider label={label} />}
    </>
  );

  if (shouldReduceMotion) {
    return <div className="py-12">{content}</div>;
  }

  return (
    <motion.div
      className="py-12"
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}
