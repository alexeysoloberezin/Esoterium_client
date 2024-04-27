<template>
  <div class="absolute top-0 left-50 loginPage-image" style="transform: translateX(-50%)">
    <img  src="/hand.webp" alt="">
  </div>
  <div class="relative bg-card mx-auto py-3 z-10 text-white rounded-lg" style="max-width: 450px">
    <h1 class="text-center my-2">Ошибка оплаты</h1>
    <h3>{{ route.query }}</h3>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "nuxt/app";

const route = useRoute()
</script>

<style scoped>

</style>