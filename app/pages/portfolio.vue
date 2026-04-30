<script setup lang="ts">
import { defaultPortfolio } from "~/data/defaultPortfolio";
import type { PortfolioData } from "~/types/portfolio";

const { data: portfolio } = await useAsyncData("portfolio", () =>
  appFetch<PortfolioData>("/api/portfolio"),
  {
    default: () => defaultPortfolio,
  },
);

onMounted(async () => {
  await nextTick();

  const revealTargets = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealTargets.forEach((target) => observer.observe(target));
});

const person = computed(() => portfolio.value.person);
const contactLinks = computed(() =>
  portfolio.value.links.filter((link) => link.kind === "email"),
);

useHead(() => ({
  title: `${person.value.name} | ${person.value.jobTitle} 포트폴리오`,
  meta: [
    {
      name: "description",
      content: `${person.value.jobTitle} ${person.value.name}의 경력, 기술 스택, 프로젝트 경험을 정리한 포트폴리오입니다.`,
    },
  ],
}));
</script>

<template>
  <div>
    <SiteHeader :name="person.name" :brand-mark="person.brandMark" />

    <main id="top">
      <HeroSection :person="person" :hero="portfolio.hero" :links="portfolio.links" />
      <ProfileSection :person="person" :profile="portfolio.profile" />
      <ExperienceSection :items="portfolio.experience" />
      <ProjectsSection :projects="portfolio.projects" />
      <SkillsSection :skills="portfolio.skills" />
      <ContactSection :person="person" :message="portfolio.contactMessage" :links="contactLinks" />
    </main>

    <SiteFooter :name="person.email" />
  </div>
</template>
