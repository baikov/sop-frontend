<script lang="ts" setup>
import type { MenuItem } from 'types'
defineProps<{
  menu?: MenuItem[] | null
}>()

const toggleSubmenu = (id: number) => {
  const sub = document.querySelector(`#submenu-${id}`)
  if (sub?.classList.contains('hidden'))
    sub.classList.replace('hidden', 'block')

  else
    sub?.classList.replace('block', 'hidden')
}
</script>

<template>
  <div
    class="hidden flex-col items-start justify-start border border-gray-600 p-5 md:flex"
  >
    <div
      v-for="item in menu"
      :key="item.id"
      class="relative my-1 w-full cursor-pointer font-bold text-gray-600 hover:text-gray-900"
      :class="item.submenu ? 'group ' : 'flex items-center'"
      @click="toggleSubmenu(item.id)"
    >
      <NuxtLink :to="`/catalog/${item.slug}`">
        {{ item.name }}
      </NuxtLink>
      <Icon
        v-if="item.submenu /*Object.keys(item.submenu).length*/"
        class="inline-block"
        name="mdi:triangle-small-down"
      />
      <div v-if="item.submenu" :id="`submenu-${item.id}`" class="hidden">
        <NuxtLink
          v-for="subitem in item.submenu"
          :key="subitem.id"
          :to="`/catalog/${subitem.slug}`"
          active-class="underline"
          class="block cursor-pointer whitespace-nowrap p-1 text-gray-600 hover:text-gray-900"
        >
          <span v-show="subitem.depth === 2">-</span><span v-show="subitem.depth === 3">--</span>
          <!-- <Icon v-show="subitem.depth === 3" name="codicon:list-tree" /> -->
          {{ subitem.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
