<template>
  <Card style="overflow: hidden" class="telegramContact">
    <template #header>
      <Telegram style="max-width: 70px;margin: -15px 0 0 -15px"/>
      <!--      <img alt="user header" src="/images/usercard.png" />-->
      <!--      <Avatar  image="/images/avatar/onyamalimba.png" shape="circle" />-->
    </template>
    <template #title class="">
      <div class="flex items-center  gap-2">
        <!--        <Avatar label="U" shape="circle" class="flex-shrink-0"/>-->
        <span class="telegramContact-title block pt-1">
         Ваш контакт:
          <span class="block" style="white-space:break-spaces">
            {{ telegram }}
          </span>
      </span>
      </div>

    </template>
    <template #footer>
      <div class="flex gap-3 mt-0">
        <a :href="telegram" class="telegramContact-btn" target="_blank">
          Открыть телеграм
        </a>
      </div>
      <NuxtLink to="/payment/info" class="mb-1 w-full">
        <div class="telegramContact-btn">
          Список покупок.
        </div>
      </NuxtLink>
      <button v-if="showClose" @click="closeContact" class="telegramContact-btn-close">
        Закрыть
      </button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Telegram from "@/components/icon/Telegram.vue";

const props = defineProps<{
  telegram: string,
  noAsk?: boolean,
  showClose?: boolean,
}>()

const emit = defineEmits(['update:close'])

const closeContact = () => {
  if (props.noAsk) {
    emit('update:close', false)
    return
  }

  const prompt = confirm('Вы уверены что хотите закрыть контакт? Сохраните контакт.')

  if (prompt) {
    emit('update:close', false)
  }
}
</script>

<style lang="scss">
.telegramContact {
  background: #2D3250;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0px 5px #434a72;
  color: #fff;
  padding: 20px;
  width: 300px;
  margin: 20px auto;

  &-title {
    color: #24A1DE;
  }

  &-btn {
    background: #24A1DE;
    color: #fff;

    &:hover {
      background: #1d93cc;

    }

    &, &-close {
      padding: 10px 25px;
      border: none;
      width: 100%;
      font-size: 16px;
      cursor: pointer;
      border-radius: 7px;
      outline: none;
      text-decoration: none;
      display: flex;
      justify-content: center;
      text-align: center;
      font-weight: 500;
      transition: .25s;
    }

    &-close {
      background: #ea0941;
      color: #fff;
      margin-top: 10px;

      &:hover {
        background: #DA0037;
      }
    }
  }
}
</style>