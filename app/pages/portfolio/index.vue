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

let revealObserver: IntersectionObserver | null = null;

onMounted(async () => {
  await nextTick();

  const revealTargets = Array.from(document.querySelectorAll(".reveal-on-scroll"));

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.01,
    },
  );

  revealTargets.forEach((target) => revealObserver?.observe(target));
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
});

const person = computed(() => portfolio.value.person);
const contactLinks = computed(() =>
  portfolio.value.links.filter((link) => link.kind === "email"),
);
</script>

<template>
  <main id="top">
    <HeroSection :person="person" :hero="portfolio.hero" :links="portfolio.links" />
    <ProfileSection :person="person" />
    <ExperienceSection :items="portfolio.experience" />
    <ProjectsSection :projects="portfolio.projects" />
    <SkillsSection :skills="portfolio.skills" />
    <ContactSection :person="person" :message="portfolio.contactMessage" :links="contactLinks" />
  </main>
</template>
