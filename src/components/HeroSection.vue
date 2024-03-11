<template>
  <div class="HeroSection min-h-screen flex items-center justify-center">
    <div class="container mx-auto flex flex-col text-center lg:text-start lg:flex-row lg:justify-between text-white gap-10">
      <div class="HeroText flex flex-col gap-5 lg:gap-14">
        <!-- part 1 -->
        <div class="flex flex-col gap-5">
        <h2 class="sm:text-3xl text-2xl font-bold 2xl:text-6xl">Hello, <span class="text-[#00ad8c]">I'm</span></h2>
        <h1 class="text-[#00ad8c] text-4xl sm:text-6xl font-bold 2xl:text-8xl">Jawad AlHajj</h1>
        <h2 class="sm:text-3xl text-2xl font-bold 2xl:text-6xl">Front-end Developer</h2>
        <p class="text-[#dee5ec] 2xl:text-xl">With knowlage in both web development and design, I offer the best project result in quality work.</p>
        <div class="flex justify-center items-center lg:block">
          <a href='../MainCV.pdf' download="MainCV.pdf" class="btn-primary">Download</a>
        </div>
        </div>
        <!-- part 2 -->
        <ul class="soical-btns flex gap-5 items-center lg:justify-start justify-center">
          <li class="hexagon"><a href="https://github.com/Jawad123453" target="_blank"><i class="fa-brands fa-github text-xl 2xl:text-2xl"></i></a></li>
          <li class="hexagon"><a href="https://www.linkedin.com/in/jawad-alhajj-33b327215/" target="_blank"><i class="fa-brands fa-linkedin-in text-xl 2xl:text-2xl"></i></a></li>
        </ul>
      </div>

      <div class="HeroImg lg:block flex justify-center items-center">
        <div class="mainshap">
          <div class="nextone"></div>
          <div class="mainimg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const downloadfunction = (link)=>{
  link.download = 'MainCV.pdf'
}
</script>

<style scoped>

.HeroSection{
  padding-top:120px;
  padding-bottom:30px;
}
.hexagon {
  position: relative;
  padding:20px;
}
.hexagon a {
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #01886f;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.hexagon a:hover{
  background-color: transparent;
  color:#01886f;
}

.mainshap{
  position: relative;
  width: 400px;
  height:400px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: #01886f;
}
.mainimg{
  background-image: url("../assets/hero-img.png");
  background-position: start;
  background-size: cover;
  background-repeat: no-repeat;
  height:100%;
  width: 100%;
  position: relative;
}
.HeroText{
  opacity: 0;
  animation: slidin 1s ease-in-out forwards;
}
.HeroImg{
  opacity: 0;
  animation: comingimg 1s ease-in-out 1s forwards;
}
@keyframes comingimg {
  0%{ 
    transform: translateY(-150%);
  }
  100%{
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slidin {
  0%{ 
    transform: translateX(-150%);
  }
  100%{
    opacity: 1;
    transform: translateY(0%);
  }
}
@media (min-width:1536px) {
  .mainshap{
    width: 600px;
    height:600px;
  }
  }
@media (max-width:600px) {
  .mainshap{
    width: 500px;
    height:500px;
  }
}
@media (max-width:500px) {
  .mainshap{
    width: 400px;
    height:400px;
  }
}
@media (max-width:400px) {
  .mainshap{
    width: 300px;
    height:300px;
  }
}
</style>