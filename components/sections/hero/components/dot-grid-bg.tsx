"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
}

const PARTICLE_COUNT = 80;
const MAX_SPEED = 0.4;
const CONNECTION_DIST = 120;
const REPULSION_RADIUS = 150;
const REPULSION_STRENGTH = 1.2;
const RETURN_FORCE = 0.005;

export default function DotGridBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const scrollRef = useRef(0);
  const animFrameRef = useRef(0);
  const colorsRef = useRef({
    particle: "rgba(99, 102, 241, 0.6)",
    line: "rgba(99, 102, 241, 0.15)",
  });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    // ── Theme colors via matchMedia listener ──
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const updateColors = () => {
      const isDark = mq.matches;
      colorsRef.current = {
        particle: isDark
          ? "rgba(99, 102, 241, 0.6)"
          : "rgba(79, 70, 229, 0.4)",
        line: isDark
          ? "rgba(99, 102, 241, 0.15)"
          : "rgba(79, 70, 229, 0.1)",
      };
    };
    updateColors();
    mq.addEventListener("change", updateColors);

    // ── Resize ──
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ── Init particles ──
    const initParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * MAX_SPEED * 0.5,
          vy: (Math.random() - 0.5) * MAX_SPEED * 0.5,
          radius: 1.5 + Math.random() * 1.5,
          baseX: x,
          baseY: y,
        });
      }
      particlesRef.current = particles;
    };

    resize();
    initParticles();

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // ── Draw once (static helper) ──
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const colors = colorsRef.current;
      const particles = particlesRef.current;

      ctx.fillStyle = colors.particle;
      for (let i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // ── Reduced motion: static render, no listeners ──
    if (shouldReduceMotion) {
      drawStatic();
      return () => {
        resizeObserver.disconnect();
        mq.removeEventListener("change", updateColors);
      };
    }

    // ── Event listeners ──
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const parent = canvas.parentElement;
    parent?.addEventListener("mousemove", handleMouse);
    parent?.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── Animation loop ──
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const scrollY = scrollRef.current;
      const colors = colorsRef.current;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Brownian jitter
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }

        // Return spring toward base
        p.vx += (p.baseX - p.x) * RETURN_FORCE;
        p.vy += (p.baseY - p.y) * RETURN_FORCE;

        // Scroll dispersion: push outward from center
        if (scrollY > 0) {
          const dirX = p.baseX - centerX;
          const dirY = p.baseY - centerY;
          const dirLen = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
          const dispersion = Math.min(scrollY * 0.002, 1.5);
          p.vx += (dirX / dirLen) * dispersion;
          p.vy += (dirY / dirLen) * dispersion;
        }

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < REPULSION_RADIUS && mdist > 0) {
          const force =
            ((REPULSION_RADIUS - mdist) / REPULSION_RADIUS) *
            REPULSION_STRENGTH;
          p.vx += (mdx / mdist) * force;
          p.vy += (mdy / mdist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges with margin
        const margin = 20;
        if (p.x < -margin) p.x = width + margin;
        if (p.x > width + margin) p.x = -margin;
        if (p.y < -margin) p.y = height + margin;
        if (p.y > height + margin) p.y = -margin;
      }

      // Draw particles
      ctx.fillStyle = colors.particle;
      for (let i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connection lines
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      parent?.removeEventListener("mousemove", handleMouse);
      parent?.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      mq.removeEventListener("change", updateColors);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
