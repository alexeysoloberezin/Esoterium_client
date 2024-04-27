<template>
  <div :class="{'hidden-header': !isHeaderVisible}" class="header flex fixed top-0 z-[2000] left-0 w-full h-[100px]  items-center justify-between lg:pr-10 pr-5 lg:pl-10">
    <nav class="flex items-center w-full">
      <div class="flex  items-center w-full">
        <img class="logo pb-1" src="/logo.svg" alt="logo"/>

        <ul class=" lg:inline-flex hidden w-full ml-8 pl-5 mt-3">
          <li class="header-link font-title hoverable" v-for="link in navLinks" :key="link.name">
            <a v-if="$route.path === '/'" class="hoverable" :href="link.url">{{ link.name }}</a>
            <nuxt-link v-else class="hoverable" :to="link.url">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <StartLoading
    />

    <div v-if="savedStudent" class="text-white">
      {{ savedStudent }}
      <Button  @click="visible = true"  size="small" outlined class="hoverable px-3 mr-3" style="height: 40px">
        <div>У&nbsp;вас&nbsp;есть&nbsp;доступный&nbsp;контакт</div>
      </Button>

      <Dialog v-model:visible="visible" modal :closable="false" class="successTelegramModal">
        <TelegramContact :no-ask="true" :telegram="savedStudent.telegram" :show-close="true" @update:close="() => visible = false"/>
      </Dialog>
    </div>
    <div v-if="isAdmin" class="flex lg:mt-0 mt-2">
      <Button  to="/login" size="small" class="hoverable px-3" style="height: 40px">
        <div>Заказать&nbsp;услугу</div>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { onMounted, onUnmounted } from 'vue';
import {useLocalStorage, useStorage, useWindowSize} from "@vueuse/core";
import StartLoading from "@/components/StartLoading.vue";
import TelegramContact from "@/components/TelegramContact.vue";

const savedStudent = useStorage('student',
    null,
    undefined,
    {
      serializer: {
        read: (v: any) => v ? JSON.parse(v) : null,
        write: (v: any) => JSON.stringify(v),
      },
    },)
const visible = ref(false)

 const navLinks = [
  { name: 'Главная', url: '/#home' },
  { name: 'О нас', url: '/#about' },
  // { name: 'Sanita App', url: '#' },
  { name: 'Почему мы', url: '/#whywe' },
  // { name: 'Blog', url: '/#blog' },
  { name: 'Отзывы', url: '/#reviews' },
];

 const textLinks = [
  { text: 'Home', path: '/' },
  { text: 'Contacts', path: '/text/contacts' },
  { text: 'Privacy Policy', path: '/text/privacy' },
  { text: 'Terms of Service', path: '/text/terms' },
  { text: 'HIPPA', path: '/text/hipaa-notice' },
  { text: 'CCPA', path: '/text/ccpa' },
  { text: 'Research Policy', path: '/text/research-policy' },
  { text: 'COF Policy (Credential-On-File Transactions)', path: '/text/cof' },
  { text: 'Payment And Refund Policy', path: '/text/refund' },
]


const isHeaderVisible = ref(true);
const isAdmin = ref(true)

const { width }  = useWindowSize()
let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition <= 30) {
    isHeaderVisible.value = true;
  } else if (currentScrollPosition > lastScrollPosition) {
    isHeaderVisible.value = false;
  }

  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style lang="scss">
.hidden-header {
  transform: translateY(-100px);
}

.header{
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  padding: 15px ;
  display: flex;
  align-items: center;

  nav ul {
    display: flex;
    align-items: center;
    gap: 45px;
  }
  li{
    list-style: none;
  }
  a{
    color: #fff;
    cursor: pointer;
    text-decoration: none !important;
    &:hover{
      color: #ec66a1;
    }
  }
}
</style>