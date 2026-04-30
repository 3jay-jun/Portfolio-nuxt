import pages from "../data/pages.json";

export default defineEventHandler(async () => {
  return pages
    .filter((page: { enabled?: boolean }) => page.enabled !== false)
    .sort((a: { order?: number }, b: { order?: number }) => (a.order ?? 999) - (b.order ?? 999));
});
