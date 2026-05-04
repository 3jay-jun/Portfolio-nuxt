<script setup lang="ts">
defineProps<{
  stats: Array<{
    value: string | number;
    label: string;
  }>;
}>();
</script>

<template>
  <section class="mx-auto max-w-content px-6 pb-24 pt-20">
    <div class="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
      <div class="flex-1">
        <div class="mb-8 flex flex-wrap gap-2 [animation-delay:.08s] animate-fade-up">
          <AppPill tone="black">Portfolio</AppPill>
          <AppPill>Blog</AppPill>
          <AppPill>Tools</AppPill>
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
          <AppActionLink href="#services">Services More</AppActionLink>
          <AppActionLink to="/portfolio" variant="secondary">Portfolio</AppActionLink>
        </div>
      </div>

      <aside class="w-full [animation-delay:.5s] animate-fade-up lg:w-72">
        <MetricStack :items="stats" />
      </aside>
    </div>
  </section>
</template>
