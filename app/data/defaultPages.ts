import type { Page } from "~/types/page";

export const defaultPages: Page[] = [
  {
    id: "portfolio",
    type: "portfolio",
    title: "Portfolio",
    path: "/portfolio",
    status: "Live",
    enabled: true,
    order: 1,
    description: "경력, 프로젝트, 기술 스택을 정리한 포트폴리오",
    metric: "View",
    accent: "#214a3b",
    seo: {
      title: "정재준 포트폴리오",
      description: "웹개발자 정재준의 경력, 프로젝트, 기술 스택을 정리한 포트폴리오입니다.",
    },
  },
];
