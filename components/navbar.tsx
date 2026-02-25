"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";
import * as React from "react";
import { useT } from "./locale-provider";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const skillsNav = useT(siteConfig.sections.skills.nav);
  const projectsNav = useT(siteConfig.sections.projects.nav);
  const contactNav = useT(siteConfig.sections.contact.nav);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: `#${siteConfig.sections.skills.id}`, label: skillsNav },
    { href: `#${siteConfig.sections.projects.id}`, label: projectsNav },
    { href: `#${siteConfig.sections.contact.id}`, label: contactNav },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-indigo-500/25 bg-background/75 shadow-[0_8px_24px_hsl(250_84%_60%/.16)] backdrop-blur-xl"
          : "border-indigo-500/15 bg-background/55 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-indigo-200 drop-shadow-[0_0_10px_hsl(250_100%_72%/.45)] transition-all hover:text-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label={siteConfig.profile.name}
        >
          {siteConfig.profile.name}
        </Link>
        <nav
          className="flex items-center gap-2 text-sm font-medium sm:gap-4"
          aria-label={siteConfig.profile.name}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2 py-1 text-muted-foreground transition-all",
                "hover:text-indigo-200 hover:drop-shadow-[0_0_10px_hsl(250_84%_64%/.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
            >
              {item.label}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
