<script lang="ts" setup>
import type { Category, IconMap } from 'types'
defineProps<{
  subcatList?: Category[] | []
}>()
const icons: IconMap = {
  'truby': 'truby',
  'listovoi-prokat': 'listovoy-prokat',
  'sortovoi-prokat': 'sortovoy-prokat',
  'armatura-katanka': 'armatura-riflenaya',
  'balka-dvutavr-stalnaya': 'balka-dvutavr',
  'polosa-kvadrat': 'polosa',
  'ugolok': 'ugolok',
  'shveller-stalnoi': 'shveller',
  'truba-kruglaya': 'truby-kruglie',
  'truby-profilnie': 'truby-profilnie',

}
</script>

<template>
  <section class="py-2">
    <div class="container mx-auto px-4 transition-all ease-in-out duration-300">
      <div class="max-w-6xl mx-auto transition-all ease-in-out duration-300">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-10">
          <div v-for="cat in subcatList" :key="cat.id" data-aos="fade-up">
            <NuxtLink
              class="border border-gray-200 h-full flex flex-col items-center justify-center transition-all ease-in-out duration-300 relative top-0 bg-gray-100 rounded-md px-4 py-4 group hover:border-gray-300 hover:-top-0.5"
              :to="`/catalog/${cat.slug}`"
            >
              <NuxtImg v-if="cat.slug in icons" :src="`/img/categories/${icons[cat.slug]}.png`" width="120" height="80" loading="lazy" />
              <!-- <i class="transition-all ease-in-out duration-300 bx bx-car text-2xl text-slate-600 inline-block w-10 h-10 leading-10 rounded-full relative top-0 group-hover:bg-amber-200 group-hover:-top-1" /> -->
              <h3 class="transition-all ease-in-out duration-300 text-md text-gray-600 group-hover:text-gray-800 text-center">
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
