<script lang="ts" setup>
const { getProduct } = useProduct()
const route = useRoute()
const slug = route.params.slug.toString()
const productDetail = await getProduct(slug)

if (productDetail === null) {
  // look at https://github.com/mitre/saf-site-frontend/issues/89
  // Doesn't work https://github.com/mitre/saf-site-frontend/issues/89
  // throw createError({
  //   statusCode: error.value?.statusCode,
  //   statusMessage: error.value.message,
  // });
  showError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
useServerSeoMeta({
  title: productDetail?.value?.seo.seo_title,
  ogTitle: productDetail?.value?.name,
  description: productDetail?.value?.seo.seo_description,
  ogDescription: productDetail?.value?.seo.seo_description,
  ogImage: '/~/assets/img/truba_vodogazoprovodnaya_du_15kh2_8_detail.png',
})
</script>

<template>
  <PageBreadcrumbs :items="productDetail?.breadcrumbs" />

  <div class="mx-auto w-full max-w-7xl p-4">
    <h1 class="my-2 text-2xl font-bold text-gray-800 md:text-3xl">
      {{ productDetail?.name }}
    </h1>
  </div>
  <div class="mx-auto flex w-full max-w-7xl gap-4 p-4">
    <div class="flex w-1/3 flex-col items-center justify-center p-4">
      <div class="rounded-lg shadow-md">
        <NuxtPicture
          src="/~/assets/img/truba_vodogazoprovodnaya_du_15kh2_8_detail.png"
          sizes="sm:50px md:200px lg:400px"
          :alt="productDetail?.name"
          :title="productDetail?.seo.seo_title"
          :img-attrs="{ class: 'object-cover' }"
        />
        <!-- :img-attrs="{ class: 'object-cover h-[300px] w-[300px]' }" -->
        <!-- <NuxtPicture
          v-if="!pending"></NuxtPicture>
        <div v-else class="flex animate-pulse">
          <div
            class="h-[50px] w-[50px] rounded bg-gray-900 md:h-[200px] md:w-[200px] lg:w-[300px]"
          ></div>
        </div> -->
      </div>
    </div>
    <div
      class="flex w-1/3 flex-col items-stretch justify-between rounded-lg border p-4"
    >
      <div
        v-for="property in productDetail?.properties"
        :key="property.id"
        class="flex justify-between"
      >
        <span>{{ property.name }}:</span>
        <span>{{ property.value }} {{ property.units }}</span>
      </div>
    </div>
    <div class="w-1/3 rounded-lg bg-white p-8 shadow-md">
      <div class="text-gray-500">
        123
      </div>
      <div>
        <div class="mt-4 mb-4 flex py-2 align-text-bottom">
          <span class="text-3xl font-bold text-indigo-600">
            {{ productDetail?.ton_price_with_coef }}
          </span>
          <span class="text-xl font-bold text-indigo-600"> руб/тонна</span>
          <!-- <span class="text-xl font-bold text-indigo-600">
            {{ productDetail?.meter_price_with_coef }} руб/метр
          </span>
          <span class="text-xl font-bold text-indigo-600">
            {{ productDetail?.unit_price_with_coef }} руб/штука
          </span> -->
        </div>
      </div>

      <button
        type="button"
        class="mt-4 h-14 bg-green-700 px-6 py-1 font-semibold text-white hover:bg-gray-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
  <div class="mx-auto flex w-full max-w-7xl p-4">
    {{ productDetail?.description }}
  </div>
</template>
