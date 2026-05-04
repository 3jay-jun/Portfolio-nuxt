<script setup lang="ts">
import { defaultPortfolio } from "~/data/defaultPortfolio";
import type { Person, Project } from "~/types/portfolio";

definePageMeta({
  layout: "portfolio",
  pageId: "portfolio",
});

type ProjectDetailResponse = {
  person: Person;
  project: Project;
};

const fallbackProject: Project = {
  slug: "project",
  title: "프로젝트",
  meta: "준비 중",
  description: "프로젝트 정보를 불러오는 중입니다.",
  tags: [],
};

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));

const { data } = await useAsyncData(
  () => `portfolio-project-${slug.value}`,
  () => appFetch<ProjectDetailResponse>(`/api/portfolio/projects/${slug.value}`),
  {
    default: () => ({
      person: defaultPortfolio.person,
      project: defaultPortfolio.projects[0] || fallbackProject,
    }),
  },
);

const person = computed(() => data.value.person);
const project = computed(() => data.value.project);
const detail = computed(() => project.value.detail || {});
const tasks = computed(() => detail.value.tasks || []);
const outcomes = computed(() => detail.value.outcomes || []);

useHead(() => ({
  title: `${project.value.title} | ${person.value.name}`,
  meta: [
    {
      name: "description",
      content: project.value.description,
    },
  ],
}));
</script>

<template>
  <div class="portfolio-detail">
    <main class="portfolio-detail-main">
      <NuxtLink class="portfolio-detail-back" to="/portfolio#projects">Back to Selected Work</NuxtLink>


      <section class="portfolio-detail-hero" :class="{ 'has-thumbnail': project.thumbnail }">
        <div class="portfolio-detail-copy">
          <h1 class="portfolio-detail-title">{{ project.title }}</h1>
          <p class="portfolio-detail-meta">{{ project.meta }}</p>
          <p class="portfolio-detail-summary">
            {{ detail.summary || project.description }}
          </p>
        </div>

        <figure v-if="project.thumbnail" class="portfolio-detail-thumb">
          <img :src="project.thumbnail.src" :alt="project.thumbnail.alt" />
        </figure>
      </section>

      <section class="portfolio-detail-grid">
        <aside class="portfolio-detail-aside">
          <div>
            <p class="portfolio-detail-label">Role</p>
            <p class="portfolio-detail-value">{{ detail.role || "추후 입력" }}</p>
          </div>
          <div>
            <p class="portfolio-detail-label">Period</p>
            <p class="portfolio-detail-value">{{ detail.period || project.meta }}</p>
          </div>
          <div>
            <p class="portfolio-detail-label">Stack</p>
            <div class="flex flex-wrap gap-2">
              <TagChip v-for="tag in project.tags" :key="tag" :label="tag" />
            </div>
          </div>
        </aside>

        <div>
          <section class="portfolio-detail-section">
            <h2>Overview</h2>
            <p class="portfolio-detail-list">{{ project.description }}</p>
          </section>

          <section v-if="tasks.length" class="portfolio-detail-section">
            <h2>Key Tasks</h2>
            <ul class="portfolio-detail-list">
              <li v-for="task in tasks" :key="task">{{ task }}</li>
            </ul>
          </section>

          <section v-if="outcomes.length" class="portfolio-detail-section">
            <h2>Outcomes</h2>
            <ul class="portfolio-detail-list">
              <li v-for="outcome in outcomes" :key="outcome">{{ outcome }}</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>
