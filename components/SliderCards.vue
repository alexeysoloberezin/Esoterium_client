<template>
  <div>
    <div class="sliderCards relative mt-[70px] ">
      <swiper
          ref="slide2Swiper"
          @slideChange="onSlideChange"
          :slidesPerView="slidesPerView"
          :spaceBetween="spaceBetween"
          :classes="swiperCss"
          :breakpoints="breakPoints"
          :pagination="{
            type: 'fraction',
            el: '.swiper-pagination',
            clickable: true,
          }"
          class=""
      >
        <div v-if="width > 700" class="swiper-pagination  sliderCards-pagination  font-semibold">
        </div>

        <slot name="slides">
        </slot>
      </swiper>
    </div>
  </div>

</template>

<script setup lang="ts">
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import {ref, watch} from "vue";
import {useWindowSize} from "@vueuse/core";

const {slidesPerView,breakPoints, spaceBetween, swiperCss, navigation} = withDefaults(defineProps<{
  slidesPerView?: number,
  spaceBetween?: number,
  swiperCss?: string,
  breakPoints?: any,
  navigation?: boolean
}>(), {
  slidesPerView: 1.1,
  navigation: true,
  swiperCss: '',
  spaceBetween: 24,
  breakPoints: {
    '700': {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    '768': {
      slidesPerView: 3,
    },
    '1000': {
      slidesPerView: 4,
    },
    '1400': {
      slidesPerView: 5,
    }
  }
});

SwiperCore.use([Pagination, Navigation]);

const slide2Swiper = ref(null);
const activeIndex = ref(0)
const { width, height } = useWindowSize()

const onSlideChange = (data: any) => {
  activeIndex.value = data.activeIndex
};

</script>

<style>
@media (max-width: 768px) {
  .sliderCards .swiper{
    overflow: visible;
  }
}
.sliderCards-pagination{
  opacity: 0.4;
}
.sliderCards .swiper-wrapper{
  padding-bottom: 50px;
  cursor: grab
}

</style>