import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async () => {
  const filePath = join(process.cwd(), "app", "server", "data", "portfolio.json");
  const content = await readFile(filePath, "utf-8");

  return JSON.parse(content);
});
