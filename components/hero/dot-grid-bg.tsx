"use client";

import { useEffect, useState } from "react";
import DotGrid from "@/components/ui/dot-grid";

export default function DotGridBg() {
  const [baseColor, setBaseColor] = useState("#210d47");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getTheme = () =>
        document.documentElement.classList.contains("dark") ? "dark" : "light";
      const updateColor = () => {
        setBaseColor(getTheme() === "dark" ? "#210d47" : "#e0d8f6");
      };
      updateColor();
      const observer = new MutationObserver(updateColor);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor={baseColor}
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
