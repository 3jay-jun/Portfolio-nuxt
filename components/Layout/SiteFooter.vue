<script setup lang="ts">
defineProps<{
  name: string;
}>();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="mx-auto flex w-[min(1120px,calc(100%_-_40px))] items-center justify-between py-[30px] pb-[42px] text-sm text-muted">
    <span>© 2026 {{ name }}</span>
    <button class="h-[42px] w-[42px] border border-line bg-white text-lg text-ink" type="button" aria-label="맨 위로 이동" @click="scrollToTop">
      ↑
    </button>
  </footer>
</template>
