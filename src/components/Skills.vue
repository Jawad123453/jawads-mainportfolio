<template>
  <div class="Skills py-20">
    <div class="container mx-auto flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between">
      <div class="Skill-text flex flex-col text-white lg:text-start text-center lg:basis-1/3 opacity-0" :class="makeittrue?'animation-2':''">
        <h3 class="text-md font-bold 2xl:text-3xl">Favorite <span class="text-[#01886f]">Skills</span></h3>
        <h1 class="font-bold text-3xl mb-5 2xl:text-5xl">My Skills</h1>
        <p class="mb-5 text-[#dee5ec] 2xl:text-xl">See what skills i usually use in my projects, to develop a project for you.</p>
        <div class="flex justify-center items-center lg:block">
          <button class="btn-primary" @click="scrollToSection('project')">See Projects</button>
        </div>
      </div>
      <div class="myskills lg:basis-1/2 text-white grid lg:grid-cols-2 md:grid-cols-3 lg:gap-0 sm:grid-cols-2 gap-3 opacity-0" :class="makeittrue?'animation-1':''">
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">01.</h3>
          <h3 class="text-xl 2xl:text-3xl">HTML & CSS</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">02.</h3>
          <h3 class="text-xl 2xl:text-3xl">JS</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">03.</h3>
          <h3 class="text-xl 2xl:text-3xl">VUEJS</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">04.</h3>
          <h3 class="text-xl 2xl:text-3xl">TAILWINDCSS</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">05.</h3>
          <h3 class="text-xl 2xl:text-3xl">BOOTSTRAP</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">06.</h3>
          <h3 class="text-xl 2xl:text-3xl">FIGMA</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">07.</h3>
          <h3 class="text-xl 2xl:text-3xl">GIT & GITHUB</h3>
        </div>
        <div class="flex items-center gap-3">
          <h3 class="text-[#00ad8c] font-bold text-xl 2xl:text-4xl">08.</h3>
          <h3 class="text-xl 2xl:text-3xl">VUEX & PINIA</h3>
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
  const skillsOffset =  document.getElementById("skills").offsetTop - document.querySelector(".Header").offsetHeight;
  if (scrollPosition >= skillsOffset) {
    makeittrue.value = true;
  }
}
</script>

<style scoped>
.animation-1{
  opacity: 0;
  animation: coming1 1s ease-in-out 1s forwards;
}
.animation-2{
  opacity: 0;
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
</style>