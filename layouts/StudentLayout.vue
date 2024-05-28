<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   middleware: [
//     'student',
//   ],
// });
import {navigateTo} from "nuxt/app";

const tehWorks = ref(true)

onMounted(() => {
  if (tehWorks.value) {
    navigateTo('/auth/login')
  }
})


</script>

<style scoped>

</style>