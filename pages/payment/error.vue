<template>
  <h1>Success</h1>
  {{ route.query  }}
</template>

<script setup lang="ts">
import {useRoute} from "nuxt/app";

const route = useRoute()
</script>

<style scoped>

</style>