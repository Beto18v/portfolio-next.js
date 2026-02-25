export type Locale = "es" | "en";
export type LocalizedText = Record<Locale, string>;
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel;
  percentage?: number;
  icon?: string;
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

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  tags: string[];
  links: {
    code?: string;
    demo?: string;
  };
  featured: boolean;
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
  };
  projects: Project[];
  skills: SkillCategory[];
  contact: Contact;
  footer: FooterConfig;
  labels: Labels;
}
