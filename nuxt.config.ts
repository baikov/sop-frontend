// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    // apiSecret: '123',
    public: {
      apiUrl: process.env.API_URL,
      siteUrl: `https://${process.env.DOMAIN}`,
      siteName: process.env.SITE_NAME,
      language: 'ru-RU',
      trailingSlash: true,
    },
  },
  extends: [
    'nuxt-seo-kit',
  ],
  components: true,
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-vitest',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@unlighthouse/nuxt',
    // '@nuxtjs/tailwindcss',
    //   "nuxt-headlessui",
    //   "@pinia/nuxt",
  ],
  experimental: {
    reactivityTransform: true,
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
  // headlessui: {
  //   prefix: "",
  // },
  image: {
    dir: '~/assets/img',
  },
  googleFonts: {
    families: {
      Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  linkChecker: {
    failOn404: true,
  },
//   tailwindcss: {
//     config: {
//       plugins: [tailwindTypography],
//     },
//   },
})
