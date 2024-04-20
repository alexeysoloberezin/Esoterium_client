<template>
  <div class="container">
    <div class="slide1 ">
      <div  class="container_wrp">
        <div class="container_box">
          <h1 class="animate-show" :style="getDelay(1)">О нас</h1>
          <p class="animate-show" :style="getDelay(2)">
            Мы в
            <b class="font-title ttu">Esoterium</b>
            верим, что хиромантия – это искусство и наука, раскрывающая скрытые аспекты вашей личности и судьбы. Наша
            платформа соединяет вас с профессиональными хиромантами, которые прошли строгую проверку и подтверждение их
            навыков и опыта. Здесь вы найдете не только гадания, но и глубокое понимание своих сил и возможностей.
          </p>
        </div>

        <div class="container_box">
          <h1 class="animate-show" :style="getDelay(3)">Как это работает?</h1>
          <ul class="just-list">
            <li class="animate-show" :style="getDelay(4)"><b class="font-title text-lg">Создайте аккаунт -</b>
              Регистрация проста и займет всего несколько минут.
            </li>
            <li class="animate-show" :style="getDelay(5)"><b class="font-title text-lg">Выберите хироманта -</b> Просмотрите профили, отзывы и рейтинги наших экспертов.
            </li>
            <li class="animate-show" :style="getDelay(6)"><b class="font-title text-lg">Запишитесь на консультацию -</b> Выберите удобное для вас время и забронируйте
              сеанс.
            </li>
            <li class="animate-show" :style="getDelay(7)"><b class="font-title text-lg">Получите ваше чтение -</b> Встречайтесь с вашим хиромантом онлайн и исследуйте
              загадки ваших ладоней.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useAnimate} from "@/composables/useAnimate";

const { getDelay } = useAnimate({})

</script>

<style scoped>

</style>