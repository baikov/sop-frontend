<template>
  <NuxtLink tag="a" :to="{ name: 'index' }" class="flex items-center gap-2">
    <!-- <Icon name="tabler:circle-square" class="h-10 w-10 text-green-600" />
    <div class="twxt-2xl font-bold">
      СПЕЦОПТТОРГ
    </div> -->
    <NuxtPicture
      src="logo.png"
      sizes="sm:150px md:200px lg:200px"
      alt="СПЕЦОПТТОРГ"
      title="СПЕЦОПТТОРГ"
      :img-attrs="{ class: 'py-2 cursor-pointer' }"
    />
  </NuxtLink>
</template>
