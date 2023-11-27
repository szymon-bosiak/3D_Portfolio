<template>
  <div>
    <div>
      <Loading />
    </div>

    <div class="h-0">
      <Navigation />
    </div>

    <div class="relative z-0 h-[110vh] w-full">
      <Scene />
    </div>

    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Loading from "./components/Loading.vue";
import Navigation from "./components/Navigation.vue";
import Scene from "./components/Scene.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
</script>
