<template>
  <a :href="json.student.telegram" target="_blank" class="paymentItem">
    <h3>{{ customerEmail }}</h3>
    <h4>{{ json.student.telegram }}</h4>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  customerEmail: string,
  json: any,

}>()

const data = ref(null)

</script>

<style scoped lang="scss">
.paymentItem{
  background: #262525;
  outline: none;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 7px;
}
</style>