<template>
  <div class="container">
    <div class="">
      <div class="container_wrp">
        <h1 :style="getDelay(1)">Преимущества нашей платформы!</h1>
        <ul class="just-list">
          <li class="animate-show" :style="getDelay(2)"><b class="font-title text-lg">
            Достоверность и проверка:
          </b>Все наши хироманты проходят тщательный отбор и сертификацию.
          </li>
          <li class="animate-show" :style="getDelay(3)"><b class="font-title text-lg">Конфиденциальность и безопасность:</b>
            Ваши личные данные и сеансы конфиденциальны и защищены.
          </li>
          <li class="animate-show" :style="getDelay(4)"><b class="font-title text-lg">Гибкость и удобство:</b>
            Доступ к чтению ладоней из любой точки мира в любое время.
          </li>
          <li class="animate-show" :style="getDelay(5)"><b class="font-title text-lg">Удовлетворенность гарантирована:</b>
            Мы гарантируем качество каждой консультации.
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useAnimate} from "@/composables/useAnimate";

const { getDelay } = useAnimate({})

</script>

<style lang="scss" scoped>

</style>