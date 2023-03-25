<script lang="ts" setup>
import type { IProductList, IProductProperty } from 'types'
defineProps<{
  products: IProductList
  productProperties: IProductProperty[]
}>()
</script>

<template>
  <div class="">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Сортамент</th>
          <th v-for="property in productProperties" :key="property.id">
            {{ property.name }}
          </th>
          <th>Цена</th>
          <th>Наличие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products.results" :key="product.id">
          <td>
            <NuxtLink :to="`/product/${product.slug}`" class="hover:underline">
              <!-- <NuxtLink :to="product.slug"> -->
              {{ product.name }}
            </NuxtLink>
          </td>
          <td v-for="prop in product.properties" :key="prop.code">
            {{ prop.value }}
          </td>
          <td>
            <div class="relative flex items-center p-2 text-sm">
              <span>{{ product.ton_price_with_coef }}</span>
              <span class="px-1">₽/тн</span>
              <div class="group">
                <Icon name="mdi:information-outline" class="h-4 w-4" />
                <div
                  class="absolute top-0 left-0 hidden h-full w-full bg-gray-400 p-2 group-hover:block"
                >
                  {{ product.meter_price_with_coef }} ₽/м
                  <!-- {{ product.unit_price_with_coef }} ₽/шт -->
                </div>
              </div>
            </div>
          </td>
          <td>
            <Icon
              name="mdi:cart-plus"
              class="h-10 w-10 border p-2 hover:bg-green-700 hover:text-zinc-200"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
