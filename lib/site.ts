import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  locales: ["es", "en"],
  defaultLocale: "es",
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
      es: "AI Engineer & Full Stack Developer",
      en: "AI Engineer & Full Stack Developer",
    },
    tagline: {
      es: "Diseño y desarrollo agentes de IA, aplicaciones potenciadas por LLMs y plataformas web modernas que automatizan procesos y resuelven problemas reales de negocio.",
      en: "I design and build AI agents, LLM-powered applications and modern web platforms that automate workflows and solve real business problems.",
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
      es: "Construyo agentes inteligentes, aplicaciones con IA y sistemas de automatización escalables utilizando tecnologías modernas y arquitecturas listas para producción.",
      en: "I build intelligent agents, AI-powered applications and scalable automation systems using modern technologies and production-ready architectures.",
    },
    badge: {
      es: "Disponible para proyectos de IA y Automatización",
      en: "Available for AI & Automation Projects",
    },
    primaryCTA: {
      label: {
        es: "Ver proyectos",
        en: "View projects",
      },
      href: "#projects",
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
        es: "Portafolio",
        en: "Portfolio",
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
        es: "Construyamos tu próxima solución con IA",
        en: "Let's build your next AI solution",
      },
      subtitle: {
        es: "Si tienes una idea para automatizar procesos, integrar modelos de IA o desarrollar una plataforma moderna, conversemos.",
        en: "If you're looking to automate workflows, integrate AI models or build a modern platform, let's talk.",
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
      label: {
        es: "Años de experiencia",
        en: "Years of experience",
      },
      icon: "Briefcase",
    },
    {
      value: 4,
      suffix: "+",
      label: {
        es: "Proyectos en producción",
        en: "Projects in production",
      },
      icon: "Rocket",
    },
    {
      value: 30,
      suffix: "+",
      label: {
        es: "Tecnologías dominadas",
        en: "Technologies mastered",
      },
      icon: "Code2",
    },
    {
      value: 8,
      suffix: "+",
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
        { name: "Next.js", icon: "SiNextdotjs", docsUrl: "https://nextjs.org/docs", isFavorite: true },
        { name: "TypeScript", icon: "SiTypescript", docsUrl: "https://www.typescriptlang.org/docs/" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", docsUrl: "https://tailwindcss.com/docs" },
        { name: "shadcn/ui", icon: "SiShadcnui", docsUrl: "https://ui.shadcn.com/docs" },
        { name: "Framer Motion", icon: "SiFramer", docsUrl: "https://motion.dev" },
        { name: "JavaScript", icon: "SiJavascript", docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "CSS3", icon: "SiCss3", docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      ],
    },
    {
      id: "backend",
      title: {
        es: "Backend",
        en: "Backend",
      },
      skills: [
        { name: "FastAPI", icon: "SiFastapi", docsUrl: "https://fastapi.tiangolo.com/" },
        { name: "Python", icon: "SiPython", docsUrl: "https://docs.python.org/3/", isFavorite: true },
        { name: "Node.js", icon: "SiNodedotjs", docsUrl: "https://nodejs.org/docs" },
        { name: "Express", icon: "SiExpress", docsUrl: "https://expressjs.com" },
        { name: "REST APIs", icon: "FaNetworkWired", docsUrl: "https://restfulapi.net" },
        { name: "WebSockets", icon: "FaGlobe", docsUrl: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      ],
    },
    {
      id: "ai-llm",
      title: {
        es: "AI & LLM",
        en: "AI & LLM",
      },
      skills: [
        { name: "AI Agents", icon: "FaBrain", docsUrl: "https://platform.openai.com/docs/guides/agents" },
        { name: "LangGraph", icon: "FaCodeBranch", docsUrl: "https://langchain-ai.github.io/langgraph/" },
        { name: "RAG", icon: "FaDatabase", docsUrl: "https://python.langchain.com/docs/concepts/rag/" },
        { name: "LangChain", icon: "SiLangchain", docsUrl: "https://python.langchain.com/docs" },
        { name: "OpenAI API", icon: "SiOpenai", docsUrl: "https://platform.openai.com/docs" },
        { name: "Anthropic API", icon: "SiAnthropic", docsUrl: "https://docs.anthropic.com" },
        { name: "Function Calling", icon: "FaCogs", docsUrl: "https://platform.openai.com/docs/guides/function-calling" },
        { name: "MCP", icon: "FaExchangeAlt", docsUrl: "https://modelcontextprotocol.io/" },
      ],
    },
    {
      id: "databases",
      title: {
        es: "Bases de datos",
        en: "Databases",
      },
      skills: [
        { name: "PostgreSQL", icon: "SiPostgresql", docsUrl: "https://www.postgresql.org/docs/", isFavorite: true },
        { name: "Redis", icon: "SiRedis", docsUrl: "https://redis.io/docs" },
        { name: "Qdrant", icon: "FaDatabase", docsUrl: "https://qdrant.tech/documentation/" },
        { name: "MySQL", icon: "SiMysql", docsUrl: "https://dev.mysql.com/doc/" },
        { name: "SQLite", icon: "SiSqlite", docsUrl: "https://www.sqlite.org/docs.html" },
      ],
    },
    {
      id: "devops-cloud",
      title: {
        es: "DevOps & Cloud",
        en: "DevOps & Cloud",
      },
      skills: [
        { name: "Docker", icon: "SiDocker", docsUrl: "https://docs.docker.com/" },
        { name: "Git", icon: "SiGit", docsUrl: "https://git-scm.com/doc" },
        { name: "GitHub", icon: "SiGithub", docsUrl: "https://docs.github.com" },
        { name: "Linux", icon: "SiLinux", docsUrl: "https://linux.org" },
        { name: "Vercel", icon: "SiVercel", docsUrl: "https://vercel.com/docs" },
        { name: "Cloudflare", icon: "SiCloudflare", docsUrl: "https://developers.cloudflare.com" },
        { name: "Nginx", icon: "SiNginx", docsUrl: "https://nginx.org/en/docs/" },
        { name: "Hetzner", icon: "SiHetzner", docsUrl: "https://docs.hetzner.com" },
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
        { name: "Playwright", icon: "FaGlobe", docsUrl: "https://playwright.dev/docs" },
        { name: "Selenium", icon: "SiSelenium", docsUrl: "https://www.selenium.dev/documentation" },
        { name: "Web Scraping", icon: "FaDatabase", docsUrl: "https://scrapy.org/" },
        { name: "UptimeRobot", icon: "FaHeartbeat", docsUrl: "https://uptimerobot.com" },
      ],
    },
  ],
  projects: [
    {
      title: {
        es: "Nunca Cierro",
        en: "Nunca Cierro",
      },
      description: {
        es: "Sistema multi-agente con IA que automatiza la atención al cliente 24/7 en WhatsApp y Telegram. Resuelve consultas, agenda citas y procesa domicilios usando LLMs, con escalabilidad horizontal para múltiples negocios.",
        en: "Multi-agent AI system that automates customer support 24/7 on WhatsApp and Telegram. Handles queries, books appointments and processes deliveries using LLMs, with horizontal scalability across multiple businesses.",
      },
      image: "/projects/nuncacierro.jpg",
      imageAlt: {
        es: "Vista previa del proyecto NUNCA CIERRO",
        en: "Preview of NUNCA CIERRO project",
      },
      tags: [
        "WhatsApp API",
        "Telegram API",
        "Meta for Developers",
        "Qroq",
        "Ollama",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Vercel",
        "Railway",
      ],
      links: {
        code: "https://github.com/nunca-cierro/app.git",
        demo: "https://nuncacierro.com/",
      },
      featured: true,
      isProduction: true,
    },

    {
      title: {
        es: "Dinerance",
        en: "Dinerance",
      },
      description: {
        es: "SaaS de gestión financiera personal con arquitectura multi-servicio, autenticación robusta y Row-Level Security. Diseñado para escalar, con separación clara de responsabilidades entre frontend y API.",
        en: "Personal finance SaaS with multi-service architecture, robust authentication and Row-Level Security. Built to scale with clear separation of concerns between frontend and API.",
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
    },

    {
      title: {
        es: "Nexval",
        en: "Nexval",
      },
      description: {
        es: "Ecosistema de desarrollo full stack que transforma procesos de negocio en plataformas SaaS escalables. Automatización de flujos de trabajo, landing pages de alto rendimiento y sistemas personalizados con arquitectura modular.",
        en: "Full stack development ecosystem that transforms business processes into scalable SaaS platforms. Workflow automation, high-performance landing pages and custom systems with modular architecture.",
      },
      image: "/projects/nexval.jpg",
      imageAlt: {
        es: "Vista previa del proyecto NEXVAL",
        en: "Preview of NEXVAL project",
      },
      tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
      links: {
        code: "https://github.com/Beto18v/NEXVAL",
        demo: "https://nexval.vercel.app/",
      },
      featured: true,
      isProduction: true,
    },

    {
      title: {
        es: "Pianio",
        en: "Pianio",
      },
      description: {
        es: "Aplicación web interactiva con arquitectura modular, testing end-to-end y soporte MIDI en tiempo real. Diseñada con clean architecture para mantener escalabilidad y facilidad de mantenimiento.",
        en: "Interactive web application with modular architecture, end-to-end testing and real-time MIDI support. Built with clean architecture for scalability and maintainability.",
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
    },

    {
      title: {
        es: "Adoptafacil",
        en: "Adoptafacil",
      },
      description: {
        es: "Plataforma que integra un chatbot con IA para asistir en adopciones, pasarela de pagos y arquitectura multi-servicio desplegada con Docker. Automatiza el proceso completo desde la consulta hasta la adopción.",
        en: "Platform integrating an AI chatbot for adoption assistance, payment gateway and multi-service architecture deployed with Docker. Automates the entire process from inquiry to adoption.",
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
    },

    {
      title: {
        es: "Canva App",
        en: "Canva App",
      },
      description: {
        es: "Herramienta de automatización que conecta Canva con Google Drive y Sheets para edición masiva de diseños. Optimiza flujos de trabajo de equipos de marketing reduciendo horas de trabajo manual.",
        en: "Automation tool connecting Canva with Google Drive and Sheets for bulk design editing. Optimizes marketing team workflows, reducing hours of manual work.",
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
    },

    {
      title: {
        es: "Video Programador",
        en: "Video Programmer",
      },
      description: {
        es: "SaaS que automatiza completamente la gestión de canales de YouTube: programación inteligente, subida automatizada y organización de contenido. Arquitectura escalable que soporta múltiples canales simultáneamente.",
        en: "SaaS that fully automates YouTube channel management: intelligent scheduling, automated uploads and content organization. Scalable architecture supporting multiple channels simultaneously.",
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
    },

    {
      title: {
        es: "Vue Portafolio ",
        en: "Vue Portfolio",
      },
      description: {
        es: "Portafolio profesional multi-idioma con arquitectura modular, i18n integrado y diseño reusable. Construido con clean architecture para facilitar el mantenimiento y la escalabilidad.",
        en: "Multi-language professional portfolio with modular architecture, built-in i18n and reusable design. Built with clean architecture for easy maintenance and scalability.",
      },
      image: "/projects/vue-portfolio.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Vue Portafolio",
        en: "Preview of Vue Portfolio project",
      },
      tags: [
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Inertia.js",
        "Laravel",
        "MySQL",
      ],
      links: {
        code: "https://github.com/Beto18v/Portfolio",
      },
      featured: true,
    },
  ],
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
      es: "Ver detalles",
      en: "View details",
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
