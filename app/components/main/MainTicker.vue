<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    repeat?: number;
  }>(),
  {
    text: "· WEB DEVELOPMENT · PORTFOLIO · TECH BLOG · ONLINE MEMO · TEAM BUILDER · API READY · OCI DEPLOY ·",
    repeat: 4,
  },
);
</script>

<template>
  <div class="overflow-hidden bg-white py-5">
    <div class="flex w-max animate-ticker hover:[animation-play-state:paused]">
      <span
        v-for="copy in repeat"
        :key="copy"
        class="px-8 text-sm font-bold text-muted-gray"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>
