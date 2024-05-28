<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {navigateTo} from "nuxt/app";
definePageMeta({
  middleware: [
    'student',
  ],
});

const tehWorks = ref(true)

onMounted(() => {
  if (tehWorks.value) {
    navigateTo('/auth/login')
  }
})


</script>

<style scoped>

</style>