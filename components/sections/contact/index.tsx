"use client";

import { siteConfig } from "@/lib/site";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { useLocale, useT } from "@/components/shared/locale-provider";
import SectionDivider from "@/components/shared/section-divider";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const sectionBadge = siteConfig.sections.contact.badge[locale];
  const title = useT(siteConfig.sections.contact.title);
  const subtitle = siteConfig.sections.contact.subtitle?.[locale] ?? "";
  const emailAria = useT(siteConfig.labels.contactEmail);
  const githubAria = useT(siteConfig.labels.openGithub);
  const linkedinAria = useT(siteConfig.labels.openLinkedin);
  const contactWhatsappAria = useT(siteConfig.labels.contactWhatsapp);

  return (
    <section
      id={siteConfig.sections.contact.id}
      className="scroll-mt-20 px-4 py-20 md:px-6 relative overflow-hidden"
    >
      <SectionDivider variant="glow" label={sectionBadge.toLowerCase()} />
      <motion.div
        className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 text-center backdrop-blur-md md:p-10 relative shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
        variants={!shouldReduceMotion ? fadeUp : undefined}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsl(250_80%_60%/0.10),transparent_45%),radial-gradient(circle_at_bottom_right,hsl(160_80%_60%/0.08),transparent_35%)]" />

        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-gradient">
          {title}
        </h2>

        <div className="mx-auto mb-8 max-w-2xl">
          <p className="text-sm text-muted-foreground/80 md:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            aria-label={emailAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_16px_hsl(var(--primary)/0.18)]"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.countryCode}${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(siteConfig.contact.whatsapp.defaultMessage[locale])}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contactWhatsappAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-[#25D366] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_16px_rgba(37,211,102,0.18)]"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={githubAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/10 hover:shadow-[0_0_16px_rgba(0,0,0,0.12)] dark:text-[#f5f5f5]"
          >
            <Github className="h-5 w-5" />
          </a>
          {siteConfig.profile.links.linkedin ? (
            <a
              href={siteConfig.profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedinAria}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-[#0A66C2] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_16px_rgba(10,102,194,0.18)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
