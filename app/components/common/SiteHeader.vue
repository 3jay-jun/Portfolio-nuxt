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
    class="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-[18px]"
  >
    <div class="mx-auto flex h-16 w-[min(1136px,calc(100%_-_40px))] items-center justify-between gap-4 max-md:w-[min(1136px,calc(100%_-_28px))]">
      <a
        class="grid place-items-center bg-ink p-2 py-4 text-sm font-black text-paper"
        href="/portfolio#top"
        :aria-label="`${name} 포트폴리오 홈`"
      >
        {{ displayMark }}
      </a>
      <nav
        class="flex items-center gap-1 overflow-x-auto rounded-pill bg-chip-gray p-1 max-[520px]:max-w-[calc(100vw-96px)]"
        aria-label="주요 섹션"
      >
        <a class="nav-link" href="#profile">Profile</a>
        <a class="nav-link" href="#experience">Experience</a>
        <a class="nav-link" href="#projects">Work</a>
        <a class="nav-link" href="#skills">Skills</a>
      </nav>
    </div>
  </header>
</template>
