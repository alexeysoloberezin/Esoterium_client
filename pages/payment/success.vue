<template>
  <h1>Success</h1>
  {{ route.query }}


  <Dialog v-model:visible="visible" modal :closable="false" class="successTelegramModal">
    <TelegramContact :telegram="telegram" :show-close="true" @update:close="() => close()"/>
  </Dialog>
</template>

<script setup lang="ts">
import {navigateTo, useNuxtApp, useRoute} from "nuxt/app";
import {onMounted} from "vue";
import {useApi} from "@/composables/useApi";
import TelegramContact from "@/components/TelegramContact.vue";

const visible = ref(false)
const telegram = ref('')
const route = useRoute()
const {_payform_order_id, _payform_status} = route.query

const close = () => {
  visible.value = false
  navigateTo('/')
}

onMounted(async () => {
  const localToken = localStorage.getItem('paymentToken')

  const tokenCorrect = localToken === _payform_order_id

  if (
      _payform_status !== 'success'
      || !tokenCorrect
  ) {
    if (!tokenCorrect) {
      useNuxtApp().$toast?.error('Токен не найден или уже использован')
    } else if (_payform_status !== 'success') {
      useNuxtApp().$toast?.error('Статус платежа не успешен')
    }
    // todo: error page
    console.log('ERROR')

    return
    // navigateTo('/payment/error')
  }

  const {status: getPaymentStatus, data: tokenData} = await useApi('payment/getPaymentToken', {
    method: 'post',
    body: {
      token: localToken
    }
  })

  if (getPaymentStatus.value !== 'success') {
    useNuxtApp().$toast?.error('Ошибка, токен не действителен')
    return
  }

  const {data, status, error} = await useApi('client/create', {
    method: 'post',
    body: tokenData.value
  })

  if (status.value !== 'success' || !data.value?.student) {
    useNuxtApp().$toast.error('Ошибка при создании клиента')
    return
  }

  const {student} = data.value as any

  if (!student) {
    useNuxtApp().$toast.error('Ошибка при создании студента')
    return
  }

  localStorage.setItem('student', JSON.stringify(student))
  telegram.value = student.telegram || 'test telegram'
  localStorage.removeItem('paymentToken')
  visible.value = true
})
</script>

<style lang="scss">
.successTelegramModal {
  width: 26rem;
  border-radius: 15px;
  overflow: hidden;
  background: #000;

  .p-dialog-content {
    background: #434a72;
  }
}
</style>