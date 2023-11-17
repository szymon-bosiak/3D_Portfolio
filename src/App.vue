<template>
  <div>
    <div class="h-0">
      <Navigation />
    </div>

    <div class="relative z-0 h-[110vh] w-full">
      <Scene />
    </div>

    <div class="bg-off-white">
      <div class="text-black">
        <h2>About me</h2>
        <p>
          I'm a passionate front-end web developer with a keen eye for
          aesthetics. I believe in the power of clean, user-friendly design to
          elevate the digital experience. Constantly fueled by a curiosity for
          learning, I thrive on staying ahead of the curve with the latest web
          technologies.
        </p>
        <p>
          Beyond coding, you'll often find me immersed in the world of music
          discovery - always on the lookout for the perfect soundtrack to
          accompany my coding sessions. When I'm not crafting pixel-perfect
          websites, you can catch me at the gym, where I find both physical and
          mental rejuvenation.
        </p>
        <p>
          Join me on this journey of blending art and technology, where every
          line of code is an opportunity to create something visually stunning
          and functionally seamless. Let's turn ideas into interactive
          experiences that leave a lasting impression.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Scene from "./components/Scene.vue";
import Navigation from "./components/Navigation.vue";
</script>
