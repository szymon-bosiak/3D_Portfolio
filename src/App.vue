<template>
  <div>
    <div class="h-0">
      <Navigation />
    </div>
    <div class="h-screen w-full">
      <Scene />
    </div>
  </div>
</template>

<script setup>
import Scene from "./components/Scene.vue";
import Navigation from "./components/Navigation.vue";
</script>
