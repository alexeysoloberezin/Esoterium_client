<template>
  <div class="container">
    <div class="">
      <div class="container_wrp">
        <h1 :style="getDelay(1)"> Готовы узнать всё о себе, своём будущем и исполнить все свои мечты?<br/></h1>
        <p style="font-size: 15px">Стоимость диагностики всех сфер жизни по ладони <b>7500₽</b>, коррекция всех сфер
          жизни также
          <b>7500₽</b>, при покупке
          комбо Диагностика+Коррекция вы получите приятный подарок!
        </p>
        <p class="pt-2" style="font-size: 15px">Возможна оплата в рассрочку от банка без переплат и первоначального
          взноса.</p>

        <form class="relative z-5 p-4 shadow-2 form bg-card border-round  w-full mt-3"
              style="max-width: 700px">
          <div>
            <label for="em" class="block  font-medium mb-2">Почта</label>
            <InputText v-model="form.email" id="em" type="text" class="w-full p-2 mb-3"/>

            <label for="phone" class="block  font-medium mb-2">Телефон</label>
            <InputMask v-model="form.phone" id="phone" mask="+7(999)-999-99-99" placeholder="+7(912)-854-34-12"
                       class="w-full p-2 mb-3"/>

            <Button @click="pay" :loading="loading" :label="loading ? 'Загрузка...' : 'Купить'"
                    class="w-full py-2 flex hoverable text-center mt-2"></Button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useAnimate} from "@/composables/useAnimate";
import {useApi} from "@/composables/useApi";
import {useNuxtApp} from "nuxt/app";
import {onMounted} from "vue";
import axios from "axios";

const form = ref({
  email: '',
  phone: '',
})

const loading = ref(false)

const pay = async () => {
  loading.value = true

  try {
    localStorage.removeItem('paymentToken')

    const {status, data, error}: any = await useApi('payment/getPaymentLink', {
      method: 'post',
      body: form.value,
    })


    if (error.value) {
      if (Array.isArray(error.value.data.message) && error.value.data.message.length) {
        useNuxtApp().$toast?.error(error.value.data.message.join('\n----\n'))
      } else if (error.value?.data?.message) {
        useNuxtApp().$toast?.error(error.value.data.message)
      } else {
        useNuxtApp().$toast?.error('Ошибка')
      }
      loading.value = false
      return
    }

    if (data.value?.token && data.value?.link) {
      localStorage.setItem('paymentToken', data.value.token)
      window.location.href = data.value.link
    }
  } catch (err) {
    useNuxtApp().$toast.error(error.value?.data?.message || 'Ошибка запроса');
    loading.value = false
  } finally {
  }
}

const {getDelay} = useAnimate({})

</script>

<style lang="scss" scoped>
.form {
  color: #fff;

  .p-inputtext {
    background: rgba(82, 39, 39, 0.13);
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.32);
    }
  }

  //background: #000;
}
</style>