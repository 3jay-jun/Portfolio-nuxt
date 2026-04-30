import type { Person, PortfolioLink } from "~/types/portfolio";

export const usePortfolioLinks = () => {
  const resolveLink = (link: PortfolioLink, person: Person) => {
    if (link.kind === "email") return `mailto:${person.email}`;
    if (link.kind === "anchor" && link.target) return link.target;
    return link.href || "#";
  };

  return { resolveLink };
};
