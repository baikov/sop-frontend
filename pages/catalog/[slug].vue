<script lang="ts" setup>
// import { onMounted } from 'vue'
const { getCategory, getProductList } = useCategory()
const route = useRoute()
const config = useRuntimeConfig()
const slug = route.params.slug.toString()
const detailCategory = await getCategory(slug)

if (detailCategory === null) {
  // look at https://github.com/mitre/saf-site-frontend/issues/89
  showError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const productList = await getProductList(slug)

useHead({
  title: detailCategory?.value?.seo.seo_title,
  titleTemplate: '%s',

  meta: [
    {
      name: 'description',
      content: detailCategory?.value?.seo.seo_description,
    },
    {
      name: 'robots',
      content: `${detailCategory?.value?.seo.is_index ? 'index' : 'noindex'}, ${detailCategory?.value?.seo.is_follow ? 'follow' : 'nofollow'
        }`,
    },
    {
      property: 'og:site_name',
      content: config.public.siteName,
    },
    {
      property: 'og:url',
      content: `${config.public.siteUrl}${route.path}`,
    },
  ],
  link: [
    { rel: 'canonical', href: `${config.public.siteUrl}${route.path}` },
  ],
})
</script>

<template>
  <div class="flex flex-col w-full flex-1">
    <PageBreadcrumbs :items="detailCategory?.breadcrumbs" />
    <PageHeader :h1="detailCategory?.seo.h1 || detailCategory?.name" />
    <div class="flex max-w-7xl px-4 flex-1 w-full mx-auto gap-4">
      <div class="hidden flex-col md:flex md:w-4/12 lg:w-3/12">
        <CatalogSidebar />
      </div>
      <div class="w-full md:w-8/12 lg:w-9/12">
        <CatalogSubcategories :subcat-list="detailCategory?.subcategories" />
        <div class="">
          {{ detailCategory?.description }}
        </div>

        <div v-if="productList && detailCategory?.product_properties">
          <CatalogProductTable :products="productList" :product-properties="detailCategory?.product_properties" />
        </div>
      </div>
    </div>
  </div>
</template>
