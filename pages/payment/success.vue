<template>
  <div class="relative loginPage w-screen h-screen" style="background: #6b6982">
    <div class="absolute top-0 left-50 loginPage-image" style="transform: translateX(-50%)">
      <img  src="/hand.webp" alt="">
    </div>
    <div class="relative bg-card mx-auto py-3 z-10 text-white rounded-lg" style="max-width: 450px">
      <h1 class="text-center my-2">Успешная оплата</h1>
      <h3 v-if="loading" class="text-center my-2">Ожидайте получения контакта...</h3>
    </div>
  </div>

  <Dialog v-model:visible="visible" modal :closable="false" class="successTelegramModal">
    <TelegramContact :telegram="telegram" :show-close="true" @update:close="() => close()"/>
  </Dialog>
</template>

<script setup lang="ts">
import {navigateTo, useNuxtApp, useRoute} from "nuxt/app";
import {onMounted, Ref} from "vue";
import {useApi} from "@/composables/useApi";
import TelegramContact from "@/components/TelegramContact.vue";

const visible = ref(false)
const telegram = ref('')
const route = useRoute()
const {_payform_order_id, _payform_status} = route.query
const loading = ref(false)

const close = () => {
  visible.value = false
  navigateTo('/')
}

type Payment = {
  customerEmail: string;
  id: string;
  json: string;
  orderId: any;
  paymentToken: string;
}

onMounted(async () => {
  const localToken = localStorage.getItem('paymentToken')

  const tokenCorrect = localToken === _payform_order_id
  loading.value = true

  // const {status: getPaymentStatus, data: tokenData} = await useApi('payment/getPaymentToken', {
  //   method: 'post',
  //   body: {
  //     token: localToken
  //   }
  // })

  // if (getPaymentStatus.value !== 'success') {
  //   useNuxtApp().$toast?.error('Ошибка, токен не действителен')
  //   loading.value = false
  //   return
  // }

  const {data, status, error} : {data: Ref<Payment>, status: any, error: any} = await useApi('payment/getPaymentInfoByPayform_order_id', {
    method: 'post',
    body: {
      token: _payform_order_id
    }
  })

  if (status.value !== 'success') {
    useNuxtApp().$toast.error('Не успешная оплата.')
    loading.value = false
    return
  }

  const json = JSON.parse(data.value.json)

  const student = json?.student?.telegram

  if(!student){
    useNuxtApp().$toast.error('Данные по контактам отсутствуют')
    loading.value = false
    return
  }

  localStorage.setItem('student', JSON.stringify(student))
  telegram.value = student
  visible.value = true
  loading.value = false
})
</script>

<style lang="scss">
</style>