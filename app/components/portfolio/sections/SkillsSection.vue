<script setup lang="ts">
import type { SkillGroup } from "~/types/portfolio";

defineProps<{
  skills: SkillGroup[];
}>();
</script>

<template>
  <section id="skills" class="mx-auto max-w-content px-6 py-24 reveal-on-scroll">
    <div class="mb-12 flex items-end justify-between gap-6">
      <div>
        <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08]">Tech Stack</h2>
      </div>
    </div>

    <div class="grid gap-1 bg-opacity-100 overflow-hidden rounded-featured  shadow-card md:grid-cols-2 lg:grid-cols-3 border-none">
      <div v-for="skill in skills" :key="skill.group" class="min-h-[190px] bg-white p-6">
        <h3 class="mb-5 text-2xl font-black leading-tight">{{ skill.group }}</h3>
        <div class="flex flex-wrap gap-2">
          <TagChip v-for="item in skill.items" :key="`${skill.group}-${item}`" :label="item" />
        </div>
      </div>
    </div>
  </section>
</template>
