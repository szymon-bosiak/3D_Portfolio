<template>
  <div>
    <div class="h-0">
      <Navigation />
    </div>

    <div class="relative z-0 h-[110vh] w-full">
      <Scene />
    </div>

    <div class="bg-off-white">
      
    </div>
  </div>
</template>

<script setup>
import Scene from "./components/Scene.vue";
import Navigation from "./components/Navigation.vue";
</script>
