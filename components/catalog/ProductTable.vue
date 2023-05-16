<script lang="ts" setup>
import type { IProductList, IProductProperty } from 'types'
defineProps<{
  products: IProductList
  productProperties: IProductProperty[]
}>()
</script>

<template>
  <section class="container px-4 py-4 mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-gray-800 dark:text-white">
            Список продукции
          </h2>

          <span class="px-3 py-1 text-xs text-green-600 bg-green-100 rounded-full dark:bg-gray-800 dark:text-green-400">{{ products.count }} позиций</span>
        </div>

        <!-- <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
          Тут че-то написано
        </p> -->
      </div>

      <!-- <div class="flex items-center mt-4 gap-x-3">
        <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <Icon name="mdi:table-download" class="h-5 w-5" />
          <span>Скачать в .xlsx</span>
        </button>
      </div> -->
    </div>

    <!-- <div class="mt-6 md:flex md:items-center md:justify-between">
      <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
          Все
        </button>

        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          В наличии
        </button>

        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          Unmonitored
        </button>
      </div>

      <div class="relative flex items-center mt-4 md:mt-0">
        <span class="absolute">
          <Icon name="mdi:search" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
        </span>
        <input type="text" placeholder="Поиск" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
      </div>
    </div> -->

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="py-4 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <!-- <button class="flex items-center gap-x-3 focus:outline-none">
                      <span>Сортамент</span>
                      <Icon name="mdi:filter" class="w-4 h-4" />
                    </button> -->
                    Сортамент
                  </th>
                  <th v-for="property in productProperties" :key="property.id" scope="col" class="px-4 py-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {{ property.name }}
                  </th>

                  <th scope="col" class="px-4 py-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Цена
                  </th>

                  <th scope="col" class="px-4 py-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Наличие
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                <tr v-for="product in products.results" :key="product.id">
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div>
                      <h3 class="font-medium text-gray-800 dark:text-white ">
                        {{ product.name }}
                      </h3>
                      <!-- <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                        catalogapp.io
                      </p> -->
                    </div>
                  </td>
                  <td v-for="prop in product.properties" :key="prop.code" class="px-4 py-4 text-sm whitespace-nowrap">
                    {{ prop.value }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <!-- <div class="relative flex items-center p-2 text-sm">
                      <span>{{ product.ton_price_with_coef }}</span>
                      <span class="px-1">₽/тн</span>
                      <div class="group">
                        <Icon name="mdi:information-outline" class="h-4 w-4" />
                        <div
                          class="absolute top-0 left-0 hidden h-full w-full bg-gray-400 p-2 group-hover:block"
                        >
                          {{ product.meter_price_with_coef }} ₽/м
                          {{ product.unit_price_with_coef }} ₽/шт
                        </div>
                      </div>
                    </div> -->
                    <div>
                      <span class="font-bold">{{ product.ton_price_with_coef }} ₽/тн</span>
                      <p v-if="product.meter_price_with_coef" class="text-xs font-normal text-gray-600 dark:text-gray-400">
                        {{ product.meter_price_with_coef }} ₽/м
                      </p>
                      <p v-if="product.unit_price_with_coef" class="text-xs font-normal text-gray-600 dark:text-gray-400">
                        {{ product.unit_price_with_coef }} ₽/шт
                      </p>
                      <!-- <p v-if="product.meter_price_with_coef || product.unit_price_with_coef" class="text-xs font-normal text-gray-600 dark:text-gray-400">
                        <span v-if="product.meter_price_with_coef">{{ product.meter_price_with_coef }} ₽/м </span>
                        <span v-if="product.unit_price_with_coef">{{ product.unit_price_with_coef }} ₽/шт</span>
                      </p> -->
                    </div>
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <!-- <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                      В наличии
                    </div> -->
                    <Icon v-if="product.in_stock" name="mdi:check" class="h-6 w-6 text-green-700" />
                    <Icon v-else name="mdi:close" class="h-6 w-6 text-red-700" />
                  </td>
                  <!-- <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <NuxtLink to="#">
                      <Icon
                        name="mdi:cart-plus"
                        class="h-10 w-10 border p-2 hover:bg-green-700 hover:text-zinc-200 transition-colors duration-200"
                      />
                    </NuxtLink>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="flex items-center justify-between mt-6">
      <NuxtLink to="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>

        <span>
          previous
        </span>
      </NuxtLink>

      <div class="items-center hidden md:flex gap-x-3">
        <NuxtLink to="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">
          1
        </NuxtLink>
        <NuxtLink to="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          2
        </NuxtLink>
        <NuxtLink to="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          3
        </NuxtLink>
        <NuxtLink to="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          ...
        </NuxtLink>
        <NuxtLink to="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          12
        </NuxtLink>
        <NuxtLink to="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          13
        </NuxtLink>
        <NuxtLink to="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          14
        </NuxtLink>
      </div>

      <NuxtLink to="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
        <span>
          Next
        </span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </NuxtLink>
    </div> -->
  </section>
</template>
