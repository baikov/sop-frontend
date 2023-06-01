<script lang="ts" setup>
import type { MenuItem } from 'types'
const props = defineProps<{
  menu?: MenuItem[] | null
}>()
const route = useRoute()
const slug = route.params.slug.toString()

function findParentSlug(items: MenuItem[] | null | undefined, slug: string): string | null {
  // Пройдемся по элементам массива
  if (!items)
    return null

  for (const item of items) {
    // Если у элемента есть подменю, вызовем эту же функцию рекурсивно для подменю
    if (item.submenu) {
      // Ищем нужный элемент в подменю
      const subItem = item.submenu.find(sub => sub.slug === slug)
      if (subItem) {
        // Если элемент найден в подменю, вернем slug родительского элемента
        return item.slug
      }
      else {
        // Если элемент не найден в подменю, вызовем эту же функцию рекурсивно для подменю
        const parentSlug = findParentSlug(item.submenu, slug)
        if (parentSlug) {
          // Если в подменю найден slug родительского элемента, вернем его
          return parentSlug
        }
      }
    }
  }
  return null
}

const parentSlug = findParentSlug(props.menu, slug)
</script>

<template>
  <nav aria-label="Меню каталога" class="flex flex-col space-y-1">
    <template v-for="item in menu" :key="item.id">
      <NuxtLink
        :to="`/catalog/${item.slug}`"
        class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700"
      >
        <NuxtImg v-show="item.image" :src="`/soptorg/media/${item.image}`" width="60" height="30" />
        <span class="text-md font-medium">{{ item.name }}</span>
      </NuxtLink>

      <template v-if="item.submenu && item.submenu.length">
        <template v-for="subitem in item.submenu" :key="subitem.id">
          <details class="group [&_summary::-webkit-details-marker]:hidden" :open="subitem.slug === parentSlug || subitem.slug === slug">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-green-100 hover:text-green-700"
              :class="{ 'bg-green-100 text-green-700': slug === subitem.slug }"
            >
              <!-- <div class="flex items-center gap-2"> -->
              <NuxtLink
                :to="`/catalog/${subitem.slug}`"
                class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700"
              >
                <NuxtImg v-show="subitem.image" :src="`/soptorg/media/${subitem.image}`" width="40" height="20" />
                <span class="text-sm font-medium">{{ subitem.name }}</span>
              </NuxtLink>
              <!-- </div> -->

              <span v-show="subitem.submenu && subitem.submenu.length" class="shrink-0 transition duration-300 group-open:-rotate-180">
                <Icon name="mdi:chevron-down" class="h-5 w-5" />
              </span>
            </summary>

            <nav v-if="subitem.submenu && subitem.submenu.length" aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
              <template v-for="lv3 in subitem.submenu" :key="lv3.id">
                <NuxtLink
                  :to="`/catalog/${lv3.slug}`"
                  active-class="bg-green-100 text-green-700"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  <Icon name="mdi:circle" class="h-1.5 w-1.5 min-w-[0.375rem]" />
                  <span class="text-sm font-medium"> {{ lv3.name }} </span>
                </NuxtLink>
              </template>
            </nav>
          </details>
        </template>
      </template>
    </template>
  </nav>
</template>
