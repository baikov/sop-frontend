<script lang="ts" setup>
const config = useRuntimeConfig()
useSchemaOrg([
  defineWebSite({
    name: config.public.siteName,
  }),
  defineWebPage(),
])
</script>

<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <PageTopBanner />

      <Header />

      <slot name="breadcrumbs" />
      <div class="flex w-full flex-1 flex-col">
        <slot />
      </div>

      <Footer />
    </div>
    <slot name="app-after" />
    <div id="app-after" />
    <DebugHead />
  </div>
</template>
