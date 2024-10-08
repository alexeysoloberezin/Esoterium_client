import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 4000 });

  return {
    provide: {
      toast,
    },
  };
});
