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
        en: "Let’s build together",
      },
      subtitle: {
        es: "Cuéntame tu idea y armamos una solución web profesional.",
        en: "Tell me about your idea and we can build a professional web solution.",
      },
    },
  },
  skills: [
    {
      id: "frontend",
      title: {
        es: "Frontend",
        en: "Frontend",
      },
      skills: [
        { name: "Next.js", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "TypeScript", percentage: 85 },
        { name: "Shadcn/UI", percentage: 80 },
        { name: "Tailwind CSS", percentage: 80 },
        { name: "Recharts", percentage: 70 },
        { name: "Vue", percentage: 60 },
      ],
    },
    {
      id: "backend",
      title: {
        es: "Backend",
        en: "Backend",
      },
      skills: [
        { name: "REST APIs", percentage: 85 },
        { name: "Laravel", percentage: 80 },
        { name: "FastAPI", percentage: 75 },
        { name: "SpringBoot", percentage: 65 },
        { name: ".Net", percentage: 60 },
      ],
    },
    {
      id: "database",
      title: {
        es: "Base de datos",
        en: "Database",
      },
      skills: [
        { name: "MySQL", percentage: 90 },
        { name: "SQLite", percentage: 85 },
        { name: "PostgreSQL", percentage: 80 },
        { name: "SQL Server", percentage: 65 },
        { name: "MongoDB", percentage: 40 },
      ],
    },
    {
      id: "tools",
      title: {
        es: "Herramientas",
        en: "Tools",
      },
      skills: [
        { name: "Git", percentage: 95 },
        { name: "Vercel", percentage: 90 },
        { name: "Azure App Service", percentage: 80 },
        { name: "Docker", percentage: 75 },
        { name: "Supabase", percentage: 70 },
        { name: "Railway", percentage: 70 },
        { name: "Linux", percentage: 50 },
        { name: "CI/CD", percentage: 45 },
      ],
    },
  ],
  projects: [
    {
      title: {
        es: "NEXVAL",
        en: "NEXVAL",
      },
      description: {
        es: "Sistema de landing pages multi-rubro optimizado para conversión, performance y despliegue rápido. Integración directa con WhatsApp y estructura SEO-friendly.",
        en: "Multi-sector landing page system optimized for conversion, performance, and rapid deployment. Direct integration with WhatsApp and SEO-friendly structure.",
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
    },
    {
      title: {
        es: "Adoptafacil",
        en: "Adoptafacil",
      },
      description: {
        es: "AdoptaFácil es un ecosistema digital completo diseñado para revolucionar el proceso de adopción de mascotas en Colombia.",
        en: "AdoptaFácil is a complete digital ecosystem designed to revolutionize the pet adoption process in Colombia.",
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
        "MySQL",
        "TypeScript",
        "Tailwind",
        "Docker",
        "Google API",
        "Grok AI",
      ],
      links: {
        code: "https://github.com/Beto18v/AdoptaFacil",
        demo: "https://adoptafacil-prod-a3f3gvdnc8hhfkfj.eastus-01.azurewebsites.net/",
      },
      featured: true,
    },
    {
      title: {
        es: "Bots",
        en: "Bots",
      },
      description: {
        es: "Bot para WhatsApp que automatiza respuestas usando inteligencia artificial.",
        en: "WhatsApp bot that automates responses using artificial intelligence.",
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
        es: "Este proyecto automatiza la gestión, edición de imágenes y textos personalizados para proyectos en canva.",
        en: "This project automates the management, editing of images and customized texts for projects in canva.",
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
        es: "Sistema SaaS completo para el control de canales, programación y subida automatizada de videos a YouTube.",
        en: "Complete SaaS system for channel control, scheduling and automated video upload to YouTube.",
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
  },
};
