<script lang="ts" setup>
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
      content: `${detailCategory?.value?.seo.is_index ? 'index' : 'noindex'}, ${
        detailCategory?.value?.seo.is_follow ? 'follow' : 'nofollow'
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
  <div>
    <PageBreadcrumbs :items="detailCategory?.breadcrumbs" />
    <div class="mx-auto w-full max-w-7xl p-4">
      <h1 class="my-2 text-2xl font-bold text-gray-800 md:text-3xl">
        {{ detailCategory?.seo.h1 }}
      </h1>
    </div>
    <div class="mx-auto flex max-w-7xl gap-4 px-4">
      <div class="hidden flex-col md:flex md:w-4/12 lg:w-3/12">
        <!-- <h3>Sidebar</h3> -->
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
