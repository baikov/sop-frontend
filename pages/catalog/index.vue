<script lang="ts" setup>
const { getRootCategories } = useCategory()
const rootCategories = await getRootCategories()
const breadcrumbs = [
  {
    level: 1,
    name: 'Каталог',
    href: '/catalog',
    disabled: true,
  },
]
</script>

<template>
  <div class="flex flex-col w-full flex-1">
    <PageBreadcrumbs :items="breadcrumbs" />
    <PageHeader h1="Каталог металлопроката" />
    <div class="mx-auto flex max-w-7xl gap-4 px-4 flex-1 w-full">
      <!-- <div class="hidden flex-col md:flex md:w-4/12 lg:w-3/12">
        <CatalogSidebar />
      </div> -->
      <div class="w-full">
        <CatalogSubcategories :subcat-list="rootCategories" />
      </div>
    </div>
  </div>
</template>
