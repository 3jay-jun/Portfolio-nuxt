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
const featuredPage = computed(() => visiblePages.value[0]);
const secondaryPages = computed(() => visiblePages.value.slice(1));

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
    <nav class="sticky top-0 z-40 border-b border-black/10 bg-white animate-fade-up">
      <div class="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-6">
        <NuxtLink to="/" class="text-base font-black">
          3Jay Workspace
        </NuxtLink>

        <div class="hidden items-center gap-1 sm:flex">
          <a href="#services" class="rounded-pill px-4 py-2 text-sm font-medium hover:bg-chip-gray">Services</a>
          <a href="#system" class="rounded-pill px-4 py-2 text-sm font-medium hover:bg-chip-gray">System</a>
          <a href="#contact" class="rounded-pill px-4 py-2 text-sm font-medium hover:bg-chip-gray">Contact</a>
        </div>

        <NuxtLink
          to="/portfolio"
          class="rounded-pill bg-black px-4 py-2 text-sm font-medium leading-none text-white transition hover:bg-black/80"
        >
          Portfolio
        </NuxtLink>
      </div>
    </nav>

    <section class="mx-auto max-w-content px-6 pb-24 pt-20">
      <div class="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex-1">
          <div class="mb-8 flex flex-wrap gap-2 [animation-delay:.08s] animate-fade-up">
            <span class="rounded-pill bg-black px-4 py-2 text-sm font-medium text-white">Portfolio</span>
            <span class="rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">Blog</span>
            <span class="rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">Tools</span>
          </div>

          <h1 class="max-w-3xl text-[clamp(42px,7vw,72px)] font-black leading-[1.08] [animation-delay:.15s] animate-fade-up">
            일과 기록,<br />
            작은 도구를<br />
            하나의 공간에.
          </h1>

          <p class="mt-6 max-w-[440px] text-base font-normal leading-relaxed text-body-gray [animation-delay:.25s] animate-fade-up">
            포트폴리오를 시작으로 블로그, 메모장, 팀 나누기 같은 개인 서비스를 확장해가는 워크스페이스입니다.
          </p>

          <div class="mt-10 flex flex-wrap gap-3 [animation-delay:.38s] animate-fade-up">
            <a
              href="#services"
              class="rounded-pill bg-black px-5 py-3 text-[15px] font-medium leading-none text-white transition hover:-translate-y-0.5 hover:bg-black/80"
            >
              서비스 보기
            </a>
            <NuxtLink
              to="/portfolio"
              class="rounded-pill border border-black bg-white px-5 py-3 text-[15px] font-medium leading-none text-black transition hover:-translate-y-0.5 hover:bg-hover-gray"
            >
              포트폴리오로 이동
            </NuxtLink>
          </div>
        </div>

        <aside class="w-full [animation-delay:.5s] animate-fade-up lg:w-72">
          <div class="rounded-featured bg-white p-7 shadow-card">
            <div>
              <div class="text-[40px] font-black leading-none">{{ visiblePages.length }}</div>
              <div class="mt-1 text-sm font-medium text-body-gray">Services Indexed</div>
            </div>
            <hr class="my-6 border-black" />
            <div>
              <div class="text-[40px] font-black leading-none">{{ liveCount }}</div>
              <div class="mt-1 text-sm font-medium text-body-gray">Live Pages</div>
            </div>
            <hr class="my-6 border-black" />
            <div>
              <div class="text-[40px] font-black leading-none">{{ plannedCount }}</div>
              <div class="mt-1 text-sm font-medium text-body-gray">Planned Tools</div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <hr class="mx-6 border-black" />

    <div class="overflow-hidden bg-white py-5">
      <div class="flex w-max animate-ticker hover:[animation-play-state:paused]">
        <span
          v-for="copy in 4"
          :key="copy"
          class="px-8 text-sm font-bold text-muted-gray"
        >
          · WEB DEVELOPMENT · PORTFOLIO · TECH BLOG · ONLINE MEMO · TEAM BUILDER · API READY · OCI DEPLOY ·
        </span>
      </div>
    </div>

    <hr class="border-black" />

    <section id="services" class="mx-auto max-w-content px-6 py-24">
      <div class="mb-12 flex items-end justify-between gap-6">
        <div>
<!--          <span class="mb-3 inline-flex rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">Services</span>-->
          <h2 class="text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.15]">
            Services
          </h2>
        </div>
        <span class="hidden text-sm font-medium text-body-gray sm:inline">
          {{ externalCount }} external link
        </span>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <NuxtLink
          v-if="featuredPage"
          :to="featuredPage.path"
          class="group overflow-hidden rounded-featured bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover md:col-span-2"
          :target="featuredPage.openMode === 'blank' ? '_blank' : undefined"
          :rel="featuredPage.openMode === 'blank' ? 'noreferrer' : undefined"
          :external="featuredPage.openMode === 'blank'"
        >
          <figure class="flex aspect-video items-center justify-center overflow-hidden bg-black">
            <img
              v-if="featuredPage.seo.image"
              :src="featuredPage.seo.image"
              :alt="`${featuredPage.title} thumbnail`"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
          <div class="flex flex-col gap-5 p-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div class="mb-3 flex flex-wrap gap-2">
                <span class="rounded-pill bg-black px-4 py-2 text-sm font-medium text-white">{{ featuredPage.status }}</span>
                <span class="rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">{{ featuredPage.metric }}</span>
              </div>
              <h3 class="text-2xl font-bold leading-tight">{{ featuredPage.title }}</h3>
              <p class="mt-2 max-w-[520px] text-[15px] leading-relaxed text-body-gray">
                {{ featuredPage.description }}
              </p>
            </div>
            <span class="shrink-0 rounded-pill bg-black px-5 py-3 text-[15px] font-medium leading-none text-white">
              열기
            </span>
          </div>
        </NuxtLink>

        <NuxtLink
          v-for="page in secondaryPages"
          :key="page.id"
          :to="page.path"
          class="group overflow-hidden rounded-featured bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
          :class="{ 'opacity-75': page.status === 'Soon' }"
          :target="page.openMode === 'blank' ? '_blank' : undefined"
          :rel="page.openMode === 'blank' ? 'noreferrer' : undefined"
          :external="page.openMode === 'blank'"
        >
          <figure class="flex aspect-video items-center justify-center overflow-hidden bg-chip-gray">
            <img
              v-if="page.seo.image"
              :src="page.seo.image"
              :alt="`${page.title} thumbnail`"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
          <div class="p-6">
            <div class="mb-3 flex flex-wrap gap-2">
              <span class="rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">{{ page.status }}</span>
              <span class="rounded-pill bg-chip-gray px-4 py-2 text-sm font-medium">{{ page.metric }}</span>
            </div>
            <h3 class="text-xl font-bold leading-snug">{{ page.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-body-gray">
              {{ page.description }}
            </p>
            <span class="mt-5 inline-flex text-sm font-medium underline underline-offset-4">
              보기
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

<!--    <hr class="border-black" />-->

    <section id="contact" class="bg-black">
      <div class="mx-auto flex max-w-content flex-col gap-12 px-6 py-24 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span class="mb-4 inline-flex rounded-pill bg-white/10 px-4 py-2 text-sm font-medium text-white">Contact</span>
          <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08] text-white">
            다음 서비스도<br />
            차근차근 확장합니다.
          </h2>
          <p class="mt-5 max-w-[460px] text-base leading-relaxed text-muted-gray">
            포트폴리오를 중심으로 블로그와 도구형 페이지를 연결하고, 추후 API 서버와 인증 흐름까지 자연스럽게 붙일 예정입니다.
          </p>
        </div>

        <NuxtLink
          to="/portfolio"
          class="rounded-pill bg-white px-5 py-3 text-[15px] font-medium leading-none text-black transition hover:bg-hover-gray"
        >
          포트폴리오 보기
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
