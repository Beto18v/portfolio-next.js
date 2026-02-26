"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";
import * as React from "react";
import { useT } from "./locale-provider";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
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
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "auto" });
            }
          }}
          className="text-lg font-semibold tracking-tight text-indigo-200 drop-shadow-[0_0_10px_hsl(250_100%_72%/.45)] transition-all hover:text-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label={siteConfig.profile.name}
        >
          {siteConfig.profile.name}
        </Link>
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 text-sm font-medium md:flex"
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
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-border/70 bg-background/70 backdrop-blur-md"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-12">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col gap-2 px-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-base text-muted-foreground transition-all hover:text-indigo-200 hover:bg-accent/40"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
