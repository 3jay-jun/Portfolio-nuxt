import portfolio from "../../../data/portfolio.json";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
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
