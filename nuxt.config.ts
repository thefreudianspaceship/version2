// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Nuxt Content module for markdown
  modules: ['@nuxt/content'],

  // Explicitly enable component auto-import
  components: true,

  // App configuration
  app: {
    head: {
      title: 'The Freudian Spaceship',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Towards a Fanonian Schizoanalysis' },
      ],
      link: [
        // Add Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;600;700&family=Bebas+Neue&display=swap' },
      ],
    },
  },


  // Global CSS
  css: [],

  // Development server configuration
  devServer: {
    port: 3000,
    host: '0.0.0.0', // Allow external access for SSH port forwarding
  },
})
