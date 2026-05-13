"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  /** Controlled active card index (front of stack). */
  activeIndex?: number;
  onActiveIndexChange?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  /** Direction the stack offsets horizontally. Defaults to 'right'. */
  direction?: "left" | "right";
  /** Where the active (front) card is anchored inside the container. */
  anchor?: "left" | "right";
  /** Which direction background cards offset away from the active card. */
  stackDirection?: "left" | "right";
  /** Controlled-mode transition duration (seconds). */
  controlledDuration?: number;
  /** Controlled-mode transition ease (GSAP ease string). */
  controlledEase?: string;
  /** Slightly increases card spread on hover. */
  hovered?: boolean;
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 rounded-xl border-0 bg-transparent transform-gpu transform-3d will-change-transform backface-hidden ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  ),
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number,
  dirX: 1 | -1,
): Slot => ({
  x: i * distX * dirX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (
  el: HTMLElement,
  slot: Slot,
  skew: number,
  anchorPos: { left: string; xPercent: number; origin: string },
) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    left: anchorPos.left,
    xPercent: anchorPos.xPercent,
    yPercent: -50,
    skewY: skew,
    transformOrigin: anchorPos.origin,
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  activeIndex,
  onActiveIndexChange,
  skewAmount = 6,
  easing = "elastic",
  direction = "right",
  anchor,
  stackDirection,
  controlledDuration = 0.55,
  controlledEase = "power3.inOut",
  hovered = false,
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children],
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr],
  );

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i),
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  const onActiveIndexChangeRef =
    useRef<CardSwapProps["onActiveIndexChange"]>(onActiveIndexChange);
  useEffect(() => {
    onActiveIndexChangeRef.current = onActiveIndexChange;
  }, [onActiveIndexChange]);

  // Back-compat: if callers only set `direction`, preserve old behavior.
  const resolvedAnchor: "left" | "right" = anchor ?? direction ?? "right";
  const resolvedStackDirection: "left" | "right" =
    stackDirection ?? direction ?? "right";

  const dirX: 1 | -1 = resolvedStackDirection === "left" ? -1 : 1;
  const spreadBoost = hovered ? 1.14 : 1;
  const effectiveCardDistance = cardDistance * spreadBoost;
  const effectiveVerticalDistance = verticalDistance * (hovered ? 1.08 : 1);

  const didInitRef = useRef(false);
  const prevHoveredRef = useRef(hovered);

  const anchorPos = useMemo(() => {
    return resolvedAnchor === "right"
      ? { left: "100%", xPercent: -100, origin: "right center" }
      : { left: "0%", xPercent: 0, origin: "left center" };
  }, [resolvedAnchor]);

  const opacityForPos = (pos: number) => {
    if (pos === 0) return 1;
    if (pos === 1) return 0.92;
    if (pos === 2) return 0.85;
    return 0.78;
  };

  const scaleForPos = (pos: number) => {
    if (pos === 0) return 1;
    if (pos === 1) return 0.985;
    if (pos === 2) return 0.97;
    return 0.955;
  };

  const rotateForPos = (pos: number) => {
    if (pos === 0) return 0;
    return 0;
  };

  const applyOrderNow = () => {
    const total = refs.length;
    order.current.forEach((idx, pos) => {
      const el = refs[idx]?.current;
      if (!el) return;
      const slot = makeSlot(
        pos,
        effectiveCardDistance,
        effectiveVerticalDistance,
        total,
        dirX,
      );
      placeNow(el, slot, skewAmount, anchorPos);
      gsap.set(el, {
        opacity: opacityForPos(pos),
        scale: scaleForPos(pos),
        rotateY: rotateForPos(pos),
      });
    });
  };

  const clearTimer = () => {
    clearInterval(intervalRef.current);
  };

  const animateToOrder = (nextOrder: number[]) => {
    const total = refs.length;
    if (total === 0) return;

    tlRef.current?.kill();
    tlRef.current = null;

    const tl = gsap.timeline();
    tlRef.current = tl;

    // Apply z-index up-front so the active card stays on top.
    nextOrder.forEach((idx, pos) => {
      const el = refs[idx]?.current;
      if (!el) return;
      const slot = makeSlot(
        pos,
        effectiveCardDistance,
        effectiveVerticalDistance,
        total,
        dirX,
      );
      gsap.set(el, { zIndex: slot.zIndex });
      gsap.set(el, {
        left: anchorPos.left,
        xPercent: anchorPos.xPercent,
        yPercent: -50,
        transformOrigin: anchorPos.origin,
      });
    });

    nextOrder.forEach((idx, pos) => {
      const el = refs[idx]?.current;
      if (!el) return;
      const slot = makeSlot(
        pos,
        effectiveCardDistance,
        effectiveVerticalDistance,
        total,
        dirX,
      );
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          opacity: opacityForPos(pos),
          scale: scaleForPos(pos),
          rotateY: rotateForPos(pos),
          skewY: skewAmount,
          duration: controlledDuration,
          ease: controlledEase,
          force3D: true,
        },
        0,
      );
    });

    // Keep `order.current` aligned to the new logical order ASAP
    // (so rapid clicks keep computing rotations correctly).
    order.current = nextOrder;
  };

  const bringToFront = (idx: number) => {
    if (refs.length === 0) return;
    const normalized = ((idx % refs.length) + refs.length) % refs.length;
    // Even if already at the front, we must ensure transforms/zIndex are applied
    // (otherwise the first paint can look like a single stacked card).
    if (order.current[0] === normalized) {
      tlRef.current?.kill();
      tlRef.current = null;
      applyOrderNow();
      return;
    }

    // Rotate current order to keep relative ordering.
    const start = order.current.indexOf(normalized);
    let nextOrder: number[];
    if (start === -1)
      nextOrder = Array.from({ length: refs.length }, (_, i) => i);
    else
      nextOrder = [
        ...order.current.slice(start),
        ...order.current.slice(0, start),
      ];

    if (!didInitRef.current) {
      order.current = nextOrder;
      applyOrderNow();
      return;
    }

    animateToOrder(nextOrder);
  };

  // Apply initial transforms/zIndex BEFORE paint to avoid first-frame glitches.
  useLayoutEffect(() => {
    if (typeof activeIndex === "number" && Number.isFinite(activeIndex))
      bringToFront(activeIndex);
    else applyOrderNow();

    onActiveIndexChangeRef.current?.(order.current[0] ?? 0);
    didInitRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDistance,
    verticalDistance,
    skewAmount,
    anchorPos,
    resolvedStackDirection,
    childArr.length,
  ]);

  useEffect(() => {
    if (!didInitRef.current) {
      prevHoveredRef.current = hovered;
      return;
    }
    if (prevHoveredRef.current === hovered) return;
    prevHoveredRef.current = hovered;
    animateToOrder(order.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, effectiveCardDistance, effectiveVerticalDistance]);

  useEffect(() => {
    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(
          i,
          effectiveCardDistance,
          effectiveVerticalDistance,
          refs.length,
          dirX,
        );
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            opacity: opacityForPos(i),
            scale: scaleForPos(i),
            rotateY: rotateForPos(i),
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        effectiveCardDistance,
        effectiveVerticalDistance,
        refs.length,
        dirX,
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
          gsap.set(elFront, {
            left: anchorPos.left,
            xPercent: anchorPos.xPercent,
            yPercent: -50,
            transformOrigin: anchorPos.origin,
          });
        },
        undefined,
        "return",
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          opacity: opacityForPos(refs.length - 1),
          scale: scaleForPos(refs.length - 1),
          rotateY: rotateForPos(refs.length - 1),
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      tl.call(() => {
        order.current = [...rest, front];
        if (typeof activeIndex !== "number" || !Number.isFinite(activeIndex)) {
          onActiveIndexChangeRef.current?.(order.current[0] ?? 0);
        }
      });
    };

    // In controlled mode, don't auto-rotate (parent controls which project is active)
    if (typeof activeIndex === "number" && Number.isFinite(activeIndex))
      return () => undefined;

    clearTimer();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearTimer();
      };
      const resume = () => {
        tlRef.current?.play();
        clearTimer();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearTimer();
      };
    }
    return () => clearTimer();
  }, [
    effectiveCardDistance,
    effectiveVerticalDistance,
    delay,
    pauseOnHover,
    skewAmount,
    easing,
    resolvedAnchor,
    resolvedStackDirection,
    controlledDuration,
    controlledEase,
    activeIndex,
    refs,
    config.durDrop,
    config.ease,
    config.promoteOverlap,
    config.durMove,
    config.returnDelay,
    config.durReturn,
    dirX,
    anchorPos.left,
    anchorPos.xPercent,
    anchorPos.origin,
  ]);

  useLayoutEffect(() => {
    if (typeof activeIndex !== "number" || !Number.isFinite(activeIndex))
      return;
    bringToFront(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child,
  );

  return (
    <div
      ref={container}
      className={
        resolvedAnchor === "left"
          ? "absolute bottom-8 left-0 origin-bottom-left perspective-[1600px] overflow-visible max-[768px]:bottom-4 max-[768px]:scale-[0.75] max-[480px]:bottom-2 max-[480px]:scale-[0.55]"
          : "absolute bottom-8 right-0 origin-bottom-right perspective-[1600px] overflow-visible max-[768px]:bottom-4 max-[768px]:scale-[0.75] max-[480px]:bottom-2 max-[480px]:scale-[0.55]"
      }
      style={{
        width,
        height,
        perspective: 1600,
        transformStyle: "preserve-3d",
      }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
