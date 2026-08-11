"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEventHandler } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * 3D coverflow carousel: one card front and center, two peers peeking from
 * the sides, the rest tucked behind — like a squashed circle/ellipse. The
 * deck auto-rotates toward the LEFT (front card drifts left, a new card
 * enters from the right) and pauses on hover.
 *
 * Each child receives `isFront` and `isVisible` injected via cloneElement,
 * so cards can adapt (full description vs truncated, shadow, etc.).
 */

export const CARD_WIDTH = 380;
export const CARD_HEIGHT = 480;

export interface CoverflowChildProps {
  isFront: boolean;
  isVisible: boolean;
}

export interface CoverflowProps {
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  /** Auto-rotate delay in ms. 0 disables auto-rotation. */
  delay?: number;
  children: React.ReactNode;
}

/** Maps a circular offset (0 = front, ±1 = sides, ±2 = behind) to a slot. */
function slotForOffset(
  offset: number,
): {
  x: number;
  y: number;
  scale: number;
  rotateY: number;
  opacity: number;
  zIndex: number;
} {
  if (offset === 0) {
    return { x: 0, y: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 30 };
  }
  if (offset === 1 || offset === -1) {
    const dir = offset > 0 ? 1 : -1;
    return {
      x: dir * CARD_WIDTH * 0.58,
      y: 14,
      scale: 0.82,
      rotateY: dir * -24,
      opacity: 0.75,
      zIndex: 20,
    };
  }
  const dir = offset > 0 ? 1 : -1;
  return {
    x: dir * CARD_WIDTH * 0.9,
    y: 32,
    scale: 0.5,
    rotateY: dir * -42,
    opacity: 0.25,
    zIndex: 10,
  };
}

/** Normalizes a raw difference to the closest circular offset. */
function circularOffset(raw: number, total: number): number {
  const half = Math.floor(total / 2);
  let offset = raw;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

interface CoverflowItemProps {
  index: number;
  activeIndex: number;
  total: number;
  reduceMotion: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CoverflowItem: React.FC<CoverflowItemProps> = ({
  index,
  activeIndex,
  total,
  reduceMotion,
  onClick,
  children,
}) => {
  const offset = circularOffset(index - activeIndex, total);
  const slot = slotForOffset(offset);
  const isFront = offset === 0;
  const isVisible = Math.abs(offset) <= 1;

  const style = reduceMotion
    ? {
        opacity: isFront ? 1 : 0,
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        zIndex: isFront ? 30 : 10,
      }
    : slot;

  const child = React.isValidElement<CoverflowChildProps>(children)
    ? React.cloneElement(children, { isFront, isVisible })
    : children;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 origin-center will-change-transform"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        // Center on the 50% point via negative margins (NOT transform):
        // framer-motion overwrites transforms when animating x/y, so
        // xPercent/yPercent would be lost. Negative margins also keep the
        // card centered when it is wider than its container (mobile).
        marginLeft: -CARD_WIDTH / 2,
        marginTop: -CARD_HEIGHT / 2,
      }}
      initial={false}
      animate={style}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      role="button"
      tabIndex={isFront ? 0 : -1}
      aria-hidden={!isVisible}
    >
      {child}
    </motion.div>
  );
};

export function Coverflow({
  activeIndex,
  onActiveIndexChange,
  delay = 4000,
  children,
}: CoverflowProps) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const total = React.Children.count(children);

  const goNext = useCallback(() => {
    if (total === 0) return;
    onActiveIndexChange((activeIndex + 1) % total);
  }, [activeIndex, total, onActiveIndexChange]);

  const goPrev = useCallback(() => {
    if (total === 0) return;
    onActiveIndexChange((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onActiveIndexChange]);

  useEffect(() => {
    if (delay <= 0 || reduceMotion) return;
    if (hovered) return;
    const id = window.setInterval(goNext, delay);
    return () => window.clearInterval(id);
  }, [delay, reduceMotion, hovered, goNext]);

  const touchStartRef = useRef<{ x: number; y: number; t: number } | null>(
    null,
  );
  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      t: Date.now(),
    };
  };
  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;
    const touch = e.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    const dt = Date.now() - start.t;

    if (dt > 650) return;
    if (Math.abs(dx) < 50) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

    // Swipe left advances the deck; swipe right goes back.
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <div
      className="relative mx-auto w-full overflow-visible"
      style={{
        height: CARD_HEIGHT,
        perspective: 1400,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        return (
          <CoverflowItem
            key={child.key ?? index}
            index={index}
            activeIndex={activeIndex}
            total={total}
            reduceMotion={!!reduceMotion}
            onClick={() => onActiveIndexChange(index)}
          >
            {child}
          </CoverflowItem>
        );
      })}
    </div>
  );
}
