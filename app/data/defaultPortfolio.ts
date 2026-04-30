import type { PortfolioData } from "~/types/portfolio";

export const defaultPortfolio: PortfolioData = {
  person: {
    name: "",
    brandMark: "",
    jobTitle: "",
    birthYear: "",
    age: "",
    careerLabel: "",
    location: "",
    photo: "/assets/profile-placeholder.svg",
    email: "",
    phone: "",
  },
  hero: {
    roleMeta: "",
    headline: "",
    summary: "",
    capabilityPanel: {
      eyebrow: "",
      title: [],
      signals: [],
    },
  },
  profile: {
    title: "",
    paragraphs: [],
  },
  experience: [],
  projects: [],
  skills: [],
  links: [],
  contactMessage: "",
};
