<template>
  <div
      v-if="width > 1000"
      class="cursor-circle"
      :style="{ left: `${x}px`, top: `${y}px` }"
      :class="hoveredCoursor ? 'hovered' : ''"
  >
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from 'vue';
import {useLocalStorage, useWindowSize} from "@vueuse/core";

const x = ref(-50);
const y = ref(-50);
const hoveredCoursor = useLocalStorage('hoveredCoursor', false);
const {width} = useWindowSize()


function updateCursorPosition(event) {
  x.value = event.clientX;
  y.value = event.clientY;
}

function checkHoverState(event) {
  hoveredCoursor.value = event.target.classList.contains('hoverable');
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
  // Добавляем слушатели для событий наведения мыши и ухода с элемента
  document.addEventListener('mouseover', checkHoverState);
  document.addEventListener('mouseout', checkHoverState);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
  document.removeEventListener('mouseover', checkHoverState);
  document.removeEventListener('mouseout', checkHoverState);
});

window.addEventListener('mousemove', updateCursorPosition);
</script>

<style scoped lang="scss">
.cursor-circle {
  position: fixed;
  pointer-events: none;
  width: 45px;
  height: 45px;
  border: 2px solid rgba(255, 255, 255, 0.25); /* Используйте свой цвет */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 0.35s, transform 0.3s, border-color 0.35s;
  z-index: 9999;
  &.hovered{
    border-color: rgba(255, 255, 255, 0.5); /* Используйте свой цвет */
    transform: translate(-50%, -50%) scale(1.5);
  }
}
</style>
