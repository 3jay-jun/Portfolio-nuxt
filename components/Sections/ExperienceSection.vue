<script setup lang="ts">
import type { ExperienceItem } from "~/types/portfolio";

defineProps<{
  items: ExperienceItem[];
}>();
</script>

<template>
  <section id="experience" class="section reveal-on-scroll">
    <div class="section-heading">
      <p class="eyebrow">Experience</p>
      <h2 class="section-title">주요 경력</h2>
    </div>
    <div class="border-t border-line">
      <article
        v-for="item in items"
        :key="`${item.period}-${item.title}`"
        class="grid grid-cols-[240px_minmax(0,1fr)] gap-10 border-b border-line py-[30px] max-md:grid-cols-1 max-md:gap-3.5"
      >
        <div class="font-extrabold text-forest">{{ item.period }}</div>
        <div>
          <h3 class="mb-2.5 text-[22px] font-extrabold leading-snug">{{ item.title }}</h3>
          <p class="text-muted">{{ item.description }}</p>
          <ul class="mt-4 grid list-disc gap-1.5 pl-5 text-muted">
            <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
