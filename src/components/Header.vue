<template>
  <div class="Header fixed top-0 w-full flex justify-center items-center bg-[#1a2027] shadow">
    <div class="container mx-auto flex justify-between items-center text-white">
      <div class="logo text-2xl md:text-2xl sm:text-xl font-extrabold 2xl:text-4xl cursor-pointer" @click="scrollToSection('home')">JAWAD <span class="text-[#00ad8c]">ALHAJJ</span></div>
      <i class="fa-solid fa-bars text-xl block sm:hidden  cursor-pointer" @click="isthere = true"></i>
      <Transition name="fade">
        <ul class="mainlist flex flex-col w-full absolute top-0 left-0 h-screen justify-evenly items-center bg-[#1a2027] sm:flex-row sm:gap-6 sm:relative sm:justify-start sm:w-fit sm:h-fit" v-if="isthere">
          <i class="fa-solid fa-circle-xmark sm:text-lg text-2xl absolute top-5 right-5 block sm:hidden cursor-pointer" @click="isthere = false"></i>
          <li class="sm:text-lg text-2xl 2xl:text-2xl cursor-pointer relative" @click="removeul,scrollToSection('home')" :class="{ 'active': currentSection === 'home'}">Home</li>
          <li class="sm:text-lg text-2xl 2xl:text-2xl  cursor-pointer relative" :class="{ 'active': currentSection === 'about'}" @click="removeul,scrollToSection('about')">About</li>
          <li class="sm:text-lg text-2xl 2xl:text-2xl  cursor-pointer relative" @click="removeul,scrollToSection('servics')" :class="{ 'active': currentSection === 'servics'}">Servics</li>
          <li class="sm:text-lg text-2xl 2xl:text-2xl  cursor-pointer relative" @click="removeul,scrollToSection('project')" :class="{ 'active': currentSection === 'project'}">Project</li>
          <li class="sm:text-lg text-2xl 2xl:text-2xl  cursor-pointer relative" @click="removeul,scrollToSection('contact')" :class="{ 'active': currentSection === 'contact'}">Contact</li>
        </ul>
    </Transition>
    </div>
  </div>
  
</template>

<script setup>
import { ref,onMounted,onBeforeUnmount } from 'vue';

const isthere=ref(true);
const checkScreenWidth = () => {
  isthere.value = window.innerWidth >= 640;
};
const removeul = ()=>{
  if(window.innerWidth < 640){
    isthere.value = false
  }
}
onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
  window.addEventListener("scroll",updateActiveSection);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth);
  window.removeEventListener("scroll",updateActiveSection);
});


const scrollToSection = (sectionId)=>{
  removeul();
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector(".Header").offsetHeight,
      behavior: "smooth",
    });
  }
}
const currentSection = ref("home");
const updateActiveSection=()=> {
  const scrollPosition = window.scrollY;
  const homeOffset = document.getElementById("home").offsetTop - document.querySelector(".Header").offsetHeight;
  const aboutOffset =  document.getElementById("about").offsetTop - document.querySelector(".Header").offsetHeight;
  const servicesOffset = document.getElementById("servics").offsetTop - document.querySelector(".Header").offsetHeight;
  const projectOffset = document.getElementById("project").offsetTop - document.querySelector(".Header").offsetHeight;
  const contactOffset = document.getElementById("contact").offsetTop - document.querySelector(".Header").offsetHeight;

  if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
    currentSection.value = "home";
  } else if (scrollPosition >= aboutOffset && scrollPosition < servicesOffset) {
    currentSection.value = "about";
  } else if (scrollPosition >= servicesOffset && scrollPosition < projectOffset) {
    currentSection.value = "servics";
  }else if (scrollPosition >= projectOffset && scrollPosition < contactOffset) {
    currentSection.value = "project";
  }else if (scrollPosition >= contactOffset) {
    currentSection.value = "contact";
  } else {
    currentSection.value = null;
  }
}
</script>

<style scoped>
.Header{
  height: 100px;
  z-index: 100;
}
li:hover,
li.active{
  color:#00ad8c;
  transition: 0.3s linear;
}
li::after{
  content: "";
  position: absolute;
  bottom:0;
  left:0;
  width: 0%;
  height:2px;
  background-color: #00ad8c;
  transition: 0.3s linear;
}
li.active::after{
  content: "";
  position: absolute;
  bottom:0;
  left:0;
  width: 100%;
  height:2px;
  background-color: #00ad8c;
  transition: 0.3s linear;
}
li:hover::after{
  width: 100%;
}
/*  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>