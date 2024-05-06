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
          <li class="animate-show" :style="getDelay(4)"><b class="font-title text-lg">Комфорт и качество:</b>
            мы вполняем и высылаем вам интереснейшую ВИДЕОдиагностику с подробным объяснением всех линий и знаков.
          </li>
          <li class="animate-show" :style="getDelay(5)"><b class="font-title text-lg">Удовлетворенность гарантирована:</b>
            Только у нас вы можете увидеть 100% положительных отзывов! Если вы останетесь недовольны услугой - мы вернём вам деньги.
          </li>
          <li  class="animate-show" :style="getDelay(5)">
            <b class="font-title text-lg">Обратная связь:</b>
            вы сможете задать любые интересующие вопросы своему специалисту и получить развёрнутый ответ.
          </li>
        </ul>

        <div class="sm:flex">
          <div class="sm:col-4">
            <Image class=" img-example" src="/hands/IMG_9567.jpg" alt="Image"  preview />
          </div>
          <div class="sm:col-4">
            <Image class=" img-example" src="/hands/IMG_9839.jpg" alt="Image"  preview />
          </div>
          <div class="sm:col-4">
            <Image class=" img-example" src="/hands/IMG_9840.jpg" alt="Image"  preview />
          </div>
        </div>
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