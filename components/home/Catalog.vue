<template>
  <section class="relative mx-auto flex h-full w-full flex-1 flex-col" style="background-image: url('');">
    <div class="mx-auto w-full max-w-7xl px-4 py-10">
      <div class="bg-opacity-10">
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white border ">
          <div
            class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
          >
            <!-- <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
            <svg
          xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="1.5"
        >
          <path
            stroke-linecap="round" stroke-linejoin="round"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg></span> -->
            <NuxtPicture
              src="~/assets/img/truba-electrosvarnaya.png"
              sizes="sm:50px md:200px lg:200px"
              :img-attrs="{ class: 'object-cover' }"
            />
            <p class="text-xl font-medium text-slate-700 mt-3">
              Трубы стальные
            </p>
            <!-- <p class="mt-2 text-sm text-slate-500">
          Team BrainEdge education is a bunch of highly focused, energetic
          set of people.
        </p> -->
          </div>

          <div
            class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
          >
            <NuxtPicture
              src="~/assets/img/armatura.png"
              sizes="sm:50px md:200px lg:200px"
              :img-attrs="{ class: 'object-cover' }"
            />
            <p class="text-xl font-medium text-slate-700 mt-3">
              Арматура
            </p>
          </div>

          <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <NuxtPicture
              src="~/assets/img/polosa-stalnaya.png"
              sizes="sm:50px md:200px lg:200px"
              :img-attrs="{ class: 'object-cover' }"
            />
            <p class="text-xl font-medium text-slate-700 mt-3">
              Полоса стальная
            </p>
          </div>

          <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <NuxtPicture
              src="~/assets/img/ppu.png"
              sizes="sm:50px md:200px lg:200px"
              :img-attrs="{ class: 'object-cover' }"
            />
            <p class="text-xl font-medium text-slate-700 mt-3">
              Трубы в ППУ изоляции
            </p>
          </div>

          <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <NuxtPicture
              src="~/assets/img/vus.png"
              sizes="sm:50px md:200px lg:200px"
              :img-attrs="{ class: 'object-cover' }"
            />
            <p class="text-xl font-medium text-slate-700 mt-3">
              Трубы в ВУС изоляции
            </p>
          </div>

          <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <NuxtPicture
              src="~/assets/img/ppm.png"
              sizes="sm:50px md:200px lg:200px"
              :img-attrs="{ class: 'object-cover' }"
            />
            <p class="text-xl font-medium text-slate-700 mt-3">
              Трубы в ППМ изоляции
            </p>
          </div>
        </div>

        <div class="w-full bg-gray-700 dark:bg-gray-900 shadow-xl py-10 px-20 flex justify-between items-center">
          <p class=" text-white">
            <span class="text-2xl font-medium">Нужна быстрая помощь в подборе позиций?</span> <br> <span class="text-lg">Наш менеджер свяжется с вами и ответит на все вопросы! </span>
          </p>
          <button class="px-5 py-2 font-medium text-zinc-200 shadow-xl hover:bg-green-700 duration-150 bg-green-600">
            Задать вопрос
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
