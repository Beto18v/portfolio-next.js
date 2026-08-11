"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SplitTextTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.h1
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 24, filter: "blur(6px)" }
      }
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={className}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {text}
    </motion.h1>
  );
}
