"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
  /**
   * Duration of the smooth scroll animation in seconds.
   * @default 1.2
   */
  duration?: number;
  /**
   * Easing function for the scroll animation.
   * @default (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
   */
  easing?: (t: number) => number;
}

/**
 * Global Lenis smooth scroll provider.
 *
 * Initialises Lenis with the specified duration and easing,
 * and automatically manages the requestAnimationFrame loop and cleanup.
 */
export function LenisProvider({
  children,
  duration = 1.2,
  easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
}: LenisProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration,
      easing,
      smoothWheel: true,
      orientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [duration, easing]);

  return <>{children}</>;
}
