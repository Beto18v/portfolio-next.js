"use client";

import { useReducedMotion, motion } from "framer-motion";
import { Bot, Globe, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLocale, useT } from "@/components/shared/locale-provider";
import SectionDivider from "@/components/shared/section-divider";
import { fadeUp } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  Icon: LucideIcon;
  title: { es: string; en: string };
  description: { es: string; en: string };
  stack: readonly string[];
}

const SERVICES: Service[] = [
  {
    id: "ai-rag",
    Icon: Bot,
    title: { es: "Agentes de IA & Sistemas RAG", en: "AI Agents & RAG Systems" },
    description: {
      es: "Asistentes conectados a tus documentos, bases de conocimiento o canales (WhatsApp y web) para responder con contexto y resolver tareas repetitivas.",
      en: "Assistants connected to your documents, knowledge bases, or channels (WhatsApp and web) to respond with context and handle repetitive tasks.",
    },
    stack: ["LangGraph", "RAG", "Vector Stores", "Embeddings", "LLMs", "LangChain"],
  },
  {
    id: "web-saas",
    Icon: Globe,
    title: { es: "SaaS, Backends e Interfaces", en: "SaaS, Backends & Interfaces" },
    description: {
      es: "Aplicaciones SaaS, APIs REST, backends escalables y despliegues en la nube desde el MVP hasta producción, con autenticación, base de datos y pagos integrados.",
      en: "SaaS products, REST APIs, scalable backends, and cloud deployments from MVP to production, with authentication, database, and payments included.",
    },
    stack: ["FastAPI", "Next.js", "React", "PostgreSQL", "AWS", "Azure", "Vercel", "Docker", "Supabase"],
  },
  {
    id: "automation",
    Icon: Zap,
    title: { es: "Automatización de Procesos", en: "Process Automation" },
    description: {
      es: "Flujos automatizados para conectar herramientas, procesar información y eliminar trabajo manual repetitivo.",
      en: "Automated workflows to connect tools, process information, and eliminate repetitive manual work.",
    },
    stack: ["n8n", "Python", "APIs", "Webhooks", "Scripts"],
  },
];

export function Solutions() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const sectionBadge = useT(siteConfig.sections.solutions.badge);
  const sectionTitle = useT(siteConfig.sections.solutions.title);
  const sectionSubtitle = siteConfig.sections.solutions.subtitle?.[locale] ?? "";

  return (
    <section
      id={siteConfig.sections.solutions.id}
      className="scroll-mt-20 px-4 pb-10 pt-24 md:px-6"
    >
      <SectionDivider variant="terminal" label={sectionBadge.toLowerCase()} />
      <div className="mx-auto mt-8 w-full max-w-6xl">
        <motion.div
          className="mb-10 space-y-3"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {sectionBadge}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">
            {sectionTitle}
          </h2>
          {sectionSubtitle ? (
            <p className="max-w-2xl text-muted-foreground">
              {sectionSubtitle}
            </p>
          ) : null}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={!shouldReduceMotion ? fadeUp : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES.map(({ id, Icon, title, description, stack }) => (
            <div
              key={id}
              className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-md transition-colors duration-300 hover:border-accent-teal/30 hover:bg-card/80 hover:shadow-[0_0_28px_color-mix(in_oklch,var(--accent-teal)_8%,transparent)]"
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-teal/20 bg-accent-teal/10 text-accent-teal transition-colors duration-300 group-hover:border-accent-teal/40 group-hover:bg-accent-teal/15">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-1 text-base font-bold leading-tight tracking-tight text-foreground">
                  {title[locale]}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description[locale]}
              </p>

              {/* Stack chips */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[10px] font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
