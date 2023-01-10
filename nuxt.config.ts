// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@vueuse/nuxt'],

  css: ['assets/css/main.css', 'assets/css/fonts.css'],

  app: {
    head: {
      title: 'NOISE | Digital Atelier',
      meta: [
        { name: 'description', content: 'Digital Atelier - Milan' },
        { name: 'theme-color', content: '#EF6455' }, // peach theme
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
})
