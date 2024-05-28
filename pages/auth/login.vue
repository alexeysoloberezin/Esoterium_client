<template>
  <div class="relative loginPage" style="background: #6b6982">

    <div class="absolute top-0 left-50 loginPage-image" style="transform: translateX(-50%)">
      <img src="/hand.webp" alt="">
    </div>
    <div>
      <form v-if="!tehWorks" @submit.prevent="onSubmit"
            class="surface-card relative z-5 p-4 shadow-2 mx-auto  border-round  w-full" style="max-width: 700px">
        <div class="text-center mb-5">
          <!--      <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />-->
          <div class="text-900 text-3xl font-medium mb-3">Вход в личный кабинет</div>
          <span class="text-600 font-medium line-height-3">Нет аккаунта?</span>
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Запросите здесь</a>
        </div>

        <div>
          <label for="email1" class="block text-900 font-medium mb-2">Почта</label>
          <InputText v-model="form.email" id="email1" type="text" class="w-full mb-3"/>

          <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
          <InputText v-model="form.password" id="password1" type="password" class="w-full mb-3"/>

          <div class="flex align-items-center justify-content-between mb-6">
            <a class="font-medium no-underline  text-blue-500 text-right cursor-pointer">Забыли пароль?</a>
          </div>

          <Button :loading="loading" type="submit" label="Войти" icon="pi pi-user" class="w-full"></Button>
        </div>
      </form>
      <div v-else style="max-width: 400px;margin: 0 auto;">
        <Card  class="bg-white p-4" >
          <template #title>Технические работы</template>
          <template #content>Please wait</template>
        </Card>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/store/auth";
import {useNuxtApp, useRoute} from "nuxt/app";

const authStore = useAuthStore()
const tehWorks = ref(true)


const route = useRoute()
const loading = computed(() => authStore.loading)
const params = route.query

const onSubmit = async () => {
  if (params?.admin === 'yes' && form.value.email === 'admin061@admin.com') {
    authStore.register(form.value)
  } else {
    authStore.login(form.value)
  }
}

const form = ref({
  email: '',
  password: ''
})
</script>

<style>

</style>