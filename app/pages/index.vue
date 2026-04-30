<script setup lang="ts">
import type {Page} from "~/types/page";
import {defaultPages} from "~/data/defaultPages";

const { data: pages } = await useAsyncData("pages", () =>
        appFetch<Page[]>("/api/pages"),
    {
      default: () => defaultPages,
    },
);


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
  <main class="page-shell">
    <section class="grid min-h-[calc(100vh-120px)] content-center gap-10">
      <div>
        <p class="eyebrow">3Jay Workspace</p>
        <h1 class="max-w-[760px] text-[clamp(48px,8vw,96px)] font-extrabold leading-none">
          Work, notes, and small tools.
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-muted w-full">
          포트폴리오를 시작으로 블로그, 메모장, 팀 나누기 같은 작은 도구들을 하나씩 확장해가는 개인 웹사이트입니다.
        </p>
      </div>

      <div class="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <NuxtLink
          v-for="page in pages"
          :key="page.path"
          :to="page.path"
          class="preview-card"
          :class="{ 'is-disabled': page.status === 'Soon' }"
        >
          <div class="flex items-start justify-between gap-4">
            <span class="text-xs font-extrabold uppercase tracking-[0.12em] text-copper">{{ page.status }}</span>
            <span class="text-sm font-extrabold text-forest">{{ page.metric }}</span>
          </div>
          <h2 class="mt-10 text-2xl font-extrabold">{{ page.title }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ page.description }}</p>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
