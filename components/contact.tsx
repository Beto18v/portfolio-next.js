"use client";

import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useT } from "./locale-provider";

export function Contact() {
  const { locale } = useLocale();
  const title = useT(siteConfig.sections.contact.title);
  const subtitle = siteConfig.sections.contact.subtitle?.[locale] ?? "";
  const text = useT(siteConfig.contact.text);
  const emailAria = useT(siteConfig.labels.contactEmail);
  const githubAria = useT(siteConfig.labels.openGithub);
  const linkedinAria = useT(siteConfig.labels.openLinkedin);
  const githubLabel = useT(siteConfig.footer.links.github);
  const linkedinLabel = useT(siteConfig.footer.links.linkedin);

  return (
    <section
      id={siteConfig.sections.contact.id}
      className="scroll-mt-20 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-border/60 bg-card/60 p-8 text-center backdrop-blur-md md:p-10">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mb-8 text-base text-muted-foreground md:text-lg">
          {subtitle || text}
        </p>
        {subtitle ? (
          <p className="mb-8 text-base text-muted-foreground md:text-lg">
            {text}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="neon-button rounded-full">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label={emailAria}
            >
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
          </Button>

          <Button asChild variant="outline" className="rounded-full">
            <Link
              href={siteConfig.profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={githubAria}
            >
              <Github className="h-4 w-4" />
              {githubLabel}
            </Link>
          </Button>

          {siteConfig.profile.links.linkedin ? (
            <Button asChild variant="outline" className="rounded-full">
              <Link
                href={siteConfig.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedinAria}
              >
                <Linkedin className="h-4 w-4" />
                {linkedinLabel}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
