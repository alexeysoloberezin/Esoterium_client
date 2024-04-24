<template>
  <div v-if="show" class="startLoading" :class="{'active': active, 'end': end}" @click="setAnimation">
    <span class="startLoading-sp-a startLoading-sp"></span>
    <span class="startLoading-sp-b startLoading-sp"></span>
    <span class="startLoading-sp-c startLoading-sp"></span>
    <span class="startLoading-sp-d startLoading-sp"></span>

    <div class="startLoading-svg">
      <svg viewBox="0 0 200 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="startLoading-svg-oth" filter="url(#filter0_d_4_6)">
          <path d="M23.61 46C22.87 46 22.19 45.82 21.57 45.46C20.97 45.1 20.49 44.61 20.13 43.99C19.77 43.37 19.59 42.69 19.59 41.95V40.51H23.19V41.83C23.19 41.99 23.24 42.12 23.34 42.22C23.44 42.32 23.57 42.37 23.73 42.37H36.99C37.15 42.37 37.28 42.32 37.38 42.22C37.5 42.12 37.56 41.99 37.56 41.83V37.54C37.56 37.4 37.5 37.28 37.38 37.18C37.28 37.06 37.15 37 36.99 37H23.61C22.87 37 22.19 36.82 21.57 36.46C20.97 36.1 20.49 35.62 20.13 35.02C19.77 34.4 19.59 33.72 19.59 32.98V28.45C19.59 27.71 19.77 27.03 20.13 26.41C20.49 25.79 20.97 25.3 21.57 24.94C22.19 24.58 22.87 24.4 23.61 24.4H37.14C37.88 24.4 38.55 24.58 39.15 24.94C39.77 25.3 40.26 25.79 40.62 26.41C41 27.03 41.19 27.71 41.19 28.45V29.89H37.56V28.57C37.56 28.41 37.5 28.28 37.38 28.18C37.28 28.08 37.15 28.03 36.99 28.03H23.73C23.57 28.03 23.44 28.08 23.34 28.18C23.24 28.28 23.19 28.41 23.19 28.57V32.86C23.19 33 23.24 33.13 23.34 33.25C23.44 33.35 23.57 33.4 23.73 33.4H37.14C37.88 33.4 38.55 33.58 39.15 33.94C39.77 34.3 40.26 34.79 40.62 35.41C41 36.01 41.19 36.68 41.19 37.42V41.95C41.19 42.69 41 43.37 40.62 43.99C40.26 44.61 39.77 45.1 39.15 45.46C38.55 45.82 37.88 46 37.14 46H23.61ZM48.4259 46C47.6859 46 47.0059 45.82 46.3859 45.46C45.7659 45.1 45.2759 44.61 44.9159 43.99C44.5559 43.37 44.3759 42.69 44.3759 41.95V28.45C44.3759 27.71 44.5559 27.03 44.9159 26.41C45.2759 25.79 45.7659 25.3 46.3859 24.94C47.0059 24.58 47.6859 24.4 48.4259 24.4H61.9259C62.6659 24.4 63.3359 24.58 63.9359 24.94C64.5559 25.3 65.0459 25.79 65.4059 26.41C65.7859 27.03 65.9759 27.71 65.9759 28.45V41.95C65.9759 42.69 65.7859 43.37 65.4059 43.99C65.0459 44.61 64.5559 45.1 63.9359 45.46C63.3359 45.82 62.6659 46 61.9259 46H48.4259ZM48.5159 42.37H61.8059C61.9459 42.37 62.0659 42.32 62.1659 42.22C62.2859 42.12 62.3459 41.99 62.3459 41.83V28.57C62.3459 28.41 62.2859 28.28 62.1659 28.18C62.0659 28.08 61.9459 28.03 61.8059 28.03H48.5159C48.3759 28.03 48.2459 28.08 48.1259 28.18C48.0259 28.28 47.9759 28.41 47.9759 28.57V41.83C47.9759 41.99 48.0259 42.12 48.1259 42.22C48.2459 42.32 48.3759 42.37 48.5159 42.37ZM77.1996 46V28.03H68.1996V24.4H89.7996V28.03H80.7996V46H77.1996ZM92.1033 46V24.4H111.933V28.03H95.7333V33.4H108.783V37H95.7333V42.37H111.933V46H92.1033ZM132.472 46L125.842 38.08H130.552L136.522 45.16V46H132.472ZM115.012 46V24.43H132.562C133.302 24.43 133.972 24.62 134.572 25C135.192 25.36 135.682 25.85 136.042 26.47C136.422 27.07 136.612 27.74 136.612 28.48V34.42C136.612 35.14 136.422 35.81 136.042 36.43C135.682 37.05 135.192 37.54 134.572 37.9C133.972 38.26 133.302 38.44 132.562 38.44L118.612 38.47V46H115.012ZM119.152 34.81H132.442C132.582 34.81 132.702 34.76 132.802 34.66C132.922 34.56 132.982 34.43 132.982 34.27V28.57C132.982 28.43 132.922 28.31 132.802 28.21C132.702 28.09 132.582 28.03 132.442 28.03H119.152C119.012 28.03 118.882 28.09 118.762 28.21C118.662 28.31 118.612 28.43 118.612 28.57V34.27C118.612 34.43 118.662 34.56 118.762 34.66C118.882 34.76 119.012 34.81 119.152 34.81ZM139.528 46V24.4H143.098V46H139.528ZM150.174 46C149.434 46 148.754 45.82 148.134 45.46C147.514 45.1 147.024 44.61 146.664 43.99C146.304 43.37 146.124 42.69 146.124 41.95V24.4H149.724V41.83C149.724 41.99 149.774 42.12 149.874 42.22C149.994 42.32 150.124 42.37 150.264 42.37H163.554C163.694 42.37 163.814 42.32 163.914 42.22C164.034 42.12 164.094 41.99 164.094 41.83V24.4H167.724V41.95C167.724 42.69 167.534 43.37 167.154 43.99C166.794 44.61 166.304 45.1 165.684 45.46C165.084 45.82 164.414 46 163.674 46H150.174ZM171.028 46V24.4H175.138L183.238 34.06L191.308 24.4H195.448V46H191.818V29.44L183.238 39.67L174.628 29.47V46H171.028Z" fill="white"/>
        </g>
        <g class="startLoading-svg-e" filter="url(#filter1_d_4_6)">
          <path d="M8.19 56V16.4H44.325V20.855H12.645V33.945H38.11V38.455H12.645V51.545H44.325V56H8.19Z" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d_4_6" x="15.59" y="22.4" width="183.858" height="29.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.679167 0 0 0 0 0.546163 0 0 0 0 0.665867 0 0 0 0.67 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_6"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_6" result="shape"/>
          </filter>
          <filter id="filter1_d_4_6" x="0.189999" y="9.39999" width="52.135" height="55.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.846667 0 0 0 0 0.520833 0 0 0 0 1 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_6"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_6" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

const active = ref(false)
const end = ref(false)
const show = ref(true)

onMounted(() => {
  active.value = true
  setTimeout(() => {
    end.value = true
    setTimeout(() => {
      show.value = false
    }, 500)
  }, 2500)
})

const setAnimation = () => {

}
</script>

<style lang="scss">
.startLoading{
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: #100f0f;
  z-index: 99999;

  &:after, &:before {
    content: '';
    position: fixed; /* Фиксированное позиционирование относительно viewport */
    z-index: 1;
    opacity: 0.1;
    pointer-events: none; /* Позволяет кликам проходить сквозь элемент */
  }

  &:after {
    top: 0vh;
    right: 0vw;
    bottom: 0;
    opacity: 0.1;
    transform: translateX(25%);
    width: 80vw; /* Ширина вьюпорта */
    height: 100%; /* Высота вьюпорта */
    background-image: radial-gradient(circle at center, #ec4899 0%, rgba(#100f0f, 0) 80%);
  }

  &:before {
    left: 4vw;
    bottom: 0vh;
    transform: translateX(-50%);
    opacity: .18;
    width: 100vw; /* Ширина вьюпорта */
    height: 100vh; /* Высота вьюпорта */
    background-image: radial-gradient(circle at center, rgba(#b03eea, .5) 0%, rgba(#100f0f, 0) 80%);
  }
  &-sp{
    position: absolute;
    top: 0;
    background: rgba(255, 255, 255, 0.07);
    width: 1px;
    &-a{
      left: 20%;
      animation-delay: .1s;
    }
    &-b{
      left: 40%;
      animation-delay: 1.7s;
    }
    &-c{
      left: 60%;
      animation-delay: .7s;
    }
    &-d{
      animation-delay: 2.7s;
      left: 80%;
    }
  }
  &-svg{
    margin: 0 auto;
    position: relative;
    svg{
      position: relative;
      z-index: 3;
      width: 400px;
      &:after{
        content: '';
        background: red;
        width: 300px;
        height: 70px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &-oth{
      position: relative;
      transform: scaleX(0.2);
      opacity: 0;
      transform-origin: center;
      transition: .8s ease-in-out;
    }
    &-e{
      position: relative;
      z-index: 4;
      transform-origin: center;
      opacity: 0;
      transform: translate(41px, 0px) scale(0.53);
    }
  }


  &.active{
    .startLoading-sp{
      animation: anim-sp 2s forwards;
    }
    .startLoading-svg{
      &-oth{
        transform: scale(1);
        opacity: 1;
        transition-delay: 1.2s;
      }
      &-e{
        animation: animate-sh 2.4s forwards;
      }
    }
  }
  &.end{
    opacity: 0;
    pointer-events: none;
    transition: .5s;
    //transform: scale(0);
    //transition: 1.5s;
    //transform-origin: 0 0;
  }
}

@keyframes anim-sp {
  0%{
    height: 0;
  }
  100%{
    height: 100vh;
  }
}

@keyframes animate-sh {
  0%{
    transform: translate(30px, 10px) scale(0.1);
    opacity: 0;
  }
  30%{
    transform: translate(41px, 0px) scale(0.53);
    opacity: 1;
  }
  50%{
    transform: translate(41px, 0px) scale(0.53);
    opacity: 1;
  }
  100%{
    opacity: 1;
    transform: translate(-4px, 0) scale(1);
  }
}
</style>