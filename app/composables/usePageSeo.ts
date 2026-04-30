import rawPages from "~/server/data/pages.json";
import type { Page } from "~/types/page";

const pages = rawPages as Page[];

export const usePageSeo = (pageId: string) => {
  const page = pages.find((item) => item.id === pageId);

  if (!page?.seo) {
    return { page };
  }

  const image = page.seo.ogImage || page.seo.image;

  useHead({
    title: page.seo.title,
    meta: [
      { name: "description", content: page.seo.description },
      { property: "og:title", content: page.seo.ogTitle || page.seo.title },
      { property: "og:description", content: page.seo.ogDescription || page.seo.description },
      ...(image ? [{ property: "og:image", content: image }] : []),
    ],
  });

  return { page };
};
