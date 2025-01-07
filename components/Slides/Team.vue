<template>
  <div class="container">
    <div class="relative" style="z-index: 100">
      <!--      <div  class="container_wrp">-->
      <!--        <h1 :style="getDelay(1)">Отзывы клиентов</h1>-->
      <!--        -->
      <!--      </div>-->
      <div class="reviews" style="user-select: none">
        <h1 class=" sm:flex items-center gap-3 mb-0" style="align-items: center">
          <div>ВАШИ ТОПОВЫЕ ХИРОМАНТЫ</div>
<!--          <Button @click="displayBasic = true" class="mt-3 sm:mt-0 w-fit h-fit">-->
<!--            Все отзывы-->
<!--          </Button>-->
        </h1>
        <div class="mt-1">СУДЬБА САМА РЕШИТ К КОМУ ВЫ ПОПАДЁТЕ!</div>
        <ul class="lists">
          <li>Екатерина</li>
          <li>Вероника</li>
          <li>Анастасия</li>
        </ul>

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
              <div class="team">
                <img :src="`/team/t${index+1}.jpg`" class="teamImage" alt="">

                <div class="team-text">
                  <div v-html="review.txt" class="mb-2"></div>
                  <Button @click="showReviews(index)" class="mt-3 sm:mt-0 w-fit h-fit">
                    Отзывы
                  </Button>
                </div>
              </div>
            </swiper-slide>

          </template>
        </SliderCards>


      </div>
    </div>
  </div>
  <Galleria v-model:visible="displayBasic" :value="reviewsImages" :responsiveOptions="responsiveOptions"  containerStyle="width: 400px;max-width: 95vw;height: auto;" :circular="true" :fullScreen="true" :showItemNavigators="true">
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
const activePerson = ref(0)

const showReviews = (index: number) => {
  activePerson.value = index
  displayBasic.value = true
}
const reviewsImages = computed(() => {
  switch (activePerson.value) {
    case 2:
      return [
          '/team/reviews/ana_1.jpg',
          '/team/reviews/ana_2.jpg',
          '/team/reviews/ana_3.jpg',
          '/team/reviews/ana_4.jpg',
          '/team/reviews/ana_5.jpg',
      ]
    case 0:
      return [
        '/team/reviews/kate_1.jpg',
        '/team/reviews/kate_2.jpg',
        '/team/reviews/kate_3.jpg',
        '/team/reviews/kate_4.jpg',
        '/team/reviews/kate_5.jpg',
      ]
    case 1:
      return [
        '/team/reviews/ver_1.jpg',
        '/team/reviews/ver_2.jpg',
        '/team/reviews/ver_3.jpg',
        '/team/reviews/ver_4.jpg',
        '/team/reviews/ver_5.jpg',
      ]
  }
})

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
    txt: `
      Я, <span class="text-sec">Екатерина Сарафанникова</span>, и у меня ведущая чакра-Анахата🤍<br/>
Жить в любви и дарить любовь всем вокруг это мой путь🌹<br/>
<br/>
•я знаю все о счастливом материнстве и браке
<br/><br/>
Всё это я передаю своим клиентам, чтобы они были счастливы и любимы, потому что «любовь спасет мир»🪐
    `
  },
  {
    txt: `Я <span class="text-sec">Вероника Тимохова</span>, хиромант с самой лучшей уникальной системой, обожаю удивлять людей и у меня сильная энергетика🪬✨<br/>
<br/>
Моя главная цель - помочь людям и сделать их счастливыми здесь и сейчас, научу вас жить в изобилии❤️‍🔥`

  },
  {
    txt: `
    Меня зовут <span class="text-sec">Анастасия Голубь</span> , но комфортней Настя🥰<br/><br/>

Я не боюсь меняться!<br/>
Люблю узнавать и заниматься чем-то новым, так я когда-то открыла для себя хиромантию!
<br/><br/>
Мой девиз: «Жизнь одна , не нужно быть как все»!
    `
  }
]


const imgs = [
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