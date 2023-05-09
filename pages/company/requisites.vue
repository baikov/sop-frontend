<script lang="ts" setup>
useHead({
  title: 'Реквизиты ООО "СПЕЦОПТТОРГ"',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Реквизиты компании ООО "СПЕЦОПТТОРГ"',
    },
  ],
})
const breadcrumbs = [
  {
    level: 1,
    name: 'О компании',
    href: '/company',
    disabled: false,
  },
  {
    level: 2,
    name: 'Реквизиты',
    href: '/company/requisites',
    disabled: true,
  },
]
</script>

<template>
  <PageBreadcrumbs :items="breadcrumbs" />
  <PageHeader h1="Реквизиты" />
  <section class="relative mx-auto flex h-full w-full flex-1 flex-col">
    <div class="overflow-hidden mx-auto w-full max-w-7xl p-4">
      <!-- <div class="px-4 py-5 sm:px-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div> -->
      <div class="">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Наименование
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              ООО "СПЕЦОПТТОРГ"
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              ИНН
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              5256207934
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              КПП
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              525601001
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Номер расчетного счета
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              №40702810001500188475
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Название банка
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              БИК
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              044525999
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Город
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              г. Москва
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Корр. счет
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              30101810845250000999
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Файлы
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div class="flex w-0 flex-1 items-center">
                    <Icon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" name="mdi:file-pdf" />
                    <span class="ml-2 w-0 flex-1 truncate">Карточка_организации.pdf</span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <NuxtLink to="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Скачать
                    </NuxtLink>
                  </div>
                </li>
                <!-- <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div class="flex w-0 flex-1 items-center">
                    <Icon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" name="mdi:file-pdf" />
                    <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <NuxtLink to="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Скачать
                    </NuxtLink>
                  </div>
                </li> -->
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
