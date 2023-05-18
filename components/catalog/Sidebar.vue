<script lang="ts" setup>
const { getCatalogMenu } = useMenu()
const catalogMenu = await getCatalogMenu()
// if (catalogMenu === null) {
//   showError({ statusCode: 404, statusMessage: "Page Not Found" });
// }
</script>

<template>
  <div class="flex flex-1 flex-col justify-between border-e w-full">
    <div class="px-4 py-4">
      <CatalogLeftMenu :menu="catalogMenu" />
    </div>

    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <NuxtLink to="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        <Icon name="mdi:email" class="h-10 w-10 rounded-full object-cover" />

        <div>
          <p class="text-xs">
            <strong class="block font-medium">Отправьте заявку</strong>

            <span class="font-bold"> info@soptorg.ru </span>
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
