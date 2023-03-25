<script lang="ts" setup>
const { getCategory, getProductList } = useCategory()
const route = useRoute()
const slug = route.params.slug.toString()
const detailCategory = await getCategory(slug)

if (detailCategory === null) {
  // look at https://github.com/mitre/saf-site-frontend/issues/89
  showError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
const productList = await getProductList(slug)
</script>

<template>
  <div>
    <PageBreadcrumbs :items="detailCategory?.breadcrumbs" />
    <div class="mx-auto flex max-w-7xl gap-4 px-4">
      <h1>{{ detailCategory?.name }}</h1>
    </div>
    <div class="mx-auto flex max-w-7xl gap-4 px-4">
      <div class="hidden flex-col md:flex md:w-4/12 lg:w-3/12">
        <h3>Sidebar</h3>
        <CatalogSidebar />
      </div>
      <div class="w-full md:w-8/12 lg:w-9/12">
        <div class="mb-5">
          {{ detailCategory?.description }}
        </div>
        <div v-if="productList && detailCategory?.product_properties">
          <CatalogProductsList
            :products="productList"
            :product-properties="detailCategory?.product_properties"
          />
        </div>
      </div>
    </div>
  </div>
</template>
