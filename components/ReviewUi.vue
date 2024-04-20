<template>
  <div class="reviewUi-box">
    <div class="reviewUi bg-card flex flex-col py-[38px] px-[30px] rounded-xl shadow-sm  lg:min-h-[336px]">
      <div class="flex gap-3 w-full">
        <div class="p-[1px] relative rounded-full bg-gradient-to-r from-secondary to-primary ">
          <Instagramm class="absolute top-0 left-0"/>
          <img class=" reviewUi-image object-cover border-white rounded-full" :src="image"/>
        </div>
        <div class="flex flex-col justify-center ">
          <div class="font-semibold text-xl description">{{ tag }}</div>
          <p class="text-sm">
            {{ lost }}
          </p>
        </div>
        <div class="ml-auto">
          <Quotes/>
        </div>
      </div>
      <p class="reviewUi-text mt-9 mb-[30px] min-h-[60px]">
        {{
          text
        }}
      </p>
      <div class="flex items-center justify-between w-full">
        <Date :date="date"/>
        <!--      <ui-button class="w-fit sm:w-[185px] p-2 sm:p-4 btn&#45;&#45;gradient shadow"><span class="uppercase">Get started !</span>-->
        <!--      </ui-button>-->
      </div>
    </div>
  </div>
</template>

<script setup>
import Instagramm from "./icon/Instagramm.vue";
import Quotes from "./icon/Quotes.vue";
import Date from "./Date.vue";

const {number, date, drop, image, tag, text, lost} = defineProps({
  number: {
    type: Number,
    required: true
  },
  lost: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  drop: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

// const translations = usePage().props.translations
//
// const lastInMonths = (str, KG, M) => {
//   return str.replace(/:KG/g, KG).replace(/:KG/g, M);
// }
</script>

<style lang="scss">
.reviewUi {
  display: flex;
  flex-direction: column;
  padding: 38px 30px;
  min-height: 336px; // Применяется только на больших экранах (lg)

  &-image{
    width: 55px;
    height: 55px;
    object-fit: cover;
    border: 1px solid #ec4899;
  }
  .flex {
    display: flex;
    width: 100%;

    &-col {
      flex-direction: column;
    }

    &.gap-3 {
      gap: 12px; // Подберите соответствующий размер
    }

    &.justify-center {
      justify-content: center;
    }
  }

  .rounded-full {
    border-radius: 50%;
  }

  .absolute {
    position: absolute;
    top: 0;
    left: 0;
  }

  .relative {
    position: relative;
  }

  .border {
    border: 6px solid white;
    width: 70px;
    height: 70px;
    object-fit: cover; // Убедитесь, что браузеры поддерживают это свойство
    border-radius: 50%;
  }

  .ml-auto {
    margin-left: auto;
  }

  .font-semibold {
    font-weight: 600;
  }

  .mt-9 {
    margin-top: 36px; // Пример пересчета, подберите значение
  }

  &-icon{
    width: 24px;
    height: 24px;
  }

  .w-full {
    width: 100%;
  }

  &-text{
    font-size: 16px;
    margin-bottom: 15px;
  }

  .items-center {
    align-items: center;
  }
}

</style>