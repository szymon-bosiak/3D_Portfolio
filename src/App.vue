<template>
  <div>
    <div class="h-0">
      <Navigation />
    </div>

    <div class="relative z-0 h-[110vh] w-full">
      <Scene />
    </div>

    <About />
    <Projects />
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Scene from "./components/Scene.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
</script>
