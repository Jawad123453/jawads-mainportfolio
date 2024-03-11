<template>
  <div class="bg-[#22242f] py-20">
    <div class="text-center text-white mb-10">
      <h3 class="text-md font-bold 2xl:text-3xl">My <span class="text-[#01886f]">Servics</span></h3>
      <h1 class="font-bold text-3xl mb-5 2xl:text-5xl">What I Do</h1>
    </div>
    <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <div class="p-10 text-center bg-[#1a2027] rounded-lg onhover opacity-0" :class="makeittrue?'anyanimetion-1':''">
        <i class="fa-solid fa-display text-5xl text-[#01886f] 2xl:text-8xl"></i>
        <h1 class="text-white text-2xl mt-3 2xl:text-4xl">Web Development</h1>
        <p class="text-[#dee5ec] my-5  2xl:text-2xl">Development of custom different web page. Using current technplogy and libraries of the labar field</p>
      </div>
      <div class="p-10 text-center bg-[#1a2027] rounded-lg onhover opacity-0" :class="makeittrue?'anyanimetion-2':''">
        <i class="fa-solid fa-pen-nib text-5xl text-[#01886f] 2xl:text-8xl"></i>
        <h1 class="text-white text-2xl mt-3 2xl:text-4xl">UX UI</h1>
        <p class="text-[#dee5ec] my-5 2xl:text-2xl">I offer design of web interface and mobile application. Design made in figma</p>
      </div>
      <div class="p-10 text-center bg-[#1a2027] rounded-lg onhover opacity-0" :class="makeittrue?'anyanimetion-3':''">
        <i class="fa-solid fa-swatchbook text-5xl text-[#01886f] 2xl:text-8xl"></i>
        <h1 class="text-white text-2xl mt-3 2xl:text-4xl">Graphic Design</h1>
        <p class="text-[#dee5ec] my-5 2xl:text-2xl">I made design at the client's requast, banner design, posters, digital designs among others</p>
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
  const servicsOffset =  document.getElementById("servics").offsetTop - document.querySelector(".Header").offsetHeight;
  if (scrollPosition >= servicsOffset) {
    makeittrue.value = true;
  }
}
</script>

<style scoped>
.anyanimetion-1{
  opacity: 0;
  animation: coming1 0.5s ease-in-out forwards;
}
.anyanimetion-2{
  opacity: 0;
  animation: coming1 0.5s ease-in-out 0.7s forwards;
}
.anyanimetion-3{
  opacity: 0;
  animation: coming1 0.5s ease-in-out 1.4s forwards;
}

@keyframes coming1 {
  0%{
    opacity: 0;
    transform: scale(0) translateY(-150px);
  }
  100%{
    opacity: 1;
    transform: scale(1)  translateY(0);

  }
}
.onhover{
  position: relative;
  transition: 0.3s linear;
}
.onhover::after{
  content: "";
  position: absolute;
  top:0;
  left:50%;
  transform: translate(-50%,-50%);
  width:0%;
  height:3px;
  background-color: #00a586;
  border-radius: 20px;
  transition: 0.4s ease;
}
.onhover:hover::after{
  width:100%;
}
</style>