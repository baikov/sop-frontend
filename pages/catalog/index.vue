<script lang="ts" setup>
const { getRootCategories } = useCategory()
const rootCategories = await getRootCategories()
</script>

<template>
  <div class="mx-auto flex max-w-7xl items-center px-4">
    <h1>Catalog main</h1>
  </div>
  <div class="mx-auto flex max-w-7xl items-center gap-4 px-4">
    <div v-for="cat in rootCategories" :key="cat.id" class="border p-8">
      <NuxtLink :to="`/catalog/${cat.slug}`">
        {{ cat.name }}
      </NuxtLink>
    </div>
  </div>
</template>
