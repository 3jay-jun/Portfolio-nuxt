import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async () => {
  const filePath = join(process.cwd(), "app", "server", "data", "pages.json");
  const content = await readFile(filePath, "utf-8");

  return JSON.parse(content)
    .filter((page: { enabled?: boolean }) => page.enabled !== false)
    .sort((a: { order?: number }, b: { order?: number }) => (a.order ?? 999) - (b.order ?? 999));
});
