<template>
  <div :class="{'hidden-header': !isHeaderVisible}"
       class="header flex fixed top-0 z-[2000] left-0 w-full h-[100px]  items-center justify-between lg:pr-10 pr-5 lg:pl-10">
    <!--    <div v-if="width < 1200" @click="openMenu = !openMenu" style="width: 30px" class="cursor-pointer mr-2">-->
    <!--      <svg style="width: 30px;height:30px" fill="#fff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">-->
    <!--        <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>-->
    <!--      </svg>-->
    <!--    </div>-->


    <div class="mobLogo mr-auto">
      <img class="logo pb-1 mt-2" src="/logo.svg" alt="logo"/>
    </div>

    <div class="navHead-overlay" :class="{'active': openMenu}">
    </div>
    <nav class="flex items-center w-full navHead" :class="{'active': openMenu}">
      <div @click="openMenu = !openMenu" class="navHead-close">
        <svg class="" fill="#fff" style="width: 30px;height:30px" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"><title>arrow-left</title>
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
        </svg>
      </div>

      <div class="flex  items-center w-full navHead-wrp">
        <img class="logo pb-1" src="/logo.svg" alt="logo"/>

        <ul class=" lg:inline-flex hidden w-full ml-3 pl-5 mt-3 navHead-list">
          <li class="header-link font-title hoverable" v-for="link in navLinks" :key="link.name" @click="goTo(link)">
            <a v-if="$route.path === '/'" class="hoverable" :href="link.url">{{ link.name }}</a>
            <nuxt-link v-else class="hoverable" :to="link.url">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <StartLoading
    />

    <div  class="flex lg:mt-0">
      <NuxtLink to="/payment/info">
        <Button size="small" outlined class="hoverable px-3 mr-3" style="height: 40px">
          <div>Мои&nbsp;покупки</div>
        </Button>
      </NuxtLink>
      <a v-if="width > 1200" href="/#form">
        <Button size="small" class="hoverable px-3" style="height: 40px">
          <div >Заказать&nbsp;услугу</div>
        </Button>
      </a>

    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {onMounted, onUnmounted} from 'vue';
import {useLocalStorage, useStorage, useWindowSize} from "@vueuse/core";
import StartLoading from "@/components/StartLoading.vue";
import TelegramContact from "@/components/TelegramContact.vue";

const openMenu = ref(false)
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

const goTo = (link) => {
  if (width.value < 1200) {
    openMenu.value = false
  }
}

const navLinks = [
  {name: 'Главная', url: '/#home'},
  {name: 'О нас', url: '/#about'},
  {name: 'Почему мы', url: '/#whywe'},
  // { name: 'Sanita App', url: '#' },
  {name: 'Как это работает', url: '/#howItsWork'},
  // { name: 'Blog', url: '/#blog' },
  {name: 'Отзывы', url: '/#reviews'},
  {name: 'Заказать услугу', url: '/#form'},
];


const isHeaderVisible = ref(true);
const isAdmin = ref(true)

const {width} = useWindowSize()
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


const scroll = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}
</script>

<style lang="scss">
.hidden-header {
  transform: translateY(-100px);
}

.mobLogo {
  display: none;
  @media (max-width: 1200px) {
    display: block;
    img {
      max-width: 170px !important;
    }
  }
}

.navHead-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: scale(0);
  pointer-events: none;
  background: rgba(0, 0, 0, 0.55);
  z-index: 300;
  backdrop-filter: blur(5px);
  transition: opacity .4s ease-in-out;
  opacity: 0;

  &.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: initial;
  }
}

.navHead {
  &-close {
    display: none;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-110%);
    box-shadow: 0 0 15px rgba(#ec4899, 0.1);
    z-index: 590;
    height: 100vh;
    background: #100f0f;
    overflow-y: auto;
    width: 285px !important;
    transition: .4s ease-in-out;

    .logo {
      margin: 5px auto 0;
    }
    &.active {
      transform: translateX(0%);
    }
    &-close {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      background: rgba(255, 255, 255, 0.04);
      height: 55px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.11);
    }
    &-wrp {
      flex-direction: column !important;
    }
    &-list {
      display: flex !important;
      margin-left: 0 !important;
      padding: 0 10px !important;
      margin-top: 0 !important;
      gap: 0px !important;
      flex-direction: column !important;

      li {
        width: 100%;
        text-align: center;
      }

      a {
        padding: 15px 10px;
        display: block;
        width: 100%;
      }
    }
  }
}

.header {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  padding: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 10px 15px !important;
    .logo {
      max-width: 220px;
    }
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  li {
    list-style: none;
  }

  a {
    color: #fff;
    cursor: pointer;
    text-decoration: none !important;

    &:hover {
      color: #ec66a1;
    }
  }
}
</style>