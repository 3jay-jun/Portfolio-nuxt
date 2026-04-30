export type PageType = "portfolio" | "blog" | "memo" | "team" | "external";

export type PageSeo = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export type Page = {
  id: string;
  type: PageType;
  title: string;
  path: string;
  status: "Live" | "Soon" | "Hidden";
  enabled: boolean;
  order: number;
  description: string;
  metric: string;
  accent: string;
  externalUrl?: string;
  seo: PageSeo;
};
