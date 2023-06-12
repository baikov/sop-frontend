<script lang="ts" setup>
const { getCatalogMenu } = useMenu()
const catalogMenu = await getCatalogMenu()
// if (catalogMenu === null) {
//   showError({ statusCode: 404, statusMessage: "Page Not Found" });
// }
</script>

<template>
  <div class="flex flex-1 flex-col justify-between border-e dark:border-gray-500 w-full">
    <div class="px-4 py-4">
      <CatalogLeftMenu :menu="catalogMenu" />
    </div>

    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-500">
      <NuxtLink to="mailto:info@soptorg.ru" class="flex items-center gap-2 bg-green-700 text-zinc-200 p-4 dark:bg-zinc-200 dark:text-gray-900">
        <Icon name="mdi:email" class="h-10 w-10 rounded-full object-cover" />

        <div>
          <p class="text-md">
            <span class="block">Отправьте заявку</span>
            <span class="font-bold">info@soptorg.ru</span>
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
