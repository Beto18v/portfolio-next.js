"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

/**
 * Stable default easing. Defined at module scope so the `useEffect`
 * dependency array stays referentially stable — an inline default would
 * create a new function every render and re-trigger the effect forever.
 */
const defaultEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * Returns the shared Lenis instance, or `null` when Lenis is not active
 * (e.g. the user prefers reduced motion).
 */
export function useLenis() {
  return useContext(LenisContext);
}

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
  easing = defaultEasing,
}: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const instance = new Lenis({
      duration,
      easing,
      smoothWheel: true,
      orientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    // Expose the instance to consumers via context. This runs once per mount:
    // the instance owns a rAF loop and must be created inside the effect so the
    // cleanup below can destroy it on unmount (reduced-motion early-returns above).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, [duration, easing]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
