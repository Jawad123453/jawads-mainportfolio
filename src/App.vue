<script setup>
import HeaderVue from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Servics from './components/Servics.vue';
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";
import Copyright from './components/Copyright.vue';
</script>

<template>
  <HeaderVue />
  <HeroSection id="home"/>
  <AboutMe id="about"/>
  <Skills id="skills"/>
  <Servics id="servics"/>
  <Project id="project"/>
  <Contact id="contact"/>
  <Copyright/>
</template>

<style>
*{
  font-family: sans-serif;
}
html{
  scroll-behavior: smooth;
}
body{
  background-color: #1a2027;
}
</style>
