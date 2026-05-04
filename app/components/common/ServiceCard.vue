<script setup lang="ts">
import type { Page } from "~/types/page";

const props = withDefaults(
  defineProps<{
    page: Page;
    featured?: boolean;
  }>(),
  {
    featured: false,
  },
);

const linkTarget = computed(() => props.page.openMode === "blank" ? props.page.externalUrl || props.page.path : props.page.path);
const isExternal = computed(() => props.page.openMode === "blank");
</script>

<template>
  <NuxtLink
    :to="linkTarget"
    class="group overflow-hidden rounded-featured bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
    :class="[
      { 'md:col-span-2': featured },
      { 'opacity-75': page.status === 'Soon' },
    ]"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noreferrer' : undefined"
    :external="isExternal"
  >
    <div
      class="relative aspect-video overflow-hidden"
      :class="featured ? 'bg-black' : 'bg-chip-gray'"
    >
      <iframe
        :src="page.path"
        :title="`${page.title} preview`"
        class="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25] border-0 bg-white transition duration-300 group-hover:scale-[0.255]"
        loading="lazy"
        scrolling="no"
        tabindex="-1"
      />
      <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"></div>
    </div>

    <div
      :class="featured ? 'flex flex-col gap-5 p-8 sm:flex-row sm:items-end sm:justify-between' : 'p-6'"
    >
      <div>
        <div class="mb-3 flex flex-wrap gap-2">
          <AppPill :tone="featured ? 'black' : 'gray'">{{ page.status }}</AppPill>
        </div>
        <h3 :class="featured ? 'text-2xl' : 'text-xl'" class="font-bold leading-tight">
          {{ page.title }}
        </h3>
        <p
          class="mt-2 leading-relaxed text-body-gray"
          :class="featured ? 'max-w-[520px] text-[15px]' : 'text-sm'"
        >
          {{ page.description }}
        </p>
      </div>

      <span
        v-if="featured"
        class="shrink-0 rounded-pill bg-black px-5 py-3 text-[15px] font-medium leading-none text-white"
      >
        Open
      </span>
      <span v-else class="mt-5 inline-flex text-sm font-medium underline underline-offset-4">
        View
      </span>
    </div>
  </NuxtLink>
</template>
