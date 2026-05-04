<script setup lang="ts">
import type { Person, PortfolioData, PortfolioLink } from "~/types/portfolio";

defineProps<{
  person: Person;
  hero: PortfolioData["hero"];
  links: PortfolioLink[];
}>();

const { resolveLink } = usePortfolioLinks();
</script>

<template>
  <section class="mx-auto max-w-content px-6 pb-24 pt-20">
    <div class="grid min-h-[calc(100vh-180px)] items-end gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div>
        <div class="mb-8 flex flex-wrap gap-2 [animation-delay:.08s] animate-fade-up">
          <span class="border-l-4 border-black py-1 pl-3 text-sm font-black uppercase text-black">Portfolio · {{ hero.roleMeta }} </span>
        </div>

        <h1 class="max-w-4xl text-[clamp(48px,8vw,92px)] font-black leading-[1.02] [animation-delay:.16s] animate-fade-up">
          {{ person.name }}<br />
          {{ person.jobTitle }}
        </h1>

        <p class="mt-8 max-w-3xl text-[clamp(22px,3vw,34px)] font-bold leading-[1.3] [animation-delay:.26s] animate-fade-up">
          {{ hero.headline }}
        </p>

        <p class="mt-5 max-w-[620px] text-base leading-relaxed text-body-gray [animation-delay:.36s] animate-fade-up">
          {{ hero.summary }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3 [animation-delay:.46s] animate-fade-up" aria-label="연락처 바로가기">
        <a
          v-for="link in links"
          :key="`${link.label}-${resolveLink(link, person)}`"
          class="rounded-pill px-5 py-3 text-[15px] font-medium leading-none transition hover:-translate-y-0.5"
          :class="link.primary ? 'bg-black text-white hover:bg-black/80' : 'border border-black bg-white text-black hover:bg-hover-gray'"
          :href="resolveLink(link, person)"
        >
          {{ link.label }}
        </a>
        </div>
      </div>

      <aside class="rounded-featured bg-white p-7 shadow-card [animation-delay:.56s] animate-fade-up" aria-label="핵심 역량 요약">
        <div>
          <p class="mb-4 text-sm font-medium text-body-gray">{{ hero.capabilityPanel.eyebrow }}</p>
          <strong class="block text-[40px] font-black leading-none text-black">
            <span v-for="line in hero.capabilityPanel.title" :key="line" class="block">{{ line }}</span>
          </strong>
        </div>

        <hr class="my-7 border-black" />

        <div class="grid gap-2">
          <div
            v-for="(signal, index) in hero.capabilityPanel.signals"
            :key="`${signal.label}-${signal.value}`"
            class="flex items-center justify-between gap-4 rounded-pill bg-chip-gray px-4 py-3"
            :style="{ '--signal-delay': `${520 + index * 120}ms` }"
          >
            <span class="text-xs font-medium text-body-gray">{{ signal.label }}</span>
            <strong class="text-right text-sm font-bold">{{ signal.value }}</strong>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
