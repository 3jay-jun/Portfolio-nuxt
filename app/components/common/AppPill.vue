<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tone?: "black" | "gray" | "dark";
    size?: "sm" | "md";
    weight?: "medium" | "bold" | "black";
    as?: string;
    uppercase?: boolean;
  }>(),
  {
    tone: "gray",
    size: "sm",
    weight: "black",
    as: "span",
    uppercase: true,
  },
);

const pillClasses = computed(() => [
  "inline-flex items-center leading-none",
  {
    "border-black text-black": props.tone === "black",
    "border-black/30 text-body-gray": props.tone === "gray",
    "border-white text-white": props.tone === "dark",
    "py-1 px-1 text-[12px]": props.size === "sm",
    "py-1.5 px-2 text-sm": props.size === "md",
    "font-medium": props.weight === "medium",
    "font-bold": props.weight === "bold",
    "font-black": props.weight === "black",
    "uppercase": props.uppercase,
  },
]);
</script>

<template>
  <component :is="as" :class="pillClasses">
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </component>
</template>
