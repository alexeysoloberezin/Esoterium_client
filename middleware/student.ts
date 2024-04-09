import {navigateTo} from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  console.log('student middle')
  if (role !== 'student' && !token) {
    return navigateTo('/auth/logout');
  }
})