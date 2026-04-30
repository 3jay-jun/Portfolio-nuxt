<script setup lang="ts">
import type { Person } from "~/types/portfolio";

const props = defineProps<{
  person: Person;
}>();

const personalRows = computed(() => [
  ["Birth", props.person.birthYear],
  ["Age", props.person.age],
  ["Career", props.person.careerLabel],
  ["Location", props.person.location],
]);
</script>

<template>
  <aside class="profile-card" aria-label="인적정보">
    <div class="profile-card-main">
      <div class="profile-photo-frame">
        <img class="block h-full w-full object-cover" :src="person.photo" :alt="`${person.name} 프로필 사진`" />
      </div>

      <div class="min-w-0">
        <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-copper">Personal Info</p>
        <strong class="block text-[36px] font-extrabold leading-none text-ink">{{ person.name }}</strong>
        <span class="mt-4 inline-flex border-l-2 border-forest pl-3 text-sm font-extrabold text-forest">
          {{ person.jobTitle }}
        </span>
      </div>
    </div>

    <div class="profile-contact-list">
      <a class="profile-contact" :href="`mailto:${person.email}`">{{ person.email }}</a>
      <a class="profile-contact" :href="`tel:${person.phone.replaceAll('-', '')}`">{{ person.phone }}</a>
    </div>

    <dl class="profile-info-grid">
      <div v-for="[label, value] in personalRows" :key="label">
        <dt>{{ label }}</dt>
        <dd>{{ value }}</dd>
      </div>
    </dl>
  </aside>
</template>
