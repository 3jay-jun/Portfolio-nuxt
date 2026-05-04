<script setup lang="ts">
import type { Person } from "~/types/portfolio";

const props = defineProps<{
  person: Person;
}>();


const calculatedAge = computed(() => {
  const normalizedBirth = props.person.birthYear.replaceAll(".", "-");
  const birthDate = new Date(normalizedBirth);

  if (Number.isNaN(birthDate.getTime())) {
    return props.person.age;
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return `${age}`;
});

const calculatedCareer = computed(() => {
  if (!props.person.careerStart) {
    return props.person.careerLabel;
  }

  const [startYear, startMonth] = props.person.careerStart.split('.').map(Number);
  const startDate = new Date(startYear, startMonth - 1);
  const today = new Date();

  if (Number.isNaN(startDate.getTime())) {
    return props.person.careerLabel;
  }

  const diffMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
  const totalMonths = diffMonths + 1;

  const careerYear = Math.ceil(totalMonths / 12);
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  let durationText = '';
  if (displayYears > 0) durationText += `${displayYears}년 `;
  if (displayMonths > 0) durationText += `${displayMonths}개월`;
  if (displayYears === 0 && displayMonths === 0) durationText = '1개월 미만';

  return `${careerYear}년차 (${durationText.trim()})`;
});

const personalRows = computed(() => [
  ["Email", props.person.email],
  ["Phone", props.person.phone],
  ["Birth", props.person.birthYear],
  ["Age", calculatedAge.value],
  ["Career", calculatedCareer.value],
  ["Location", props.person.location],
]);

const careerText = computed(() => personalRows.value.find(([label]) => label === "Career")?.[1] || props.person.careerLabel);

const cardClick = (label: string, value: string) => {
  if(label !== 'Email' && label !== 'Phone') return;

  if (label === 'Email') window.location.href = `mailto:${value}`
  if (label === 'Phone') window.location.href = `tel:${value.replaceAll('-', '')}`
}

</script>

<template>
  <section id="profile" class="mx-auto max-w-content px-6 py-24 reveal-on-scroll" aria-label="Profile">

    <div class="mb-12 flex items-end justify-between gap-6">
      <div>
        <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08]">Profile</h2>
      </div>
    </div>

    <div class="grid gap-6">
      <aside class="overflow-hidden rounded-featured bg-white shadow-card" aria-label="Personal Info">
        <div class="grid gap-4 p-4 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <figure class="aspect-[4/5] overflow-hidden rounded-card bg-chip-gray">
              <img class="block h-full w-full object-cover" :src="person.photo" :alt="`${person.name} 프로필 사진`" />
            </figure>
          </div>

          <div class="flex min-w-0 flex-col justify-between rounded-card bg-white p-6 sm:p-8">
            <div class="max-w-3xl">
              <AppPill class="mb-5" tone="black" size="md">Personal Info</AppPill>
              <h3 class="text-[clamp(42px,7vw,76px)] font-black leading-[1.02]">{{ person.name }}</h3>
              <p class="mt-4 max-w-[520px] text-base leading-relaxed text-body-gray">
                {{ person.jobTitle }} · {{ careerText }} · {{ person.location }}
              </p>
              <p class="mt-8 max-w-3xl text-md leading-[1.75] text-black">
                {{ person.summary }}
              </p>
            </div>
          </div>
        </div>

        <dl class="grid gap-4 p-4 pt-0 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="[label, value] in personalRows"
            :key="label"
            class="rounded-card bg-white p-5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] transition"
            :class="label === 'Email' || label === 'Phone' ? 'cursor-pointer hover:bg-hover-light' : ''"
            @click="cardClick(label, value)"
          >
            <dt class="mb-2 text-xs font-medium text-body-gray">{{ label }}</dt>
            <dd class="m-0 break-all text-[17px] font-bold text-black">{{ value }}</dd>
          </div>
        </dl>
      </aside>

    </div>
  </section>
</template>
