<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t bg-gray-900 text-zinc-200 dark:border-gray-50/[0.2] lg:border-gray-900/10"
  >
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 sm:flex-row lg:px-8"
    >
      <div class="flex flex-col items-center sm:items-start">
        <span class="text-md font-bold">ООО "СПЕЦОПТТОРГ"</span>
        <span>Оптовые поставки металлопроката © {{ year }}</span>
      </div>
      <div class="flex flex-col items-center gap-2 sm:float-right sm:flex-row">
        <NuxtLink to="https://baikov.dev" class="text-sm font-bold">
          baikov<span class="text-red-500 dark:text-zinc-200 font-bold">.dev</span>
        </NuxtLink>
        <span class="block rounded bg-blue-500 dark:bg-zinc-200 dark:text-gray-900 px-1 py-0.5 text-xs text-white">
          v0.8
        </span>
      </div>
    </div>
  </footer>
</template>
