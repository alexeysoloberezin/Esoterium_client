<template>
  <StudentLayout>
    <MainLayout>
      <div class="px-4">
        <RouterLink v-if="!isCorrect?.isCorrect" to="/student/profile" class="no-underline">
          <Message severity="warn" class="hover:shadow-2 transition-duration-150" :closable="false" icon="pi pi-send">
            Вам нужно заполнить данные профиля
          </Message>
        </RouterLink>
        <h1>Ваша статистика - {{ me?.email }}</h1>
        <div v-if="clients" class="grid">
          <div class="col-3 p-2">
            <Card class="border-primary border-1">
              <template #content>
                <div class="flex align-items-center gap-2">
                   <span
                       class="w-1rem h-2rem text-primary border-circle inline-flex justify-content-center align-items-center text-center">
                        <i class="pi pi-users"/>
                    </span>
                  <span class="text-secondary font-semibold line-height-2 text-sm">Количество заказов:</span>
                  <span class="font-bold text-primary text-xl">{{ clients?.length }} шт.</span>
                </div>
              </template>
            </Card>
          </div>
          <div class="col-3 p-2">
            <Card class="border-primary border-1">
              <template #content>
                <div class="flex align-items-center gap-2">
                   <span
                       class="w-1rem h-2rem text-primary border-circle inline-flex justify-content-center align-items-center text-center">
                        <i class="pi pi-dollar"/>
                    </span>
                  <span class="text-secondary font-semibold line-height-2 text-sm">Заработано в этом месяце:</span>
                  <span class="font-bold text-primary text-xl">{{ clientsInThisMonth?.length * pricePerClient }} ₽</span>
                </div>
              </template>
            </Card>
          </div>
          <div class="col-3 p-2">
            <Card class="border-primary border-1">
              <template #content>
                <div class="flex align-items-center gap-2">
                   <span
                       class="w-1rem h-2rem text-primary border-circle inline-flex justify-content-center align-items-center text-center">
                        <i class="pi pi-users"/>
                    </span>
                  <span class="text-secondary font-semibold line-height-2 text-sm">Количество заказов в этом месяце:</span>
                  <span class="font-bold text-primary text-xl">{{ clientsInThisMonth?.length }} шт.</span>
                </div>
              </template>
            </Card>
          </div>
          <div  class="col-3 p-2">
            <Card class="border-primary border-1">
              <template #content>
                <div class="flex align-items-center gap-2">
                   <span
                       class="w-1rem h-2rem text-primary border-circle inline-flex justify-content-center align-items-center text-center">
                        <i class="pi pi-dollar"/>
                    </span>
                  <span class="text-secondary font-semibold line-height-2 text-sm">Заработано за всё время:</span>
                  <span class="font-bold text-primary text-xl">{{ clients.length * pricePerClient }} ₽</span>
                </div>
              </template>
            </Card>
          </div>
        </div>
        <div class="grid">
          <div class="col-6 p-2">
            <Card
                class="student-card"
            >
              <template #content>
                <ClientChart
                    v-if="clients"
                    :clients="clients"
                />
              </template>
            </Card>
          </div>
          <div class="col-6 p-2">
            <Card class="student-card">
              <template #content>
                <ClientTable
                    :clients="clients"/>
              </template>
            </Card>
          </div>
        </div>

      </div>

    </MainLayout>
  </StudentLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import StudentLayout from "@/layouts/StudentLayout.vue";
import {useApi} from "@/composables/useApi";
import ClientTable from "@/components/student/ClientTable.vue";
import ClientChart from "@/components/student/ClientChart.vue";
import {computed} from "vue";

definePageMeta({
  middleware: [
    'student',
  ],
});

const {data: isCorrect} = useApi('auth/profileIsCorrect', {
  method: 'get'
})

const {data: clients, status, error, pending} = useApi('auth/student_clients', {
  method: 'get'
})

const {data: me} = useApi('auth/me', {
  method: 'get'
})

const pricePerClient = 500

const clientsInThisMonth = computed(() => {
  const arr: any = clients.value || []

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return  arr.filter(client => {
    const createdAt = new Date(client.createdAt);
    const createdAtMonth = createdAt.getMonth();
    const createdAtYear = createdAt.getFullYear();
    return createdAtMonth === currentMonth && createdAtYear === currentYear;
  });

})
</script>

<style>
.student-card {
  min-height: 510px
}
</style>