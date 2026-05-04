<template>
  <nav class="sticky top-0 z-40 border-b border-black/10 bg-white animate-fade-up">
    <div class="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-6">
      <NuxtLink to="/" class="text-base font-black">
        3Jay Workspace
      </NuxtLink>

      <div class="hidden items-center gap-1 sm:flex">
        <a href="#services" class="rounded-pill px-4 py-2 text-sm font-medium hover:bg-chip-gray">Services</a>
        <a href="#system" class="rounded-pill px-4 py-2 text-sm font-medium hover:bg-chip-gray">System</a>
        <a href="#contact" class="rounded-pill px-4 py-2 text-sm font-medium hover:bg-chip-gray">Contact</a>
      </div>

      <NuxtLink
        to="/portfolio"
        class="rounded-pill bg-black px-4 py-2 text-sm font-medium leading-none text-white transition hover:bg-black/80"
      >
        Portfolio
      </NuxtLink>
    </div>
  </nav>
</template>
