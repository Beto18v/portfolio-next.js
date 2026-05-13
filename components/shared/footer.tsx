"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { useT } from "./locale-provider";

export function Footer() {
  const githubLabel = useT(siteConfig.footer.links.github);
  const linkedinLabel = useT(siteConfig.footer.links.linkedin);
  const copyrightText = useT(siteConfig.footer.copyright);
  const githubAria = useT(siteConfig.labels.openGithub);
  const linkedinAria = useT(siteConfig.labels.openLinkedin);

  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:px-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.profile.name}.{" "}
          {copyrightText}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            aria-label={githubAria}
          >
            {githubLabel}
          </Link>
          {siteConfig.profile.links.linkedin ? (
            <Link
              href={siteConfig.profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label={linkedinAria}
            >
              {linkedinLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
