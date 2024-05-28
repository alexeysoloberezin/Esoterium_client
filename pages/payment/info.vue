<template>
  <div class="infoPage Land">
    <span class="Land-line Land-line-1"></span>
    <span class="Land-line Land-line-2"></span>
    <span class="Land-line Land-line-3"></span>
    <span class="Land-line Land-line-4"></span>

    <div class="infoPage-form">
      <h3 class="mb-2">Введите Email который указывали при оплате.</h3>
      <input v-model="email" class="infoPage-inp" placeholder="Email" type="text">

      <button class="telegramContact-btn mt-2" @click="fetchList">
        {{
          loading
              ? 'Загрузка...'
              : 'Получить список оплат'
        }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useNuxtApp} from "nuxt/app";

const email = ref('')
const array: any = ref([])
const loading = ref(false)

const fetchList = async () => {
  if(!email.value){
    useNuxtApp().$toast?.error('Email обязателен!')
    return
  }

  loading.value = true
  try {
    const {data, status} = useApi('payment/getPaymentListByEmail', {
      method: 'post',
      body: {
        email: email.value
      }
    })

    if(status.value === 'success'){
      array.value = data.value || []
    }
  }catch (err){

  }finally {
    loading.value = false
  }
}
</script>

<style  lang="scss">
.infoPage {
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