<template>
  <div class="container">
    <div class="relative" style="z-index: 100">
<!--      <div  class="container_wrp">-->
<!--        <h1 :style="getDelay(1)">Отзывы клиентов</h1>-->
<!--        -->
<!--      </div>-->
      <div class="reviews">
        <h1 class="pb-2">Отзывы клиентов</h1>
        <SliderCards :slidesPerView="1.03"
                     :spaceBetween="20"
                     :breakPoints="{
                    '900': {
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
          </template>
        </SliderCards>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Navigation, Pagination} from "swiper";
import SliderCards from "../SliderCards.vue";
import Review from "../ReviewUi.vue";

SwiperCore.use([Pagination, Navigation]);

const reviews = [
  {
    tag: "@lucy96",
    date: "17.12.2023",
    lost: "Lost 5 kg in month",
    text: "It works with your beliefs and helps you change them. Getting rid of old habits and acquiring new ones - this is what it is about"
  },
  {
    tag: "@flower_alexa",
    date: "15.01.2024",
    lost: "Lost 8 kg in 2 month",
    text: "I like this approach! Finally, I'm not limiting myself, but thinking about my eating habits. It helped me get in shape quickly after having a baby."
  },
  {
    tag: "@roxysun",
    date: "12.02.2024",
    lost: "Lost 4  kg in month",
    text: "I really love this program. There is a lot of useful information, you can choose the rate of weight loss yourself, it is especially convenient to get in shape for the holidays. Hopefully, Sanita will make tracking meals even more convenient."
  },
  {
    tag: "@nn.1ove",
    date: "11.10.2023",
    lost: "Lost 10 kg in 3 month ",
    text: "I recommend it to everyone! Previously, it was difficult for me not to break down after regular diets and workouts in the gym. But during the course, the desire to break down gradually disappeared and this is valuable."
  },
  {
    tag: "@loolamoon",
    date: '16.11.2024',
    lost: " Lost 6 kg in month ",
    text: "The Sanita course is very balanced and suitable for everyone, not only those who want to lose weight, but also those who want to live a healthy life. Tips and recommendations, useful tables and explanations have closed all the gaps in understanding the topic. Coaches in gyms don't explain such things."
  },
  {
    tag: "@Maxinnne",
    date: "26.01.2024",
    lost: "Lost 3 kg in two weeks",
    text: "The functions of the service are gradually expanding, which is encouraging. While this is happening, I can safely go through the theoretical part, which prepares me as a professional nutritionist. I have not seen this before, but I feel the result from the first use."
  }
]
</script>

<style>
.reviews{
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 100px);
}
</style>