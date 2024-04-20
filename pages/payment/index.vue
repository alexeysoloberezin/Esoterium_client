<template>
  <h1>Payment</h1>

  <form  class="surface-card relative z-5 p-4 shadow-2 mx-auto  border-round  w-full"
         style="max-width: 700px">
    <div>
      <label for="em" class="block text-900 font-medium mb-2">Почта</label>
      <InputText v-model="form.email" id="em" type="text" class="w-full mb-3"/>

      <label for="phone" class="block text-900 font-medium mb-2">Телефон</label>
      <InputText v-model="form.phone" id="phone" type="text" class="w-full mb-3"/>

      <Button  @click="pay" icon="pi pi-user" class="w-full">
        {{ loading ? 'loading' : 'pay' }}
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">

import {useNuxtApp} from "nuxt/app";

const form = ref({
  email: '',
  phone: '',
})

import {useApi} from "@/composables/useApi";

const loading = ref(false)

const pay = async () => {
  console.log('pay')
  loading.value = true
  try {
    localStorage.removeItem('paymentToken')

    const {status, data, error}: any = await useApi('/payment/getPaymentLink', {
      method: 'post',
      body: form.value
    })

    if(error.value){
      if(Array.isArray(error.value.data.message) && error.value.data.message.length){
        useNuxtApp().$toast?.error(error.value.data.message.join('\n----\n'))
      }else{
        useNuxtApp().$toast?.error('Ошибка')
      }
      return
    }

    if(data.value?.token && data.value?.link){
      localStorage.setItem('paymentToken', data.value.token)
      window.location.href = data.value.link
    }
  } catch (err) {
    console.log('e', err)
  }finally {
    loading.value = false
  }
}
</script>

<style scoped>

</style>