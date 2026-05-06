<script setup lang="ts">
import type { Project } from "~/types/portfolio";

defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <section id="projects" class="mx-auto max-w-content px-6 py-24 reveal-on-scroll">

    <div class="mb-12 flex items-end justify-between gap-6">
      <div>
        <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08]">Projects</h2>
      </div>
      <span class="hidden text-sm font-medium text-body-gray sm:inline">{{ projects.length }} cases</span>
    </div>

    <div class="grid gap-6">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.slug"
        :to="`/portfolio/projects/${project.slug}`"
        class="group grid overflow-hidden rounded-featured bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
        :class="{ 'lg:grid-cols-[320px_minmax(0,1fr)]': project.thumbnail }"
      >
        <figure v-if="project.thumbnail" class="aspect-video overflow-hidden bg-chip-gray lg:aspect-auto">
          <img class="w-full h-full object-cover transition duration-300 group-hover:scale-105" :src="project.thumbnail.src" :alt="project.thumbnail.alt" loading="lazy" />
        </figure>

        <div class="p-7">
          <div class="mb-4 flex flex-wrap gap-2">
            <span class="rounded-pill bg-black px-4 py-2 text-sm font-medium text-white">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <AppPill >
              {{ project.meta }}
            </AppPill>
          </div>
          <h3 class="text-[clamp(24px,3vw,34px)] font-black leading-tight">{{ project.title }}</h3>
          <p class="mt-4 max-w-3xl leading-relaxed text-body-gray">{{ project.description }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <TagChip v-for="tag in project.tags" :key="`${project.title}-${tag}`" :label="tag" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
