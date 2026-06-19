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
      "AI & Software Developer. Construyo sistemas RAG con LangChain y LangGraph, integrando modelos de Groq, OpenAI y HuggingFace en producción. Full stack con Next.js, Angular, FastAPI y Spring Boot. Despliego en Docker, Hetzner y Vercel. Del prompt engineering al deploy: soluciones integrales con foco en resultado.",

    experience: [
      {
        title: "Desarrollador de IA & Software",
        company: "ITSSolutions",
        environment: "Bogotá, Colombia · Desde Abr 2026",
        bullets: [
          "Implementé un nodo de procesamiento de documentos usando LangChain y LangGraph, integrando embeddings de HuggingFace y modelos de Groq y OpenAI para análisis semántico.",
          "Desarrollé y mantuve APIs RESTful con FastAPI y Spring Boot, conectando servicios de IA con frontends en Angular mediante autenticación JWT.",
          "Diseñé flujos de prompt engineering para modelos LLM, optimizando la precisión de extracción y clasificación de datos en pipelines automatizados.",
          "Gestioné bases de datos MySQL para los servicios de la plataforma, modelando esquemas y optimizando consultas.",
        ],
      },
      {
        title: "Ingeniero de IA & Desarrollador Full Stack",
        company: "Nunca Cierro",
        environment: "Proyecto Propio · En Producción",
        bullets: [
          "Automaticé la atención al cliente 24/7 integrando WhatsApp y Telegram APIs con modelos de Groq y Ollama para procesamiento de lenguaje natural en tiempo real.",
          "Desarrollé el frontend con Next.js y la API con FastAPI, desplegando la arquitectura multi-servicio en Hetzner con Docker y Cloudflare, usando PostgreSQL.",
          "Contenericé la infraestructura con Docker para escalar horizontalmente entre múltiples negocios, manteniendo 99.9% de disponibilidad.",
        ],
      },
      {
        title: "Desarrollador Core & Arquitecto SaaS",
        company: "Dinerance",
        environment: "Proyecto Propio · En Producción",
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
      "AI & Software Developer. I build RAG systems with LangChain and LangGraph, integrating Groq, OpenAI, and HuggingFace models in production. Full stack with Next.js, Angular, FastAPI, and Spring Boot. I deploy on Docker, Hetzner, and Vercel. From prompt engineering to deployment: end-to-end solutions with a results-driven focus.",

    experience: [
      {
        title: "AI & Software Developer",
        company: "ITSSolutions",
        environment: "Bogotá, Colombia · Since Apr 2026",
        bullets: [
          "Implemented a document processing node using LangChain and LangGraph, integrating HuggingFace embeddings and Groq and OpenAI models for semantic analysis.",
          "Built and maintained RESTful APIs with FastAPI and Spring Boot, connecting AI services to Angular frontends with JWT authentication.",
          "Designed prompt engineering flows for LLM models, optimizing data extraction and classification accuracy in automated pipelines.",
          "Managed MySQL databases for platform services, modeling schemas and optimizing queries.",
        ],
      },
      {
        title: "AI Engineer & Full Stack Developer",
        company: "Nunca Cierro",
        environment: "Personal Project · Production",
        bullets: [
          "Automated 24/7 customer support by integrating WhatsApp and Telegram APIs with Groq and Ollama models for real-time natural language processing.",
          "Built the frontend with Next.js and the API with FastAPI, deploying the multi-service architecture on Hetzner with Docker and Cloudflare, using PostgreSQL.",
          "Containerized the infrastructure with Docker to scale horizontally across multiple businesses, maintaining 99.9% uptime.",
        ],
      },
      {
        title: "Core Developer & SaaS Architect",
        company: "Dinerance",
        environment: "Personal Project · Production",
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

/** Returns CV data for the given locale, with profile info merged from site.ts */
export function getCvData(locale: Locale) {
  return {
    ...cvDataByLocale[locale],
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
