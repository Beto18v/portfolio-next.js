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
        es: "Proyectos destacados",
        en: "Featured projects",
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
        "RAG | LangChain",
        "LangGraph",

        "LangSmith",
        "AWS Bedrock",
        "Cohere embedding",
        "Qdrant",
        "FAISS",
        "FastAPI",
        "Python",
        "Next.js",
        "Typescript",
        "SQLite",
        "SSE",
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
      title: {
        es: "Nunca Cierro",
        en: "Nunca Cierro",
      },
      description: {
        es: "Plataforma de agentes conversacionales para WhatsApp y web orientada a atención continua, captura de información y seguimiento automatizado de clientes. Desplegada en producción para múltiples negocios simultáneamente.",
        en: "Conversational agent platform for WhatsApp and web focused on continuous customer support, information capture, and automated follow-up. Running in production across multiple businesses simultaneously.",
      },
      image: "/projects/nuncacierro.jpg",
      imageAlt: {
        es: "Vista previa del proyecto NUNCA CIERRO",
        en: "Preview of NUNCA CIERRO project",
      },
      tags: [
        "FastAPI",
        "OpenAI API",
        "WhatsApp API",
        "Telegram API",
        "Next.js",
        "Docker",
        "Hetzner",
        "Cloudflare",
        "PostgreSQL",
      ],
      links: {
        code: "https://github.com/nunca-cierro/app.git",
        demo: "https://nuncacierro.com/",
      },
      demoLabel: {
        es: "Ver sitio",
        en: "Visit Site",
      },
      // metrics: [
      //   { label: { es: "Negocios activos", en: "Active businesses" }, value: "" },
      //   { label: { es: "Mensajes procesados/mes", en: "Messages processed/mo" }, value: "" },
      // ],
      featured: true,
      isProduction: true,
      category: "production",
    },

    {
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
        "shadcn/ui",
        "Supabase",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Google Cloud Platform",
        "Alembic",
        "RLS",
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
        "Vercel Serverless",
        "Tailwind CSS",
        "Client-Side PDF/Word",
        "Offline-First",
      ],
      links: {
        demo: "https://tramitefacil-hub.vercel.app/",
        code: "https://github.com/Beto18v/tramitefacil",
      },
      demoLabel: {
        es: "Probar App",
        en: "Live Demo",
      },
      featured: true,
      isProduction: true,
      category: "production",
    },
    {
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
        "Web MIDI API + Web Audio API",
      ],
      links: {
        code: "https://github.com/Beto18v/Pianio",
        demo: "https://pianio.vercel.app/",
      },
      featured: true,
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
  /**
   * Testimonios reales (Recomendaciones de LinkedIn o clientes directos).
   * Si este array está vacío ([]), la sección se oculta automáticamente del sitio.
   *
   * Plantilla para cuando consigas tu primera recomendación real:
   * {
   *   id: "ejemplo-1",
   *   author: "Nombre Apellido",
   *   role: { es: "Fundador / Tech Lead", en: "Founder / Tech Lead" },
   *   company: "Nombre Empresa",
   *   quote: {
   *     es: "Cita textual de lo que opinó sobre el proyecto...",
   *     en: "Quote about the project outcome...",
   *   },
   *   source: "linkedin", // "linkedin" | "direct"
   *   verifiedUrl: "https://www.linkedin.com/in/beto18v/details/recommendations/",
   * },
   */
  testimonials: [],
  contact: {
    email: "nicolasalbertov18@gmail.com",
    whatsapp: {
      countryCode: "57",
      number: "3102079572",
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
