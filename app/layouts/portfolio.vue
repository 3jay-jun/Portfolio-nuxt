<script setup lang="ts">
import { defaultPortfolio } from "~/data/defaultPortfolio";
import type { PortfolioData } from "~/types/portfolio";

await usePageSeo("portfolio");

const { data: portfolio } = await useAsyncData("portfolio-layout", () =>
  appFetch<PortfolioData>("/api/portfolio"),
  {
    default: () => defaultPortfolio,
  },
);

const person = computed(() => portfolio.value.person);
</script>

<template>
  <div>
    <SiteHeader :name="person.name" :brand-mark="person.brandMark" />
    <slot />
    <SiteFooter :name="person.email" />
  </div>
</template>
