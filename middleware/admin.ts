import {navigateTo} from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  console.log('admin middle')
  if (role !== 'admin' && !token) {
    return navigateTo('/auth/logout');
  }
})