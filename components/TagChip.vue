<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <span class="inline-flex items-center gap-2 border border-l-4 border-line border-l-forest bg-white px-3 py-1.5 text-[13px] font-extrabold text-ink">
    <span class="h-1.5 w-1.5 bg-copper" aria-hidden="true"></span>
    {{ label }}
  </span>
</template>
