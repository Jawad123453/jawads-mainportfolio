<template>
  <div class="py-20">
    <div class="text-center text-white mb-10">
      <h3 class="text-md font-bold 2xl:text-3xl">My <span class="text-[#01886f]">Work</span></h3>
      <h1 class="font-bold text-3xl mb-5 2xl:text-5xl">Resent Projects</h1>
    </div>
    <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 opacity-0" :class="makeittrue?'anyanimetion':''">
      <div class="projectbox relative overflow-hidden">
        <img src="../assets/P1.png" alt="" class="rounded-xl">
        <div class="box-text flex justify-center items-center flex-col gap-3 text-white rounded-xl">
          <h1>Rock Paper Scissors</h1>
          <a href="https://jawad123453.github.io/Rock-Paper-Scissors-game/" class="flex items-center gap-1" target="_blank">
            <p>View Website</p>
            <i class="fa-solid fa-eye text-[#22242f]"></i>
          </a>
        </div>
      </div>
      <div class="projectbox relative overflow-hidden">
        <img src="../assets/P2.png" alt=""  class="rounded-xl">
        <div class="box-text flex justify-center items-center flex-col gap-3 text-white rounded-xl">
          <h1>Random Meals</h1>
          <a href="https://jawad123453.github.io/Random-Meals-vue-app-/" class="flex items-center gap-1"  target="_blank">
            <p>View Website</p>
            <i class="fa-solid fa-eye text-[#22242f]"></i>
          </a>
        </div>
      </div>
      <div class="projectbox  relative overflow-hidden">
        <img src="../assets/P3.png" alt=""  class="rounded-xl">
        <div class="box-text flex justify-center items-center flex-col gap-3 text-white rounded-xl">
          <h1>Invoice App</h1>
          <a href="https://invoiceapp-5d0e2.web.app/" class="flex items-center gap-1" target="_blank">
            <p>View Website</p>
            <i class="fa-solid fa-eye text-[#22242f]"></i>
          </a>
        </div>
      </div>
      <div class="projectbox  relative overflow-hidden">
        <img src="../assets/P4.png" alt=""  class="rounded-xl">
        <div class="box-text flex justify-center items-center flex-col gap-3 text-white rounded-xl">
          <h1>Elzero Website</h1>
          <a href="https://jawad123453.github.io/elzero-website/" class="flex items-center gap-1" target="_blank">
            <p>View Website</p>
            <i class="fa-solid fa-eye text-[#22242f]"></i>
          </a>
        </div>
      </div>
      <div class="projectbox  relative overflow-hidden">
        <img src="../assets/P5.png" alt="" class="rounded-xl">
        <div class="box-text flex justify-center items-center flex-col gap-3 text-white rounded-xl">
          <h1>Typing Speed Website</h1>
          <a href="https://jawad123453.github.io/Speed-write-app/" class="flex items-center gap-1" target="_blank">
            <p>View Website</p>
            <i class="fa-solid fa-eye text-[#22242f]"></i>
          </a>
        </div>
      </div>
      <div class="projectbox  relative overflow-hidden ">
        <img src="../assets/P6.png" alt="" class="rounded-xl">
        <div class="box-text flex justify-center items-center flex-col gap-3 text-white rounded-xl">
          <h1>JS Documentation</h1>
          <a href="https://jawad123453.github.io/JS-Documentation/" class="flex items-center gap-1" target="_blank">
            <p>View Website</p>
            <i class="fa-solid fa-eye text-[#22242f]"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,onMounted,onBeforeUnmount} from "vue"
onMounted(() => {
  window.addEventListener("scroll",updateActiveSection);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll",updateActiveSection);
});

const makeittrue=ref(false)
const updateActiveSection = ()=>{
  const scrollPosition = window.scrollY;
  const projectOffset =  document.getElementById("project").offsetTop - document.querySelector(".Header").offsetHeight;
  if (scrollPosition >= projectOffset) {
    makeittrue.value = true;
  }
}
</script>

<style scoped>
.box-text{
  position: absolute;
  bottom:-100%;
  left:0;
  width:100%;
  height:100%;
  background:linear-gradient(to top,#00ad8c,rgba(0, 173, 140,0.1));
  transition: 0.3s ease-in-out;
}
.projectbox:hover .box-text{
  bottom:0%;
}
.anyanimetion{
  opacity: 0;
  animation: coming1 1.5s ease forwards;
}
@keyframes coming1 {
  0%{
    opacity: 0;
    transform: translateX(-100%);
  }
  100%{
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>