import portfolio from "../data/portfolio.json";

export default defineEventHandler(async () => {
  return portfolio;
});
