<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    variant?: "primary" | "secondary" | "light";
    target?: string;
    rel?: string;
    external?: boolean;
  }>(),
  {
    variant: "primary",
    external: false,
  },
);

const linkClasses = computed(() => [
  "rounded-pill px-4 py-2 text-sm font-medium leading-none transition hover:-translate-y-0.5",
  {
    "bg-black text-white hover:bg-black/80": props.variant === "primary",
    "border border-black bg-white text-black hover:bg-hover-gray": props.variant === "secondary",
    "bg-white text-black hover:bg-hover-gray": props.variant === "light",
  },
]);
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="rel"
    :class="linkClasses"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :to="to || '/'"
    :target="target"
    :rel="rel"
    :external="external"
    :class="linkClasses"
  >
    <slot />
  </NuxtLink>
</template>
