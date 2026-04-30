<script setup lang="ts">
const route = useRoute();

await usePageSeo(String(route.meta.pageId || ""));
</script>

<template>
  <slot />
</template>
