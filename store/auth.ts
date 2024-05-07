import {computed, ref} from "@vue/reactivity";
import axios from 'axios';
import {defineStore} from "pinia";
import {useApi} from "@/composables/useApi";
import {useStorage} from "@vueuse/core";
import {navigateTo, useNuxtApp} from "nuxt/app";

export const useAuthStore = defineStore('authStore', () => {
  const loading = ref<boolean>(false);
  const token = useStorage('token','')
  const user = useStorage('user','')
  const role = useStorage('role', '')

  const isAuth = () => {
    return !!token.value;
  }

  const isAdmin = computed(() => {
    return role.value === 'admin';
  })

  const login = async (body) => {
    loading.value = true
    try {
      const { data, status, error } = await useApi('auth/signin', {
        method: 'post',
        body
      })

      console.log('data', data)
      console.log('status', status)
      console.log('error', error)
      if (status.value === 'success') {
        console.log('asd', data)
        // toast.success('Successfully login in');
        // useNuxtApp().$toast.success('Успешная регистрация');
        token.value = data.value?.data?.token;
        user.value = data.value?.data?.user;
        role.value = data.value?.data?.role;
        if(role.value === 'admin'){
          navigateTo('/admin')
        }else if(role.value === 'student'){
          navigateTo('/student')
        }
      }else if(status.value === 'error'){
        useNuxtApp().$toast.error(error.value?.data?.message || 'Ошибка входа');
      }
    } catch ({response}) {
      console.log('response', response)
      useNuxtApp().$toast.error('Серверная Ошибка входа');
    } finally {
      loading.value = false
    }
  };

  const register = async (body) => {
    loading.value = true
    try {
      const { data, status } = await useApi('auth/createAdmin', {
        method: 'post',
        body
      })


      if (status.value === 'success') {
        // toast.success('Successfully login in');
        useNuxtApp().$toast.success('Успешная регистрация');

        token.value = data.value.data.token;
        user.value = data.value.data.user;
      }
    } catch ({response}) {
      return Promise.reject()
    } finally {
      loading.value = false
    }
  };


  const reset = () => {
    token.value = '';
    user.value = ''
    role.value = ''
  }

  return {
    loading,
    token,
    reset,
    isAuth,
    isAdmin,
    login,
    register,
    user,
  };
})
