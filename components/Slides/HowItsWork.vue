<template>
  <div class="container">
    <div class="slide1 ">
      <div class="container_wrp">
        <div class="container_box">
          <h1 class="animate-show" :style="getDelay(3)">Как это работает?</h1>
          <ul class="just-list">
            <li class="animate-show" :style="getDelay(4)"><b class="font-title text-lg">Заполните свои данные </b>
            </li>
            <li class="animate-show" :style="getDelay(5)"><b class="font-title text-lg"> Оплатите услугу</b>
            </li>
            <li class="animate-show" :style="getDelay(6)"><b class="font-title text-lg">
              После оплаты -
            </b>
              пришлите своему специалисту качественное фото вашей основной ладони (левую, если вы левша,
              правую, если правша) + ребро, как показано на примере, возраст, имя и чек об оплате в Телеграм
            </li>
            <li class="animate-show" :style="getDelay(7)">
              <b class="font-title text-lg">Ожидайте вашу видеодиагностику в течении 2 суток после оплаты </b>
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

const {getDelay} = useAnimate({})

</script>

<style scoped>

</style>