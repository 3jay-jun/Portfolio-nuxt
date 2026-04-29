<script setup lang="ts">
import type { Person, PortfolioData } from "~/types/portfolio";

const props = defineProps<{
  person: Person;
  profile: PortfolioData["profile"];
}>();

const leadParagraph = computed(() => props.profile.paragraphs[0] || "");
const supportingParagraphs = computed(() => props.profile.paragraphs.slice(1));
</script>

<template>
  <section id="profile" class="section reveal-on-scroll" aria-label="소개">
    <div class="profile-showcase">
      <div class="grid gap-10 lg:grid-cols-[370px_minmax(0,1fr)]">
        <ProfileCard :person="person" />

        <div class="grid content-center gap-8">
          <div>
            <p class="eyebrow">Profile</p>
            <h2 class="text-[clamp(34px,5vw,64px)] font-extrabold leading-[1.04] tracking-normal text-paper">
              {{ profile.title }}
            </h2>
          </div>

          <p v-if="leadParagraph" class="max-w-[760px] border-l-4 border-copper pl-6 text-xl font-bold leading-[1.75] text-paper max-md:text-lg">
            {{ leadParagraph }}
          </p>

          <div class="grid grid-cols-2 gap-3 max-lg:grid-cols-1">
            <article
              v-for="(paragraph, index) in supportingParagraphs"
              :key="paragraph"
              class="border border-white/15 bg-white/[0.06] p-5 backdrop-blur"
            >
              <span class="mb-4 block text-sm font-extrabold text-copper">{{ String(index + 2).padStart(2, "0") }}</span>
              <p class="m-0 leading-[1.85] text-paper/75">{{ paragraph }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
