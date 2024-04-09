<template>
  <div>
    <Header />
    <div class="py-5 relative">
      <img
          class="imggg"
          src="/bg.jpg" alt="" />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import {useAuthStore} from "@/store/auth.js";
import {computed} from "vue";

const authStore = useAuthStore()
const isAdmin = computed(() => authStore.isAdmin)
</script>

<style >
.imggg{
  position: fixed;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  opacity: .35;
  object-fit: cover;
  transform: translate(-50%, -50%);
}

@keyframes anim {
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50%{
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100%{
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
</style>