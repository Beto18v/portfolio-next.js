"use client";

import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useT } from "@/components/shared/locale-provider";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

function SpringWrapper({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled: boolean;
}) {
  if (disabled) return <>{children}</>;
  return (
    <motion.span
      style={{ display: "inline-flex" }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );
}

export function Contact() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const title = useT(siteConfig.sections.contact.title);
  const subtitle = siteConfig.sections.contact.subtitle?.[locale] ?? "";
  const text = useT(siteConfig.contact.text);
  const emailAria = useT(siteConfig.labels.contactEmail);
  const githubAria = useT(siteConfig.labels.openGithub);
  const linkedinAria = useT(siteConfig.labels.openLinkedin);
  const githubLabel = useT(siteConfig.footer.links.github);
  const linkedinLabel = useT(siteConfig.footer.links.linkedin);
  const whatsappLabel = useT(siteConfig.labels.whatsappLabel);
  const contactWhatsappAria = useT(siteConfig.labels.contactWhatsapp);

  return (
    <section
      id={siteConfig.sections.contact.id}
      className="scroll-mt-20 px-4 py-20 md:px-6 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(250_80%_60%/0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(160_80%_60%/0.05),transparent_60%)]" />
      </div>

      <motion.div
        className="mx-auto w-full max-w-3xl rounded-2xl border border-border/60 bg-card/60 p-8 text-center backdrop-blur-md md:p-10 relative"
        variants={!shouldReduceMotion ? fadeUp : undefined}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-gradient">
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
          <SpringWrapper disabled={!!shouldReduceMotion}>
            <Button asChild className="neon-button rounded-full">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label={emailAria}
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
            </Button>
          </SpringWrapper>

          <SpringWrapper disabled={!!shouldReduceMotion}>
            <Button asChild variant="outline" className="rounded-full">
              <Link
                href={`https://wa.me/${siteConfig.contact.whatsapp.countryCode}${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.defaultMessage[locale])}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contactWhatsappAria}
              >
                <MessageCircle className="h-4 w-4" />
                {whatsappLabel}
              </Link>
            </Button>
          </SpringWrapper>

          <SpringWrapper disabled={!!shouldReduceMotion}>
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
          </SpringWrapper>

          {siteConfig.profile.links.linkedin ? (
            <SpringWrapper disabled={!!shouldReduceMotion}>
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
            </SpringWrapper>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
