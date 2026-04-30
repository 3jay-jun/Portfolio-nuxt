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

useHead({
  title: "3Jay Workspace",
  meta: [
    {
      name: "description",
      content: "정재준의 포트폴리오와 개인 도구를 모아둔 워크스페이스입니다.",
    },
  ],
});
</script>

<template>
  <main class="workspace-home">
    <div class="workspace-shell">
      <header class="workspace-top">
        <NuxtLink class="workspace-mark" to="/">3Jay Workspace</NuxtLink>
        <span class="workspace-date">Personal services directory</span>
      </header>

      <section class="workspace-hero">
        <div class="">
          <p class="eyebrow">Index</p>
          <h1 class="workspace-title">
            Work, notes, and small tools.
          </h1>
          <p class="workspace-copy">
            포트폴리오를 시작으로 블로그, 메모장, 팀 나누기 같은 작은 도구들을 하나씩 확장해가는 개인 웹사이트입니다.
          </p>
        </div>

        <div class="workspace-grid">
          <NuxtLink
            v-for="page in visiblePages"
            :key="page.id"
            :to="page.path"
            class="workspace-card"
            :class="{ 'is-disabled': page.status === 'Soon' }"
            :style="{ '--page-accent': page.accent }"
            :target="page.openMode === 'blank' ? '_blank' : undefined"
            :rel="page.openMode === 'blank' ? 'noreferrer' : undefined"
            :external="page.openMode === 'blank'"
          >
            <figure v-if="page.seo.image" class="workspace-card-thumb">
              <img :src="page.seo.image" :alt="`${page.title} thumbnail`" loading="lazy" />
            </figure>
            <div class="workspace-card-body">
              <div class="workspace-card-status">
                <span>{{ page.status }}</span>
                <span>{{ page.metric }}</span>
              </div>
              <h2 class="workspace-card-title">{{ page.title }}</h2>
              <p class="workspace-card-copy">{{ page.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>
