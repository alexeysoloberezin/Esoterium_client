// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: false
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-primevue'
  ],
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    'primevue/resources/themes/aura-light-pink/theme.css'
  ],
  primevue: {
    /* Options */
    components: {
      include: ['Button', 'Toast','Chart', 'Badge','Card', 'Dropdown', 'Message', 'Tag', 'DataTable','Menubar', 'InputText', 'Checkbox', 'Column', 'Dialog', 'ConfirmPopup']
    }
  },
  devtools: { enabled: true }
})
