<template>
  <div class="container">
    <div class="slide1">
      <div  class="container_wrp">
        <h1 :style="getDelay(1)">Узнайте всё о себе</h1>
        <h2 :style="getDelay(2)">
          Через расшифровку линий на ладони <br />с&nbsp;лучшими экспертами по Хиромантии в&nbsp;истории!</h2>
         <p :style="getDelay(3)" class="pt-2"> Обратитесь к ведущим специалистам и раскройте свой потенциал на максимум.</p>
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