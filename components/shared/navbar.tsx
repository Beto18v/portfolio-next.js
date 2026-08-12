"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";
import * as React from "react";
import { useT } from "./locale-provider";
import { useLenis } from "./lenis-provider";
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

/**
 * Absolute document top of an element, ignoring transforms. `offsetTop` is
 * relative to the nearest positioned ancestor; the section wrappers in
 * `app/page.tsx` animate in with a `y` transform, so `getBoundingClientRect`
 * would measure a shifted position before that animation settles.
 */
function absoluteTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node && node !== document.body) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();
  const lenis = useLenis();
  const progressBarRef = React.useRef<HTMLDivElement>(null);
  const skillsNav = useT(siteConfig.sections.skills.nav);
  const projectsNav = useT(siteConfig.sections.projects.nav);
  const contactNav = useT(siteConfig.sections.contact.nav);

  /**
   * Scroll state + progress bar driven by Lenis's JS data when available.
   * Reading `lenis.scroll`/`lenis.progress` (plain properties) instead of
   * `window.scrollY` avoids forced reflows: Lenis writes the scroll position
   * every rAF frame, so any layout read right after forces a synchronous
   * layout (the perf trace showed ~530ms of forced reflows during scroll).
   * Falls back to a native listener when Lenis is inactive (reduced motion).
   */
  React.useEffect(() => {
    if (lenis) {
      const onLenis = ({ scroll, progress }: { scroll: number; progress: number }) => {
        setScrolled(scroll > 10);
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress * 100}%`;
        }
      };
      onLenis({ scroll: lenis.scroll, progress: lenis.progress });
      lenis.on("scroll", onLenis);
      return () => lenis.off("scroll", onLenis);
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const isSpecialPage = pathname === "/cv" || pathname === "/certifications";

  const navItems = [
    { href: `#${siteConfig.sections.skills.id}`, label: skillsNav },
    { href: `#${siteConfig.sections.projects.id}`, label: projectsNav },
    { href: `#${siteConfig.sections.contact.id}`, label: contactNav },
  ];

  /**
   * Smooth-scrolls to an in-page anchor via Lenis.
   *
   * Position is computed with `absoluteTop()` (document offset summed through
   * offsetParents, ignoring transforms) rather than `getBoundingClientRect`,
   * because the section wrappers in `app/page.tsx` animate in with a `y`
   * transform — measuring the rect before that animation settles would offset
   * the scroll target. The sticky header is `h-16` (64px), so we land the
   * section title exactly under it. When Lenis is not available (reduced
   * motion) we intentionally skip `preventDefault` so the browser's native
   * anchor handling takes over.
   */
  const scrollToSection = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string, delay = 0) => {
      if (!lenis) return;
      event.preventDefault();
      const run = () => {
        const el = document.querySelector<HTMLElement>(href);
        if (!el) return;
        lenis.scrollTo(absoluteTop(el) - 64, { duration: 1.2 });
      };
      if (delay > 0) window.setTimeout(run, delay);
      else run();
    },
    [lenis],
  );

  const scrollToTop = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (lenis) {
        event.preventDefault();
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0 });
      }
    },
    [lenis],
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-accent-teal/20 bg-background/75 shadow-[0_8px_24px_color-mix(in_oklch,var(--accent-teal)_16%,transparent)] backdrop-blur-xl"
          : "border-accent-teal/10 bg-background/55 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          onClick={(event) => {
            if (pathname === "/") {
              scrollToTop(event);
            }
          }}
          className="text-lg font-semibold tracking-tight text-accent-teal transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label={siteConfig.profile.name}
        >
          {siteConfig.profile.name}
        </Link>
        {!isSpecialPage && (
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 text-sm font-medium md:flex"
            aria-label={siteConfig.profile.name}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className={cn(
                  "rounded-md px-2 py-1 text-muted-foreground transition-all",
                  "hover:text-accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          {!isSpecialPage && (
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
                        onClick={(event) => {
                          if (!lenis) return;
                          event.preventDefault();
                          setSheetOpen(false);
                          window.setTimeout(() => {
                            const el = document.querySelector<HTMLElement>(item.href);
                            if (!el) return;
                            lenis.scrollTo(absoluteTop(el) - 64, { duration: 1.2 });
                          }, 320);
                        }}
                        className="rounded-md px-3 py-2 text-base text-muted-foreground transition-all hover:text-accent-teal hover:bg-accent/40"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        ref={progressBarRef}
        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-accent-teal via-accent-teal to-accent"
        style={{ width: "0%" }}
      />
    </header>
  );
}
