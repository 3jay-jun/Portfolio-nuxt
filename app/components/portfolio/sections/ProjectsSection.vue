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
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.slug"
        :to="`/portfolio/projects/${project.slug}`"
        class="project-list-item"
        :class="{ 'has-thumbnail': project.thumbnail }"
      >
        <div class="project-list-index">{{ String(index + 1).padStart(2, "0") }}</div>
        <figure v-if="project.thumbnail" class="project-list-thumb">
          <img :src="project.thumbnail.src" :alt="project.thumbnail.alt" loading="lazy" />
        </figure>
        <div>
          <h3 class="project-list-title">{{ project.title }}</h3>
          <p class="project-list-meta">{{ project.meta }}</p>
          <p class="project-list-copy">{{ project.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <TagChip v-for="tag in project.tags" :key="`${project.title}-${tag}`" :label="tag" />
          </div>
          <span class="project-list-more">상세 보기</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
