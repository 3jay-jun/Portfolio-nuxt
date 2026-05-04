<script setup lang="ts">
defineProps<{
  items: Array<{
    value: string | number;
    label: string;
  }>;
}>();
</script>

<template>
  <div class="rounded-featured bg-white p-7 shadow-card">
    <template v-for="(item, index) in items" :key="item.label">
      <div>
        <div class="text-[40px] font-black leading-none">{{ item.value }}</div>
        <div class="mt-1 text-sm font-medium text-body-gray">{{ item.label }}</div>
      </div>
      <hr v-if="index < items.length - 1" class="my-6 border-black" />
    </template>
  </div>
</template>
