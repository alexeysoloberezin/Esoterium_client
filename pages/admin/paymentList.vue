<template>
  <AdminLayout>
    <MainLayout>
      <DataTable :value="arr" paginator :rows="15" :rowsPerPageOptions="[5, 10, 20, 50]"
                 tableStyle="min-width: 50rem">
        <Column header="Ордер ID">
          <template #body="slotProps">
            {{ slotProps.data.order_id }}
          </template>
        </Column>
        <Column field="sum" header="Сумма"></Column>
        <Column field="customer_phone" header="Сумма"></Column>
        <Column field="customer_email" header="Сумма"></Column>
        <Column field="customer_extra" header="Сумма"></Column>
        <Column field="payment_type" header="Статус"></Column>
        <Column header="Создан">
          <template #body="slotProps">
            <div class="flex align-items-center gap-2">
              <span>{{
                  slotProps.data.date ? new Date(slotProps.data.date).toLocaleString('ru-RU') : ''
                }}</span>
            </div>
          </template>
        </Column>
      </DataTable>

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
import {computed} from "vue";

const {data} = useApi('/payment/getPaymentList', {
  method: 'get'
})

const arr = computed(() => {
  if (!Array.isArray(data.value)) {
    return []
  }
  return data.value.map(el => JSON.parse(el.json))
})
</script>

<style scoped>

</style>