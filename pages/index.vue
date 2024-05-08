<template>
  <HeaderLand/>
  <CursorCircle/>

  <div class="Land">
    <span class="Land-line Land-line-1"></span>
    <span class="Land-line Land-line-2"></span>
    <span class="Land-line Land-line-3"></span>
    <span class="Land-line Land-line-4"></span>
    <swiper
        :effect="'fade'"
        :speed="1200"
        :autoHeight="false"
        :longSwipesMs="1200"
        :hashNavigation="{
          watchState: true,
        }"
        :direction="'vertical'"
        :pagination="{
          clickable: true,
          type: 'bullets'
        }"
        :freeMode="true"
        :scrollbar="true"
        :allowTouchMove="true"
        :mousewheel="true"
        ref="mySwiper"
        @slideChange="onSlideChange"
        class="my-swiper sm:h-screen"
        :class="isFirst ? '' : 'pagination-upper'"
        :breakpoints="{
        1000: {
          mousewheel: false,
          freeMode: false,
          scrollbar: false,
          allowTouchMove: false,
        }
      }"
    >
      <swiper-slide v-for="({ component, hash }, index) in slides" :key="index" :data-hash="hash" class="mainSlide">
        <component
            :is="component"
        />
      </swiper-slide>
    </swiper>

    <MobilePage/>
  </div>


  <div class="land">
    <div ref="threeContainer" class="three-js-container"></div>
  </div>

  <div
      class="indexPagination"
  >
    <div :class="{ 'animate-number': animate }">
      {{ indexView }}
    </div>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, {Mousewheel, Pagination, FreeMode, Scrollbar, HashNavigation} from 'swiper';
import {computed, onMounted, onUnmounted, ref} from 'vue';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import Slide1 from '@/components/Slides/Slide1.vue';
import About from '@/components/Slides/About.vue';
import WhyWe from '@/components/Slides/WhyWe.vue';
import Reviews from '@/components/Slides/Reviews.vue';
import FormSlide from '@/components/Slides/FormSlide.vue';
import HeaderLand from "../components/HeaderLand.vue";
import CursorCircle from "../components/CursorCircle.vue";
import HowItsWork from '../components/Slides/HowItsWork.vue'
import gsap from 'gsap';
import MobilePage from "../components/MobilePage.vue";
import Correct from '../components/Slides/Correct.vue'

SwiperCore.use([Pagination, Mousewheel, HashNavigation, FreeMode, Scrollbar]);

const threeContainer = ref(null);
let scene, camera, renderer, model, animationId;

const mySwiper = ref(null);
const isFirst = computed(() => activeIndex.value === 0)
const isLast = computed(() => activeIndex.value === slides.length - 1)
const cameraPositions = [
  new THREE.Vector3(0, 0, 5), // 1
  new THREE.Vector3(0, 0, 5), // 2
  new THREE.Vector3(0, 0, 5), // 3
  new THREE.Vector3(-1, -0.4, 5), // 4
  new THREE.Vector3(0, 0, 5), // 5
  new THREE.Vector3(0, 0, 5), // Позиция для второго слайда
];
const cameraRotate = [
  {
    x: 0.1,
    y: 0.2,
    z: 0,
    model: {
      x: 0.2,
      y: 0.5,
      z: 0,
    },
    l1: [-3, -5, -4],
    l2: [-3, -5, -4],
    l3: [-3, -5, -4],
  },
  {
    x: 0,
    y: 0,
    z: 0,
    model: {
      x: 0,
      y: 1,
      z: 0,
    },
    l1: [7, 4, 4],
    l2: [4, 8, 4],
    l3: [-3, -5, -4],
  },
  {
    x: 0.15,
    y: 0.2,
    z: 0,
    model: {
      x: 0,
      y: 0.2,
      z: 0,
    },
    l1: [9, 7, 3],
    l2: [4, -2, 9],
    l3: [-3, -5, -4],
  },
  {
    x: 0.4,
    y: 0.3,
    z: 0,
    model: {
      x: 0,
      y: 0.2,
      z: 0,
    },
    l1: [5, 4, 6],
    l2: [-4, -5, -5],
    l3: [-3, -5, -4],
  },
  {
    x: 0.35,
    y: 0.35,
    z: -0.5,
    model: {
      x: 0,
      y: 5.2,
      z: 0,
    },
    l1: [3, 3, 3],
    l2: [-1, -5, 5],
    l3: [-3, -5, -4],
  },
  {
    x: 0.35,
    y: 0.35,
    z: -0.5,
    model: {
      x: 0,
      y: 5.2,
      z: 0,
    },
    l1: [3, 3, 3],
    l2: [-1, -5, 5],
    l3: [-3, -5, -4],
  },
  {
    x: 0.35,
    y: 0.35,
    z: -0.5,
    model: {
      x: 0,
      y: 5.2,
      z: 0,
    },
    l1: [3, 3, 3],
    l2: [-1, -5, 5],
    l3: [-3, -5, -4],
  },
  {
    x: 0.35,
    y: 0.35,
    z: -0.5,
    model: {
      x: 0,
      y: 5.2,
      z: 0,
    },
    l1: [3, 3, 3],
    l2: [-1, -5, 5],
    l3: [-3, -5, -4],
  }
]

// Функция обновления размеров камеры и рендерера
function updateSize() {
  const width = window.innerWidth > 800 ? window.innerWidth * 0.6 : window.innerWidth; // 30% от ширины окна
  const height = window.innerHeight * 1; // 50% от высоты окна
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

const slides = [
  {
    component: Slide1,
    hash: "home",
  },
  {
    component: About,
    hash: "about",
  },
  {
    component: WhyWe,
    hash: "whywe",
  },
  {
    component: HowItsWork,
    hash: "howItsWork",
  },
  {
    component: Correct,
    hash: "whywe",
  },
  {
    component: Reviews,
    hash: "reviews",
  },
  {
    component: FormSlide,
    hash: "form",
  },
]
const activeIndex = ref(0)
const animate = ref(false)

const indexView = computed(() => {
  const idx = activeIndex.value + 1
  return idx < 10 ? '0' + idx : idx
})

onMounted(() => {
  init();
  animateModel();
  window.addEventListener('resize', updateSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSize);
  window.cancelAnimationFrame(animationId);
  renderer.dispose();
});

let light1, light2, light3, light4;

function init() {
  // Инициализация сцены, камеры и рендерера
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.4, 1000);
  renderer = new THREE.WebGLRenderer({alpha: true});
  updateSize(); // Установите размер согласно процентам
  threeContainer.value.appendChild(renderer.domElement);

  // Добавление освещения
  const ambientLight = new THREE.AmbientLight(0x55555, 0.2);
  scene.add(ambientLight);

  const sphere = new THREE.SphereGeometry(0.3, 8, 8);

  // const spotLightIntensity = 150;
  const spotLightIntensity = 20;
  const spotLightColor = 0xffffff;

  const spotLight = new THREE.SpotLight(spotLightColor, spotLightIntensity);
  spotLight.position.set(10, 10, 10); // Позиция для прожектора

// Угол рассеивания света
  spotLight.angle = Math.PI / 6; // Угол в радианах, например, 30 градусов

// Убывание интенсивности света
  spotLight.decay = 2;

// Расстояние, на котором интенсивность света уменьшается до нуля
  spotLight.distance = 0;

// Пенумбра — мягкость края тени
  spotLight.penumbra = 0.5;

// Направление прожектора
  spotLight.target.position.set(0, 0, 0);
  scene.add(spotLight.target);

// Для настройки теней
  spotLight.castShadow = true;

  scene.add(spotLight);

  // light1 = new THREE.PointLight(0xdb2777, 200);
  light1 = new THREE.PointLight(0xdb2777, 20);
  light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({color: 0xff0040})));
  light1.position.set(10, 5, 5);
  //
  scene.add(light1);
  //
  // light2 = new THREE.PointLight(0x0040ff, 80);
  light2 = new THREE.PointLight(0x0040ff, 10);
  light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({color: 0x0040ff})));
  light2.position.set(-5, -10, 5);
  scene.add(light2);

  const loader = new GLTFLoader();
  // loader.load('', (gltf) => {

  const links = [
    'rhetorician/scene.gltf',
    '/the_thinker_by_auguste_rodin/scene.gltf',
    '/assets/sc.glb',
    '/assets/scene2.glb',
    '/assets/scene3.glb',
    '/assets/test1.glb'
  ]

  loader.load(links[2], (gltf) => {
    model = gltf.scene;
    model.scale.set(1.3, 1.3, 1.3);
    model.position.x = 0; // Сдвиг модели вправо на сцене
    model.position.y = -2 // Сдвиг модели вправо на сцене


    var spiral = model.getObjectByName('Spiral002');

    var glowingMaterial = new THREE.MeshPhongMaterial({
      color: 0xdb2777, // фиолетовый цвет
      emissive: 0xdb2777, // делает цвет светящимся
      emissiveIntensity: 4 // интенсивность свечения
    });

    // console.log('spiral', spiral)
    if (spiral) {
      spiral.material = glowingMaterial;
    }

    scene.add(model);
  });


  // Установка позиции камеры
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  camera.position.set(0, 0, 5);
}

let end = false

async function animateModel() {
  animationId = requestAnimationFrame(animateModel);

  if (model) {
    model.rotation.y += 0.0004;
  }

  if (Array.isArray(model?.children) && model?.children?.length > 0) {
    if (model.children[1].rotation.y > 2) {
      end = true
    } else if (model.children[1].rotation.y < 0.2) {
      end = false
    }

    if (end) {
      model.children[1].rotation.y += -0.003
    } else {
      model.children[1].rotation.y += +0.003
    }
  }

  await renderer.render(scene, camera);
  updateCameraPosition(activeIndex.value);
}

const onSlideChange = (data) => {
  if (activeIndex.value !== data.activeIndex) {
    animate.value = true;
    setTimeout(() => {
      activeIndex.value = data.activeIndex
      updateCameraPosition(activeIndex.value);
    }, 350);
    setTimeout(() => {
      animate.value = false;
    }, 700);
  }
};


function updateCameraPosition(index) {
  if (!camera || !camera.position || !model) {
    return; // Выход из функции, если камера не инициализирована
  }
  // Плавный переход к новой позиции
  const newPos = cameraPositions[index];
  const newPosRotate = cameraRotate[index];

  const duration = 7

  gsap.to(light1.position.set, {x: newPosRotate.l1[0], y: newPosRotate.l1[1], z: newPosRotate.l1[2], duration}); // Используя GSAP для плавного перехода
  gsap.to(light2.position.set, {x: newPosRotate.l2[0], y: newPosRotate.l2[1], z: newPosRotate.l2[2], duration}); // Используя GSAP для плавного перехода
  gsap.to(camera.position, {x: newPos.x, y: newPos.y, z: newPos.z, duration}); // Используя GSAP для плавного перехода
  gsap.to(camera.rotation, {x: newPosRotate.x, y: newPosRotate.y, z: newPosRotate.z, duration}); // Используя GSAP для плавного перехода
  gsap.to(model.rotation, {x: newPosRotate.model.x, y: newPosRotate.model.y, z: newPosRotate.model.z, duration}); // Используя GSAP для плавного перехода
}
</script>

<style lang="scss">
.three-js-container {
  position: absolute;
  background: transparent;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  @media (max-width: 1200px) {
    opacity: 0.75;
    transform: translate(0, -50%) scale(0.85);
    transform-origin: right;
  }
  @media (max-width: 1000px) {
    position: fixed;
    opacity: 0.28;
    transform: translate(0, -30%) scale(0.6);
    transform-origin: right;
  }
}


.indexPagination {
  pointer-events: none;
  font-size: 280px;
  font-weight: 700;
  line-height: 0.74;
  position: fixed;
  bottom: 0;
  right: 0;
  opacity: 0.15;
  color: #b03eea;
  z-index: 1;
  @media (max-width: 1000px) {
    display: none;
  }
}

@media (max-width: 1400px) or (max-height: 800px) {
  .indexPagination {
    z-index: 0;
    font-size: 220px;
  }
}

.my-swiper > .swiper-wrapper > .swiper-slide {
  transition: 1.2s transform, .75s opacity;
  transform-origin: 30% 30%;
  transform: scale(0.5) translate(50%, 0%);
}

@media (max-width: 1000px) {
  .my-swiper > .swiper-wrapper {
    padding-bottom: 35px;
  }

  .pagination-upper .swiper-pagination {
    margin-top: -70px;
  }
}

.my-swiper > .swiper-wrapper > .swiper-slide.swiper-slide-active {
  opacity: 1;
  transform: scale(1) translate(0%, 0%);
}

.my-swiper > .swiper-pagination {
  position: absolute;
  left: 55px;
  top: 45%;
  transform: translateY(-50%);
  height: fit-content;
  bottom: 0;
  width: 20px;
}

@media (max-width: 1535px) {
  .my-swiper > .swiper-pagination {
    left: 20px;
  }
}

@media (max-width: 1024px) {
  .my-swiper > .swiper-pagination {
    position: fixed !important;
    left: 50% !important;
    transform: translateX(-50%);
    right: initial !important;
    top: initial !important;
    width: fit-content;
    margin: 0 auto;
    bottom: 50px !important;
    z-index: 102;
    display: flex;
  }
}

.my-swiper > .swiper-pagination .swiper-pagination-bullet:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.my-swiper {
  @media (max-width: 1000px) {
    display: none;

  }
}
</style>
