<script setup lang="ts">
import type { Project } from "~/types/portfolio";

defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <section id="projects" class="section reveal-on-scroll">
    <div class="section-heading">
      <p class="eyebrow">Selected Work</p>
      <h2 class="section-title">대표 업무</h2>
    </div>
    <div class="border-t border-line">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        class="grid grid-cols-[90px_minmax(0,1fr)] gap-11 border-b border-line py-[34px] max-md:grid-cols-1 max-md:gap-3.5"
      >
        <div class="text-sm font-extrabold text-copper">{{ String(index + 1).padStart(2, "0") }}</div>
        <div>
          <h3 class="mb-2.5 text-[22px] font-extrabold leading-snug">{{ project.title }}</h3>
          <p class="mb-3.5 text-sm font-extrabold text-forest">{{ project.meta }}</p>
          <p class="max-w-[820px] text-muted">{{ project.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <TagChip v-for="tag in project.tags" :key="`${project.title}-${tag}`" :label="tag" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
