// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt'
  ],
  target: 'static',
  router: {
    base: '/test-qa.github.io/',
  },
})
