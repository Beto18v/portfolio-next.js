import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  locales: ["es", "en"],
  defaultLocale: "es",
  seo: {
    title: {
      es: "Nicolas | Full Stack Developer",
      en: "Nicolas | Full Stack Developer",
    },
    description: {
      es: "Portfolio profesional de Nicolas Valenzuela con enfoque en productos web modernos.",
      en: "Professional portfolio of Nicolas Valenzuela focused on modern web products.",
    },
  },
  profile: {
    name: "Nicolas",
    status: {
      es: "en linea",
      en: "online",
    },
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    tagline: {
      es: "Construyo experiencias web rápidas, escalables y orientadas a resultados.",
      en: "I build fast, scalable web experiences focused on real outcomes.",
    },
    location: {
      es: "Colombia",
      en: "Colombia",
    },
    links: {
      github: "https://github.com/beto18v",
      linkedin: "https://www.linkedin.com/in/nicolas-valenzuela-b89700361/",
    },
  },
  hero: {
    title: {
      es: "Nicolas Valenzuela",
      en: "Nicolas Valenzuela",
    },
    subtitle: {
      es: "Diseño y construyo soluciones digitales modernos, rápidos y escalables.",
      en: "I design and build modern, fast and scalable digital solutions.",
    },
    badge: {
      es: "Disponible para proyectos",
      en: "Available for projects",
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
        es: "Habilidades",
        en: "Skills",
      },
      badge: {
        es: "Core Stack",
        en: "Core Stack",
      },
      title: {
        es: "Habilidades y dominio técnico",
        en: "Skills & technical proficiency",
      },
      subtitle: {
        es: "Tecnologías clave para construir productos robustos y mantenibles.",
        en: "Key technologies to build robust and maintainable products.",
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
        es: "Hablemos",
        en: "Let's build together",
      },
      subtitle: {
        es: "Cuéntame tu idea y armamos una solución web profesional.",
        en: "Tell me about your idea and we can build a professional web solution.",
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
      value: 3,
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
        {
          name: "Next.js",
          icon: "SiNextdotjs",
          docsUrl: "https://nextjs.org/docs",
          isFavorite: true,
        },
        { name: "React", icon: "FaReact", docsUrl: "https://react.dev" },
        {
          name: "TypeScript",
          icon: "SiTypescript",
          docsUrl: "https://www.typescriptlang.org/docs/",
          isFavorite: true,
        },
        {
          name: "Shadcn/UI",
          icon: "SiShadcnui",
          docsUrl: "https://ui.shadcn.com/docs",
        },
        {
          name: "Tailwind CSS",
          icon: "SiTailwindcss",
          docsUrl: "https://tailwindcss.com/docs",
        },
        { name: "Angular", icon: "SiAngular", docsUrl: "https://angular.dev" },
        { name: "Recharts", icon: "VscGraph", docsUrl: "https://recharts.org" },
        { name: "Vue", icon: "SiVuedotjs", docsUrl: "https://vuejs.org" },
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
          name: "REST APIs",
          icon: "FaNetworkWired",
          docsUrl: "https://restfulapi.net",
        },
        {
          name: "Laravel",
          icon: "SiLaravel",
          docsUrl: "https://laravel.com/docs",
        },
        {
          name: "FastAPI",
          icon: "SiFastapi",
          docsUrl: "https://fastapi.tiangolo.com/",
          isFavorite: true,
        },
        {
          name: "Python",
          icon: "SiPython",
          docsUrl: "https://docs.python.org/3/",
          isFavorite: true,
        },
        {
          name: "SpringBoot",
          icon: "SiSpringboot",
          docsUrl: "https://spring.io/projects/spring-boot#learn",
        },
        {
          name: ".Net",
          icon: "SiDotnet",
          docsUrl: "https://learn.microsoft.com/en-us/dotnet/",
        },
      ],
    },
    {
      id: "database",
      title: {
        es: "Base de datos",
        en: "Database",
      },
      skills: [
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
        {
          name: "PostgreSQL",
          icon: "SiPostgresql",
          docsUrl: "https://www.postgresql.org/docs/",
          isFavorite: true,
        },
        {
          name: "SQL Server",
          icon: "FaDatabase",
          docsUrl: "https://learn.microsoft.com/en-us/sql/",
        },
        {
          name: "MongoDB",
          icon: "SiMongodb",
          docsUrl: "https://www.mongodb.com/docs/",
        },
      ],
    },
    {
      id: "tools",
      title: {
        es: "Herramientas",
        en: "Tools",
      },
      skills: [
        { name: "Git", icon: "SiGit", docsUrl: "https://git-scm.com/doc" },
        {
          name: "Vercel",
          icon: "SiVercel",
          docsUrl: "https://vercel.com/docs",
          isFavorite: true,
        },
        {
          name: "Supabase",
          icon: "SiSupabase",
          docsUrl: "https://supabase.com/docs",
          isFavorite: true,
        },
        {
          name: "Azure",
          icon: "FaCloud",
          docsUrl: "https://learn.microsoft.com/en-us/azure/app-service/",
        },
        {
          name: "Docker",
          icon: "SiDocker",
          docsUrl: "https://docs.docker.com/",
        },
        {
          name: "Railway",
          icon: "SiRailway",
          docsUrl: "https://docs.railway.app/",
        },
        { name: "Linux", icon: "SiLinux", docsUrl: "https://linux.org" },
        {
          name: "CI/CD",
          icon: "FaCogs",
          docsUrl: "https://docs.github.com/en/actions",
        },
      ],
    },
  ],
  projects: [
    {
      title: {
        es: "Dinerance",
        en: "Dinerance",
      },
      description: {
        es: "SaaS de finanzas personales con dashboard interactivo, autenticación segura, gestión de transacciones y RLS. Stack moderno: Next.js + FastAPI + PostgreSQL + Supabase.",
        en: "Personal finance SaaS with interactive dashboard, secure auth, transaction management, and RLS. Modern stack: Next.js + FastAPI + PostgreSQL + Supabase.",
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
        es: "Nunca Cierro",
        en: "Nunca Cierro",
      },
      description: {
        es: "Sistema de landing pages multi-rubro con IA conversacional. Integración directa con WhatsApp, SEO optimizado y despliegue rápido en Vercel. Next.js + shadcn/ui.",
        en: "Multi-sector landing page system with conversational AI. Direct WhatsApp integration, SEO-optimized, and fast Vercel deployment. Next.js + shadcn/ui.",
      },
      image: "/projects/nuncacierro.jpg",
      imageAlt: {
        es: "Vista previa del proyecto NUNCA CIERRO",
        en: "Preview of NUNCA CIERRO project",
      },
      tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
      links: {
        code: "https://github.com/Beto18v/NUNCA-CIERRO",
        demo: "https://nuncacierro.vercel.app/",
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
        es: "Aplicación web frontend-only para practicar piano utilizando archivos MIDI y XML. Permite visualizar notas en un escenario de pantalla completa, reproducir con un sintetizador mínimo, conectar un teclado MIDI y practicar con un modo de espera.",
        en: "Frontend-only web application for practicing piano using MIDI and XML files. It allows you to visualize notes on a full-screen stage, play with a minimal synthesizer, connect a MIDI keyboard, and practice with a waiting mode.",
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
        es: "Ecosistema digital multi-servicio para adopción de mascotas en Colombia. Arquitectura con Laravel + FastAPI + React, pagos Wompi, chatbot con IA (Grok) y autenticación.",
        en: "Multi-service digital ecosystem for pet adoption in Colombia. Architecture with Laravel + FastAPI + React, Wompi payments, AI chatbot (Grok), and auth.",
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
        "Grok AI",
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
        es: "Bots",
        en: "Bots",
      },
      description: {
        es: "Bot WhatsApp con IA (Groq) para automatización de respuestas inteligentes. Integración Twilio, procesamiento de lenguaje natural y respuestas en tiempo real.",
        en: "WhatsApp bot with AI (Groq) for intelligent response automation. Twilio integration, NLP, and real-time replies.",
      },
      image: "/projects/bots.jpg",
      imageAlt: {
        es: "Vista previa del proyecto Bots",
        en: "Preview of Bots project",
      },
      tags: ["FastAPI", "Python", "Groq", "Twilio"],
      links: {
        code: "https://github.com/Beto18v/Bots",
      },
      featured: true,
    },
    {
      title: {
        es: "Canva App",
        en: "Canva App",
      },
      description: {
        es: "Automatización de diseño gráfico para Canva: gestión y edición de imágenes personalizadas. Integra Google Drive, Google Sheets, Cloudinary y Canva API.",
        en: "Graphic design automation for Canva: custom image management and editing. Integrates Google Drive, Google Sheets, Cloudinary, and Canva API.",
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
        es: "SaaS para automatización de canales de YouTube: programación inteligente, subida automatizada y gestión multicanal vía YouTube API v3. Laravel + React + shadcn/ui.",
        en: "SaaS for YouTube channel automation: smart scheduling, automated uploads, and multi-channel management via YouTube API v3. Laravel + React + shadcn/ui.",
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
        es: "Portafolio personal moderno, elegante y profesional. Con 3 vistas diferentes, completamente modularizado en componentes reutilizables y con soporte para múltiples idiomas (español, inglés y mandarín).",
        en: "Modern, sleek and professional personal portfolio. With 3 different views, completely modularized in reusable components and with support for multiple languages (Spanish, English and Mandarin).",
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
    text: {
      es: "Disponible para proyectos freelance y oportunidades full-time remotas.",
      en: "Available for freelance projects and remote full-time opportunities.",
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
