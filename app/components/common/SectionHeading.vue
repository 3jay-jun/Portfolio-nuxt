<script setup lang="ts">
defineProps<{
  title: string;
  eyebrow?: string;
  meta?: string;
  dark?: boolean;
}>();
</script>

<template>
  <div class="mb-12 flex items-end justify-between gap-6">
    <div>
      <AppPill v-if="eyebrow" class="mb-4" :tone="dark ? 'dark' : 'gray'">
        {{ eyebrow }}
      </AppPill>
      <h2
        class="text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.15]"
        :class="dark ? 'text-white' : 'text-black'"
      >
        {{ title }}
      </h2>
    </div>
    <span
      v-if="meta"
      class="hidden text-sm font-medium sm:inline"
      :class="dark ? 'text-muted-gray' : 'text-body-gray'"
    >
      {{ meta }}
    </span>
  </div>
</template>
