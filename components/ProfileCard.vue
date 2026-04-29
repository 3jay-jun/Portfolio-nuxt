<script setup lang="ts">
import type { Person } from "~/types/portfolio";

const props = defineProps<{
  person: Person;
}>();

const personalRows = computed(() => [
  ["BirthYear", props.person.birthYear],
  ["Age", props.person.age],
  ["Career", props.person.careerLabel],
  ["Location", props.person.location],
]);
</script>

<template>
  <aside class="profile-card" aria-label="인적정보">
    <div class="grid gap-5">
      <div class="grid grid-cols-[128px_minmax(0,1fr)] gap-5 max-sm:grid-cols-1">
        <div class="aspect-[4/5] overflow-hidden border border-line bg-soft">
          <img class="block h-full w-full object-cover" :src="person.photo" :alt="`${person.name} 프로필 사진`" />
        </div>
        <div class="flex min-w-0 flex-col justify-between gap-5">
          <div>
            <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.08em] text-copper">Personal</p>
            <strong class="block text-[34px] font-extrabold leading-none text-ink">{{ person.name }}</strong>
            <span class="mt-3 inline-block border-l-2 border-forest pl-3 text-sm font-extrabold text-forest">
              {{ person.jobTitle }}
            </span>
          </div>
          <div class="grid gap-2 text-sm">
            <a class="profile-contact" :href="`mailto:${person.email}`">{{ person.email }}</a>
            <a class="profile-contact" :href="`tel:${person.phone.replaceAll('-', '')}`">{{ person.phone }}</a>
          </div>
        </div>
      </div>

      <dl class="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line max-sm:grid-cols-1">
        <div v-for="[label, value] in personalRows" :key="label" class="bg-white/90 p-4">
          <dt class="mb-1 text-[12px] font-extrabold text-muted">{{ label }}</dt>
          <dd class="m-0 break-keep text-[15px] font-extrabold text-ink">{{ value }}</dd>
        </div>
      </dl>
    </div>
  </aside>
</template>
