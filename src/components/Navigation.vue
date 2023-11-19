<template>
  <div>
    <nav
      class="absolute z-10 flex h-12 w-full items-center justify-between overflow-x-clip px-6 pt-4 text-off-white"
    >
      <div>
        <h2 class="xxs:mt-0 mr-[90px] mt-10 select-none text-4xl">
          Szymon Bosiak
        </h2>
      </div>

      <!-- Mobile menu -->
      <div class="relative z-20 md:hidden">
        <div
          @click="toggleMenu()"
          class="shapeshifter backgroundSVG bg-transparent"
          id="hamburger"
        ></div>
      </div>

      <div class="absolute -right-28 -top-24 h-[360px] w-[360px] rounded-full">
        <img
          class="transition-all duration-500"
          :class="{
            '-rotate-[160deg]': isMenuActive,
            'opacity-1': isMenuActive,
            'opacity-1': isMenuActive,
            'delay-300': !isMenuActive,
            'opacity-0': !isMenuActive,
            'opacity-0': !isMenuActive,
          }"
          src="../assets/circle_no_fill.svg"
        />
        <img
          class="absolute left-[15px] top-[10px] h-[340px] w-[340px] transition-all duration-300"
          src="../assets/circle.svg"
          :class="{
            'rotate-[270deg]': isMenuActive,
            'opacity-1': isMenuActive,
            'opacity-1': isMenuActive,
            'delay-300': !isMenuActive,
            'opacity-0': !isMenuActive,
            'opacity-0': !isMenuActive,
          }"
        />
        <div
          class="absolute right-24 top-52 z-40 text-2xl font-bold text-off-white"
        >
          <a
            @click="toggleMenu()"
            class="relative -top-16 transition-all duration-100"
            :class="{
              'left-[280px]': !isMenuActive,
              'delay-200': isMenuActive,
              'left-20': isMenuActive,
            }"
            >About</a
          >
          <a
            @click="toggleMenu()"
            class="relative -top-2 transition-all duration-200"
            :class="{
              'left-[224px]': !isMenuActive,
              'delay-200': isMenuActive,
              'left-6': isMenuActive,
            }"
            >Projects</a
          >
          <a
            @click="toggleMenu()"
            class="relative top-14 transition-all duration-300"
            :class="{
              'left-[152px]': !isMenuActive,
              'delay-200': isMenuActive,
              '-left-12': isMenuActive,
            }"
            >Contact</a
          >
        </div>
      </div>

      <!-- Desktop menu -->
      <div class="hidden gap-5 text-2xl md:flex">
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
import { ref } from "vue";
const isMenuActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
  const hamburger = document.querySelector("#hamburger");
  if (hamburger.classList.contains("forwards")) {
    hamburger.classList.remove("forwards");
    hamburger.classList.add("reverse");
  } else {
    hamburger.classList.remove("reverse");
    hamburger.classList.add("forwards");
  }
};

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

<style lang="css">
@keyframes play60forwards {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -1800px 0px;
  }
}

@keyframes play60reverse {
  0% {
    background-position: -1800px 0px;
  }
  100% {
    background-position: 0px 0px;
  }
}

.backgroundSVG {
  background-image: url("../assets/sprite_60fps.svg");
}

.shapeshifter {
  animation-duration: 350ms;
  animation-timing-function: steps(45);
  animation-fill-mode: forwards;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
}

.reverse {
  animation-name: play60reverse;
}

.forwards {
  animation-name: play60forwards;
}
</style>
