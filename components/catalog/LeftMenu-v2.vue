<script lang="ts" setup>
import { Icon } from '#components'
const MyIcon = h(Icon, { name: 'uil:twitter' })

const navigation = [
  { name: 'Dashboard', icon: MyIcon, current: true, href: '#' },
  {
    name: 'Team',
    icon: MyIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: MyIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Calendar',
    icon: MyIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Documents',
    icon: MyIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    icon: MyIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
    <div class="flex items-center flex-shrink-0 px-4">
      First level
    </div>
    <div class="mt-5 flex-grow flex flex-col">
      <nav class="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
        <template v-for="item in navigation" :key="item.name">
          <div v-if="!item.children">
            <NuxtLink to="#" class="group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
              <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" aria-hidden="true" />
              {{ item.name }}
            </NuxtLink>
          </div>
          <HeadlessDisclosure v-else v-slot="{ open }" :default-open="true" as="div" class="space-y-1">
            <HeadlessDisclosureButton class="group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-green-700" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
              <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              <span class="flex-1">
                <NuxtLink to="/">
                  {{ item.name }}
                </NuxtLink>
              </span>
              <Icon name="mdi:chevron-right" class="ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300']" />
            </HeadlessDisclosureButton>
            <HeadlessDisclosurePanel class="space-y-1">
              <HeadlessDisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                {{ subItem.name }}
              </HeadlessDisclosureButton>
            </HeadlessDisclosurePanel>
          </HeadlessDisclosure>
        </template>
      </nav>
    </div>
  </div>
</template>
