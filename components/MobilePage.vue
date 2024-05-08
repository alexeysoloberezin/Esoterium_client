<template>
  <div class="mobilePage">
    <Slide1 />
    <About />
    <WhyWe />
    <HowItsWork />
    <Correct />
    <Reviews />
    <FormSlide />
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<!--    <div class="mobilePage-wrp">-->
<!--      <div class="mobilePage-box">-->
<!--        <h1>Откройте тайны своих линий рук с&nbsp;нашими экспертами по хиромантии!</h1>-->
<!--        <p>Подключитесь к ведущим хиромантам мира, тщательно проверенным и&nbsp;сертифицированным для точности и&nbsp;профессионализма.</p>-->
<!--      </div>-->
<!--    </div>-->


<!--    <div class="mobilePage-wrp">-->
<!--      <div class="mobilePage-box">-->
<!--        <h1 class=" ">О нас</h1>-->
<!--        <p class=" ">-->
<!--          Мы в-->
<!--          <b class="font-title ttu">Esoterium</b>-->
<!--          верим, что хиромантия – это искусство и наука, раскрывающая скрытые аспекты вашей личности и судьбы.-->
<!--          Наша-->
<!--          платформа соединяет вас с профессиональными хиромантами, которые прошли строгую проверку и подтверждение-->
<!--          их-->
<!--          навыков и опыта. Здесь вы найдете не только гадания, но и глубокое понимание своих сил и возможностей.-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="mobilePage-wrp">-->
<!--      <div class="mobilePage-box">-->
<!--        <h1 class=" ">Как это работает?</h1>-->
<!--        <ul class="just-list">-->
<!--          <li class=" "><b class="font-title text-lg">Создайте аккаунт -</b>-->
<!--            Регистрация проста и займет всего несколько минут.-->
<!--          </li>-->
<!--          <li class=" "><b class="font-title text-lg">Выберите хироманта -</b>-->
<!--            Просмотрите профили, отзывы и рейтинги наших экспертов.-->
<!--          </li>-->
<!--          <li class=" "><b class="font-title text-lg">Запишитесь на консультацию-->
<!--            -</b> Выберите удобное для вас время и забронируйте-->
<!--            сеанс.-->
<!--          </li>-->
<!--          <li class=" "><b class="font-title text-lg">Получите ваше чтение -</b>-->
<!--            Встречайтесь с вашим хиромантом онлайн и исследуйте-->
<!--            загадки ваших ладоней.-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup>

import About from "./Slides/About.vue";
import Slide1 from "./Slides/Slide1.vue";
import Reviews from "./Slides/Reviews.vue";
import WhyWe from "./Slides/WhyWe.vue";
import FormSlide from "./Slides/FormSlide.vue";
import HowItsWork from "./Slides/HowItsWork.vue";
import Correct from "./Slides/Correct.vue";
</script>

<style lang="scss">
.mobilePage {
  display: none;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  z-index: 20;
  @media (max-width: 1000px) {
    display: block;
    .container_wrp{
      opacity: 1 !important;
      margin: 50px 0 !important;
    }
    .animate-show{
      opacity: 1 !important;
      transform: initial !important;
    }
  }

  &-box {
    padding: 15px 20px;
  }

  &-wrp {
    margin: 50px 0;
  }
}
</style>