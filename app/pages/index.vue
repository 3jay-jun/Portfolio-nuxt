<script setup lang="ts">
import { defaultPages } from "~/data/defaultPages";
import type { Page } from "~/types/page";

definePageMeta({
  layout: "workspace",
});

const { data: pages } = await useAsyncData("pages", () => appFetch<Page[]>("/api/pages"), {
  default: () => defaultPages,
});

const visiblePages = computed(() => pages.value.filter((page) => page.enabled));
const liveCount = computed(() => visiblePages.value.filter((page) => page.status === "Live").length);
const plannedCount = computed(() => visiblePages.value.filter((page) => page.status === "Soon").length);
const externalCount = computed(() => visiblePages.value.filter((page) => page.openMode === "blank").length);
// const featuredPage = computed(() => visiblePages.value[0]);
// const secondaryPages = computed(() => visiblePages.value.slice(1));
const heroStats = computed(() => [
  {
    value: visiblePages.value.length,
    label: "Services Indexed",
  },
  {
    value: liveCount.value,
    label: "Live Pages",
  },
  {
    value: plannedCount.value,
    label: "Planned Tools",
  },
]);

useHead({
  title: "3Jay Workspace",
  meta: [
    {
      name: "description",
      content: "포트폴리오와 개인 도구를 모아둔 워크스페이스입니다.",
    },
  ],
});
</script>

<template>
  <main class="min-h-screen bg-white font-sans text-black antialiased">
    <MainNav />
    <MainHeroSection :stats="heroStats" />
    <hr class="mx-6 border-black" />
    <MainTicker />
    <hr class="border-black" />
    <MainServicesSection

      :pages="visiblePages"
      :external-count="externalCount"
    />
    <MainContactSection />
  </main>
</template>
