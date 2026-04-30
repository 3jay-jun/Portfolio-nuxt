<script setup lang="ts">
const props = defineProps<{
  name: string;
  brandMark?: string;
}>();

const fallbackMark = computed(() =>
  props.name
    .split("")
    .filter((letter) => /[a-zA-Z가-힣]/.test(letter))
    .slice(-2)
    .join(""),
);

const displayMark = computed(() => props.brandMark || fallbackMark.value);
</script>

<template>
  <header
    class="sticky top-0 z-10 mx-auto flex w-full items-center justify-between px-12 py-[18px] backdrop-blur-[18px] max-md:w-[min(1120px,calc(100%_-_28px))] max-md:px-0 max-[520px]:static max-[520px]:items-start"
  >
    <a
      class="grid h-12 min-w-12 place-items-center border border-ink bg-ink px-2 text-sm font-extrabold text-paper"
      href="#top"
      :aria-label="`${name} 포트폴리오 홈`"
    >
      {{ displayMark }}
    </a>
    <nav
      class="flex items-center gap-2 border border-ink/10 bg-white/70 p-1.5 max-md:gap-0 max-[520px]:grid max-[520px]:grid-cols-2"
      aria-label="주요 섹션"
    >
      <a class="nav-link" href="#profile">Profile</a>
      <a class="nav-link" href="#experience">Experience</a>
      <a class="nav-link" href="#projects">Work</a>
      <a class="nav-link" href="#skills">Skills</a>
    </nav>
  </header>
</template>
