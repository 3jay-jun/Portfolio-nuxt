<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>

<span class="inline-flex items-center rounded-pill bg-chip-gray px-3 py-1.5 text-[12px] font-medium text-ink">
  # {{ label }}
</span>
<!--<span class="inline-flex items-center gap-2 rounded border border-line bg-white px-2 py-1 text-[12px] font-bold text-ink shadow-sm">
  <span class="flex h-4 w-4 items-center justify-center rounded-sm bg-forest text-[10px] text-white">
    {{ label[0] }}
  </span>
  {{ label }}
</span>-->

</template>
