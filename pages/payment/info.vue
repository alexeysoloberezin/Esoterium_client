<template>
  <div class="infoPage Land">
    <span class="Land-line Land-line-1"></span>
    <span class="Land-line Land-line-2"></span>
    <span class="Land-line Land-line-3"></span>
    <span class="Land-line Land-line-4"></span>

    <div class="infoPage-form">
      <h3 class="mb-2">Введите Email который указывали при оплате.</h3>
      <input v-model="email" class="infoPage-inp" placeholder="Email" type="text">

      visible: {{ visible }}
      loading: {{ loading }}
      <button class="telegramContact-btn mt-2" @click="fetchList">
        {{
          loading
              ? 'Загрузка...'
              : 'Получить список оплат'
        }}
      </button>
    </div>


    <Button label="Show" @click="visible = true" />

    <Dialog v-model:visible="visible" modal  :style="{ width: '25rem' }">
      <div class="p-3">
        <h4>{{ message }}</h4>
        <span class="p-text-secondary block mb-5">Введите последние 4 цифры номера телефона:</span>
        <div class="flex align-items-center gap-3 mb-3">
          <label for="username" class="font-semibold w-6rem">Телефон</label>
          <InputText v-model="phone" id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
          <label for="email" class="font-semibold w-6rem">Email</label>
          <InputText v-model="email" id="email" class="flex-auto" readonly disabled autocomplete="off" />
        </div>
        <div class="flex justify-content-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
          <Button type="button" label="Save" @click="visible = false"></Button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import {useNuxtApp} from "nuxt/app";

const email = ref('')
const phone = ref('')
const count: any = ref(0)
const message = ref('')

const loading = ref(false)
const visible = ref(false)

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
      message.value = data.value?.count || 0
      count.value = data.value?.message || ''
      visible.value = true
    }
  }catch (err){
    console.error('err', err)
  }finally {
    loading.value = false
  }
}
</script>

<style  lang="scss">
.infoPage {
  min-height: 100vh;
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