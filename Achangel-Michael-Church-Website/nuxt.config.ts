import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxt/fonts',
  ],

  fonts: {
  families: [
      {
        name: 'ThmanyahSerifDisplay',
        src: '/fonts/thmanyahserifdisplay-Light.woff2',
        weight: 300,
        style: 'normal',
      },
      {
        name: 'ThmanyahSerifDisplay',
        src: '/fonts/thmanyahserifdisplay-Regular.woff2',
        weight: 400,
        style: 'normal',
      },
      {
        name: 'ThmanyahSerifDisplay',
        src: '/fonts/thmanyahserifdisplay-Medium.woff2',
        weight: 500,
        style: 'normal',
      },
      {
        name: 'ThmanyahSerifDisplay',
        src: '/fonts/thmanyahserifdisplay-Bold.woff2',
        weight: 700,
        style: 'normal',
      },
      {
        name: 'ThmanyahSerifDisplay',
        src: '/fonts/thmanyahserifdisplay-Black.woff2',
        weight: 900,
        style: 'normal',
      },
    ],
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  image: {},

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: [
    '~/assets/styles/globals.css',
  ],
});