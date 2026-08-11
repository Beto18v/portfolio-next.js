"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const coarsePointerQuery = "(pointer: coarse)";

/** Subscribes to `(pointer: coarse)` media query changes. */
function subscribe(callback: () => void) {
  const mql = window.matchMedia(coarsePointerQuery);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/** Current value on the client. */
function getSnapshot() {
  return window.matchMedia(coarsePointerQuery).matches;
}

/** SSR/first paint always assumes a fine pointer so the tree matches. */
function getServerSnapshot() {
  return false;
}

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  // Detect touch via useSyncExternalStore so the SSR tree matches the client
  // tree (avoids hydration mismatches from reading `window` during render).
  const isTouch = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const maxOffset = 6;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDist = Math.max(rect.width, rect.height) / 2;
    const factor = Math.min(distance / maxDist, 1);
    const normX = distance > 0 ? dx / distance : 0;
    const normY = distance > 0 ? dy / distance : 0;
    x.set(normX * maxOffset * factor);
    y.set(normY * maxOffset * factor);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const disabled = shouldReduceMotion || isTouch;

  if (disabled) return <>{children}</>;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-flex" }}
    >
      <motion.div style={{ x: springX, y: springY }}>
        {children}
      </motion.div>
    </div>
  );
}
