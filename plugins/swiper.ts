import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Swiper', Swiper);
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide);
});