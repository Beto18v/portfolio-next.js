"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { useT } from "./locale-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const label = useT(siteConfig.labels.toggleTheme);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="outline"
      size="icon"
      className={cn(
        "h-9 w-9 rounded-full border-border/70 bg-background/70 backdrop-blur-md",
        "hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]",
      )}
      aria-label={label}
    >
      {theme === "light" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">{label}</span>
    </Button>
  );
}
