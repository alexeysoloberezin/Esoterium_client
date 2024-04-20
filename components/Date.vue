<template>
  <div class="flex text-muted font-medium text-xs">
    <svg style="width: 20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <h3 class="mt-0.5">{{ date }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  date: string
}>()
</script>

<style scoped>

</style>