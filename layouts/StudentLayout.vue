<template>
  <div><slot></slot></div>
</template>

<script setup lang="ts">
definePageMeta({

  middleware: [
    'student',
  ],
});
</script>

<style scoped>

</style>