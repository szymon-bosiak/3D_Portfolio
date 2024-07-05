<template>
  <div
    id="projects"
    class="flex justify-center bg-black bg-[url('../assets/images/stars.svg')] bg-repeat-y"
  >
    <div class="w-full max-w-4xl 2xl:max-w-[1800px] px-8 py-8 text-off-white">
      <h2 class="mb-6 text-lg font-bold">// Projects</h2>
      <div class="mb-6 flex items-center gap-4">
        <h3 class="font-outline font-bold">Tech stack:</h3>
        <div
          v-for="item in techStack"
          class="relative flex flex-col items-center justify-center"
        >
          <img
            :src="item.img"
            class="h-8 w-8"
            :alt="item.name"
            :id="item.id"
            @mouseenter="popInfo(item.id)"
            @mouseleave="popInfo(item.id)"
          />
          <div
            class="absolute -top-[68px] hidden h-[60px] w-[120px] select-none items-center justify-center bg-[url('../assets/images/pop.svg')] bg-cover bg-no-repeat opacity-0 xxs:flex"
            :id="'pop_' + item.id"
          >
            <p class="w-full -translate-y-1 px-2 text-center text-black">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-center 2xl:grid 2xl:grid-cols-2 2xl:gap-14">
        <div
          v-for="(project, i) in projects"
          @mouseenter="fileSelect(i)"
          @mouseleave="fileSelect(i)"
          class="pb-6 m-auto flex max-w-max flex-col text-black transition duration-500 hover:scale-105"
        >
          <div class="flex w-full" :class="{ 'justify-end': i % 2 !== 1 }">
            <h2
              class="clip w-max translate-y-[1px] bg-off-white px-5 text-lg font-bold"
            >
              {{ project.name }}
            </h2>
          </div>
          <div class="bg-off-white p-3">
            <div class="relative">
              <img
                :src="project.img"
                :id="'file_' + i"
                alt="project screenshot"
                class="w-[550px] shadow contrast-125 grayscale transition duration-500"
              />
              <div
                class="absolute -left-1.5 -top-1.5 h-10 w-10 border-l-2 border-t-2 border-black"
              ></div>
              <div
                class="absolute -right-1.5 -top-1.5 h-10 w-10 border-r-2 border-t-2 border-black"
              ></div>
              <div
                class="absolute -bottom-1.5 -left-1.5 h-10 w-10 border-b-2 border-l-2 border-black"
              ></div>
              <div
                class="absolute -bottom-1.5 -right-1.5 h-10 w-10 border-b-2 border-r-2 border-black"
              ></div>
            </div>
            <div class="mt-3">
              <div class="flex gap-2">
                <p>Desc:</p>
                <p>{{ project.desc }}</p>
              </div>
              <div class="flex w-full justify-around py-2">
                <div
                  class="border-2 border-black p-[2px] transition-all hover:m-[2px] hover:p-0"
                >
                  <a
                    class="bg-black px-3 text-off-white"
                    :href="project.live"
                    target="_blank"
                    >Live</a
                  >
                </div>

                <div
                  class="m-[2px] border-2 border-black transition-all hover:m-[0px] hover:p-[2px]"
                >
                  <a
                    class="bg-transparent px-3 font-semibold"
                    :href="project.code"
                    target="_blank"
                    >Code</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="h-full w-full">
          <img src="../assets/images/cabinet.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgVue from '../assets/images/vue.svg'
import imgReact from '../assets/images/react.svg'
import imgJs from '../assets/images/js.svg'
import imgTailwind from '../assets/images/tailwind.svg'
import imgScss from '../assets/images/sass.svg'

import imgMoody from '../assets/images/screenshots/moody.png'
import imgFakturka from '../assets/images/screenshots/fakturka.png'
import imgQueis from '../assets/images/screenshots/queistal.jpg'
import imgGiard from '../assets/images/screenshots/giard.jpg'
import imgTime from '../assets/images/screenshots/time.png'

const techStack = [
  {
    img: imgVue,
    name: "Vue.js",
    id: "vue",
  },
  {
    img: imgReact,
    name: "React.js",
    id: "react",
  },
  {
    img: imgJs,
    name: "JavaScript",
    id: "js",
  },
  {
    img: imgTailwind,
    name: "Tailwind",
    id: "tailwind",
  },
  {
    img: imgScss,
    name: "SCSS",
    id: "scss",
  },
];

// screenshots are taken form 1400x967 viewport
const projects = [
  {
    img: imgMoody,
    name: "The Moody Cloud",
    desc: "Weather app",
    live: "https://szymon-bosiak.github.io/The_Moody_Cloud/",
    code: "https://github.com/szymon-bosiak/The_Moody_Cloud",
  },
  {
    img: imgFakturka,
    name: "Fakturka",
    desc: "Invoice template app",
    live: "https://szymon-bosiak.github.io/Fakturka/",
    code: "https://github.com/szymon-bosiak/Fakturka",
  },
  {
    img: imgQueis,
    name: "Queis Tal",
    desc: "Wood construction company's landing page",
    live: "https://szymon-bosiak.github.io/queistal/",
    code: "https://github.com/szymon-bosiak/queistal",
  },
  {
    img: imgGiard,
    name: "giarddesign",
    desc: "Gardening company's landing page",
    live: "https://szymon-bosiak.github.io/adRespect/",
    code: "https://github.com/szymon-bosiak/adRespect",
  },
  {
    img: imgTime,
    name: "Time Management App",
    desc: "ToDo component of planed time management app",
    live: "https://szymon-bosiak.github.io/TimeManagementApp/",
    code: "https://github.com/szymon-bosiak/TimeManagementApp",
  },
];

const popInfo = (id) => {
  const targetId = "pop_" + id;
  const popTarget = document.querySelector("#" + targetId);
  popTarget.classList.toggle("opacity-100");
};

const fileSelect = (i) => {
  const fileId = "file_" + i;
  const animateFile = document.querySelector("#" + fileId);
  animateFile.classList.toggle("grayscale-0");
  animateFile.classList.toggle("contrast-100");
};
</script>

<style>
.clip {
  clip-path: polygon(6% 0%, 94% 0%, 100% 102%, 0% 102%);
}
</style>
