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
      <NuxtLink to="/payment/info" class="my-1 w-full" style="text-decoration: none;">
        <div class="telegramContact-btn" style="margin: 5px 0">
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

</style>