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
interface IconMap {
  [key: string]: string
}
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
        <!-- <Icon name="TrubiIcon" class="h-10 w-10" /> -->
        <NuxtImg v-if="item.slug in icons" :src="`/img/categories/${icons[item.slug]}.png`" width="60" height="40" loading="lazy" />
        <span class="text-md font-medium">{{ item.name }}</span>
      </NuxtLink>

      <template v-if="item.submenu && item.submenu.length">
        <template v-for="subitem in item.submenu" :key="subitem.id">
          <details class="group [&_summary::-webkit-details-marker]:hidden" :open="subitem.slug === parentSlug">
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

<!-- <template>
  <nav aria-label="Меню каталога" class="flex flex-col space-y-1">
    // item.depth == 1
    <NuxtLink
      to="#"
      class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
    >
      <Icon name="TrubiIcon" class="h-2 w-2" />
      <span class="text-md font-medium"> Труба стальная </span>
    </NuxtLink>
    // end of depth 1

    // item.depth == 2
    <details class="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary
        class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <div class="flex items-center gap-2">
          <Icon name="TrubiIcon" class="h-10 w-10 text-green-700" />
          <NuxtLink to="/catalog">
            <span class="text-sm font-medium"> Труба круглая </span>
          </NuxtLink>
        </div>

        <span class="shrink-0 transition duration-300 group-open:-rotate-180">
          <Icon name="mdi:chevron-down" class="h-5 w-5" />
        </span>
      </summary>

      // item.depth == 3
      <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба ЭСВ (электросварная) </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба ВГП (водогазопроводная) </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба бш гд (Бесшовная горячедеформированная) </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба бш хд (Бесшовная холоднодеформированная) </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба эсв оц (Оцинкованная) </span>
        </NuxtLink>
      </nav>
      // end of depth 3
    </details>
    // end of depth 2

    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <div class="flex items-center gap-2">
          <Icon name="TrubaProfilIcon" class="h-10 w-10" />
          <NuxtLink to="/catalog">
            <span class="text-sm font-medium"> Труба профильная </span>
          </NuxtLink>
        </div>

        <span class="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба квадратная </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба прямоугольная </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба квадратная оц </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба прямоугольная оц </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба квадратная низколегированная </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Труба прямоугольная низколегированная </span>
        </NuxtLink>
      </nav>
    </details>

    <NuxtLink
      to="#"
      class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
    >
      <Icon name="TrubiIcon" class="h-2 w-2" />
      <span class="text-md font-medium"> Сортовой прокат </span>
    </NuxtLink>

    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <div class="flex items-center gap-2">
          <Icon name="ArmaturaIcon" class="h-10 w-10" />
          <NuxtLink to="/catalog">
            <span class="text-sm font-medium"> Арматура стальная, катанка </span>
          </NuxtLink>
        </div>

        <span class="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Арматура рифлёная </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Арматура гладкая </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Катанка </span>
        </NuxtLink>
      </nav>
    </details>

    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <div class="flex items-center gap-2">
          <Icon name="BalkaIcon" class="h-10 w-10" />
          <NuxtLink to="/catalog">
            <span class="text-sm font-medium"> Балка (Двутавр) стальная </span>
          </NuxtLink>
        </div>

        <span class="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Балка  </span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <Icon name="mdi:circle" class="h-2 w-2" />
          <span class="text-sm font-medium"> Балка низколегированная </span>
        </NuxtLink>
      </nav>
    </details>
  </nav>
</template> -->
