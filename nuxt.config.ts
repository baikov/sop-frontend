// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  runtimeConfig: {
    // apiSecret: '123',
    public: {
      siteUrl: process.env.NODE_ENV === 'production' ? `https://${process.env.DOMAIN}` : `http://${process.env.DOMAIN}`,
      apiUrl: process.env.API_URL || 'http://localhost:8000/api',
      siteName: process.env.SITE_NAME || 'Название сайта',
      // titleSeparator: '|',
      language: 'ru-RU',
    },
  },
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
    'nuxt-simple-sitemap', // https://github.com/harlan-zw/nuxt-simple-sitemap
    'nuxt-simple-robots', // https://github.com/harlan-zw/nuxt-simple-robots
    'nuxt-unhead', // https://github.com/unjs/unhead
    'nuxt-schema-org', // https://github.com/harlan-zw/unhead-schema-org
    'nuxt-headlessui',
    // '@unlighthouse/nuxt',
    // '@nuxtjs/tailwindcss',
    //   "@pinia/nuxt",
  ],
  // experimental: {
  //   reactivityTransform: true,
  // },
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
    // dir: 'assets/img',
    domains: [process.env.NODE_ENV === 'production' ? `${process.env.DOMAIN}` : '127.0.0.1:8000'],
    alias: {
      soptorg: process.env.NODE_ENV === 'production' ? `https://${process.env.DOMAIN}` : 'http://127.0.0.1:8000',
    },
  },
  googleFonts: {
    families: {
      Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
//   tailwindcss: {
//     config: {
//       plugins: [tailwindTypography],
//     },
//   },
})
