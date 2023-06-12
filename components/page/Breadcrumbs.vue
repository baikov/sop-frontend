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
  <div class="relative mx-auto w-full max-w-7xl px-4">
    <nav
      class="flex py-3 border-b border-gray-200 dark:border-gray-600  overflow-x-auto"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        class="mx-auto flex w-full space-x-4"
      >
        <li class="flex">
          <div class="flex items-center">
            <NuxtLink to="/">
              <Icon
                name="mdi:home"
                class="h-5 w-5 flex-shrink-0 text-green-700 dark:text-zinc-200"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </li>
        <li v-for="item in items" :key="item.level" class="flex whitespace-nowrap">
          <div class="flex items-center">
            <Icon name="mdi:chevron-right" class="h-full w-6 flex-shrink-0" />
            <NuxtLink
              :to="item.href"
              class="ml-4 text-sm font-medium hover:underline"
              :aria-current="item.href ? 'page' : undefined"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>
