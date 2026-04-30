<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number;
    statusMessage?: string;
    message?: string;
  };
}>();

const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <main class="page-shell">
    <section class="grid min-h-[80vh] content-center">
      <p class="eyebrow">Something went sideways</p>
      <h1 class="text-[clamp(64px,12vw,140px)] font-extrabold leading-none">
        {{ error.statusCode || 500 }}
      </h1>
      <p class="mt-5 max-w-[620px] text-xl font-bold leading-relaxed">
        {{ error.statusMessage || error.message || "페이지를 불러오는 중 문제가 발생했습니다." }}
      </p>
      <p class="mt-4 max-w-[620px] text-muted">
        잠시 길을 잃었지만, 홈으로 돌아가면 다시 정리된 흐름에서 시작할 수 있습니다.
      </p>
      <button class="button button-primary mt-8 w-fit" type="button" @click="handleClearError">
        Back Home
      </button>
    </section>
  </main>
</template>
