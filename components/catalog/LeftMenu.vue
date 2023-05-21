<script lang="ts" setup>
import type { IconMap, MenuItem } from 'types'
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
  <nav aria-label="Меню каталога" class="flex flex-col space-y-1">
    <template v-for="item in menu" :key="item.id">
      <NuxtLink
        :to="`/catalog/${item.slug}`"
        class="flex items-center gap-2 px-4 py-2 text-gray-700"
      >
        <NuxtImg v-if="item.slug in icons" :src="`/img/categories/${icons[item.slug]}.png`" width="60" height="40" loading="lazy" />
        <span class="text-md font-medium">{{ item.name }}</span>
      </NuxtLink>

      <template v-if="item.submenu && item.submenu.length">
        <template v-for="subitem in item.submenu" :key="subitem.id">
          <details class="group [&_summary::-webkit-details-marker]:hidden" :open="subitem.slug === parentSlug || subitem.slug === slug">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <div class="flex items-center gap-2">
                <!-- <Icon name="TrubiIcon" class="h-10 w-10 text-green-700" /> -->
                <NuxtImg v-if="subitem.slug in icons" :src="`/img/categories/${icons[subitem.slug]}.png`" width="36" height="24" loading="lazy" />
                <NuxtLink :to="`/catalog/${subitem.slug}`">
                  <span class="text-sm font-medium">{{ subitem.name }}</span>
                </NuxtLink>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <Icon name="mdi:chevron-down" class="h-5 w-5" />
              </span>
            </summary>

            <nav v-if="subitem.submenu && subitem.submenu.length" aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
              <template v-for="lv3 in subitem.submenu" :key="lv3.id">
                <NuxtLink
                  :to="`/catalog/${lv3.slug}`"
                  active-class="underline"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <Icon name="mdi:circle" class="h-2 w-2" />
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
