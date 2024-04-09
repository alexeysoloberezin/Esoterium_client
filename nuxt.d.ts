import { NuxtApp } from '@nuxt/types';

declare module '@nuxt/types' {
  interface NuxtApp {
    $toast: {
      success(message: string): void;
      error(message: string): void;
      warn(message: string): void;
      show(message: string): void;
      // Добавьте дополнительные перегрузки или типы, если $toast имеет дополнительные параметры или варианты использования
    };
  }
}
