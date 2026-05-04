<template>
  <section id="contact" class="bg-black">
    <div class="mx-auto flex max-w-content flex-col gap-12 px-6 py-24 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <AppPill class="mb-4" tone="dark">Contact</AppPill>
        <h2 class="text-[clamp(32px,5vw,56px)] font-black leading-[1.08] text-white">
          다음 서비스도<br />
          차근차근 확장합니다.
        </h2>
        <p class="mt-5 max-w-[460px] text-base leading-relaxed text-muted-gray">
          포트폴리오를 중심으로 블로그와 도구형 페이지를 연결하고, 추후 API 서버와 인증 흐름까지 자연스럽게 붙일 예정입니다.
        </p>
      </div>

      <AppActionLink to="/portfolio" variant="light">
        포트폴리오 보기
      </AppActionLink>
    </div>
  </section>
</template>
