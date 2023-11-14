<template>
  <div>
    <nav
      class="text-off-white absolute z-10 flex h-16 w-full items-center justify-between px-4"
    >
      <div>
        <h2 class="select-none text-3xl">Szymon Bosiak</h2>
      </div>
      <div class="flex gap-5 text-xl">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <div class="h-screen w-full">
      <Scene />
    </div>
  </div>
</template>

<script setup>
import Scene from "./components/Scene.vue";
</script>
