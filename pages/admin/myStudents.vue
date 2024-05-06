<template>
  <AdminLayout>
    <MainLayout>
      <div class="px-5">
        <Button outlined @click="visible = true" class="mb-3">
          Добавить ученика
        </Button>

        <Dialog v-model:visible="visible" class="p-3" modal header="Добавить ученика" :style="{ width: '25rem' }">
          <div class="flex align-items-center gap-3 mb-3 mt-3">
            <label for="username" class="font-semibold w-6rem">Почта</label>
            <InputText v-model="studentData.email" id="username" class="flex-auto" autocomplete="off"/>
          </div>
          <div class="flex align-items-center gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Пароль</label>
            <InputText v-model="studentData.password" id="email" class="flex-auto" autocomplete="off"/>
          </div>
          <div class="flex justify-content-end gap-2">
            <Button type="button" label="Закрыть" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Добавить" @click="addStudent"></Button>
          </div>
        </Dialog>

        <DataTable :value="students" paginator :rows="15" :rowsPerPageOptions="[5, 10, 20, 50]"
                   tableStyle="min-width: 50rem">
          <Column field="email" header="Почта" ></Column>
          <Column field="queue" header="Клиентов" ></Column>
          <Column field="verified" header="Все данные есть" >
            <template #body="slotProps">
              <div v-if="slotProps.data.paymentNumber && slotProps.data.paymentType && slotProps.data.telegram"
                style="color: #18d030"
              >
                Verified
              </div>
              <div class="" style="color: #ec4899">
                Не полные данные!
              </div>
            </template>
          </Column>
          <Column  header="Клиентов" >
            <template #body="slotProps">
              {{ slotProps.data.clients.length }}
<!--              {{ slotProps.data.clients.map(el => el.name).join(' / ') }}-->
            </template>
          </Column>
          <Column field="role" header="Роль" ></Column>
          <Column field="createdAt" header="Создан" >
            <template #body="slotProps">
              <div class="flex align-items-center gap-2">
                <span>{{ slotProps.data.createdAt ? new Date(slotProps.data.createdAt).toLocaleString('ru-RU') : '' }}</span>
              </div>
            </template>
          </Column>
          <Column header="Действия" >
            <template #body="slotProps">
              <div class="flex align-items-center gap-2">
                <Toast />
                <ConfirmPopup>

                </ConfirmPopup>

                <Button size="small" @click="confirm1($event, slotProps.data.id)" outlined>Удалить</Button>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </MainLayout>
  </AdminLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import {useApi} from "@/composables/useApi";
import {useNuxtApp} from "nuxt/app";
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

const students = ref<any>([])

const {data} = useApi('/auth/students', {
  method: 'get'
})

const studentData = ref({
  email: '',
  password: ''
})

const fetchStudents = async () => {
  const { data, error } = await useApi('/auth/students', {
    method: 'get'
  })

  if(error.value){
    useNuxtApp().$toast.error(error.value?.data?.message || error.value.message || 'Ошибка')
  }

  if (data.value) {
    students.value = data.value
  }
}

fetchStudents()

const visible = ref(false)

const addStudent = async () => {
  const {data, status, error} = await useApi('auth/createStudent', {
    method: 'post',
    body: studentData.value,
  })

  if(error.value){
    useNuxtApp().$toast.error(error.value?.data?.message || error.value.message || 'Ошибка')
  }

  if(status.value === 'success'){
    visible.value = false
    studentData.value = {
      email: '',
      password: ''
    }
    await fetchStudents()
  }
}

const deleteStudent = async (id) => {
  const {data, status, error} = await useApi('auth/deleteStudent', {
    method: 'post',
    body: {
      id
    },
  })

  if(status.value === 'success'){
    await fetchStudents()
  }else if(status.value === 'error'){
    useNuxtApp().$toast.error(error.value.data.message || 'Ошибка')
  }
}

const customers = [
  {
    id: 1000,
    name: 'James Butt',
    country: {
      name: 'Algeria',
      code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 70663
  },
]

const confirm = useConfirm();
const toast = useToast();

const confirm1 = (event, id) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Вы уверены что хотите удалить Студента',
    icon: 'pi pi-exclamation-triangle',
    rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
    acceptClass: 'p-button-sm',
    rejectLabel: 'Нет, закрыть',
    acceptLabel: 'Да, удалить',
    accept: () => {
      deleteStudent(id)
    },
  });
};
</script>

<style scoped>

</style>