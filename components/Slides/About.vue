<template>
  <div class="container">
    <div class="slide1 ">
      <div class="container_wrp">
        <div class="container_box">
          <h1 class="animate-show" :style="getDelay(1)">О нас</h1>
          <p class="animate-show" :style="getDelay(2)">
            Мы в <b>ESOTERIUM</b> доказали, что хиромантия - это наука, раскрывающая аспекты вашей личности и
            судьбы, на основе
            глубокого анализа линий и знаков на ладони. Всё это работает, благодаря сильнейшей связи нашего мозга и рук,
            подробнее об этом смотрите в видео. Также в конце видео я подготовила в подарок простейшую, но
            результативную практику изобилия!
          </p>
          <a class="my-3 block animate-show" target="_blank" :style="getDelay(3)"
             href="https://www.youtube.com/watch?v=Tjhnfsffs3M">
            <YoutubeButton/>
          </a>
          <p class="animate-show pt-2" :style="getDelay(2)">
            Наша платформа соединяет вас с профессиональными хиромантами, которые прошли строгую проверку и
            подтверждение их навыков и опыта. Здесь вы найдете прогноз и анализ прошлого, настоящего и будущего,а также
            глубокие осознания и понимание своих сил и возможностей.
          </p>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useAnimate} from "@/composables/useAnimate";
import YoutubeButton from "@/components/YoutubeButton.vue";

const {getDelay} = useAnimate({})

</script>

<style scoped>

</style>