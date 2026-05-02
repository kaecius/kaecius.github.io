export interface SocialLink {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Education {
  schoolName: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  location?: string;
  description: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  sourceUrl?: string;
  demoUrl?: string;
}

export interface ExploreItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  greeting: {
    username: string;
    title: string;
    subtitle: string;
  };
  socialLinks: SocialLink[];
  about: {
    bio: string;
    quote?: string;
  };
  currentlyExploring: ExploreItem[];
  skills: SkillCategory[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
  };
}
