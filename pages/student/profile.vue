<template>
  <StudentLayout>
    <MainLayout>
      <form @submit.prevent="onSubmit" class="surface-card relative z-5 p-4 shadow-2 mx-auto  border-round  w-full" style="max-width: 700px">
        <div class="text-center mb-5">
          <!--      <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />-->
          <div class="text-900 text-3xl font-medium mb-3">Ваши данные</div>
        </div>

        <div>
          <label for="email1" class="block text-900 font-medium mb-2">Почта</label>
          <InputText v-model="form.email" disabled id="email1" type="text" class="w-full mb-3"/>

          <label for="password1" class="block text-900 font-medium mb-2">Телеграм</label>
          <InputText v-model="form.telegram" id="password1" type="text" class="w-full mb-3"/>

          <label for="paymentNumber" class="block text-900 font-medium mb-2">Карта или телефон для зарплаты</label>
          <InputText v-model="form.paymentNumber" id="paymentNumber" type="text" class="w-full mb-3"/>

          <label class="block text-900 font-medium mb-2">Банк получения зарплаты</label>
          <Dropdown v-model="form.paymentType" :options="paymentOptions"  optionValue="name" optionLabel="name" placeholder="Банк получения" class="w-full mb-3" />

          <Button :loading="loading" type="submit" label="Сохранить" icon="pi pi-save" class="w-full"></Button>
        </div>
      </form>
    </MainLayout>
  </StudentLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import StudentLayout from "@/layouts/StudentLayout.vue";
import {useAuthStore} from "@/store/auth";
import {useApi} from "@/composables/useApi";
import {useNuxtApp} from "nuxt/app";

const loading = ref(false)
const authStore = useAuthStore()

const { data: user, pending } = useApi('auth/me', {
  method: 'get',
  onResponse({ response }){
    console.log('r', response)
    if(response._data?.email){
      form.value = response._data
    }
  }
})

const paymentOptions = ref([
  { name: 'Тинькофф', code: 'Tinkoff' },
  { name: 'Сбербанк', code: 'Sberbank' },
]);

const form = ref({
  email: '',
  telegram: '',
  paymentNumber: '',
  paymentType: '',
})

const onSubmit = async () => {
  const { data: user, pending, status } = await useApi('auth/saveProfile', {
    method: 'post',
    body: form.value,
  })

  if(status.value === 'success'){
    useNuxtApp().$toast.success('Сохранено')
  }
}
</script>

<style scoped>

</style>