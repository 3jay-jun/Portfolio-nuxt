<script setup lang="ts">
import type { ExperienceItem } from "~/types/portfolio";

defineProps<{
  items: ExperienceItem[];
}>();
</script>

<template>
  <section id="experience" class="mx-auto max-w-content px-6 py-24 reveal-on-scroll">
    <div class="mb-12 flex items-end justify-between gap-6">
      <div>
        <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08]">Experience</h2>
      </div>
      <span class="hidden text-sm font-medium text-body-gray sm:inline">{{ items.length }} companies</span>
    </div>

    <div class="grid gap-1 bg-opacity-100 overflow-hidden rounded-featured  shadow-card">
      <article
        v-for="item in items"
        :key="`${item.period}-${item.title}`"
        class="grid gap-8 bg-white p-7 lg:grid-cols-[240px_minmax(0,1fr)]"
      >
        <div>
          <span class="inline-flex rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">{{ item.period }}</span>
        </div>
        <div>
          <h3 class="mb-3 text-[26px] font-black leading-tight">{{ item.title }}</h3>
          <p class="max-w-3xl leading-relaxed text-body-gray">{{ item.description }}</p>
          <ul class="mt-6 grid gap-3 text-body-gray list-disc p-5">
            <li v-for="highlight in item.highlights" :key="highlight" v-html="highlight"></li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
