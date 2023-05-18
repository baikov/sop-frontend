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
  <PageHeader h1="Услуги" />
  <section class="relative mx-auto flex h-full w-full flex-col">
    <div class="container w-full max-w-7xl px-4 py-4 mx-auto">
      <div class="mt-8 lg:flex lg:items-center">
        <div class="grid w-full grid-cols-1 gap-8 xl:gap-16 lg:grid-cols-4 md:grid-cols-2">
          <div class="space-y-3">
            <span class="inline-block p-3 text-green-700 bg-green-100 rounded-xl dark:text-white dark:bg-green-700">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg> -->
              <NuxtPicture
                src="/img/services/transpot.png"
                sizes="sm:400px md:400px lg:300px"
                :img-attrs="{ class: 'object-cover' }"
              />
            </span>

            <h2 class="text-xl font-semibold text-gray-700  dark:text-white">
              Транспортные услуги
            </h2>

            <p class="text-gray-500 dark:text-gray-300">
              Мы предоставляем полный спектр транспортных услуг, связанных с доставкой
              металлопроката по Нижнему Новгороду и области. Наша компания обладает собственным
              автопарком, включающим в себя различные виды транспорта. Мы понимаем, что
              один из самых важных аспектов при работе с металлопрокатом - это быстрая и
              надежная доставка. Поэтому мы делаем все возможное, чтобы груз был доставлен в
              срок и без задержек.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-green-700 bg-green-100 rounded-xl dark:text-white dark:bg-green-700">
              <NuxtPicture
                src="/img/services/rezka.png"
                sizes="sm:400px md:400px lg:300px"
                :img-attrs="{ class: 'object-cover' }"
              />
            </span>

            <h2 class="text-xl font-semibold text-gray-700  dark:text-white">
              Резка металла
            </h2>

            <p class="text-gray-500 dark:text-gray-300">
              Мы предлагаем услуги резки металла на заказ с использованием современного оборудования и высококвалифицированных специалистов.
              Мы используем только профессиональное оборудование, что позволяет обеспечивать точность и высокую скорость резки.
              Если у вас есть какие-либо вопросы, наша команда готова ответить на них и предложить оптимальное решение.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-green-700 bg-green-100 rounded-xl dark:text-white dark:bg-green-700">
              <NuxtPicture
                src="/img/services/izolyatsiya.png"
                sizes="sm:400px md:400px lg:300px"
                :img-attrs="{ class: 'object-cover' }"
              />
            </span>

            <h2 class="text-xl font-semibold text-gray-700  dark:text-white">
              Изоляция труб
            </h2>

            <p class="text-gray-500 dark:text-gray-300">
              Мы предлагаем профессиональные услуги по изоляции труб, которые обеспечивают надежную защиту трубопроводов от внешних воздействий и гарантируют сохранность транспортируемых по ним жидкостей и газов.
              Используем только качественные материалы, которые обеспечивают долговечность и эффективность изоляции труб.
              Гарантируем качественное выполнение работ, соблюдение сроков и доступные цены на услуги по изоляции труб.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-green-700 bg-green-100 rounded-xl dark:text-white dark:bg-green-700">
              <NuxtPicture
                src="/img/services/tsinkovanie.png"
                sizes="sm:400px md:400px lg:300px"
                :img-attrs="{ class: 'object-cover' }"
              />
            </span>

            <h2 class="text-xl font-semibold text-gray-700  dark:text-white">
              Цинкование
            </h2>

            <p class="text-gray-500 dark:text-gray-300">
              Мы предоставляем услуги по цинкованию, которые обеспечивают надежную защиту металла от коррозии и повышают его срок службы. Мы используем только качественные материалы, что позволяет гарантировать высокое качество цинкования и долговечность защитного покрытия.
            </p>
          </div>
        </div>

        <!-- <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
          <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-md" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
        </div> -->
      </div>
    </div>
  </section>
</template>
