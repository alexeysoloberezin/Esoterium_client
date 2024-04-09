<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Создать админа</div>

      <div class="card-body">
        <form  class="surface-card relative z-5 p-4 shadow-2 mx-auto  border-round  w-full"
              style="max-width: 700px">
          <div>
            <label for="em" class="block text-900 font-medium mb-2">Почта</label>
            <InputText v-model="form.email" id="em" type="text" class="w-full mb-3"/>

            <label for="name" class="block text-900 font-medium mb-2">Имя</label>
            <InputText v-model="form.name" id="name" type="text" class="w-full mb-3"/>

            <label for="phone" class="block text-900 font-medium mb-2">Телефон</label>
            <InputText v-model="form.phone" id="phone" type="text" class="w-full mb-3"/>

            <Button  @click="onSubmit" label="Создать" icon="pi pi-user" class="w-full"></Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed, ref} from "@vue/reactivity";
import {useAuthStore} from "@/store/auth";
import {useApi} from "@/composables/useApi";
import {useNuxtApp} from "nuxt/app";

const form = ref({
  email: '',
  password: '',
  phone: ''
});

const onSubmit = async () => {
  console.log('s', form.value)
  const {data, status, error} = await useApi('client/create', {
    method: 'post',
    body: form.value
  })

  if(status.value === 'success'){
    useNuxtApp().$toast.success('Client создан')
  }
  console.log('data', data.value)
  console.log('status', status.value)
  console.log('error', error.value)
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 100%;
  max-width: 400px;
  margin: auto;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem;
  font-size: 1.25rem;
  text-align: center;
}

.card-body {
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
</style>
