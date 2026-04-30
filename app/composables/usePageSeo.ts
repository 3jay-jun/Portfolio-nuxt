import { defaultPages } from "~/data/defaultPages";
import type { Page } from "~/types/page";

export const usePageSeo = async (pageId: string) => {
  const { data: pages } = await useAsyncData("layout-pages", () => appFetch<Page[]>("/api/pages"), {
    default: () => defaultPages,
  });

  const page = computed(() => pages.value.find((item) => item.id === pageId));

  useHead(() => {
    const seo = page.value?.seo;

    if (!seo) {
      return {};
    }

    const image = seo.ogImage || seo.image;

    return {
      title: seo.title,
      meta: [
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle || seo.title },
        { property: "og:description", content: seo.ogDescription || seo.description },
        ...(image ? [{ property: "og:image", content: image }] : []),
      ],
    };
  });

  return { page };
};
