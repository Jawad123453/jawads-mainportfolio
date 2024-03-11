<template>
  <div class="bg-[#22242f] py-20">
    <div class="container mx-auto flex flex-col-reverse justify-center lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0">
      <div class="About-img lg:mx-0 mx-auto opacity-0" :class="makeittrue?'animation-1':''">
        <div class="shape"></div>
        <div class="mainimg"></div>
      </div>
      <div :class="makeittrue?'animation-2':''" class="About-text flex flex-col text-white lg:text-start text-center lg:basis-1/2 opacity-0">
        <h3 class="text-md font-bold 2xl:text-3xl">My <span class="text-[#01886f]">Intro</span></h3>
        <h1 class="font-bold text-3xl mb-5 2xl:text-5xl">About Me</h1>
        <p class="mb-5 text-[#dee5ec] 2xl:text-xl">I am Jawad Alhajj, a seasoned Vue.js Developer with over 3 years of
    experience in the field. My expertise lies in Vue.js development, where I adeptly utilize various Vue libraries to enhance the functionality and
    performance of web applications. Proficient in crafting efficient and scalable front end solutions, I bring a strong work ethic to every project, ensuring high-quality results that exceed expectations. I will get an engineer diploma from Islamic university in 1 year.</p>
        <div class="flex justify-center items-center lg:block">
          <button class="btn-primary" @click="scrollToSection('contact')">Contact Me</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,onMounted,onBeforeUnmount} from "vue"
const scrollToSection = (sectionId)=>{
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector(".Header").offsetHeight,
      behavior: "smooth",
    });
  }
}
onMounted(() => {
  window.addEventListener("scroll",updateActiveSection);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll",updateActiveSection);
});

const makeittrue=ref(false)
const updateActiveSection = ()=>{
  const scrollPosition = window.scrollY;
  const aboutOffset =  document.getElementById("about").offsetTop - document.querySelector(".Header").offsetHeight;
  if (scrollPosition >= aboutOffset) {
    makeittrue.value = true;
  }
}

</script>

<style scoped>
.About-img{
  position: relative;
  width:400px;
  height:400px;
  clip-path: polygon(93.04% 75.45%,49.48% 100%,6.44% 74.55%,6.96% 24.55%,50.52% 0%,93.56% 25.45%);
  overflow: hidden;
}
.shape {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 100%;
  aspect-ratio: 1;
  background-color: #01886f;
  clip-path: polygon(93.04% 75.45%,49.48% 100%,6.44% 74.55%,6.96% 24.55%,50.52% 0%,93.56% 25.45%,93.04% 75.45%,calc(93.56% - 8.71px) calc(25.45% - -4.91px),calc(50.52% - 0.1px) calc(0% - -10px),calc(6.96% - -8.61px) calc(24.55% - -5.09px),calc(6.44% - -8.71px) calc(74.55% - 4.91px),calc(49.48% - -0.1px) calc(100% - 10px),calc(93.04% - 8.61px) calc(75.45% - 5.09px),calc(93.56% - 8.71px) calc(25.45% - -4.91px));
}
.mainimg{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  background-image: url("../assets/hero-img.png");
  background-position: start;
  background-size: cover;
  background-repeat: no-repeat;
  height:95%;
  width: 95%;
  clip-path: polygon(93.04% 75.45%,49.48% 100%,6.44% 74.55%,6.96% 24.55%,50.52% 0%,93.56% 25.45%);
}
.animation-1{
  animation: coming1 1s ease-in-out 1s forwards;
}
.animation-2{
  animation: coming2 1s ease forwards;
}
@keyframes coming1 {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes coming2 {
  0%{
    transform: translateX(-1000%);
  }
  100%{
    opacity: 1;
    transform: translateX(0%);
  }
}
@media (min-width:1536px) {
  .About-img{
    width: 600px;
    height:600px;
  }
  .shape {
    width:99%;
  }
}
@media (max-width:550px) {
  .About-img{
    width:300px;
    height:300px;
  }
  .mainimg{
    top:49%;
  }
}
@media (max-width:400px) {
  .About-img{
    width:250px;
    height:250px;
  }
  .mainimg{
    top:48%;
  }
}
</style>