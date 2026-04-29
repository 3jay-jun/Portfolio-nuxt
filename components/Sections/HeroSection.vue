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
  <section class="section grid min-h-[calc(100vh-78px)] grid-cols-[minmax(0,1fr)_410px] items-center gap-14 pt-[76px] max-lg:grid-cols-1 max-md:min-h-0 max-md:gap-8 max-md:pt-16">
    <div class="hero-copy">
      <p class="eyebrow hero-kicker">{{ hero.roleMeta }}</p>
      <h1 class="hero-title mb-5 text-[clamp(64px,12vw,142px)] font-extrabold leading-[0.9] tracking-normal max-md:text-[clamp(58px,20vw,92px)]">
        {{ person.name }}
      </h1>
      <p class="hero-headline mb-[18px] max-w-[760px] text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.18] max-md:text-[28px]">
        {{ hero.headline }}
      </p>
      <p class="hero-summary max-w-[720px] text-lg leading-relaxed text-muted">
        {{ hero.summary }}
      </p>
      <div class="hero-actions mt-8 flex flex-wrap gap-2.5 max-[520px]:w-full" aria-label="연락처 바로가기">
        <a
          v-for="link in links"
          :key="`${link.label}-${resolveLink(link, person)}`"
          class="button"
          :class="link.primary ? 'button-primary' : 'button-secondary'"
          :href="resolveLink(link, person)"
        >
          {{ link.label }}
        </a>
      </div>
    </div>

    <aside class="hero-visual" aria-label="핵심 역량 요약">
      <div class="hero-visual-grid" aria-hidden="true"></div>
      <div class="hero-orbit" aria-hidden="true">
        <span></span>
      </div>
      <div class="hero-pulse" aria-hidden="true"></div>
      <div class="relative z-[1] grid gap-6">
        <div>
          <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-copper">
            {{ hero.capabilityPanel.eyebrow }}
          </p>
          <strong class="block text-[44px] font-extrabold leading-none text-ink">
            <span v-for="line in hero.capabilityPanel.title" :key="line" class="block">{{ line }}</span>
          </strong>
        </div>
        <div class="grid gap-3">
          <div
            v-for="(signal, index) in hero.capabilityPanel.signals"
            :key="`${signal.label}-${signal.value}`"
            class="hero-signal"
            :style="{ '--signal-delay': `${520 + index * 120}ms` }"
          >
            <span>{{ signal.label }}</span>
            <strong>{{ signal.value }}</strong>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>
