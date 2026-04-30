<script setup lang="ts">
import type { Person, PortfolioData } from "~/types/portfolio";

defineProps<{
  person: Person;
  profile: PortfolioData["profile"];
}>();
</script>

<template>
  <section id="profile" class="section reveal-on-scroll" aria-label="소개">
    <div class="section-heading">
      <p class="eyebrow">Profile</p>
      <h2 class="section-title">{{ profile.title }}</h2>
    </div>

    <div class="profile-showcase">
      <ProfileCard :person="person" />

      <div class="grid gap-4">
        <article
          v-for="(paragraph, index) in profile.paragraphs"
          :key="paragraph"
          class="profile-story"
        >
          <span class="profile-story-index">{{ String(index + 1).padStart(2, "0") }}</span>
          <p>{{ paragraph }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
