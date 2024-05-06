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
    '~/assets/css/main.scss',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    'primevue/resources/themes/aura-light-pink/theme.css'
  ],
  plugins: ['~/plugins/swiper.ts'],
  primevue: {
    /* Options */
    components: {
      include: ['Button', 'Toast','Chart', 'Badge','Card','Avatar','InputMask', 'Dropdown','Galleria', 'Message', 'Tag', 'DataTable','Menubar', 'InputText', 'Checkbox', 'Column', 'Dialog','Image', 'ConfirmPopup']
    }
  },
  devtools: { enabled: true }
})
