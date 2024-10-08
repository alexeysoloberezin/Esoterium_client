import {navigateTo} from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const isAuth = !!token

  if (to.path !== '/auth/login') {
    if (!isAuth) {
      return navigateTo('/auth/login')
    }
  } else {
    if (isAuth) {
    }
  }
})