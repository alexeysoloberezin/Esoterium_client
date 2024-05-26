<template>
  <AdminLayout>
    <MainLayout>
      {{ data }}
    </MainLayout>
  </AdminLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import {useApi} from "@/composables/useApi";
import {useNuxtApp} from "nuxt/app";
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";
import {calcSumByClient} from '@/js/calcSumByClient'

const {data} = useApi('/payment/getPaymentList', {
  method: 'get'
})
</script>

<style scoped>

</style>