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
        es: "Asistente Comercial IA (SIA)",
        en: "AI Sales Assistant (SIA)",
      },
      description: {
        es: "Asistente conversacional con RAG y búsqueda vectorial que responde consultas con base en documentación real, captura leads y expone métricas de conversaciones en tiempo real. Bilingüe, embebible en cualquier sitio y corriendo en producción para ITS Solutions.",
        en: "Conversational assistant with RAG and vector search that answers queries from real documentation, captures leads, and surfaces real-time conversation metrics. Bilingual, embeddable on any website, and running in production for ITS Solutions.",
      },
      image: "/projects/itssolutions.jpg",
      imageAlt: {
        es: "Vista previa del Asistente Comercial IA de ITS Solutions",
        en: "Preview of the ITS Solutions AI Sales Assistant",
      },
      tags: [
        "LangChain",
        "LangGraph",
        "RAG",
        "AWS Bedrock",
        "Cohere embedding",
        "FastAPI",
        "Python",
        "Next.js",
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
        es: "Nunca Cierro — Plataforma Conversacional Multi-Negocio con LangGraph & RAG",
        en: "Nunca Cierro — Multi-Tenant Conversational AI Platform with LangGraph & RAG",
      },
      description: {
        es: "Plataforma SaaS en producción que automatiza la atención al cliente, calificación de consultas de alto ticket y agendamiento 24/7 en WhatsApp y Telegram. Diseñada como un monolito modular en FastAPI (Python 3.12 con uv), orquestación de agentes mediante StateGraph compilado en LangGraph, motor RAG multi-inquilino aislado con chunking dinámico, concurrencia serializada mediante PostgreSQL Advisory Locks, debounce distribuido en Redis y modo copiloto humano con pausa automática de 48 horas.",
        en: "Production SaaS platform that automates customer support, high-ticket lead qualification, and 24/7 appointment scheduling across WhatsApp and Telegram. Engineered as a modular monolith in FastAPI (Python 3.12 with uv), agent orchestration with compiled LangGraph StateGraph, tenant-isolated RAG engine with dynamic chunking, serial concurrency via PostgreSQL Advisory Locks, distributed Redis debounce, and a 48-hour human co-pilot auto-pause.",
      },
      image: "/projects/nuncacierro.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Nunca Cierro",
        en: "Preview of Nunca Cierro project",
      },
      tags: [
        "LangGraph",
        "RAG Multi-Tenant",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Evolution API (WhatsApp)",
        "Telegram Bot API",
        "Next.js",
        "Tailwind CSS v4",
        "Docker & Caddy",
      ],
      links: {
        code: "https://github.com/nunca-cierro/app.git",
        demo: "https://nuncacierro.com/",
      },
      demoLabel: {
        es: "Ver plataforma en producción",
        en: "Visit Production Platform",
      },
      featured: true,
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
        es: "Aplicación web y backend en producción diseñada para operación confiable, gestión de datos financieros por usuario con Row Level Security, y experiencia fluida desde el primer acceso. Stack completo con autenticación, API propia y base de datos relacional.",
        en: "Production web app and backend built for reliable operation, per-user financial data management with Row Level Security, and a smooth experience from first login. Full stack with authentication, custom API, and relational database.",
      },
      image: "/projects/dinerance.jpg",
      imageAlt: {
        es: "Vista previa de Dinerance",
        en: "Preview of the Dinerance",
      },
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
      ],
      links: {
        code: {
          frontend: "https://github.com/Beto18v/dinerance-dashboard.git",
          backend: "https://github.com/Beto18v/dinerance-api.git",
        },
        demo: "https://dinerance.vercel.app/",
      },
      featured: true,
      isStar: true,
      isProduction: true,
      category: "production",
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
        es: "Plataforma web PWA para la creación y radicación instantánea de más de 15 documentos legales y laborales en Colombia. Diseñada bajo arquitectura Local-First de costo $0 con privacidad absoluta, generación nativa de PDF y Word en el cliente, motor dual de IA (Gemini Flash en la nube con fallback heurístico 100% offline) y experiencia accesible a cualquier usuario.",
        en: "An offline-first PWA LegalTech platform for drafting and downloading 15+ official Colombian legal and labor documents in seconds. Built on a $0-cost client-side architecture with absolute privacy: in-browser PDF & DOCX compilation, dual AI engine (cloud Gemini Flash with seamless 100% offline heuristic fallback), and accessible for any user.",
      },
      image: "/projects/tramitefacil.jpg",
      imageAlt: {
        es: "Captura de pantalla de TrámiteFácil",
        en: "Screenshot of TrámiteFácil platform",
      },
      tags: [
        "React 19",
        "TypeScript",
        "Vite",
        "PWA",
        "Google Gemini",
        "Tailwind CSS",
        "Client-Side PDF/Word",
      ],
      links: {
        demo: "https://tramitefacil-hub.vercel.app/",
        code: "https://github.com/Beto18v/tramitefacil",
      },
      demoLabel: {
        es: "Probar App",
        en: "Live Demo",
      },
      featured: false,
      isProduction: true,
      category: "production",
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
        es: "Un piano en tu navegador que responde a teclados MIDI reales, no solo al mouse. Pianio usa Web MIDI y Web Audio APIs para cero latencia perceptible — tocas una tecla física y la nota aparece al instante. Con testing E2E completo para asegurar que todo funcione impecable.",
        en: "A piano in your browser that responds to real MIDI keyboards, not just mouse clicks. Pianio uses Web MIDI and Web Audio APIs for zero perceptible latency — press a physical key and the note fires instantly. Full E2E testing to keep everything rock solid.",
      },
      image: "/projects/pianio.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Pianio",
        en: "Preview of Pianio project",
      },
      tags: [
        "Angular",
        "TypeScript",
        "SCSS",
        "RxJS",
        "Vitest",
        "Playwright",
        "Web MIDI & Audio API",
      ],
      links: {
        code: "https://github.com/Beto18v/Pianio",
        demo: "https://pianio.vercel.app/",
      },
      demoLabel: {
        es: "Probar App",
        en: "Live Demo",
      },
      featured: false,
      isProduction: true,
      category: "production",
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
        es: "Alternativa libre que permite grabar pantalla, cámara o ambas a la vez con una burbuja de video circular y arrastrable. Sin límite ni marcas de agua, almacena los videos de forma privada y local en el navegador y permite descargarlos en alta calidad al instante.",
        en: "Free alternative that records screen, camera, or both simultaneously with a draggable circular video bubble. Free of limits or watermarks, it stores recordings privately and locally in the browser with instant high-quality downloads.",
      },
      image: "/projects/recordflow.jpg",
      imageAlt: {
        es: "Vista previa del grabador de pantalla y webcam RecordFlow",
        en: "Preview of RecordFlow screen and webcam recorder",
      },
      tags: [
        "Screen & Webcam",
        "MediaRecorder API",
        "Shadow DOM",
        "IndexedDB",
        "Web Audio API",
        "Local-First",
        "TypeScript",
      ],
      links: {
        code: "https://github.com/Beto18v/browser-extensions",
        demo: "https://github.com/Beto18v/browser-extensions/releases",
      },
      demoLabel: {
        es: "Descargar Release (ZIP)",
        en: "Download Release (ZIP)",
      },
      featured: false,
      isProduction: true,
      category: "production",
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
        es: "Extensión con panel lateral para Google Docs que verifica la originalidad y similitud de documentos mientras escribes. Analiza el texto 100% en tu navegador (sin enviar datos a servidores externos) y lo contrasta contra más de 250M de papers científicos en OpenAlex y Wikipedia con costo $0 en APIs.",
        en: "Google Docs side panel extension that verifies document originality and similarity as you write. Analyzes text 100% in your browser (without sending data to external servers) and cross-references against 250M+ scientific papers in OpenAlex and Wikipedia at $0 in API costs.",
      },
      image: "/projects/docguard.jpg",
      imageAlt: {
        es: "Vista previa de la extensión DocGuard en Google Docs",
        en: "Preview of DocGuard browser extension in Google Docs",
      },
      tags: [
        "Google Docs",
        "SidePanel API",
        "Client NLP (5-gram)",
        "OpenAlex API",
        "Wikipedia REST",
        "TypeScript",
        "Local-First",
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
        es: "Transforma cualquier sitio web a modo oscuro de manera suave y descansada para la vista. Se inyecta antes de que la página termine de cargar para evitar el molesto destello blanco, protege los colores originales de fotos y videos, y se activa o desactiva por sitio mediante popup o el atajo Alt + Shift + D.",
        en: "Transforms any website into a smooth, eye-friendly dark theme. Injected before the page finishes loading to avoid annoying white flashes, it preserves natural colors for photos and videos, and toggles per site via popup or the Alt + Shift + D shortcut.",
      },
      image: "/projects/eclipse.jpg",
      imageAlt: {
        es: "Vista previa del modo oscuro universal Eclipse",
        en: "Preview of Eclipse universal dark mode",
      },
      tags: [
        "Zero-Flashbang",
        "Smart Color Inversion",
        "document_start",
        "Alt+Shift+D",
        "Storage Sync",
        "WXT & Vite",
        "TypeScript",
      ],
      links: {
        code: "https://github.com/Beto18v/browser-extensions",
        demo: "https://github.com/Beto18v/browser-extensions/releases",
      },
      demoLabel: {
        es: "Descargar Release (ZIP)",
        en: "Download Release (ZIP)",
      },
      featured: false,
      isProduction: true,
      category: "production",
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
        "Laravel",
        "FastAPI",
        "React",
        "Inertia.js",
        "PostgreSQL",
        "TypeScript",
        "Tailwind",
        "Docker",
        "Google API",
        "Groq",
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
