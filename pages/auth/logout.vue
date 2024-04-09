<template>
  <div></div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useAuthStore} from "@/store/auth";
import {navigateTo} from "nuxt/app";


const authStore = useAuthStore()

onMounted(() => {
  authStore.reset()
  navigateTo('/auth/login')
})
</script>

<style scoped>

</style>