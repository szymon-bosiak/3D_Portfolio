<template>
  <div>
    <nav
      class="absolute z-10 flex h-12 w-full items-center justify-between px-6 pt-4 text-off-white"
    >
      <div>
        <h2 class="select-none text-4xl">Szymon Bosiak</h2>
      </div>
      <div class="flex gap-5 text-2xl">
        <div class="relative">
          <a
            @mouseenter="animateAbout"
            @mouseleave="animateAbout"
            class="font-outline-off-white relative z-30 text-transparent"
            href="#about"
            >About</a
          >
          <p class="absolute bottom-0 top-0 z-10">About</p>
          <hr
            id="aboutButton"
            class="transform-translate absolute z-20 h-6 w-full border-none transition-all duration-300"
          />
        </div>
        <div class="relative">
          <a
            @mouseenter="animateProjects"
            @mouseleave="animateProjects"
            class="font-outline-off-white relative z-30 text-transparent"
            href="#projects"
            >Projects</a
          >
          <p class="absolute bottom-0 top-0 z-10">Projects</p>
          <hr
            id="projectsButton"
            class="transform-translate absolute z-20 h-6 w-full border-none transition-all duration-300"
          />
        </div>
        <div class="relative">
          <a
            @mouseenter="animateContact"
            @mouseleave="animateContact"
            class="font-outline-off-white relative z-30 text-transparent"
            href="#contact"
            >Contact</a
          >
          <p class="absolute bottom-0 top-0 z-10">Contact</p>
          <hr
            id="contactButton"
            class="transform-translate absolute z-20 h-6 w-full border-none transition-all duration-300"
          />
        </div>
      </div>
    </nav>
    <div class="h-screen w-full"></div>
  </div>
</template>

<script setup>
const animateAbout = () => {
  document.querySelector("#aboutButton").classList.toggle("-translate-y-6");
  document.querySelector("#aboutButton").classList.toggle("bg-black");
};

const animateProjects = () => {
  document.querySelector("#projectsButton").classList.toggle("-translate-y-6");
  document.querySelector("#projectsButton").classList.toggle("bg-black");
};

const animateContact = () => {
  document.querySelector("#contactButton").classList.toggle("-translate-y-6");
  document.querySelector("#contactButton").classList.toggle("bg-black");
};
</script>
