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
  softSkills: string[];
  labels: {
    downloadPdf: string;
    switchTo: string;
    sectionSummary: string;
    sectionExperience: string;
    sectionEducation: string;
    sectionCertifications: string;
    sectionSkills: string;
    sectionSoftSkills: string;
    languages: string;
  };
}

type Bilingual<T> = Record<Locale, T>;

// ── CV Data ──
const cvDataByLocale: Bilingual<CvTexts> = {
  es: {
    professionalSummary:
      "AI & Software Developer con {years}+ años de experiencia. Diseño e implemento sistemas de IA generativa con arquitectura RAG, LLMs multi-proveedor (AWS Bedrock, OpenAI, Gemini) y búsqueda vectorial (Qdrant, FAISS), orquestados con LangChain y LangGraph en producción. Full stack con Next.js, Angular, FastAPI y Spring Boot. Despliego en AWS, Docker, Hetzner y Vercel. Del prompt engineering al deploy: soluciones integrales con foco en resultado.",

    experience: [
      {
        title: "Desarrollador de IA & Software",
        company: "ITS Solutions",
        environment: "Bogotá, Colombia · Abr 2026 – Presente",
        bullets: [
          "Diseñé e implementé sistemas de IA generativa con arquitectura RAG y LLMs multi-proveedor (AWS Bedrock, OpenAI, Gemini) orquestados con LangGraph, en producción desde el inicio.",
          "Desarrollé el backend de un chatbot comercial de IA en FastAPI: pipeline RAG con LangGraph, captura y enriquecimiento de leads, rate limiting en 3 capas, telemetría de costo y defensas contra prompt injection.",
          "Desarrollé un dashboard de monitoreo en tiempo real en Next.js con SSE (Server-Sent Events), mostrando KPIs, conversaciones, leads y costo por turno.",
          "Implementé búsqueda semántica con búsqueda vectorial (Qdrant, FAISS) y embeddings sobre AWS Bedrock, con pipelines de ingesta y chunking semántico.",
          "Diseñé arquitecturas multi-capa comunicadas por HTTP (Angular, Spring Boot, FastAPI) con ranking por fusión de resultados y procesamiento automatizado de documentos.",
        ],
      },
      {
        title: "Ingeniero de IA & Desarrollador Full Stack",
        company: "Nunca Cierro",
        environment: "Proyecto Propio · 2026 – Presente · En Producción",
        bullets: [
          "Automaticé la atención al cliente 24/7 integrando WhatsApp y Telegram APIs con modelos de Groq y Ollama para procesamiento de lenguaje natural en tiempo real.",
          "Desarrollé el frontend con Next.js y la API con FastAPI, desplegando la arquitectura multi-servicio en Hetzner con Docker y Cloudflare, usando PostgreSQL.",
          "Contenericé la infraestructura con Docker para escalar horizontalmente entre múltiples negocios, manteniendo 99.9% de disponibilidad.",
        ],
      },
      {
        title: "Desarrollador Core & Arquitecto SaaS",
        company: "Dinerance",
        environment: "Proyecto Propio · 2025 – Presente · En Producción",
        bullets: [
          "Diseñé esquemas PostgreSQL con Supabase aplicando Row-Level Security para aislamiento multi-tenant, soportando operaciones concurrentes.",
          "Construí la API con FastAPI y SQLAlchemy, aplicando migraciones controladas con Alembic y autenticación JWT.",
          "Desarrollé el dashboard financiero con Next.js, TypeScript, Tailwind CSS y shadcn/ui.",
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
        title: "Curso en Conceptos de Ciberseguridad",
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
        title: "AI & LLMs",
        skills: [
          "LangChain",
          "LangGraph",
          "RAG",
          "AWS Bedrock",
          "Cohere Embed",
          "FAISS",
          "Groq",
          "Ollama",
          "OpenAI API",
          "HuggingFace",
          "Prompt Engineering",
        ],
      },
      {
        title: "Frontend",
        skills: [
          "Next.js (App Router)",
          "React",
          "Angular",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
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
          "JWT",
          "SSE (Server-Sent Events)",
        ],
      },
      {
        title: "Bases de Datos",
        skills: [
          "PostgreSQL",
          "Supabase (RLS)",
          "MySQL",
          "SQLAlchemy",
          "Alembic",
          "SQLite",
        ],
      },
      {
        title: "DevOps & Cloud",
        skills: [
          "Docker",
          "AWS (EC2, S3, CloudFront)",
          "Hetzner",
          "Vercel",
          "Git / GitHub",
          "Linux",
          "Nginx",
        ],
      },
    ],

    softSkills: [
      "Trabajo en equipo y colaboración",
      "Resolución de problemas complejos",
      "Autonomía y responsabilidad integral",
      "Adaptabilidad tecnológica",
      "Comunicación técnica (Inglés B2)",
    ],

    labels: {
      downloadPdf: "Descargar PDF",
      switchTo: "English",
      sectionSummary: "Resumen Profesional",
      sectionExperience: "Experiencia",
      sectionEducation: "Educación",
      sectionCertifications: "Certificaciones",
      sectionSkills: "Habilidades Técnicas",
      sectionSoftSkills: "Habilidades Blandas",
      languages: "Idiomas",
    },
  },

  en: {
    professionalSummary:
      "AI & Software Developer with {years}+ years of experience. I design and implement generative AI systems with RAG architecture, multi-provider LLMs (AWS Bedrock, OpenAI, Gemini) and vector search (Qdrant, FAISS), orchestrated with LangChain and LangGraph in production. Full stack with Next.js, Angular, FastAPI, and Spring Boot. I deploy on AWS, Docker, Hetzner, and Vercel. From prompt engineering to deployment: end-to-end solutions with a results-driven focus.",

    experience: [
      {
        title: "AI & Software Developer",
        company: "ITS Solutions",
        environment: "Bogotá, Colombia · Apr 2026 – Present",
        bullets: [
          "Designed and implemented generative AI systems with a RAG architecture and multi-provider LLMs (AWS Bedrock, OpenAI, Gemini) orchestrated with LangGraph — in production from day one.",
          "Developed the backend of a commercial AI chatbot in FastAPI: RAG pipeline with LangGraph, lead capture and enrichment, 3-layer rate limiting, cost telemetry and prompt injection defenses.",
          "Developed a real-time monitoring dashboard in Next.js with SSE (Server-Sent Events), showing KPIs, conversations, leads and cost per turn.",
          "Implemented semantic search with vector search (Qdrant, FAISS) and embeddings on AWS Bedrock, with ingestion pipelines and semantic chunking.",
          "Designed multi-layer architectures communicating over HTTP (Angular, Spring Boot, FastAPI) with fusion-based ranking and automated document processing.",
        ],
      },
      {
        title: "AI Engineer & Full Stack Developer",
        company: "Nunca Cierro",
        environment: "Personal Project · 2026 – Present · In Production",
        bullets: [
          "Automated 24/7 customer support by integrating WhatsApp and Telegram APIs with Groq and Ollama models for real-time natural language processing.",
          "Built the frontend with Next.js and the API with FastAPI, deploying the multi-service architecture on Hetzner with Docker and Cloudflare, using PostgreSQL.",
          "Containerized the infrastructure with Docker to scale horizontally across multiple businesses, maintaining 99.9% uptime.",
        ],
      },
      {
        title: "Core Developer & SaaS Architect",
        company: "Dinerance",
        environment: "Personal Project · 2025 – Present · In Production",
        bullets: [
          "Designed PostgreSQL schemas with Supabase applying Row-Level Security for multi-tenant isolation, supporting concurrent operations.",
          "Built the API with FastAPI and SQLAlchemy, applying controlled migrations with Alembic and JWT authentication.",
          "Developed the financial dashboard with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
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
        title: "Cybersecurity Concepts Course",
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
        title: "AI & LLMs",
        skills: [
          "LangChain",
          "LangGraph",
          "RAG",
          "AWS Bedrock",
          "Cohere Embed",
          "FAISS",
          "Groq",
          "Ollama",
          "OpenAI API",
          "HuggingFace",
          "Prompt Engineering",
        ],
      },
      {
        title: "Frontend",
        skills: [
          "Next.js (App Router)",
          "React",
          "Angular",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
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
          "JWT",
          "SSE (Server-Sent Events)",
        ],
      },
      {
        title: "Databases",
        skills: [
          "PostgreSQL",
          "Supabase (RLS)",
          "MySQL",
          "SQLAlchemy",
          "Alembic",
          "SQLite",
        ],
      },
      {
        title: "DevOps & Cloud",
        skills: [
          "Docker",
          "AWS (EC2, S3, CloudFront)",
          "Hetzner",
          "Vercel",
          "Git / GitHub",
          "Linux",
          "Nginx",
        ],
      },
    ],

    softSkills: [
      "Teamwork & collaboration",
      "Complex problem-solving",
      "Autonomy & ownership",
      "Technical adaptability",
      "Technical communication (English B2)",
    ],

    labels: {
      downloadPdf: "Download PDF",
      switchTo: "Español",
      sectionSummary: "Professional Summary",
      sectionExperience: "Experience",
      sectionEducation: "Education",
      sectionCertifications: "Certifications",
      sectionSkills: "Technical Skills",
      sectionSoftSkills: "Soft Skills",
      languages: "Languages",
    },
  },
};

/** Years of experience derived from the same `since` source as the site metrics (site.ts stats). */
function getYearsOfExperience(): number {
  const stat = siteConfig.stats.find((s) => s.since);
  if (!stat?.since) return stat?.value ?? 0;
  const start = new Date(stat.since.year, stat.since.month - 1).getTime();
  return Math.round((Date.now() - start) / (365.25 * 86400000));
}

/** Returns CV data for the given locale, with profile info merged from site.ts */
export function getCvData(locale: Locale) {
  return {
    ...cvDataByLocale[locale],
    professionalSummary: cvDataByLocale[locale].professionalSummary.replace(
      "{years}",
      String(getYearsOfExperience()),
    ),
    profile: {
      name: "NICOLAS A. VALENZUELA",
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
