<template>
  <div class="infoPage Land">
    <span class="Land-line Land-line-1"></span>
    <span class="Land-line Land-line-2"></span>
    <span class="Land-line Land-line-3"></span>
    <span class="Land-line Land-line-4"></span>

    <div class="infoPage-form">
      <div>
        <NuxtLink to="/">
          <Button severity="secondary" class="mb-3">
          <span class="flex items-center gap-2">
            <svg  style="width: 15px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><title>arrow-expand-left</title><path fill="#000" d="M20,22H22V2H20V11H5.83L11.33,5.5L9.92,4.08L2,12L9.92,19.92L11.33,18.5L5.83,13H20V22Z" /></svg>
           Назад
          </span>
          </Button>
        </NuxtLink>

      </div>
      <h3 class="mb-3">Введите Email который указывали при оплате.</h3>
      <input v-model="email" class="infoPage-inp" placeholder="Email" type="text">

      <button class="telegramContact-btn mt-3" @click="fetchList">
        {{
          loading
              ? 'Загрузка...'
              : 'Получить список оплат'
        }}
      </button>

      <div v-if="array.length" class="mt-4">
        <PaymentItem
            v-for="(el, index) in array"
            :key="el.id"
            :json="JSON.parse(el.json)"
            :number="index + 1"
            :customer-email="el.customerEmail"
            class="mb-2"
        />
      </div>
    </div>




    <Dialog v-model:visible="visible" modal  :style="{ width: '25rem' }">
      <div class="p-3">
        <h4>{{ message }}</h4>
        <span class="p-text-secondary block mb-5">Введите последние 4 цифры номера телефона:</span>
        <div class="flex align-items-center gap-3 mb-3">
          <label for="username" class="font-semibold w-6rem">Телефон</label>
          <InputMask v-model="phone" id="username" mask="9999" placeholder="9999" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
          <label for="email" class="font-semibold w-6rem">Email</label>
          <InputText v-model="email" id="email" class="flex-auto" readonly disabled autocomplete="off" />
        </div>
        <div class="flex justify-content-end gap-2">
          <Button type="button" label="Закрыть" severity="secondary" @click="visible = false"></Button>
          <Button type="button" :label="loadingConfirm ? 'Загрузка...' : 'Получить список' " @click="confirmPhone"></Button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import {useNuxtApp} from "nuxt/app";
import {useApi} from "@/composables/useApi";
import PaymentItem from "@/components/PaymentItem.vue";

const email = ref('')
const phone = ref('')
const count: any = ref(0)
const message = ref('')
const array = ref([])

const loading = ref(false)
const loadingConfirm = ref(false)
const visible = ref(false)

const confirmPhone = async () => {
  if(phone.value.length !== 4){
    useNuxtApp().$toast?.error('Введите цифры телефона')
    return
  }

  loadingConfirm.value = true
  const {data, status}: any = await useApi('/client/checkPhone', {
    method: 'post',
    body: {
      email: email.value,
      phone: phone.value
    }
  })

  if(status.value === 'success'){
    if(data.value.status === 'success'){
      useNuxtApp().$toast?.success(data.value.message)
      array.value = data.value.paymentList
      phone.value = ''
      visible.value = false
    }else{
      useNuxtApp().$toast?.error(data.value.message)
    }
  }else if (status.value === 'error'){
    useNuxtApp().$toast?.error('Ошибка')
  }
  loadingConfirm.value = false
}

const fetchList = async () => {
  if(!email.value){
    useNuxtApp().$toast?.error('Email обязателен!')
    return
  }

  loading.value = true
  try {
    const {data, status}: any = await useApi('/client/getPaymentsByEmail', {
      method: 'post',
      body: {
        email: email.value
      }
    })
    console.log('status', status)
    // todo confirm

    if(status.value === 'success'){
      message.value = data.value?.message || ''
      count.value = data.value?.count || 0
      visible.value = true
    }else if (status.value === 'error'){
      useNuxtApp().$toast?.error('Ошибка')
    }
  }catch (error){
     if (error.value?.data?.message) {
      useNuxtApp().$toast?.error(error.value.data.message)
    } else {
      useNuxtApp().$toast?.error('Ошибка')
    }
    console.error('err', err)
  }finally {
    loading.value = false
  }
}
</script>

<style  lang="scss">
.infoPage {
  min-height: 100vh;
  padding-bottom: 50px;
  &-inp {
    background: #262525;
    outline: none;
    height: 42px;
    width: 100%;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 7px;
  }

  .Land-line {
    opacity: 0.03 !important;
  }

  &-form {
    position: relative;
    z-index: 200;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>