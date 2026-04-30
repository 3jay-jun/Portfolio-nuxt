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
  <section id="contact" class="section reveal-on-scroll flex items-end justify-between gap-8 border-t border-line max-md:grid">
    <div>
      <p class="eyebrow">Contact</p>
      <h2 class="section-title max-w-[760px]">{{ message }}</h2>
    </div>
    <div class="flex flex-wrap justify-end gap-2.5 max-md:justify-start max-[520px]:w-full">
      <a
        v-for="link in links"
        :key="`${link.label}-${resolveLink(link, person)}`"
        class="button button-primary"
        :href="resolveLink(link, person)"
      >
        {{ person.email }}
      </a>
    </div>
  </section>
</template>
