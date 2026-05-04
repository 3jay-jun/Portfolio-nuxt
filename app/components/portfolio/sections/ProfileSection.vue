<script setup lang="ts">
import type { Person, PortfolioData } from "~/types/portfolio";

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

const calculatedCareer = computed(()=> {
  const [startYear, startMonth] = props.person.careerStart.split('.').map(Number);
  const startDate = new Date(startYear, startMonth - 1);
  const today = new Date();

  let diffMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());

  const totalMonths = diffMonths + 1;

  const careerYear = Math.ceil(totalMonths / 12);
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  let durationText = '';
  if (displayYears > 0) durationText += `${displayYears}년 `;
  if (displayMonths > 0) durationText += `${displayMonths}개월`;
  if (displayYears === 0 && displayMonths === 0) durationText = '1개월 미만';

  return `${careerYear}년차 (${durationText.trim()})`;
})

const personalRows = computed(() => [
  ["Email", props.person.email],
  ["Phone", props.person.phone],
  ["Birth", props.person.birthYear],
  ["Age", calculatedAge.value],
  ["Career", calculatedCareer.value],
  ["Location", props.person.location],
]);


const cardClick = (label:string, value:string) => {
  if(label !== 'Email' && label !== 'Phone') return;

  if (label === 'Email') window.location.href = `mailto:${value}`
  if (label === 'Phone') window.location.href = `tel:${value.replaceAll('-', '')}`
}

</script>

<template>
  <section id="profile" class="mx-auto max-w-content px-6 py-24 reveal-on-scroll" aria-label="소개">

    <div class="mb-12 flex items-end justify-between gap-6">
      <div>
        <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08]">Profile</h2>
      </div>
    </div>

    <div class="grid gap-6">
      <aside class="overflow-hidden rounded-featured bg-white shadow-card" aria-label="Personal Info">
        <div class="grid gap-4 sm:grid-cols-[260px_minmax(0,1fr)]">
          <div class="bg-white p-4">
            <figure class="aspect-[4/5] overflow-hidden rounded-card bg-chip-gray">
              <img class="block h-full w-full object-cover" :src="person.photo" :alt="`${person.name} 프로필 사진`" />
            </figure>
          </div>

          <div class="flex min-w-0 flex-col justify-between bg-white p-6 sm:p-8">
            <div>
              <h3 class="text-[clamp(38px,7vw,72px)] font-black leading-[1.02]">{{ person.name }}</h3>
              <p class="mt-4 max-w-[520px] text-base leading-relaxed text-body-gray">
                {{ person.jobTitle }} · {{ person.careerLabel }} · {{ person.location }}
              </p>

              <p class="mt-5 text-base leading-[1.9] text-body-gray">{{ person.summary }}</p>
            </div>
          </div>
        </div>

        <dl class="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
          <div v-for="[label, value] in personalRows" :key="label" class="rounded-card bg-chip-gray p-5" :class="label === 'Email' || label === 'Phone' ? 'cursor-pointer' : ''" @click="cardClick(label, value)">
            <dt class="mb-2 text-xs font-medium text-body-gray">{{ label }}</dt>
            <dd class="m-0 break-all text-[17px] font-bold text-black">{{ value }}</dd>
          </div>
        </dl>
      </aside>

    </div>
  </section>
</template>
