import { siteConfig } from "./site";
import type { Locale } from "./types";

// ── Shared profile data (single source of truth from site.ts) ──
const profile = siteConfig.profile;
const links = profile.links;

// ── Types ──
interface CvTexts {
  professionalSummary: string;
  experience: {
    title: string;
    company: string;
    environment: string;
    bullets: string[];
  }[];
  education: {
    title: string;
    institution: string;
    period: string;
    details?: string;
  }[];
  certifications: {
    title: string;
    file: string;
  }[];
  skillGroups: {
    title: string;
    skills: string[];
  }[];
  labels: {
    downloadPdf: string;
    switchTo: string;
    sectionSummary: string;
    sectionExperience: string;
    sectionEducation: string;
    sectionCertifications: string;
    sectionSkills: string;
    languages: string;
  };
}

type Bilingual<T> = Record<Locale, T>;

// ── CV Data ──
const cvDataByLocale: Bilingual<CvTexts> = {
  es: {
    professionalSummary:
      "AI & Full Stack Developer. 2+ años diseñando y desplegando sistemas multi-agente, arquitecturas RAG de baja latencia y plataformas SaaS en producción. Combino visión arquitectónica con implementación directa. Stack: LangGraph, n8n, Next.js 16, TypeScript, FastAPI, Qdrant, PostgreSQL. Obsesionado con métricas de impacto y automatización end-to-end.",

    experience: [
      {
        title: "AI Engineer & Full Stack Developer",
        company: "Nunca Cierro",
        environment: "Entorno de Producción",
        bullets: [
          "Automaticé el 40% del flujo de conversión de leads diseñando un ecosistema multi-agente con LangGraph y n8n, integrando WhatsApp y Telegram para NLP en tiempo real.",
          "Reduje la latencia del sistema RAG a <200ms implementando búsqueda semántica con Qdrant, embeddings optimizados y data chunking contextual.",
          "Incrementé 15% la retención de usuarios migrando el frontend a Next.js 16 (App Router) con TypeScript estricto, Lenis y Framer Motion.",
          "Mantuve 99.9% de uptime en producción multi-servicio con Docker, Hetzner Cloud y Railway, con monitoreo preventivo automatizado.",
        ],
      },
      {
        title: "Core Software Developer & SaaS Architect",
        company: "Dinerance",
        environment: "Entorno de Producción",
        bullets: [
          "Escalé la infraestructura para miles de operaciones concurrentes diseñando esquemas PostgreSQL con Supabase y Row-Level Security multi-tenant.",
          "Reduje 30% el tiempo de entrega de features construyendo microservicios asíncronos con FastAPI (Python) y Node.js bajo OAuth 2.0 y JWT.",
          "Optimicé 25% el consumo de recursos del servidor con scripts de extracción en Playwright usando rotación y evasión de bloqueos.",
        ],
      },
      {
        title: "Desarrollador Full Stack",
        company: "Freelance",
        environment: "",
        bullets: [
          "Desarrollé interfaces responsivas con React, Vue y Tailwind CSS, reduciendo 20% los tiempos de carga y asegurando compatibilidad cross-device.",
          "Implementé backends con Laravel (PHP) y Spring Boot (Java), modelando bases de datos MySQL con CI/CD en Git/GitHub.",
        ],
      },
    ],

    education: [
      {
        title: "Tecnólogo en Análisis y Desarrollo de Software",
        institution: "SENA (Servicio Nacional de Aprendizaje)",
        period: "En curso",
        details:
          "Ciclo técnico completado al 100%. Especialización en arquitectura de software, bases de datos y metodologías ágiles.",
      },
      {
        title: "Especialización en Conceptos de Ciberseguridad",
        institution: "",
        period: "Certificación Activa (2026)",
      },
    ],

    certifications: [
      {
        title: "Iniciación al Desarrollo con Inteligencia Artificial",
        file: "/certifications/Certificado de iniciación al desarrollo con AI.pdf",
      },
      {
        title: "Curso de Iniciación al Desarrollo con IA",
        file: "/certifications/Curso de Iniciación al Desarrollo con IA.pdf",
      },
      {
        title: "Ciberseguridad y Hacking Ético",
        file: "/certifications/Certificado ciberseguridad y hacking eticow.pdf",
      },
    ],

    skillGroups: [
      {
        title: "AI & Automatización",
        skills: [
          "LangGraph",
          "n8n",
          "RAG",
          "Model Context Protocol (MCP)",
          "Qdrant Vector DB",
          "Ollama",
          "OpenAI API",
          "Anthropic API",
          "Prompt Engineering",
        ],
      },
      {
        title: "Frontend",
        skills: [
          "Next.js 16 (App Router)",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Lenis Smooth Scroll",
          "Framer Motion",
        ],
      },
      {
        title: "Backend & APIs",
        skills: [
          "FastAPI (Python)",
          "Node.js",
          "Spring Boot (Java)",
          "Laravel (PHP)",
          "RESTful APIs",
          "WebSockets",
        ],
      },
      {
        title: "Bases de Datos & Cloud",
        skills: [
          "PostgreSQL",
          "Supabase",
          "Row-Level Security (RLS)",
          "MySQL",
          "SQLite",
          "Docker",
          "Hetzner Cloud",
          "Railway",
          "Vercel",
          "Nginx",
        ],
      },
      {
        title: "Seguridad",
        skills: ["OAuth 2.0", "JWT", "Ciberseguridad", "Linux SysAdmin"],
      },
    ],

    labels: {
      downloadPdf: "Descargar PDF",
      switchTo: "English",
      sectionSummary: "Resumen Profesional",
      sectionExperience: "Experiencia",
      sectionEducation: "Educación",
      sectionCertifications: "Certificaciones",
      sectionSkills: "Habilidades Técnicas",
      languages: "Idiomas",
    },
  },

  en: {
    professionalSummary:
      "AI & Full Stack Developer. 2+ years designing and deploying multi-agent systems, low-latency RAG architectures, and SaaS platforms to production. I combine architectural vision with hands-on implementation. Stack: LangGraph, n8n, Next.js 16, TypeScript, FastAPI, Qdrant, PostgreSQL. Metrics-driven. End-to-end ownership.",

    experience: [
      {
        title: "AI Engineer & Full Stack Developer",
        company: "Nunca Cierro",
        environment: "Production Environment",
        bullets: [
          "Automated 40% of lead conversion flow by designing a multi-agent ecosystem with LangGraph and n8n, integrating WhatsApp and Telegram for real-time NLP.",
          "Reduced RAG system latency to <200ms by implementing semantic search with Qdrant, optimized embeddings, and contextual data chunking.",
          "Increased user retention by 15% by migrating the frontend to Next.js 16 (App Router) with strict TypeScript, Lenis, and Framer Motion.",
          "Maintained 99.9% uptime across multi-service production with Docker, Hetzner Cloud, and Railway, with automated proactive monitoring.",
        ],
      },
      {
        title: "Core Software Developer & SaaS Architect",
        company: "Dinerance",
        environment: "Production Environment",
        bullets: [
          "Scaled infrastructure to handle thousands of concurrent operations by designing PostgreSQL schemas with Supabase and multi-tenant Row-Level Security.",
          "Reduced feature delivery time by 30% by building async microservices with FastAPI (Python) and Node.js under OAuth 2.0 and JWT.",
          "Cut server resource consumption by 25% with Playwright extraction scripts using rotation and anti-blocking evasion techniques.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Freelance",
        environment: "",
        bullets: [
          "Built responsive interfaces with React, Vue, and Tailwind CSS, reducing load times by 20% and ensuring full cross-device compatibility.",
          "Implemented backends with Laravel (PHP) and Spring Boot (Java), modeling MySQL databases with Git/GitHub CI/CD.",
        ],
      },
    ],

    education: [
      {
        title: "Software Analysis and Development Technologist",
        institution: "SENA (National Learning Service)",
        period: "In Progress",
        details:
          "Technical cycle 100% completed. Specialized in software architecture, databases, and agile methodologies.",
      },
      {
        title: "Cybersecurity Concepts Specialization",
        institution: "",
        period: "Active Certification (2026)",
      },
    ],

    certifications: [
      {
        title: "Introduction to AI Development",
        file: "/certifications/Certificado de iniciación al desarrollo con AI.pdf",
      },
      {
        title: "AI Development Crash Course",
        file: "/certifications/Curso de Iniciación al Desarrollo con IA.pdf",
      },
      {
        title: "Cybersecurity & Ethical Hacking",
        file: "/certifications/Certificado ciberseguridad y hacking eticow.pdf",
      },
    ],

    skillGroups: [
      {
        title: "AI & Automation",
        skills: [
          "LangGraph",
          "n8n",
          "RAG",
          "Model Context Protocol (MCP)",
          "Qdrant Vector DB",
          "Ollama",
          "OpenAI API",
          "Anthropic API",
          "Prompt Engineering",
        ],
      },
      {
        title: "Frontend",
        skills: [
          "Next.js 16 (App Router)",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Lenis Smooth Scroll",
          "Framer Motion",
        ],
      },
      {
        title: "Backend & APIs",
        skills: [
          "FastAPI (Python)",
          "Node.js",
          "Spring Boot (Java)",
          "Laravel (PHP)",
          "RESTful APIs",
          "WebSockets",
        ],
      },
      {
        title: "Databases & Cloud",
        skills: [
          "PostgreSQL",
          "Supabase",
          "Row-Level Security (RLS)",
          "MySQL",
          "SQLite",
          "Docker",
          "Hetzner Cloud",
          "Railway",
          "Vercel",
          "Nginx",
        ],
      },
      {
        title: "Security",
        skills: ["OAuth 2.0", "JWT", "Cybersecurity", "Linux SysAdmin"],
      },
    ],

    labels: {
      downloadPdf: "Download PDF",
      switchTo: "Español",
      sectionSummary: "Professional Summary",
      sectionExperience: "Experience",
      sectionEducation: "Education",
      sectionCertifications: "Certifications",
      sectionSkills: "Technical Skills",
      languages: "Languages",
    },
  },
};

/** Returns CV data for the given locale, with profile info merged from site.ts */
export function getCvData(locale: Locale) {
  return {
    ...cvDataByLocale[locale],
    profile: {
      name: profile.name,
      role: profile.role[locale],
      location: profile.location?.[locale] ?? "Bogotá, Colombia",
      email: "nicolasalbertov18@gmail.com",
      phone: "+57 310 207 9572",
      website: links.website ?? "nival.is-a.dev",
      github: links.github,
      linkedin: links.linkedin ?? "",
      languages:
        locale === "es"
          ? "Español (Nativo)  |  Inglés (B2)"
          : "Spanish (Native)  |  English (B2)",
    },
  };
}

export type CvData = ReturnType<typeof getCvData>;
