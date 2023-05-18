<script lang="ts" setup>
import type { Category } from 'types'
defineProps<{
  subcatList: Category[]
}>()
</script>

<template>
  <section class="py-2">
    <div class="container mx-auto px-4 transition-all ease-in-out duration-300">
      <div class="max-w-6xl mx-auto transition-all ease-in-out duration-300">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 mb-10">
          <div data-aos="fade-up">
            <NuxtLink class="border border-gray-200 h-full transition-all ease-in-out duration-300 block relative top-0 bg-gray-100 rounded-3xl px-4 py-5 text-center group hover:bg-green-700 hover:-top-1" to="#">
              <i class="transition-all ease-in-out duration-300 bx bx-car text-2xl text-slate-600 inline-block w-10 h-10 leading-10 rounded-full relative top-0 group-hover:bg-amber-200 group-hover:-top-1" />
              <h3 class="transition-all ease-in-out duration-300 text-md text-gray-600 group-hover:text-gray-800">
                Vehicles
              </h3>
              <span class="transition-all ease-in-out duration-300 text-md text-gray-400 group-hover:text-gray-600">2,041</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
