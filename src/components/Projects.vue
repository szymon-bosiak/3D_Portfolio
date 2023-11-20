<template>
  <div
    id="projects"
    class="flex justify-center bg-black bg-[url('../../public/images/stars.svg')] bg-cover "
  >
    <div class="max-w-4xl text-off-white w-full px-8 py-8">
      <h2 class="mb-6 text-lg font-bold">// Projects</h2>
      <div class="flex items-center gap-4">
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
            class="absolute -top-[68px] flex w-[120px] h-[60px] select-none items-center justify-center  opacity-0 bg-[url('../../public/images/pop.svg')] bg-no-repeat bg-cover"
            :id="'pop_' + item.id"
          >
            <p class="text-black w-full px-2 text-center -translate-y-1">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const techStack = [
  {
    img: "../../public/images/vue.svg",
    name: "Vue.js",
    id: "vue",
  },
  {
    img: "../../public/images/react.svg",
    name: "React.js",
    id: "react",
  },
  {
    img: "../../public/images/js.svg",
    name: "JavaScript",
    id: "js",
  },
  {
    img: "../../public/images/tailwind.svg",
    name: "Tailwind",
    id: "tailwind",
  },
  {
    img: "../../public/images/sass.svg",
    name: "SCSS",
    id: "scss",
  },
];

const popInfo = (id) => {
  const targetId = "pop_" + id;
  const popTarget = document.querySelector("#" + targetId);
  popTarget.classList.toggle("opacity-100");
};
</script>
