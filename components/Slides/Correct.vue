<template>
  <div class="container">
    <div class="slide1 ">
      <div class="container_wrp">
        <div class="container_box">
          <h1 class="animate-show" :style="getDelay(1)">Коррекция линий и знаков на ладони…</h1>
          <p class="animate-show" :style="getDelay(2)">
            Это уникальная методика по улучшению жизни через глубокую, но лёгкую, работу с мозгом и подсознанием. Достижение любых целей и реализация желаемого в самые короткие сроки гарантирована!
            <br/>Подробнее о результатах после коррекции и как это работает вы можете узнать в видео:
          </p>
          <a class="mt-3 block animate-show" target="_blank" :style="getDelay(3)" href="https://www.youtube.com/watch?v=Tjhnfsffs3M">
            <YoutubeButton />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAnimate} from "@/composables/useAnimate";
import YoutubeButton from "@/components/YoutubeButton.vue";

const {getDelay} = useAnimate({})
</script>

<style scoped>

</style>