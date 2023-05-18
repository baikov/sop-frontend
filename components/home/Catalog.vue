<template>
  <section class="relative mx-auto flex h-full w-full flex-1 flex-col" style="background-image: url('');">
    <div class="mx-auto w-full max-w-7xl px-4 py-10">
      <div class="bg-opacity-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3 group bg-white dark:bg-gray-300 border ">
          <div
            class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
          >
            <NuxtLink to="/catalog/armatura-katanka" class="hover:underline">
              <NuxtPicture
                src="/img/categories/armatura-riflenaya.png"
                sizes="sm:200px md:200px lg:200px"
                :img-attrs="{ class: 'object-cover' }"
              />
              <p class="text-xl font-medium text-slate-700 mt-3">
                Арматура, катанка
              </p>
            </NuxtLink>
            <div class="mt-2 text-sm text-slate-500">
              <NuxtLink to="/catalog/armatura-riflenaya-a3" class="hover:underline">
                Арматура рифленая А3
              </NuxtLink>,
              <NuxtLink to="/catalog/armatura-gladkaya-a1" class="hover:underline">
                Арматура гладкая А1
              </NuxtLink>,
              <NuxtLink to="/catalog/armatura-at800" class="hover:underline">
                Арматура Ат800
              </NuxtLink>,
              <NuxtLink to="/catalog/katanka" class="hover:underline">
                Катанка
              </NuxtLink>
            </div>
          </div>

          <div
            class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
          >
            <NuxtLink to="/catalog/balki-dvutavr" class="hover:underline">
              <NuxtPicture
                src="/img/categories/balka-dvutavr.png"
                sizes="sm:200px md:200px lg:200px"
                :img-attrs="{ class: 'object-cover' }"
              />
              <p class="text-xl font-medium text-slate-700 mt-3">
                Балка двутавр
              </p>
            </NuxtLink>
            <div class="mt-2 text-sm text-slate-500">
              <NuxtLink to="/catalog/balki-dvutavr-nizkolegirovannye" class="hover:underline">
                Балки двутавр низколегированные
              </NuxtLink>
            </div>
          </div>

          <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <NuxtLink to="/catalog/vgp-elektrosvarnye-truby" class="hover:underline">
              <NuxtPicture
                src="/img/categories/truby-kruglie.png"
                sizes="sm:200px md:200px lg:200px"
                :img-attrs="{ class: 'object-cover' }"
              />
              <p class="text-xl font-medium text-slate-700 mt-3">
                Трубы стальные
              </p>
            </NuxtLink>
            <div class="mt-2 text-sm text-slate-500">
              <NuxtLink to="/catalog/truby-vgp" class="hover:underline">
                Трубы ВГП
              </NuxtLink>,
              <NuxtLink to="/catalog/truby-kvadratnye-otsinkovannye" class="hover:underline">
                Квадратные оцинкованные
              </NuxtLink>,
              <NuxtLink to="/catalog/truby-kruglye-otsinkovannye" class="hover:underline">
                Круглые оцинкованные
              </NuxtLink>,
              <NuxtLink to="/catalog/truby-elektrosvarnye-v-izolyatsii-ppu" class="hover:underline">
                В ППУ изоляции
              </NuxtLink>
            </div>
          </div>

          <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <NuxtLink to="/catalog/truby-elektrosvarnye-pryamougolnye" class="hover:underline">
              <NuxtPicture
                src="/img/categories/truby-profilnie.png"
                sizes="sm:200px md:200px lg:200px"
                :img-attrs="{ class: 'object-cover' }"
              />
              <p class="text-xl font-medium text-slate-700 mt-3">
                Трубы профильные
              </p>
            </NuxtLink>
            <div class="mt-2 text-sm text-slate-500">
              <NuxtLink to="/catalog/truby-pryamougolnye-otsinkovannye" class="hover:underline">
                Трубы прямоугольные оцинкованные
              </NuxtLink>,
              <NuxtLink to="/catalog/truby-kvadratnye-otsinkovannye" class="hover:underline">
                Трубы квадратные оцинкованные
              </NuxtLink>,
              <NuxtLink to="/catalog/truby-elektrosvarnye-kvadratnye" class="hover:underline">
                Трубы квадратные ЭСВ
              </NuxtLink>,
              <NuxtLink to="/catalog/truby-elektrosvarnye-pryamougolnye" class="hover:underline">
                Трубы прямоугольные ЭСВ
              </NuxtLink>
            </div>
          </div>

          <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <NuxtLink to="/catalog/shveller" class="hover:underline">
              <NuxtPicture
                src="/img/categories/shveller.png"
                sizes="sm:200px md:200px lg:200px"
                :img-attrs="{ class: 'object-cover' }"
              />
              <p class="text-xl font-medium text-slate-700 mt-3">
                Швеллер
              </p>
            </NuxtLink>
            <div class="mt-2 text-sm text-slate-500">
              <NuxtLink to="/catalog/shveller-gnutyi" class="hover:underline">
                Швеллер гнутый
              </NuxtLink>,
              <NuxtLink to="/catalog/shveller-nizkolegirovannyi" class="hover:underline">
                Швеллер низколегированный
              </NuxtLink>
            </div>
          </div>

          <div class="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
            <NuxtLink to="/catalog/ugolok" class="hover:underline">
              <NuxtPicture
                src="/img/categories/ugolok.png"
                sizes="sm:200px md:200px lg:200px"
                :img-attrs="{ class: 'object-cover' }"
              />
              <p class="text-xl font-medium text-slate-700 mt-3">
                Уголок
              </p>
            </NuxtLink>
            <div class="mt-2 text-sm text-slate-500">
              <NuxtLink to="/catalog/ugolok-neravnopolochnyi" class="hover:underline">
                Уголок неравнополочный
              </NuxtLink>,
              <NuxtLink to="/catalog/ugolok-ravnopolochnyi" class="hover:underline">
                Уголок равнополочный
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="w-full bg-gray-700 dark:bg-gray-900 shadow-xl py-10 px-20 flex justify-between items-center flex-col md:flex-row">
          <p class="text-zinc-200 text-center md:text-left">
            <span class="text-lg md:text-2xl font-medium">Нужна быстрая помощь в подборе позиций и рассчете количества?</span>
            <br>
            <span class="text-md md:text-lg">Присылайте заявку на почту!</span>
          </p>
          <span class="px-5 py-2 mt-2 font-bold text-zinc-200 shadow-xl hover:bg-green-700 duration-150 bg-green-600">
            info@soptorg.ru
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
