<script lang="ts" setup>
const { getCatalogMenu } = useMenu()
const catalogMenu = await getCatalogMenu()
// if (catalogMenu === null) {
//   showError({ statusCode: 404, statusMessage: "Page Not Found" });
// }
</script>

<template>
  <div>
    <CatalogLeftMenu :menu="catalogMenu" />
    <p>After menu</p>
  </div>
</template>
