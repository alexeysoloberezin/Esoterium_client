import type { UseFetchOptions } from 'nuxt/app';
import {navigateTo, useFetch, useNuxtApp, useRuntimeConfig} from "nuxt/app";

const { public: { API_URL }} = useRuntimeConfig()

export function useApi<T>(
    url: string | (() => string),
    options: UseFetchOptions<T> = {}
) {
  const token = localStorage.getItem('token');

  const opt = {
    watch: false,
    ...options
  }

  const fetchOptions: UseFetchOptions<T> = {
    ...opt,
    baseURL: API_URL as string || 'http://localhost:4445/',
    headers: {
      ...options.headers, // Убедитесь, что не перезаписываем уже существующие заголовки
      Authorization: token ? `Bearer ${token}` : '',
    },
    $fetch: useNuxtApp().$customFetch,
    onResponseError({ request, response, options }) {
      // console.log('ERR HERE',response._data.statusCode)
      if(response._data.statusCode === 403 || response._data.statusCode === 401){
        // navigateTo('/auth/logout') // TODO
      }
    },

    onRequestError({ request, options, error }) {
      // Handle the request errors
      // console.log('ERR HERE 2', error._data.statusCode)
    },
  };

  return useFetch(url, fetchOptions);
}