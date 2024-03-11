<template>
  <div class="bg-[#22242f] py-20">
    <div class="text-center text-white mb-10">
      <h3 class="text-md font-bold 2xl:text-3xl">Get In <span class="text-[#01886f]">Touch</span></h3>
      <h1 class="font-bold text-3xl mb-5 2xl:text-5xl">Contact Me</h1>
    </div>
    <form class="container md:w-8/12 mx-auto" @submit.prevent="sendEmail">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-5">
        <input type="text" placeholder="Enter your name" class="inputshap opacity-0" :class="makeittrue?'thisanimation-1':''" v-model="fromname" id="fromname" required>
        <input type="email" placeholder="Enter your email" class="inputshap opacity-0" :class="makeittrue?'thisanimation-2':''" v-model="fromemail" id="fromemail" required>
      </div>
      <textarea cols="30" rows="10" class="inputshap mt-5  opacity-0" :class="makeittrue?'thisanimation-3':''" placeholder="Enter your massage" v-model="fromMessage" id="fromMessage" required></textarea>
      <div class="flex justify-center items-center pt-7 opacity-0" :class="makeittrue?'thisanimation-4':''">
      <button class="btn-primary text-white" type="submit">Send Massage</button>
    </div>
  </form>
    </div>
   
</template>

<script setup>
import emailjs from 'emailjs-com';
import emailjsConfig from '../emailjs-config/emailjs-config';
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
  const contactOffset =  document.getElementById("contact").offsetTop - document.querySelector(".Header").offsetHeight;
  if (scrollPosition >= contactOffset) {
    makeittrue.value = true;
  }
}

const fromname= ref("");
const fromemail= ref("");
const fromMessage= ref("");
const sendEmail = () => {
      const templateParams = {
        from_name: fromname.value,
        from_email: fromemail.value,
        message: fromMessage.value,
      };

      emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.userId
        )
        .then((response) => {
          console.log('Email sent successfully:', response);
          window.alert('Email sent successfully')
          fromname.value = '';
          fromemail.value = '';
          fromMessage.value = '';
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };
</script>

<style scoped>
.thisanimation-1{
  opacity: 0;
  animation: coming1 0.5s ease-in-out forwards;
}
.thisanimation-2{
  opacity: 0;
  animation: coming1 0.5s ease-in-out 0.3s forwards;
}
.thisanimation-3{
  opacity: 0;
  animation: coming1 0.5s ease-in-out 0.6s forwards;
}
.thisanimation-4{
  opacity: 0;
  animation: coming1 0.5s ease-in-out 0.9s forwards;
}

@keyframes coming1 {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>