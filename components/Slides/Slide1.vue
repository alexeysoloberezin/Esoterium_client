<template>
  <div class="container">
    <div class="slide1">
      <div  class="container_wrp">
        <h1 :style="getDelay(1)">Откройте тайны своих линий рук с&nbsp;нашими экспертами по хиромантии!</h1>
        <p :style="getDelay(2)">Подключитесь к ведущим хиромантам мира, тщательно проверенным и&nbsp;сертифицированным для точности и&nbsp;профессионализма.</p>
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