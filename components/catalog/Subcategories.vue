<script lang="ts" setup>
import type { Category } from 'types'
defineProps<{
  subcatList?: Category[] | []
}>()
</script>

<template>
  <section class="py-2">
    <div class="container mx-auto px-4 transition-all ease-in-out duration-300">
      <div class="max-w-6xl mx-auto transition-all ease-in-out duration-300">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-10">
          <div v-for="cat in subcatList" :key="cat.id" data-aos="fade-up">
            <NuxtLink
              class="border border-gray-200 h-full
              flex flex-col items-center justify-center transition-all ease-in-out
              duration-300 relative top-0 bg-gray-100 rounded-md px-4 py-4 group
              dark:bg-gray-800 dark:border-gray-700 dark:text-zinc-200
              hover:border-gray-300 hover:-top-0.5 dark:hover:bg-gray-900"
              :to="`/catalog/${cat.slug}`"
            >
              <NuxtImg
                v-show="cat.image" :src="`/soptorg/media/${cat.image}`" width="120" height="60" loading="lazy"
                class="transition-all ease-in-out duration-300 inline-block relative top-0 group-hover:-top-0.5 dark:invert"
              />
              <h3 class="transition-all ease-in-out duration-300 text-md group-hover:text-zinc-100 text-center mt-3">
                {{ cat.name }}
              </h3>
              <!-- <span class="transition-all ease-in-out duration-300 text-md text-gray-400 group-hover:text-gray-600">2,041</span> -->
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
