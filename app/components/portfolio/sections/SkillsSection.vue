<script setup lang="ts">
import type { SkillGroup } from "~/types/portfolio";

defineProps<{
  skills: SkillGroup[];
}>();
</script>

<template>
  <section id="skills" class="section reveal-on-scroll">
    <div class="section-heading">
      <p class="eyebrow">Skills</p>
      <h2 class="section-title">기술 스택</h2>
    </div>
    <div class="panel-grid grid grid-cols-3 max-md:grid-cols-1">
      <div v-for="skill in skills" :key="skill.group" class="min-h-[170px] bg-white/80 p-6">
        <h3 class="mb-2.5 text-[17px] font-extrabold text-forest">{{ skill.group }}</h3>
        <p class="m-0 text-muted">{{ skill.items.join(", ") }}</p>
      </div>
    </div>
  </section>
</template>
