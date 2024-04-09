<template>
  <div>
    <DataTable :value="clients" paginator :rows="15" :rowsPerPageOptions="[5, 10,15, 20, 50]"
               tableStyle="min-width: 50rem">
      <Column field="email" header="Почта" ></Column>
      <Column field="name" header="Имя" ></Column>
      <Column field="phone" header="Телефон" ></Column>
      <Column field="createdAt" header="Дата заказа" >
        <template #body="slotProps">
          <div class="flex align-items-center gap-2">
            <span>{{ slotProps.data.createdAt ? new Date(slotProps.data.createdAt).toLocaleString('ru-RU') : '' }}</span>
          </div>
        </template>
      </Column>
      <Column header="Доход" >
        <template #body="slotProps">
          <div>
            <Tag severity="success" value="Success">+500 ₽</Tag>
          </div>
        </template>
      </Column>
<!--      <Column header="Действия" >-->
<!--        <template #body="slotProps">-->
<!--          <div class="flex align-items-center gap-2">-->
<!--            <Button size="small" outlined>Удалить</Button>-->
<!--          </div>-->
<!--        </template>-->
<!--      </Column>-->
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import {useApi} from "@/composables/useApi";

const props = defineProps<{
  clients: any
}>()
</script>

<style scoped>

</style>