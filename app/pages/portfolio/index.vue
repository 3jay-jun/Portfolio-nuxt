<script setup lang="ts">
import { defaultPortfolio } from "~/data/defaultPortfolio";
import type { PortfolioData } from "~/types/portfolio";

definePageMeta({
  layout: "portfolio",
  pageId: "portfolio",
});

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
</script>

<template>
  <main id="top">
    <HeroSection :person="person" :hero="portfolio.hero" :links="portfolio.links" />
    <ProfileSection :person="person" :profile="portfolio.profile" />
    <ExperienceSection :items="portfolio.experience" />
    <ProjectsSection :projects="portfolio.projects" />
    <SkillsSection :skills="portfolio.skills" />
    <ContactSection :person="person" :message="portfolio.contactMessage" :links="contactLinks" />
  </main>
</template>
