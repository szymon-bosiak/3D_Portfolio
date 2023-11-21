<template>
  <div
    id="projects"
    class="flex justify-center bg-black bg-[url('/images/stars.svg')] bg-cover"
  >
    <div class="w-full max-w-4xl px-8 py-8 text-off-white">
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
            class="hidden absolute -top-[68px] xxs:flex h-[60px] w-[120px] select-none items-center justify-center bg-[url('/images/pop.svg')] bg-cover bg-no-repeat opacity-0"
            :id="'pop_' + item.id"
          >
            <p class="w-full -translate-y-1 px-2 text-center text-black">
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
    img: "/images/vue.svg",
    name: "Vue.js",
    id: "vue",
  },
  {
    img: "/images/react.svg",
    name: "React.js",
    id: "react",
  },
  {
    img: "/images/js.svg",
    name: "JavaScript",
    id: "js",
  },
  {
    img: "/images/tailwind.svg",
    name: "Tailwind",
    id: "tailwind",
  },
  {
    img: "/images/sass.svg",
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
