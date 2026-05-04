<script setup lang="ts">
import type { Person, PortfolioLink } from "~/types/portfolio";

defineProps<{
  person: Person;
  message: string;
  links: PortfolioLink[];
}>();

const { resolveLink } = usePortfolioLinks();
</script>

<template>
  <section id="contact" class="bg-black reveal-on-scroll">
    <div class="mx-auto flex max-w-content flex-col gap-12 px-6 py-24 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span class="mb-4 inline-flex rounded-pill bg-white/10 px-4 py-2 text-sm font-medium text-white">Contact</span>
        <h2 class="max-w-3xl text-[clamp(32px,5vw,56px)] font-black leading-[1.08] text-white">
          {{ message }}
        </h2>
        <p class="mt-5 max-w-[520px] text-base leading-relaxed text-muted-gray">
          운영과 구축, 모든 분야에서 열심히 하겠습니다. 편하게 연락주세요.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          v-for="link in links"
          :key="`${link.label}-${resolveLink(link, person)}`"
          class="rounded-pill bg-white px-5 py-3 text-[15px] font-medium leading-none text-black transition hover:bg-hover-gray"
          :href="resolveLink(link, person)"
        >
          {{ person.email }}
        </a>
        <a
          class="rounded-pill border border-white/20 px-5 py-3 text-[15px] font-medium leading-none text-white transition hover:bg-white/10"
          :href="`tel:${person.phone.replaceAll('-', '')}`"
        >
          {{ person.phone }}
        </a>
      </div>
    </div>
  </section>
</template>
