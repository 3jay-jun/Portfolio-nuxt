<script setup lang="ts">
const route = useRoute();
const pageId = String(route.meta.pageId || route.path.split("/").filter(Boolean)[0] || "");

await usePageSeo(pageId);
</script>

<template>
  <slot />
</template>
