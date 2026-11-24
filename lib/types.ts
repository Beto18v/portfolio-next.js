export type Locale = "es" | "en";
export type LocalizedText = Record<Locale, string>;
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  icon?: string;
  docsUrl?: string;
  isFavorite?: boolean;
}

export interface CoreExpertise {
  title: LocalizedText;
  description: LocalizedText;
  skills: string[];
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
  proof: LocalizedText[];
  workPreview: {
    title: LocalizedText;
  };
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
  extraLinks?: SubModuleLink[];
}

export interface StatsMetric {
  value: number;
  suffix?: string;
  label: LocalizedText;
  icon: string;
  since?: { year: number; month: number };
  dynamic?: "experience" | "production_projects" | "total_projects" | "skills_count";
}

export type ProjectCategory = "production" | "academic";

export type ProjectSectionId =
  | "ai-automation"
  | "web-saas"
  | "extensions-tools";

export interface ProjectMetric {
  label: LocalizedText;
  value: string;
}

export interface SubModuleLink {
  label: LocalizedText;
  href: string;
  icon?: "store" | "download" | "github" | "external";
}

export interface ProjectSubModule {
  id: string;
  name: string;
  icon: "shield" | "video" | "moon";
  image?: string;
  imageAlt?: LocalizedText;
  badge?: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  businessModel?: LocalizedText;
  tags: string[];
  links: SubModuleLink[];
}

export interface ProjectTechnicalDetails {
  commercialImpact: {
    problem: LocalizedText;
    solution: LocalizedText;
    valueProposition: LocalizedText;
  };
  technicalArchitecture: {
    description: LocalizedText;
    components: Array<{
      name: string;
      role: LocalizedText;
    }>;
    challengesSolved?: LocalizedText[];
  };
  highlights?: LocalizedText[];
  metrics?: ProjectMetric[];
}

export interface Project {
  id?: string;
  title: LocalizedText;
  modalTitle?: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  tags: string[];
  links: ProjectLinks;
  featured: boolean;
  isStar?: boolean;
  /** Display an "in production" badge in project cards */
  isProduction?: boolean;
  /** Where this project lives in the portfolio narrative */
  category: ProjectCategory;
  /** Optional section categorization for filtered decks and bento views */
  sectionId?: ProjectSectionId;
  sectionBadge?: LocalizedText;
  statusBadge?: LocalizedText;
  /** Per-project override for the demo button label (e.g. "Visit Site") */
  demoLabel?: LocalizedText;
  /** Optional placeholder stats shown in the info panel (fill with real data) */
  metrics?: ProjectMetric[];
  features?: string[];
  subModules?: ProjectSubModule[];
  technicalDetails?: ProjectTechnicalDetails;
}

export interface Contact {
  email: string;
  whatsapp: {
    countryCode: string;
    number: string;
    defaultMessage: LocalizedText;
  };
  booking?: {
    label: LocalizedText;
    url: string;
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
  otherProjects: LocalizedText;
  prevProject: LocalizedText;
  nextProject: LocalizedText;
}

export type TestimonialSource = "linkedin" | "direct";

export interface Testimonial {
  id: string;
  quote: LocalizedText;
  author: string;
  role: LocalizedText;
  company?: string;
  avatar?: string;
  verifiedUrl?: string;
  source: TestimonialSource;
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
    solutions: SectionText;
    testimonials?: SectionText;
    contact: SectionText;
    stats: SectionText;
  };
  coreExpertise: CoreExpertise;
  stats: StatsMetric[];
  projects: Project[];
  testimonials?: Testimonial[];
  skills: SkillCategory[];
  contact: Contact;
  footer: FooterConfig;
  labels: Labels;
}
