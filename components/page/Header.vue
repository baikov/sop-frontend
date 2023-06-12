<script lang="ts" setup>
defineProps<{
  h1?: string
}>()
</script>

<template>
  <section class="relative mx-auto flex w-full flex-col">
    <div class="mx-auto w-full max-w-7xl p-4">
      <h1 class="my-2 text-2xl font-bold text-gray-800 md:text-3xl dark:text-zinc-200">
        {{ h1 }}
      </h1>
      <div class="mt-2">
        <span class="inline-block w-40 h-1 bg-green-700 rounded-full dark:bg-zinc-200" />
        <span class="inline-block w-3 h-1 ml-1 bg-green-700 rounded-full dark:bg-zinc-200" />
        <span class="inline-block w-1 h-1 ml-1 bg-green-700 rounded-full dark:bg-zinc-200" />
      </div>
    </div>
  </section>
</template>
