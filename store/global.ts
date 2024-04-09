import {defineStore} from "pinia";

export const useGlobalStore = defineStore('globalStore', () => {
  const pricePerClient = ref<number>(500)

  return { pricePerClient }

})