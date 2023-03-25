<script lang="ts" setup>
useHead({
  title: 'Услуги',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Услуги компании ООО "СПЕЦОПТТОРГ"',
    },
  ],
})
const breadcrumbs = [
  {
    level: 1,
    name: 'Услуги',
    href: '/services',
    disabled: true,
  },
]
</script>

<template>
  <PageBreadcrumbs :items="breadcrumbs" />
  <section class="relative mx-auto flex h-full w-full flex-1 flex-col">
    <div class="mx-auto w-full max-w-7xl p-4">
      <h1 class="my-2 text-2xl font-bold text-gray-800 md:text-3xl">
        Услуги
      </h1>
    </div>
  </section>
</template>
