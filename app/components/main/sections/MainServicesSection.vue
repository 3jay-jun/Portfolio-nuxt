<script setup lang="ts">
import type { Page } from "~/types/page";

defineProps<{
  featuredPage?: Page;
  pages: Page[];
  externalCount: number;
}>();
</script>

<template>
  <section id="services" class="mx-auto max-w-content px-6 py-24">
    <SectionHeading title="Services" :meta="`${externalCount} external link`" />

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ServiceCard v-if="featuredPage" :page="featuredPage" featured />
      <ServiceCard
        v-for="page in pages"
        :key="page.id"
        :page="page"
      />
    </div>
  </section>
</template>
