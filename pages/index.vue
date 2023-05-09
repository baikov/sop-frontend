<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({
  title: 'ООО "СПЕЦОПТТОРГ" - поставки стальной трубы, металлопроката, изоляции, опор для трубопроводов',
  titleTemplate: '%s',
  meta: [
    {
      name: 'description',
      content: 'Широкий выбор стальной трубы, металлопроката, деталей для трубопровода. Услуги доставки.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:site_name',
      content: config.public.siteName,
    },
    {
      property: 'og:url',
      content: config.public.siteUrl,
    },
  ],
  link: [
    { rel: 'canonical', href: config.public.siteUrl },
  ],
})
</script>

<template>
  <!-- <section class="relative mx-auto flex h-full w-full flex-1 flex-col">
    <div class="mx-auto w-full max-w-7xl p-4">
      <h1 class="my-2 text-2xl font-bold text-gray-800 md:text-3xl">
        Главная страница
      </h1>
    </div>
  </section> -->
  <HomeHero />
  <!-- <HomeStats /> -->
  <HomeCatalog />
  <HomeAbout />
  <HomeFeatures />
  <!-- <HomePartners /> -->
</template>
