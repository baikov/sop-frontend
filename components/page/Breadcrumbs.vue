<script lang="ts" setup>
import type { IBreadcrumb } from 'types'
const breadcrumbs = defineProps<{
  items?: IBreadcrumb[]
}>()
const schema_breadcrumbs = breadcrumbs.items?.map(({ name, href }) => ({ name, item: href }))
schema_breadcrumbs?.unshift({ name: 'Главная', item: '/' })
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: schema_breadcrumbs,
  }),
])
</script>

<template>
  <nav
    class="flex border-b border-gray-200 bg-slate-100"
    aria-label="Breadcrumb"
  >
    <ol
      role="list"
      class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
    >
      <li class="flex">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
            <Icon
              name="mdi:home"
              class="h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
            <span class="sr-only">Главная</span>
          </NuxtLink>
        </div>
      </li>
      <li v-for="item in items" :key="item.level" class="flex">
        <div class="flex items-center">
          <svg
            class="h-full w-6 flex-shrink-0 text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <NuxtLink
            :to="item.href"
            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            :aria-current="item.href ? 'page' : undefined"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </li>
    </ol>
  </nav>
  <!-- <section class="relative mx-auto flex h-full w-full flex-1 flex-col">
    <div class="mx-auto w-full max-w-7xl p-4">
      <nav class="flex py-3 border-y" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div class="flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-500 duration-200 hover:text-gray-700 hover:scale-95">
                <ion-icon class="flex-shrink-0 w-4 h-4 md hydrated" name="home-outline" role="img" aria-label="home outline" />
                <span class="ml-4">
                  Parent
                </span>
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <span class="flex-shrink-0 w-5 h-5 text-gray-300">
                /
              </span>
              <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:text-gray-700">
                Parent
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <span class="flex-shrink-0 w-5 h-5 text-gray-300">
                /
              </span>
              <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:text-gray-700">
                Parent
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <span class="flex-shrink-0 w-5 h-5 text-gray-300">
                /
              </span>
              <a href="#" class="ml-4 text-sm font-medium text-blue-500 hover:scale-95 hover:text-gray-700" aria-current="page">
                Current
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </section> -->
</template>
