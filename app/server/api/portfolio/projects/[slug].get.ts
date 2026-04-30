import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  const filePath = join(process.cwd(), "app", "server", "data", "portfolio.json");
  const content = await readFile(filePath, "utf-8");
  const portfolio = JSON.parse(content);
  const project = portfolio.projects.find((item: { slug?: string }) => item.slug === slug);

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: "프로젝트를 찾을 수 없습니다.",
    });
  }

  return {
    person: portfolio.person,
    project,
  };
});
