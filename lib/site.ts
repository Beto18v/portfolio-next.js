import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  locales: ["es", "en"],
  defaultLocale: "en",
  seo: {
    title: {
      es: "Nicolas Valenzuela | AI Engineer & Full Stack Developer",
      en: "Nicolas Valenzuela | AI Engineer & Full Stack Developer",
    },
    description: {
      es: "Portfolio profesional enfocado en AI Engineering, agentes inteligentes, aplicaciones con LLMs, automatización y desarrollo full stack moderno.",
      en: "Professional portfolio focused on AI Engineering, intelligent agents, LLM-powered applications, automation and modern full stack development.",
    },
  },
  profile: {
    name: "Nicolas",
    status: {
      es: "en linea",
      en: "online",
    },
    role: {
      es: "AI & Full-Stack Software Engineer",
      en: "AI & Full-Stack Software Engineer",
    },
    tagline: {
      es: "Construyo agentes de IA, sistemas RAG, plataformas web, SaaS y automatizaciones listas para producción. Soluciones prácticas y escalables para proyectos, equipos y negocios que quieren resolver procesos reales y ahorrar tiempo.",
      en: "I build production-ready AI agents, RAG systems, web platforms, SaaS products, and automations. Practical, scalable solutions for projects, teams, and businesses looking to solve real workflows and save time.",
    },
    location: {
      es: "Colombia",
      en: "Colombia",
    },
    links: {
      github: "https://github.com/beto18v",
      linkedin: "https://www.linkedin.com/in/beto18v/",
    },
  },
  hero: {
    title: {
      es: "Nicolas Valenzuela",
      en: "Nicolas Valenzuela",
    },
    subtitle: {
      es: "Construyo agentes de IA, sistemas RAG, plataformas web, SaaS y automatizaciones listas para producción. Soluciones prácticas y escalables para proyectos, equipos y negocios que quieren resolver procesos reales y ahorrar tiempo.",
      en: "I build production-ready AI agents, RAG systems, web platforms, SaaS products, and automations. Practical, scalable solutions for projects, teams, and businesses looking to solve real workflows and save time.",
    },
    badge: {
      es: "IA, Web, SaaS & Automatización",
      en: "AI, Web, SaaS & Automation",
    },
    proof: [
      { es: "Agentes de IA", en: "AI Agents" },
      { es: "RAG & LLMs", en: "RAG & LLMs" },
      { es: "Full Stack", en: "Full Stack" },
      { es: "Automatización", en: "Automation" },
    ],
    workPreview: {
      title: {
        es: "Proyectos en producción",
        en: "Production work",
      },
    },
    primaryCTA: {
      label: {
        es: "Agendar llamada",
        en: "Book a call",
      },
      href: "https://calendly.com/nicolasalbertov18/discovery-call",
    },
    secondaryCTA: {
      label: {
        es: "GitHub",
        en: "GitHub",
      },
      href: "https://github.com/beto18v",
    },
  },
  sections: {
    skills: {
      id: "skills",
      nav: {
        es: "Especialización",
        en: "Expertise",
      },
      badge: {
        es: "Especialización",
        en: "Expertise",
      },
      title: {
        es: "Core Expertise",
        en: "Core Expertise",
      },
      subtitle: {
        es: "Especializado en inteligencia artificial aplicada, agentes inteligentes, automatización y desarrollo full stack moderno.",
        en: "Specialized in applied AI, intelligent agents, automation and modern full stack development.",
      },
    },
    projects: {
      id: "projects",
      nav: {
        es: "Proyectos",
        en: "Projects",
      },
      badge: {
        es: "Proyectos",
        en: "Projects",
      },
      title: {
        es: "Proyectos en producción",
        en: "Production projects",
      },
      subtitle: {
        es: "Productos reales enfocados en UX, rendimiento y escalabilidad.",
        en: "Real products focused on UX, performance and scalability.",
      },
    },
    solutions: {
      id: "solutions",
      nav: {
        es: "Soluciones",
        en: "Solutions",
      },
      badge: {
        es: "Soluciones",
        en: "Solutions",
      },
      title: {
        es: "Qué puedo construir",
        en: "What I can build",
      },
      subtitle: {
        es: "Soluciones prácticas y escalables adaptadas a lo que realmente necesitas.",
        en: "Practical, scalable solutions tailored to what you actually need.",
      },
    },
    testimonials: {
      id: "testimonials",
      nav: {
        es: "Testimonios",
        en: "Testimonials",
      },
      badge: {
        es: "Testimonios",
        en: "Testimonials",
      },
      title: {
        es: "Lo que dicen quienes han trabajado conmigo",
        en: "What people say about working with me",
      },
      subtitle: {
        es: "Experiencias reales sobre ejecución, claridad técnica y entrega de soluciones funcionales.",
        en: "Real experiences on execution, technical clarity, and delivering functional solutions.",
      },
    },
    contact: {
      id: "contact",
      nav: {
        es: "Contacto",
        en: "Contact",
      },
      badge: {
        es: "Contacto",
        en: "Contact",
      },
      title: {
        es: "Construyamos algo que funcione de verdad",
        en: "Let's build something that truly works",
      },
      subtitle: {
        es: "¿Tienes una idea, una web o SaaS por lanzar, un agente de IA o un proceso repetitivo que automatizar? Hablemos en 15 minutos y revisamos cómo llevarlo a cabo.",
        en: "Have an idea, a web app or SaaS to launch, an AI agent, or a repetitive process to automate? Let's talk for 15 minutes and explore how to make it happen.",
      },
    },
    stats: {
      id: "stats",
      nav: {
        es: "Estadísticas",
        en: "Stats",
      },
      badge: {
        es: "Métricas",
        en: "Metrics",
      },
      title: {
        es: "En números",
        en: "By the numbers",
      },
    },
  },
  coreExpertise: {
    title: {
      es: "AI Engineering",
      en: "AI Engineering",
    },
    description: {
      es: "Desarrollo soluciones inteligentes para empresas utilizando LLMs, automatización, APIs y arquitecturas modernas.",
      en: "Building intelligent business solutions using LLMs, automation, APIs and modern architectures.",
    },
    skills: [
      "AI Agents",
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "MCP",
      "Tool Calling",
      "Function Calling",
      "Workflow Automation",
      "Business Automation",
      "API Design",
    ],
  },
  stats: [
    {
      value: 2,
      suffix: "+",
      since: { year: 2024, month: 6 },
      dynamic: "experience",
      label: {
        es: "Años de experiencia",
        en: "Years of experience",
      },
      icon: "Briefcase",
    },
    {
      value: 4,
      suffix: "+",
      dynamic: "production_projects",
      label: {
        es: "Proyectos en producción",
        en: "Projects in production",
      },
      icon: "Rocket",
    },
    {
      value: 30,
      suffix: "+",
      dynamic: "skills_count",
      label: {
        es: "Tecnologías dominadas",
        en: "Technologies mastered",
      },
      icon: "Code2",
    },
    {
      value: 8,
      suffix: "+",
      dynamic: "total_projects",
      label: {
        es: "Proyectos completados",
        en: "Completed projects",
      },
      icon: "CheckCircle2",
    },
  ],
  skills: [
    {
      id: "frontend",
      title: {
        es: "Frontend",
        en: "Frontend",
      },
      skills: [
        { name: "React", icon: "FaReact", docsUrl: "https://react.dev" },
        {
          name: "Next.js",
          icon: "SiNextdotjs",
          docsUrl: "https://nextjs.org/docs",
          isFavorite: true,
        },
        {
          name: "TypeScript",
          icon: "SiTypescript",
          docsUrl: "https://www.typescriptlang.org/docs/",
        },
        {
          name: "Tailwind CSS",
          icon: "SiTailwindcss",
          docsUrl: "https://tailwindcss.com/docs",
        },
        {
          name: "shadcn/ui",
          icon: "SiShadcnui",
          docsUrl: "https://ui.shadcn.com/docs",
        },
        {
          name: "Framer Motion",
          icon: "SiFramer",
          docsUrl: "https://motion.dev",
        },
        {
          name: "JavaScript",
          icon: "SiJavascript",
          docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "CSS3",
          icon: "SiCss3",
          docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
      ],
    },
    {
      id: "backend",
      title: {
        es: "Backend",
        en: "Backend",
      },
      skills: [
        {
          name: "FastAPI",
          icon: "SiFastapi",
          docsUrl: "https://fastapi.tiangolo.com/",
        },
        {
          name: "Python",
          icon: "SiPython",
          docsUrl: "https://docs.python.org/3/",
          isFavorite: true,
        },
        {
          name: "Node.js",
          icon: "SiNodedotjs",
          docsUrl: "https://nodejs.org/docs",
        },
        {
          name: "Java",
          icon: "FaCode",
          docsUrl: "https://docs.oracle.com/en/java/",
        },
        {
          name: "Spring Boot",
          icon: "SiSpringboot",
          docsUrl: "https://spring.io/projects/spring-boot#learn",
        },
        {
          name: "Laravel",
          icon: "SiLaravel",
          docsUrl: "https://laravel.com/docs",
        },
        {
          name: "REST APIs",
          icon: "FaNetworkWired",
          docsUrl: "https://restfulapi.net",
        },
        {
          name: "WebSockets",
          icon: "FaGlobe",
          docsUrl:
            "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        },
      ],
    },
    {
      id: "ai-llm",
      title: {
        es: "AI & LLM",
        en: "AI & LLM",
      },
      skills: [
        {
          name: "AI Agents",
          icon: "FaBrain",
          docsUrl: "https://platform.openai.com/docs/guides/agents",
        },
        {
          name: "LangGraph",
          icon: "FaCodeBranch",
          docsUrl: "https://langchain-ai.github.io/langgraph/",
        },
        {
          name: "RAG",
          icon: "FaDatabase",
          docsUrl: "https://python.langchain.com/docs/concepts/rag/",
        },
        {
          name: "LangChain",
          icon: "SiLangchain",
          docsUrl: "https://python.langchain.com/docs",
        },
        {
          name: "OpenAI API",
          icon: "SiOpenai",
          docsUrl: "https://platform.openai.com/docs",
        },
        {
          name: "Anthropic API",
          icon: "SiAnthropic",
          docsUrl: "https://docs.anthropic.com",
        },
        {
          name: "Tool Use",
          icon: "FaCogs",
          docsUrl: "https://platform.openai.com/docs/guides/function-calling",
        },
        {
          name: "MCP",
          icon: "FaExchangeAlt",
          docsUrl: "https://modelcontextprotocol.io/",
        },
      ],
    },
    {
      id: "databases",
      title: {
        es: "Bases de datos",
        en: "Databases",
      },
      skills: [
        {
          name: "PostgreSQL",
          icon: "SiPostgresql",
          docsUrl: "https://www.postgresql.org/docs/",
          isFavorite: true,
        },
        {
          name: "Supabase",
          icon: "SiSupabase",
          docsUrl: "https://supabase.com/docs",
        },
        { name: "Redis", icon: "SiRedis", docsUrl: "https://redis.io/docs" },
        {
          name: "Qdrant",
          icon: "FaDatabase",
          docsUrl: "https://qdrant.tech/documentation/",
        },
        {
          name: "MySQL",
          icon: "SiMysql",
          docsUrl: "https://dev.mysql.com/doc/",
        },
        {
          name: "SQLite",
          icon: "SiSqlite",
          docsUrl: "https://www.sqlite.org/docs.html",
        },
      ],
    },
    {
      id: "devops-cloud",
      title: {
        es: "DevOps & Cloud",
        en: "DevOps & Cloud",
      },
      skills: [
        {
          name: "Docker",
          icon: "SiDocker",
          docsUrl: "https://docs.docker.com/",
        },
        { name: "Git", icon: "SiGit", docsUrl: "https://git-scm.com/doc" },
        {
          name: "GitHub",
          icon: "SiGithub",
          docsUrl: "https://docs.github.com",
        },
        {
          name: "GCP",
          icon: "SiGooglecloud",
          docsUrl: "https://cloud.google.com/docs",
        },
        { name: "Linux", icon: "SiLinux", docsUrl: "https://linux.org" },
        {
          name: "Vercel",
          icon: "SiVercel",
          docsUrl: "https://vercel.com/docs",
        },
        {
          name: "Cloudflare",
          icon: "SiCloudflare",
          docsUrl: "https://developers.cloudflare.com",
        },
        {
          name: "Hetzner",
          icon: "SiHetzner",
          docsUrl: "https://docs.hetzner.com",
        },
      ],
    },
    {
      id: "automation-data",
      title: {
        es: "Automatización & Datos",
        en: "Automation & Data",
      },
      skills: [
        { name: "n8n", icon: "SiN8N", docsUrl: "https://docs.n8n.io" },
        {
          name: "Playwright",
          icon: "FaGlobe",
          docsUrl: "https://playwright.dev/docs",
        },
        {
          name: "Selenium",
          icon: "SiSelenium",
          docsUrl: "https://www.selenium.dev/documentation",
        },
        {
          name: "Web Scraping",
          icon: "FaDatabase",
          docsUrl: "https://scrapy.org/",
        },
        {
          name: "UptimeRobot",
          icon: "FaHeartbeat",
          docsUrl: "https://uptimerobot.com",
        },
      ],
    },
  ],
  projects: [
    {
      id: "sia",
      sectionId: "ai-automation",
      sectionBadge: {
        es: "IA & Automatización",
        en: "AI & Automation",
      },
      statusBadge: {
        es: "EN PRODUCCIÓN",
        en: "IN PRODUCTION",
      },
      title: {
        es: "Buscador de Candidatos",
        en: "Candidate Search Engine",
      },
      modalTitle: {
        es: "Buscador de Candidatos y Asistente Comercial",
        en: "Candidate Search & Commercial Assistant",
      },
      description: {
        es: "Encuentra y califica a los mejores candidatos para cualquier vacante técnica en segundos. Lee hojas de vida con inteligencia artificial y genera una lista ordenada con los perfiles más aptos y una justificación clara de por qué encajan.",
        en: "Finds and scores top candidates for any technical vacancy in seconds. Uses AI to analyze resumes and delivers a ranked shortlist of qualified applicants with clear explanations of why they fit.",
      },
      image: "/projects/itssolutions.jpg",
      imageAlt: {
        es: "Vista previa del Buscador de Candidatos y Matcher IA de ITS Solutions",
        en: "Preview of the ITS Solutions AI Candidate Matcher and Search Engine",
      },
      tags: [
        "FastAPI",
        "LangGraph",
        "Python",
        "AWS Bedrock",
        "Qdrant",
        "Docker Compose",
        "RRF Ranking",
        "Cohere Embedding",
        "Pydantic",
      ],
      links: {
        demo: "https://itssolutions.co",
      },
      demoLabel: {
        es: "Ver sitio",
        en: "Visit Site",
      },
      featured: true,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "El filtrado manual de cientos de hojas de vida para vacantes técnicas genera cuellos de botella críticos, sesgos de evaluación y semanas de retraso en la selección de talento clave.",
            en: "Manually screening hundreds of resumes for technical vacancies causes critical bottlenecks, evaluation bias, and weeks of delay in hiring key talent.",
          },
          solution: {
            es: "Servicio backend autónomo que convierte requerimientos en lenguaje natural a búsquedas vectoriales, fusiona candidatos sin sesgo mediante RRF (k=60) y evalúa exhaustivamente los CVs en paralelo entregando shortlists con pros, contras y score técnico justificado.",
            en: "Autonomous backend service translating natural language job specs into vector queries, fusing candidate pools via RRF (k=60), and analyzing resumes in parallel to deliver justified shortlists with pros, cons, and objective fit scores.",
          },
          valueProposition: {
            es: "Reduce en más del 80% los tiempos de preselección técnica de candidatos y estandariza la evaluación objetiva de talento para clientes corporativos.",
            en: "Cuts technical pre-screening time by over 80% and standardizes objective candidate assessments for corporate recruitment.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "Arquitectura asíncrona construida sobre FastAPI y un pipeline en LangGraph de 4 nodos en cadena (extractor_requerimiento -> ejecutor_bd_vectorial -> fusion_rrf -> cv_analyzer), desacoplada de límites de timeout mediante polling con TTL y streaming SSE.",
            en: "Asynchronous architecture built on FastAPI and a 4-node sequential LangGraph pipeline (extractor_requerimiento -> ejecutor_bd_vectorial -> fusion_rrf -> cv_analyzer), decoupled from timeout limits through TTL polling and SSE streaming.",
          },
          components: [
            {
              name: "Extractor Requerimiento",
              role: {
                es: "Normaliza la consulta del reclutador en esquema estructurado Pydantic con habilidades mandatorias y experiencia.",
                en: "Normalizes recruiter natural queries into structured Pydantic schemas with mandatory skills and experience.",
              },
            },
            {
              name: "Búsqueda Vectorial Qdrant",
              role: {
                es: "Recuperación sobre colección vectorial con embeddings multilingües de 1024 dimensiones (Cohere v3) con 2 chunks por CV.",
                en: "Retrieval across vector collections using 1024-dimension multilingual embeddings (Cohere v3) with 2 chunks per CV.",
              },
            },
            {
              name: "Fusión RRF (k=60)",
              role: {
                es: "Consolida y unifica el pool de candidatos recuperados eliminando sesgos de orden de consulta previa.",
                en: "Consolidates and scores candidate pools using Reciprocal Rank Fusion, eliminating prior query bias.",
              },
            },
            {
              name: "CV Analyzer Paralelo",
              role: {
                es: "Descarga en streaming (PDF/Word), extracción de texto y evaluación LLM con semáforos de concurrencia y backoff exponencial ante throttling de Bedrock.",
                en: "Streaming document download (PDF/Word), text extraction, and LLM scoring with concurrency semaphores and exponential backoff.",
              },
            },
          ],
          challengesSolved: [
            {
              es: "Superación del límite de 60s en CloudFront/ALB mediante endpoints asíncronos y almacén de jobs en memoria con TTL.",
              en: "Overcame 60s CloudFront/ALB timeout limits via decoupled asynchronous endpoints and in-memory TTL job store.",
            },
            {
              es: "Resiliencia ante throttling (HTTP 429) de AWS Bedrock mediante reintentos exponenciales con jitter y control estricto de concurrencia.",
              en: "Resilience against AWS Bedrock HTTP 429 throttling via exponential retries with jitter and strict concurrency controls.",
            },
          ],
        },
        metrics: [
          { value: "< 150ms", label: { es: "Latencia Búsqueda Vectorial", en: "Vector Search Latency" } },
          { value: "80%+", label: { es: "Ahorro Tiempo Screening", en: "Screening Time Saved" } },
          { value: "98", label: { es: "Tests Automatizados", en: "Automated Tests" } },
          { value: "1024", label: { es: "Dimensiones Cohere v3", en: "Cohere v3 Dimensions" } },
        ],
      },
    },

    {
      id: "nunca-cierro",
      sectionId: "ai-automation",
      sectionBadge: {
        es: "IA & Automatización",
        en: "AI & Automation",
      },
      statusBadge: {
        es: "EN PRODUCCIÓN",
        en: "IN PRODUCTION",
      },
      title: {
        es: "Nunca Cierro",
        en: "Nunca Cierro",
      },
      description: {
        es: "Atención al cliente y ventas automáticas 24/7 en WhatsApp y web. Responde dudas, ofrece alternativas, agenda citas y captura prospectos al instante para que los negocios nunca pierdan una venta.",
        en: "24/7 automated sales and customer support for WhatsApp and web. Instantly answers questions, offers alternatives, books appointments, and captures leads so businesses never miss a customer.",
      },
      image: "/projects/nuncacierro.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Nunca Cierro",
        en: "Preview of Nunca Cierro project",
      },
      tags: [   
        "LangGraph",
        "FastAPI",
        "Python",
        "Next.js",
        "React",
        "OpenAI & Groq",
        "PostgreSQL",
        "Redis",
        "Evolution API",
        "Meta Cloud API",
        "Tailwind CSS v4",
        "Docker & Caddy",
      ],
      links: {
        code: "https://github.com/nunca-cierro/app.git",
        demo: "https://nuncacierro.com/",
      },
      demoLabel: {
        es: "Ver sitio",
        en: "Visit Site",
      },
      featured: true,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "Los negocios de comercio y servicios pierden hasta el 50% de sus oportunidades de venta por demoras en respuesta en WhatsApp y canales digitales fuera del horario de oficina.",
            en: "Retail and service businesses lose up to 50% of sales opportunities due to delayed WhatsApp and digital channel responses outside business hours.",
          },
          solution: {
            es: "Agentes autónomos multi-canal que atienden consultas de catálogo, resuelven dudas frecuentes con RAG, capturan datos de contacto y califican prospectos en tiempo real para entrega al equipo comercial.",
            en: "Multi-channel autonomous agents handling catalog queries, answering FAQs via RAG, capturing contact info, and qualifying leads in real time for human sales follow-up.",
          },
          valueProposition: {
            es: "Atención comercial continua los 365 días del año con cero tiempo de espera para el usuario final, configuración guiada en minutos (Wizard) y aislamiento de datos por negocio.",
            en: "Continuous 365-day commercial support with zero waiting time for end-users, guided onboarding Wizard, and strict per-tenant data isolation.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "Monorepo con backend FastAPI (Python 3.12, SQLAlchemy 2.0 Async) y frontend Next.js 16 + React 19. Orquestación conversacional con LangGraph, motor multi-proveedor (OpenAI gpt-4o-mini y Groq LLaMA 3.3 70B), cifrado Fernet AES-128 para credenciales de canales y pasarelas de mensajería dual para WhatsApp (Evolution API y Meta Cloud API) más Telegram Bot.",
            en: "Monorepo featuring a FastAPI backend (Python 3.12, SQLAlchemy 2.0 Async) and Next.js 16 + React 19 frontend. Conversation orchestration via LangGraph, multi-provider LLM engine (OpenAI gpt-4o-mini and Groq LLaMA 3.3 70B), Fernet AES-128 credential encryption, and dual WhatsApp gateways (Evolution API and Meta Cloud API) plus Telegram Bot.",
          },
          components: [
            {
              name: "LangGraph Multi-LLM Engine",
              role: {
                es: "Máquinas de estado conversacionales con prompts versionados, base de conocimiento RAG por negocio y selección dinámica entre OpenAI y Groq.",
                en: "Stateful conversation engine with versioned business prompts, per-tenant RAG knowledge base, and dynamic OpenAI/Groq model switching.",
              },
            },
            {
              name: "Dual WhatsApp & Telegram Gateway",
              role: {
                es: "Soporte primario para Evolution API v2.x, alternativa oficial con Meta Cloud API v22.0 y bot interactivo de Telegram.",
                en: "Primary Evolution API v2.x support, official Meta Cloud API v22.0 alternative, and Telegram interactive bot gateway.",
              },
            },
            {
              name: "nc-dashboard & Security",
              role: {
                es: "Panel administrativo en Next.js 16 con Wizard de configuración (Negocio -> Agente IA -> Canal), cifrado Fernet de credenciales y autenticación JWT.",
                en: "Next.js 16 admin dashboard featuring onboarding Wizard (Business -> AI Agent -> Channel), Fernet credential encryption, and JWT auth.",
              },
            },
            {
              name: "VPS Hetzner & Caddy SSL",
              role: {
                es: "Stack contenerizado con Redis para colas y caché, PostgreSQL y reverse proxy Caddy con SSL automático y despliegue continuo vía GitHub Actions.",
                en: "Containerized stack with Redis for queues and caching, PostgreSQL, Caddy reverse proxy with auto-SSL, and GitHub Actions CI/CD to Hetzner VPS.",
              },
            },
          ],
          challengesSolved: [
            {
              es: "Aislamiento estricto de catálogos y prompts por negocio con cifrado simétrico Fernet para llaves de API y tokens de mensajería.",
              en: "Strict per-tenant catalog and prompt isolation with Fernet symmetric encryption for messaging tokens and API keys.",
            },
            {
              es: "Confiabilidad y robustez demostrada con 613 pruebas automatizadas en backend bajo pytest y suite frontend en Vitest.",
              en: "Demonstrated reliability backed by 613 automated backend tests under pytest and a frontend Vitest suite.",
            },
          ],
        },
        metrics: [
          { value: "24/7", label: { es: "Disponibilidad Activa", en: "Active Availability" } },
          { value: "613", label: { es: "Tests Automatizados", en: "Automated Tests" } },
          { value: "< 2s", label: { es: "Tiempo de Respuesta", en: "Average Response Time" } },
          { value: "100%", label: { es: "Aislamiento Multi-Tenant", en: "Multi-Tenant Isolation" } },
        ],
      },
    },

    {
      id: "n8n-pipelines",
      sectionId: "ai-automation",
      sectionBadge: {
        es: "IA & Automatización",
        en: "AI & Automation",
      },
      statusBadge: {
        es: "EN PRODUCCIÓN",
        en: "IN PRODUCTION",
      },
      title: {
        es: "Flujos n8n",
        en: "Workflows n8n",
      },
      description: {
        es: "Automatizaciones que trabajan solas a diario. Encuentran y filtran clientes potenciales, crean y programan publicaciones en LinkedIn y envían alertas inmediatas por Telegram ante cualquier error.",
        en: "Autonomous automations working daily: finds and filters potential leads, creates and schedules LinkedIn posts, and dispatches instant Telegram alerts upon errors.",
      },
      image: "/projects/n8n-pipelines.svg",
      imageAlt: {
        es: "Diagrama de nodos de flujos de automatización en n8n",
        en: "n8n automation workflow nodes diagram",
      },
      tags: [
        "n8n (Self-Hosted)",
        "Node.js",
        "Gemini API",
        "Google Places API",
        "Google Sheets",
        "LinkedIn API",
        "Telegram Bot",
        "Google Drive",
      ],
      links: {},
      featured: false,
      isProduction: true,
      category: "production",
    },

    {
      id: "dinerance",
      sectionId: "web-saas",
      sectionBadge: {
        es: "Web & SaaS",
        en: "Web & SaaS",
      },
      statusBadge: {
        es: "EN PRODUCCIÓN",
        en: "IN PRODUCTION",
      },
      title: {
        es: "Dinerance",
        en: "Dinerance",
      },
      description: {
        es: "Control financiero personal sin complicaciones. Registra gastos e ingresos, organiza presupuestos por categorías, proyecta tu saldo futuro a 30, 60 y 90 días e importa extractos bancarios en CSV con total privacidad.",
        en: "Hassle-free personal finance. Easily logs income and expenses, organizes budgets by category, forecasts 30, 60, and 90-day cashflow, and imports bank CSV statements with total privacy.",
      },
      image: "/projects/dinerance.jpg",
      imageAlt: {
        es: "Vista previa de Dinerance",
        en: "Preview of the Dinerance",
      },
      tags: [
        "Next.js",
        "FastAPI",
        "Python",
        "Azure",
        "PostgreSQL",
        "Supabase",
        "TypeScript",
        "React 19",
        "Tailwind CSS v4",
        "SQLAlchemy",
      ],
      links: {
        code: {
          frontend: "https://github.com/Beto18v/dinerance-dashboard.git",
          backend: "https://github.com/Beto18v/dinerance-api.git",
        },
        demo: "https://dinerance.vercel.app/",
      },
      demoLabel: {
        es: "Ver sitio",
        en: "Visit Site",
      },
      featured: true,
      isStar: true,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "Las finanzas personales suelen gestionarse en hojas de cálculo desarticuladas o apps que mezclan transferencias con gastos reales, carecen de proyecciones a futuro y exponen la privacidad.",
            en: "Personal finances are often managed in disconnected spreadsheets or apps that conflate internal transfers with real expenses, lack forward projections, and risk user privacy.",
          },
          solution: {
            es: "Plataforma desacoplada con ledger operativo (separa transferencias y ajustes de ingresos/gastos), proyecciones de flujo de caja (safe-to-spend a 30/60/90 días), gestión atómica de obligaciones e ingesta de extractos CSV.",
            en: "Decoupled platform featuring an operational ledger (separating transfers and adjustments from real expenses), 30/60/90-day cashflow forecasts (safe-to-spend), atomic obligations, and CSV statement intake.",
          },
          valueProposition: {
            es: "Claridad financiera integral entre lo observado y lo proyectado, importación conciliada de extractos bancarios y confidencialidad garantizada mediante Row Level Security (RLS).",
            en: "Comprehensive financial clarity comparing observed ledger vs projected cashflow, reconciled bank statement imports, and guaranteed privacy via Row Level Security (RLS).",
          },
        },
        technicalArchitecture: {
          description: {
            es: "Arquitectura desacoplada en dos repositorios: frontend en Next.js 16 (React 19, Tailwind CSS v4) desplegado en Vercel, backend REST en FastAPI desplegado en Microsoft Azure, y base de datos relacional PostgreSQL con RLS en Supabase.",
            en: "Decoupled architecture across two repositories: Next.js 16 frontend (React 19, Tailwind CSS v4) deployed on Vercel, FastAPI REST backend deployed on Microsoft Azure, and PostgreSQL relational database with RLS on Supabase.",
          },
          components: [
            {
              name: "Backend REST en Microsoft Azure",
              role: {
                es: "API asíncrona en FastAPI alojada en Azure con contratos Pydantic, migraciones Alembic y lógica de dominio estricta para ledger operativo y forecast.",
                en: "FastAPI async REST API hosted on Microsoft Azure with Pydantic contracts, Alembic migrations, and strict domain logic for operational ledger and cashflow forecasting.",
              },
            },
            {
              name: "Dashboard en Next.js 16",
              role: {
                es: "Frontend reactivo en React 19 con layout protegido, vistas de ledger, analytics mensual, caja futura y reconciliación CSV.",
                en: "Reactive React 19 frontend with protected layouts, ledger views, monthly analytics, future cashflow, and CSV modal.",
              },
            },
            {
              name: "Supabase & PostgreSQL RLS",
              role: {
                es: "Autenticación segura por JWT y políticas estrictas de Row Level Security garantizando aislamiento de datos por usuario en base de datos.",
                en: "Secure JWT authentication and strict Row Level Security policies guaranteeing tenant data isolation directly at the database level.",
              },
            },
            {
              name: "Ingesta & Conciliación CSV",
              role: {
                es: "Pipeline transaccional en dos fases (sesión de importación con vista previa, deduplicación básica y commit atómico al ledger).",
                en: "Two-phase transactional pipeline (import session with live preview, basic deduplication, and atomic ledger commit).",
              },
            },
          ],
        },
        metrics: [
          { value: "< 100ms", label: { es: "Latencia de Consulta", en: "Query Latency" } },
          { value: "100%", label: { es: "Aislamiento por RLS", en: "Row Level Security" } },
        ],
      },
    },

    {
      id: "tramite-facil",
      sectionId: "web-saas",
      sectionBadge: {
        es: "Web & SaaS",
        en: "Web & SaaS",
      },
      statusBadge: {
        es: "EN PRODUCCIÓN",
        en: "IN PRODUCTION",
      },
      title: {
        es: "TrámiteFácil",
        en: "TrámiteFácil",
      },
      description: {
        es: "Crea y descarga en segundos más de 15 documentos legales y laborales estándar para Colombia (cuentas de cobro, renuncias, contratos y tutelas). Gratis, sin registros y con total privacidad desde tu navegador.",
        en: "Draft and download 15+ standard Colombian legal and labor documents in seconds (invoices, resignation letters, contracts, petitions). Free, no sign-up required, and 100% private in your browser.",
      },
      image: "/projects/tramitefacil.jpg",
      imageAlt: {
        es: "Captura de pantalla de TrámiteFácil",
        en: "Screenshot of TrámiteFácil platform",
      },
      tags: [
        "React 19",
        "TypeScript",
        "Vite 8",
        "Tailwind CSS v4",
        "PWA",
        "Client-Side PDF",
        "Word (.docx)",
        "Local-First",
      ],
      links: {
        demo: "https://tramitefacil-hub.vercel.app/",
        code: "https://github.com/Beto18v/tramitefacil",
      },
      demoLabel: {
        es: "Ver sitio",
        en: "Visit Site",
      },
      featured: false,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "Redactar minutas y documentos jurídicos válidos en Colombia (cuentas de cobro con retenciones, cartas de renuncia con preaviso, contratos de arrendamiento, tutelas o derechos de petición) exige asesoría legal costosa o plantillas genéricas propensas a errores.",
            en: "Drafting legally compliant documents in Colombia (invoices with retentions, resignation letters with notice, lease agreements, petitions) requires costly legal advice or flawed generic templates.",
          },
          solution: {
            es: "Generador PWA 100% en el cliente que parametriza y previsualiza en tiempo real 15 plantillas jurídicas oficiales organizadas en 6 categorías, con cálculo automático de retenciones (ReteFuente, ReteICA) y exportación instantánea a PDF, Word (.docx) y texto plano.",
            en: "100% client-side PWA generator creating and previewing 15 official legal templates across 6 categories in real-time, with automated tax retention math (ReteFuente, ReteICA) and instant export to PDF, Word (.docx), and plain text.",
          },
          valueProposition: {
            es: "Acceso gratuito y confidencial para ciudadanos y pymes a costo $0 en servidores, sin registros, con privacidad total (los datos jamás salen del navegador) y reutilización de perfil con firma digitalizada.",
            en: "Free and confidential access for citizens and SMBs with $0 server cost, zero sign-up friction, total local privacy (data never leaves the browser), and reusable profile storage with digital signature.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "Arquitectura Local-First y Offline-First en React 19 + TypeScript + Vite 8. Compilación documental en memoria del navegador mediante docx y jspdf, Service Workers para funcionamiento 100% desconectado y lógica tributaria colombiana.",
            en: "Local-First and Offline-First architecture in React 19 + TypeScript + Vite 8. In-browser document compilation via docx and jspdf, Service Workers for full offline capability, and integrated Colombian tax logic.",
          },
          components: [
            {
              name: "Compilación Documental Client-Side",
              role: {
                es: "Generación directa de archivos PDF (jspdf + html-to-image) y Word editable (docx) con tablas de firma invisibles en memoria del navegador.",
                en: "Direct generation of PDF (jspdf + html-to-image) and editable Word (docx) documents with invisible signature tables in browser memory.",
              },
            },
            {
              name: "Motor Jurídico & Tributario Colombiano",
              role: {
                es: "Cálculo paramétrico de ReteFuente, ReteICA y conversión automática de cifras a letras en Pesos M/CTE bajo normativa vigente (CST, Ley 820, Ley 1755).",
                en: "Parametric calculation of Colombian withholding taxes (ReteFuente, ReteICA) and automatic number-to-words currency conversion under current law.",
              },
            },
            {
              name: "PWA Service Worker Offline-First",
              role: {
                es: "Caché de activos estáticos vía vite-plugin-pwa para instalación como app nativa y funcionamiento completo sin conexión a internet.",
                en: "Static asset caching via vite-plugin-pwa enabling native app installation and full execution without internet access.",
              },
            },
            {
              name: "Perfil Reutilizable & Firma Digital",
              role: {
                es: "Almacenamiento local seguro de datos recurrentes del usuario y captura de firma manuscrita sobre canvas interactivo sin transmisión a la nube.",
                en: "Secure local storage for recurring user profile data and interactive canvas handwriting signature capture with zero cloud transmission.",
              },
            },
          ],
          challengesSolved: [
            {
              es: "Generación de PDFs de alta calidad tipográfica y documentos Word formalmente estructurados en el cliente respetando estándares de impresión A4 colombianos.",
              en: "Client-side high-resolution PDF rendering and structured Word generation adhering to official Colombian A4 print standards.",
            },
            {
              es: "Garantía de privacidad absoluta y costo $0 de infraestructura al no transmitir datos de identificación o financieros a ninguna API externa.",
              en: "Absolute privacy guarantee and $0 infrastructure cost with zero transmission of identification or financial data to any external API.",
            },
          ],
        },
        metrics: [
          { value: "15", label: { es: "Plantillas Legales", en: "Legal Templates" } },
          { value: "$0", label: { es: "Costo de Servidores", en: "Server Running Cost" } },
          { value: "100%", label: { es: "Operación Offline", en: "Offline Operation" } },
          { value: "0 ms", label: { es: "Fuga de Datos a Nube", en: "Cloud Data Leak" } },
        ],
      },
    },

    {
      id: "pianio",
      sectionId: "web-saas",
      sectionBadge: {
        es: "Web & SaaS",
        en: "Web & SaaS",
      },
      statusBadge: {
        es: "ACTIVO",
        en: "ACTIVE",
      },
      title: {
        es: "Pianio",
        en: "Pianio",
      },
      description: {
        es: "Aprende y practica piano en el navegador con tus propios archivos MIDI (.mid) o teclado físico. Incluye modo espera interactivo (wait mode), lluvia de notas sincronizada y síntesis Web Audio de baja latencia.",
        en: "Learn and practice piano in your browser using custom MIDI files (.mid) or physical keyboards. Features an interactive wait mode, transport-synced note rain, and low-latency Web Audio synthesis.",
      },
      image: "/projects/pianio.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Pianio",
        en: "Preview of Pianio project",
      },
      tags: [
        "Angular 21",
        "TypeScript",
        "Signals",
        "Web MIDI API",
        "Web Audio API",
        "@tonejs/midi",
        "SCSS",
        "Vitest",
        "Playwright",
      ],
      links: {
        code: "https://github.com/Beto18v/Pianio",
        demo: "https://pianio.vercel.app/",
      },
      demoLabel: {
        es: "Ver sitio",
        en: "Visit Site",
      },
      featured: false,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "Los sintetizadores y reproductores MIDI web suelen presentar latencia perceptible de audio, carecen de conexión plug-and-play con teclados físicos y no ofrecen modos pedagógicos para aprender canciones paso a paso.",
            en: "Virtual web synthesizers and MIDI players suffer from noticeable audio lag, lack plug-and-play integration with hardware keyboards, and fail to provide guided pedagogical practice modes.",
          },
          solution: {
            es: "Aplicación interactiva fullscreen que parsea archivos MIDI locales (.mid/.midi), proyecta teclado adaptativo con lluvia de notas (note rain), conecta teclados USB/Bluetooth y ofrece Modo Práctica (Wait Mode) que congela la canción hasta acertar la nota.",
            en: "Fullscreen interactive app parsing local MIDI files (.mid/.midi), projecting adaptive keyboards with note rain, integrating USB/Bluetooth hardware, and offering a Practice Wait Mode that pauses playback until correct keys are pressed.",
          },
          valueProposition: {
            es: "Práctica y aprendizaje musical inmediato en cualquier equipo sin instalar software pesado ni controladores adicionales, con soporte plug-and-play y optimizaciones de fluidez a 60 FPS.",
            en: "Instant musical practice and learning on any modern browser without heavy DAW installations or extra drivers, with plug-and-play support and 60 FPS performance optimizations.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "Desarrollado en Angular 21 con Signals y componentes standalone. Parseo de archivos con @tonejs/midi, síntesis acústica en Web Audio API con buffers optimizados, pasarela Web MIDI con calibración de rango y suite de testing con Vitest y Playwright.",
            en: "Built with Angular 21 Signals and standalone components. MIDI parsing via @tonejs/midi, Web Audio API synthesis with optimized buffers, Web MIDI gateway with physical key range calibration, and Vitest/Playwright test suite.",
          },
          components: [
            {
              name: "Web MIDI Gateway & Hardware Calibration",
              role: {
                es: "Detección y conexión plug-and-play con teclados USB/Bluetooth, calibración de rango de teclas físicas y modo simulado para pruebas.",
                en: "Plug-and-play USB/Bluetooth keyboard detection, physical key range calibration, and simulated mock mode for hardware-less testing.",
              },
            },
            {
              name: "Web Audio Synthesizer & Guardrails",
              role: {
                es: "Síntesis polifónica con envolventes suaves, control dinámico de polifonía y seguimiento de frame-budget para canciones de alta densidad.",
                en: "Polyphonic synthesis with smooth envelopes, dynamic polyphony caps, and frame-budget tracking for dense note arrangements.",
              },
            },
            {
              name: "MIDI Parsing & Practice Engine",
              role: {
                es: "Parseo local de archivos .mid/.midi y lógica interactiva de espera (Wait Mode) que sincroniza la reproducción con el acierto del estudiante.",
                en: "Local .mid/.midi file parsing and interactive Wait Mode logic synchronizing playback speed to the student real-time key accuracy.",
              },
            },
            {
              name: "Visual Stage & Falling Note Rain",
              role: {
                es: "Escena gráfica reactiva gobernada por Angular Signals que proyecta la lluvia de notas vertical y el teclado iluminado en tiempo real.",
                en: "Reactive visual stage driven by Angular Signals rendering vertical falling note rain and illuminated interactive keys in real time.",
              },
            },
          ],
        },
        metrics: [
          { value: "< 10ms", label: { es: "Latencia de Respuesta", en: "Audio Response Latency" } },
          { value: "100%", label: { es: "Soporte MIDI Plug & Play", en: "MIDI Plug & Play" } },
        ],
      },
    },

    {
      id: "recordflow",
      sectionId: "extensions-tools",
      sectionBadge: {
        es: "Extensiones & Tools",
        en: "Extensions & Tools",
      },
      statusBadge: {
        es: "ACTIVO",
        en: "ACTIVE",
      },
      title: {
        es: "RecordFlow",
        en: "RecordFlow",
      },
      description: {
        es: "Graba tu pantalla, cámara web o ambas a la vez con una burbuja flotante para tutoriales o demos de trabajo. Sin límites de tiempo, sin marcas de agua y con descarga instantánea en tu equipo.",
        en: "Record your screen, webcam, or both with a floating video bubble for demos and tutorials. No time limits, no watermarks, and instant high-quality downloads to your computer.",
      },
      image: "/projects/recordflow.jpg",
      imageAlt: {
        es: "Vista previa del grabador de pantalla y webcam RecordFlow",
        en: "Preview of RecordFlow screen and webcam recorder",
      },
      tags: [
        "WXT Framework",
        "Manifest V3",
        "TypeScript",
        "MediaRecorder API",
        "mp4-muxer",
        "Shadow DOM",
        "IndexedDB",
        "Local-First",
      ],
      links: {
        code: "https://github.com/Beto18v/browser-extensions",
        demo: "https://github.com/Beto18v/browser-extensions/releases",
      },
      demoLabel: {
        es: "Descargar (ZIP)",
        en: "Download (ZIP)",
      },
      featured: false,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "Las herramientas comerciales de grabación de pantalla imponen restricciones de tiempo, marcas de agua invasivas y obligan a subir videos privados a servidores de terceros.",
            en: "Commercial screen recording tools impose strict time limits, watermarks, and force users to upload confidential recordings to third-party clouds.",
          },
          solution: {
            es: "Extensión de navegador sin suscripciones que captura pantalla, cámara y micrófono con una burbuja flotante interactiva y descarga instantánea en formato WebM/MP4.",
            en: "Subscription-free browser extension capturing screen, webcam, and microphone with a draggable floating bubble and instant WebM/MP4 export.",
          },
          valueProposition: {
            es: "Grabación ilimitada y 100% confidencial guardada localmente en el navegador sin costes recurrentes.",
            en: "Unlimited and 100% confidential recording stored locally in-browser with zero recurring subscription fees.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "Construida con WXT Framework, Manifest V3 y TypeScript. Captura de streams combinados con MediaRecorder API y mp4-muxer, inyección de interfaz mediante Shadow DOM aislado para prevenir colisiones con el CSS de la página anfitriona y persistencia en IndexedDB.",
            en: "Built with WXT Framework, Manifest V3, and TypeScript. Combined stream capture via MediaRecorder API and mp4-muxer, UI injection via isolated Shadow DOM, and IndexedDB local persistence.",
          },
          components: [
            {
              name: "Media Capture & mp4-muxer",
              role: {
                es: "Sincronización en tiempo real de video de pantalla, video de webcam y audio de micrófono codificada en memoria con soporte WebM y MP4.",
                en: "Real-time synchronization of screen video, webcam video, and mic audio encoded in-memory with WebM and MP4 support.",
              },
            },
            {
              name: "Isolated Shadow DOM UI",
              role: {
                es: "Controles flotantes y burbuja circular inyectada sin afectar ni verse afectada por los estilos de la web navegada.",
                en: "Floating controls and circular webcam bubble injected safely without style collisions on the host page.",
              },
            },
          ],
        },
        metrics: [
          { value: "0 min", label: { es: "Límites de Grabación", en: "Recording Limits" } },
          { value: "100%", label: { es: "Privacidad Local", en: "Local Browser Privacy" } },
        ],
      },
    },

    {
      id: "docguard",
      sectionId: "extensions-tools",
      sectionBadge: {
        es: "Extensiones & Tools",
        en: "Extensions & Tools",
      },
      statusBadge: {
        es: "ACTIVO",
        en: "ACTIVE",
      },
      title: {
        es: "DocGuard",
        en: "DocGuard",
      },
      description: {
        es: "Detector de originalidad integrado en Google Docs. Revisa tu texto mientras redactas y te alerta sobre coincidencias o posibles plagios con millones de fuentes académicas sin salir del documento.",
        en: "Originality and plagiarism checker integrated directly into Google Docs. Reviews your text as you type and alerts you to matches with millions of academic sources without leaving your document.",
      },
      image: "/projects/docguard.jpg",
      imageAlt: {
        es: "Vista previa de la extensión DocGuard en Google Docs",
        en: "Preview of DocGuard browser extension in Google Docs",
      },
      tags: [
        "WXT Framework",
        "Manifest V3",
        "Chrome SidePanel API",
        "TypeScript",
        "Client NLP (5-gram)",
        "OpenAlex API",
        "Wikipedia REST",
      ],
      links: {
        code: "https://github.com/Beto18v/browser-extensions",
        demo: "https://microsoftedge.microsoft.com/addons/detail/docguard/lmlplbcejkdghmapnoglbhnjhocdgepf",
        extraLinks: [
          {
            label: { es: "Web Store", en: "Web Store" },
            href: "https://chromewebstore.google.com/search/Nicolas%20Valenzuela",
            icon: "store",
          },
        ],
      },
      demoLabel: {
        es: "Edge Store",
        en: "Edge Store",
      },
      featured: false,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "La verificación de originalidad académica suele requerir licencias costosas de software antiplagio o compartir borradores confidenciales con servidores de terceros.",
            en: "Checking academic originality typically requires costly enterprise plagiarism licenses or sharing confidential drafts with external servers.",
          },
          solution: {
            es: "Extensión integrada directamente en el panel lateral de Google Docs que analiza similitud y atribución en tiempo real contra más de 250 millones de papers científicos indexados.",
            en: "Google Docs side panel extension verifying textual similarity and attribution in real time against 250M+ indexed scientific papers.",
          },
          valueProposition: {
            es: "Protección de autoría a costo $0 en APIs y con privacidad absoluta al procesar los fragmentos de texto en el propio navegador.",
            en: "Authorship protection at $0 in API costs and absolute confidentiality by processing text chunks entirely within the user browser.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "WXT Framework + Manifest V3 + TypeScript. Integración nativa mediante Chrome SidePanel API, procesamiento de n-gramas en cliente y consultas federadas asíncronas hacia las APIs REST públicas de OpenAlex y Wikipedia.",
            en: "WXT Framework + Manifest V3 + TypeScript. Native integration via Chrome SidePanel API, client-side n-gram processing, and federated async queries to OpenAlex and Wikipedia public REST APIs.",
          },
          components: [
            {
              name: "Client-Side NLP (5-gram)",
              role: {
                es: "Extracción y tokenización de fragmentos para cálculo de coincidencia sin enviar el documento completo a la red.",
                en: "Chunk extraction and tokenization for matching calculation without sending full documents across the network.",
              },
            },
            {
              name: "Federated Academic Query",
              role: {
                es: "Cotejo de citas y fuentes bibliográficas en OpenAlex y Wikipedia en tiempo real con control de tasa de peticiones.",
                en: "Real-time citation and bibliographic cross-referencing on OpenAlex and Wikipedia with rate-limit controls.",
              },
            },
          ],
        },
        metrics: [
          { value: "250M+", label: { es: "Fuentes Académicas", en: "Academic Sources" } },
          { value: "16", label: { es: "Tests Suite NLP", en: "NLP Suite Tests" } },
          { value: "$0", label: { es: "Costo de Inferencia", en: "Inference Cost" } },
        ],
      },
    },

    {
      id: "eclipse",
      sectionId: "extensions-tools",
      sectionBadge: {
        es: "Extensiones & Tools",
        en: "Extensions & Tools",
      },
      statusBadge: {
        es: "ACTIVO",
        en: "ACTIVE",
      },
      title: {
        es: "Eclipse",
        en: "Eclipse",
      },
      description: {
        es: "Activa un modo oscuro cómodo y elegante en cualquier página web. Evita destellos molestos al cargar y cuida tu vista durante la noche manteniendo los colores naturales de fotos y videos.",
        en: "Enables a comfortable, eye-friendly dark theme on any website. Eliminates annoying load flashes and protects your eyes at night while preserving natural photo and video colors.",
      },
      image: "/projects/eclipse.jpg",
      imageAlt: {
        es: "Vista previa del modo oscuro universal Eclipse",
        en: "Preview of Eclipse universal dark mode",
      },
      tags: [
        "WXT Framework",
        "Manifest V3",
        "TypeScript",
        "Zero-Flashbang",
        "document_start",
        "Smart Media Protection",
        "chrome.storage",
      ],
      links: {
        code: "https://github.com/Beto18v/browser-extensions",
        demo: "https://github.com/Beto18v/browser-extensions/releases",
      },
      demoLabel: {
        es: "Descargar (ZIP)",
        en: "Download (ZIP)",
      },
      featured: false,
      isProduction: true,
      category: "production",
      technicalDetails: {
        commercialImpact: {
          problem: {
            es: "El uso continuo de pantallas en entornos nocturnos causa fatiga visual severa debido a sitios web que carecen de modo oscuro nativo.",
            en: "Continuous screen use in low-light environments causes severe eye strain on websites lacking native dark themes.",
          },
          solution: {
            es: "Extensión con inyección temprana de estilos que oscurece cualquier página preservando los colores naturales de imágenes y videos.",
            en: "Extension with early style injection darkening any page while preserving natural photo and video colors.",
          },
          valueProposition: {
            es: "Navegación nocturna cómoda y configurable por sitio sin parpadeos molestos de pantalla blanca.",
            en: "Comfortable and per-site configurable nocturnal browsing with zero annoying white flashes.",
          },
        },
        technicalArchitecture: {
          description: {
            es: "WXT + TypeScript en Manifest V3. Inyección en fase document_start para evitar destellos (FOUC), inversión selectiva de color mediante filtros CSS dinámicos y sincronización de preferencias en chrome.storage.",
            en: "WXT + TypeScript on Manifest V3. Injected at document_start phase to eliminate FOUC white flashes, selective CSS color inversion, and chrome.storage preference sync.",
          },
          components: [
            {
              name: "Zero-Flashbang document_start Engine",
              role: {
                es: "Aplica las reglas CSS antes de la pintura inicial del DOM para eliminar el parpadeo blanco.",
                en: "Applies CSS rules before initial DOM paint to eliminate white flashbang.",
              },
            },
            {
              name: "Smart Media Inversion Protection",
              role: {
                es: "Detecta elementos visuales (img, video, canvas, iframe) para evitar inversión indebida de color multimedia.",
                en: "Detects media elements (img, video, canvas, iframe) preventing unwanted color inversions on multimedia.",
              },
            },
          ],
        },
        metrics: [
          { value: "0 ms", label: { es: "Destello (FOUC)", en: "Flicker (FOUC)" } },
          { value: "100%", label: { es: "Compatibilidad Manifest V3", en: "Manifest V3 Compliance" } },
        ],
      },
    },

    {
      title: {
        es: "Adoptafacil",
        en: "Adoptafacil",
      },
      description: {
        es: "Plataforma full-stack para conectar personas con mascotas en adopción, flujo asistido por un chatbot de IA, búsqueda de refugios por geolocalización, gestión de solicitudes y procesamiento de pagos integrado con Wompi.",
        en: "Full-stack platform connecting people with pets available for adoption, AI chatbot-guided flow, shelter search by geolocation, adoption request management, and integrated payment processing with Wompi.",
      },
      image: "/projects/adoptafacil.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Adoptafacil",
        en: "Preview of Adoptafacil project",
      },
      tags: [
        "FastAPI",
        "React",
        "PostgreSQL",
        "Docker",
        "Groq",
        "Laravel",
        "TypeScript",
        "Tailwind",
        "Wompi",
      ],
      links: {
        code: {
          frontend: "https://github.com/Beto18v/AdoptaFacil-Deploy.git",
          backend: "https://github.com/Beto18v/Chatbot-service-Prod.git",
        },
      },
      featured: true,
      category: "academic",
    },

    {
      title: {
        es: "Canva App",
        en: "Canva App",
      },
      description: {
        es: "Editaste un diseño en Canva y necesitás aplicar el mismo cambio a 50 más. Esta herramienta conecta Canva con Google Drive y Sheets para procesar diseños en lote — lo que tomaba horas ahora toma minutos. Ideal para equipos de marketing que manejan volumen.",
        en: "You edited one design in Canva and need the same change across 50 more. This tool connects Canva with Google Drive and Sheets to batch process designs — what took hours now takes minutes. Built for marketing teams handling volume.",
      },
      image: "/projects/canva-app.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Canva App",
        en: "Preview of Canva App project",
      },
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Webpack",
        "Canva API",
        "Cloudinary",
        "Google Drive API",
        "Google Sheets API",
        "Google Apps Script",
      ],
      links: {
        code: "https://github.com/Beto18v/Canva-app",
      },
      featured: true,
      category: "academic",
    },

    {
      title: {
        es: "Video Programador",
        en: "Video Programmer",
      },
      description: {
        es: "Subir, programar y organizar videos en múltiples canales de YouTube desde un solo lugar. Video Programador automatiza todo el pipeline — sube contenido, lo programa en el momento óptimo y mantiene todo organizado. Escala con la cantidad de canales que manejes.",
        en: "Upload, schedule and organize videos across multiple YouTube channels from one place. Video Programmer automates the entire pipeline — uploads content, schedules it at the right time and keeps everything organized. Scales with however many channels you run.",
      },
      image: "/projects/video-programmer.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Video Programador",
        en: "Preview of Video Programmer project",
      },
      tags: [
        "Laravel",
        "React",
        "TypeScript",
        "Shadcn/ui",
        "Tailwind",
        "Zod",
        "YouTube API v3",
      ],
      links: {
        code: "https://github.com/Beto18v/Video-Programmer",
      },
      featured: true,
      category: "academic",
    },
  ],
  testimonials: [
    {
      id: "rec-1",
      author: "Jhon Alexis Mendoza Rojas",
      avatar: "/testimonials/jhon-alexis.jpg",
      role: {
        es: "Desarrollador de software",
        en: "Software Developer",
      },
      quote: {
        es: "Desde que estudiamos juntos hace un par de años, he tenido la oportunidad de conocer a Nicolás, colaborar en algunos proyectos y puedo ser testigo de su compromiso y calidad humana. Es una persona sumamente proactiva, con gran capacidad para adaptarse a los retos en poco tiempo y aportar ideas que suman valor real a cualquier equipo o proyecto.",
        en: "Since studying together a couple of years ago, I've had the opportunity to know Nicolás, collaborate on several projects, and witness firsthand his commitment and strong character. He is an exceptionally proactive professional with a remarkable ability to adapt quickly to new challenges and bring ideas that add real, tangible value to any team or project.",
      },
      source: "linkedin",
      verifiedUrl: "https://www.linkedin.com/in/jhon-alexis-mendoza/",
    },
  ],
  contact: {
    email: "nicolasalbertov18@gmail.com",
    whatsapp: {
      countryCode: "57",
      number: "3124932822",
      defaultMessage: {
        es: "Vi tu portafolio y me interesa trabajar contigo",
        en: "I saw your portfolio and I am interested in working with you",
      },
    },
    booking: {
      label: {
        es: "Agenda una llamada de 15 min",
        en: "Book a 15-min call",
      },
      url: "https://calendly.com/nicolasalbertov18/discovery-call",
    },
  },
  footer: {
    copyright: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
    links: {
      github: {
        es: "GitHub",
        en: "GitHub",
      },
      linkedin: {
        es: "LinkedIn",
        en: "LinkedIn",
      },
    },
  },
  labels: {
    code: {
      es: "Código",
      en: "Code",
    },
    frontend: {
      es: "Frontend",
      en: "Frontend",
    },
    backend: {
      es: "Backend",
      en: "Backend",
    },
    liveDemo: {
      es: "Demo",
      en: "Live Demo",
    },
    averageByCategory: {
      es: "Promedio por categoría",
      en: "Average by category",
    },
    topSkills: {
      es: "Top skills",
      en: "Top skills",
    },
    toggleTheme: {
      es: "Cambiar tema",
      en: "Toggle theme",
    },
    toggleLanguage: {
      es: "Cambiar idioma",
      en: "Toggle language",
    },
    contactEmail: {
      es: "Enviar correo",
      en: "Send email",
    },
    openGithub: {
      es: "Abrir perfil de GitHub",
      en: "Open GitHub profile",
    },
    openLinkedin: {
      es: "Abrir perfil de LinkedIn",
      en: "Open LinkedIn profile",
    },
    viewProjects: {
      es: "Ver sección de proyectos",
      en: "View projects section",
    },
    openCode: {
      es: "Ver código de",
      en: "Open source code for",
    },
    openDemo: {
      es: "Ver demo de",
      en: "Open live demo for",
    },
    contactWhatsapp: {
      es: "Contactar por WhatsApp",
      en: "Contact on WhatsApp",
    },
    whatsappLabel: {
      es: "WhatsApp",
      en: "WhatsApp",
    },
    whatsappInline: {
      es: "WhatsApp",
      en: "WhatsApp",
    },
    statsExperience: {
      es: "Experiencia",
      en: "Experience",
    },
    statsProjects: {
      es: "Proyectos",
      en: "Projects",
    },
    statsTechnologies: {
      es: "Tecnologías",
      en: "Technologies",
    },
    statsClients: {
      es: "Clientes",
      en: "Clients",
    },
    viewDetails: {
      es: "Visitar",
      en: "Visit",
    },
    features: {
      es: "Características",
      en: "Features",
    },
    technologies: {
      es: "Tecnologías",
      en: "Technologies",
    },
    coreStackTitle: {
      es: "Stack Principal",
      en: "Core Stack",
    },
    coreStackDesc: {
      es: "Tecnologías que uso en el día a día para construir productos en producción.",
      en: "Technologies I use daily to build production-grade products.",
    },
    inProduction: {
      es: "En producción",
      en: "In production",
    },
    otherProjects: {
      es: "Otros proyectos",
      en: "Other projects",
    },
    prevProject: {
      es: "Anterior",
      en: "Previous",
    },
    nextProject: {
      es: "Siguiente",
      en: "Next",
    },
  },
};
