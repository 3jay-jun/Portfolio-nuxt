import type { PortfolioData } from "~/types/portfolio";

export const defaultPortfolio: PortfolioData = {
  person: {
    name: "",
    brandMark: "",
    jobTitle: "",
    birthYear: "",
    age: "",
    careerStart: "",
    careerLabel: "",
    location: "",
    photo: "/assets/profile-placeholder.svg",
    email: "",
    phone: "",
    summary: "",
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
  experience: [],
  projects: [],
  skills: [],
  links: [],
  contactMessage: "",
};
