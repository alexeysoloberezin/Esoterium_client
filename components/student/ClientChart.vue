<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const props = defineProps<{
  clients: any
}>()

const countClientsPerDay = (clients) => {
  const counts = {};

  clients.forEach((client) => {
    const date = new Date(client.createdAt).toDateString();
    counts[date] = (counts[date] || 0) + 1;
  });

  return counts;
};

const clientCounts = countClientsPerDay(props.clients);
const labels = Object.keys(clientCounts);
const values = Object.values(clientCounts).map((c: number) => c * 500);

const data = ref({
  labels: labels,
  datasets: [
    {
      label: 'Доходы',
      backgroundColor: '#f87979',
      borderColor: '#FF1493', // Цвет линии - розовый
      data: values,
      fill: false
    }
  ]
})

const options = ref({
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Рубли' // Подпись для оси Y
      }
    },
    x: {
      title: {
        display: true,
        text: 'Дата' // Подпись для оси X
      }
    }
  },
  responsive: true,
})
</script>

<template>
  <Line :data="data" :options="options" />
</template>
