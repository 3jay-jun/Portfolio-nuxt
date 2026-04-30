export type Person = {
  name: string;
  brandMark?: string;
  jobTitle: string;
  birthYear: string;
  age: string;
  careerLabel: string;
  location: string;
  photo: string;
  email: string;
  phone: string;
};

export type PortfolioLink = {
  label: string;
  href?: string;
  kind?: "email" | "anchor" | "external";
  target?: string;
  primary?: boolean;
};

export type ExperienceItem = {
  period: string;
  title: string;
  description: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  title: string;
  meta: string;
  description: string;
  tags: string[];
  thumbnail?: {
    src: string;
    alt: string;
  };
  detail?: {
    summary?: string;
    role?: string;
    period?: string;
    tasks?: string[];
    outcomes?: string[];
  };
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type PortfolioData = {
  person: Person;
  hero: {
    roleMeta: string;
    headline: string;
    summary: string;
    capabilityPanel: {
      eyebrow: string;
      title: string[];
      signals: Array<{
        label: string;
        value: string;
      }>;
    };
  };
  profile: {
    title: string;
    paragraphs: string[];
  };
  experience: ExperienceItem[];
  projects: Project[];
  skills: SkillGroup[];
  links: PortfolioLink[];
  contactMessage: string;
};
