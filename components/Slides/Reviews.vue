<template>
  <div class="container">
    <div class="relative" style="z-index: 100">
      <!--      <div  class="container_wrp">-->
      <!--        <h1 :style="getDelay(1)">Отзывы клиентов</h1>-->
      <!--        -->
      <!--      </div>-->
      <div class="reviews">
        <h1 class="pb-2 sm:flex items-center gap-3" style="align-items: center">
          <div>Отзывы клиентов</div>
          <Button @click="displayBasic = true" class="mt-3 sm:mt-0 w-fit h-fit">
            Все отзывы
          </Button>
        </h1>
        <SliderCards :slidesPerView="1.03"
                     :spaceBetween="20"
                     :autoHeight="true"
                     :breakPoints="{
                    '900': {
                       autoHeight: false,
                        slidesPerView: 2,
                        spaceBetween: 24,
                      }}
                    "
        >
          <template #slides>
            <swiper-slide v-for="(review, index) in reviews" :key="index">
              <Review
                  :tag="review.tag"
                  :date="review.date"
                  :lost="review.lost"
                  :image="`/reviewAva_${index + 1}.png`"
                  :text="review.text"
              />
            </swiper-slide>
            <swiper-slide >
              <div @click="displayBasic = true" class="reviewUi-box cursor-pointer">
                <div class="reviewUi bg-card flex flex-col py-[38px] px-[30px] rounded-xl shadow-sm  lg:min-h-[336px]">
                  <div class="flex gap-3 w-full">
                    <div class="flex flex-col justify-center ">
                      <div class="font-semibold text-xl description"></div>
                    </div>
                    <div class="ml-auto">
                      <Quotes/>
                    </div>
                  </div>
                  <h2>Все отзывы:</h2>
                  <p class="reviewUi-text sm:mt-9 mt-3 mb-[30px] min-h-[60px]">
                    Нажмите здесь, что бы ознакомится с нашими отзывами, за последнее время.
                  </p>
                  <Button class="w-fit">
                    Открыть
                  </Button>
                  <div class="flex items-center justify-between w-full">
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>
        </SliderCards>


      </div>
    </div>
  </div>
  <Galleria v-model:visible="displayBasic" :value="imgs" :responsiveOptions="responsiveOptions"  containerStyle="width: 400px;max-width: 95vw;height: auto;" :circular="true" :fullScreen="true" :showItemNavigators="true">
    <template #item="slotProps">
      <img :src="slotProps.item" :alt="'Review'" style=" display: block;object-fit: contain;max-height: 95vh;max-width: 90vw;" />
    </template>
<!--    <template #thumbnail="slotProps">-->
<!--      <img :src="slotProps.item" :alt="'Review'" style="display: block;" />-->
<!--    </template>-->
  </Galleria>

</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Navigation, Pagination} from "swiper";
import SliderCards from "../SliderCards.vue";
import Review from "../ReviewUi.vue";
import Quotes from "@/components/icon/Quotes.vue";

SwiperCore.use([Pagination, Navigation]);

const images = computed(() => {
  return reviews.map(r => r.img)
});
const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
const displayBasic = ref(false);



const reviews = [
  {
    tag: "Юлия",
    date: "2024",
    lost: "Диагностика",
    img: '',
    text: "Много раз переслушала мою диагностику. Все очень про меня. Есть, то о чем я знала, но мне прям нужно было это услышать. И есть действительно определенные страхи. Которые я бы хотела изменить в коррекции. Очень рада что нашла вас."
  },
  {
    tag: "Анна",
    date: "2024",
    lost: "Коррекция",
        img: '',
    text: "Вира, здравствуйте! Я не много в шоке сейчас, что-то прям было сказано до мурашек, коррекцию буду заказывать точно, тем более из-за линии экстрасенса)"
  },
  {
    tag: "Ксения",
    date: "2024",
    lost: "Коррекция",
        img: '',
    text: "Хочу оставить отзыв о коррекции, это просто чудо какое-то я наконец то сдала на права, долго не получалось. Повысили зарплату, скоро выхожу замуж спасибо вам большое ..."
  },
  {
    tag: "Алинна",
    date: "2024",
    lost: "Диагностика",
        img: '',
    text: "Здравствуйте, Большое спасибо за диагностику, очень откликаются многие моменты и описывают меня, я в приятном шоке, как линии на руке говорят о нас так много)"
  },

]


const imgs = [
    '/reviews/IMG_3294.png',
    '/reviews/IMG_3295.png',
    '/reviews/IMG_3296.png',
    '/reviews/IMG_3297.png',
    '/reviews/IMG_3299.png',
    '/reviews/IMG_3300.png',
    '/reviews/IMG_5979.png',
    '/reviews/IMG_6172.png',
    '/reviews/IMG_6298.png',
    '/reviews/IMG_6616.png',
    '/reviews/IMG_7222.png',
    '/reviews/IMG_7871.png',
    '/reviews/IMG_7913.png',
    '/reviews/IMG_7913.png',
    '/reviews/IMG_7914.png',
    '/reviews/IMG_8366.png',
    '/reviews/IMG_8393.png',
    '/reviews/IMG_8809.png',
    '/reviews/IMG_8847.png',
    '/reviews/IMG_8858.png',
    '/reviews/IMG_8859.png',
    '/reviews/IMG_8980.png',
    '/reviews/IMG_9169.png',
    '/reviews/IMG_9170.png',
    '/reviews/IMG_9204.png',
    '/reviews/IMG_9333.png',
]
</script>

<style lang="scss">
.reviews {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  @media (max-width: 1000px) {
    min-height: initial;
  }
}
</style>