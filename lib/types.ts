export type Locale = "es" | "en";
export type LocalizedText = Record<Locale, string>;
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  icon?: string;
  docsUrl: string;
  isFavorite?: boolean;
}

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  skills: Skill[];
}

export interface Profile {
  name: string;
  status: LocalizedText;
  role: LocalizedText;
  tagline: LocalizedText;
  location?: LocalizedText;
  links: {
    github: string;
    linkedin?: string;
    website?: string;
  };
}

export interface HeroConfig {
  title: LocalizedText;
  subtitle: LocalizedText;
  badge: LocalizedText;
  primaryCTA: {
    label: LocalizedText;
    href: string;
  };
  secondaryCTA: {
    label: LocalizedText;
    href: string;
  };
}

export interface SectionText {
  id: string;
  nav: LocalizedText;
  badge: LocalizedText;
  title: LocalizedText;
  subtitle?: LocalizedText;
}

export type ProjectCodeLink =
  | string
  | {
      frontend?: string;
      backend?: string;
    };

export interface ProjectLinks {
  code?: ProjectCodeLink;
  demo?: string;
}

export interface StatsMetric {
  value: number;
  suffix?: string;
  label: LocalizedText;
  icon: string;
  since?: { year: number; month: number };
}

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  tags: string[];
  links: ProjectLinks;
  featured: boolean;
  isStar?: boolean;
  /** Display an "in production" badge in project cards */
  isProduction?: boolean;
  features?: string[];
}

export interface Contact {
  email: string;
  text: LocalizedText;
  whatsapp: {
    countryCode: string;
    number: string;
    defaultMessage: LocalizedText;
  };
}

export interface FooterConfig {
  copyright: LocalizedText;
  links: {
    github: LocalizedText;
    linkedin: LocalizedText;
  };
}

export interface Labels {
  code: LocalizedText;
  frontend: LocalizedText;
  backend: LocalizedText;
  liveDemo: LocalizedText;
  averageByCategory: LocalizedText;
  topSkills: LocalizedText;
  toggleTheme: LocalizedText;
  toggleLanguage: LocalizedText;
  contactEmail: LocalizedText;
  openGithub: LocalizedText;
  openLinkedin: LocalizedText;
  viewProjects: LocalizedText;
  openCode: LocalizedText;
  openDemo: LocalizedText;
  contactWhatsapp: LocalizedText;
  whatsappLabel: LocalizedText;
  whatsappInline: LocalizedText;
  statsExperience: LocalizedText;
  statsProjects: LocalizedText;
  statsTechnologies: LocalizedText;
  statsClients: LocalizedText;
  viewDetails: LocalizedText;
  features: LocalizedText;
  technologies: LocalizedText;
  coreStackTitle: LocalizedText;
  coreStackDesc: LocalizedText;
  inProduction: LocalizedText;
  prevProject: LocalizedText;
  nextProject: LocalizedText;
}

export interface SiteConfig {
  locales: Locale[];
  defaultLocale: Locale;
  seo: {
    title: LocalizedText;
    description: LocalizedText;
  };
  profile: Profile;
  hero: HeroConfig;
  sections: {
    skills: SectionText;
    projects: SectionText;
    contact: SectionText;
    stats: SectionText;
  };
  stats: StatsMetric[];
  projects: Project[];
  skills: SkillCategory[];
  contact: Contact;
  footer: FooterConfig;
  labels: Labels;
}
