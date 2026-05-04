<script setup lang="ts">
defineProps<{
  name: string;
}>();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="bg-black">
    <div class="mx-auto flex w-[min(1136px,calc(100%_-_40px))] items-center justify-between py-8 text-sm text-muted-gray">
      <span class="font-medium">© 2026 {{ name }}</span>
      <button class="h-11 w-11 rounded-full bg-white text-lg text-ink shadow-floating transition hover:bg-hover-light" type="button" aria-label="맨 위로 이동" @click="scrollToTop">
      ↑
      </button>
    </div>
  </footer>
</template>
