<template>
  <div id="contact" class="flex flex-col justify-center bg-black">
    <div>
      <svg
        viewBox="0 0 200 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        class="h-10 w-full"
      >
        <path d="M200 21L200 30L0 30V21H200Z" fill="#EDE9E9"></path>
        <path
          opacity="0.5"
          d="M200 13L200 20L0 20V13H200Z"
          fill="#EDE9E9"
        ></path>
        <path opacity="0.3" d="M200 7L200 12L0 12V7H200Z" fill="#EDE9E9"></path>
        <path opacity="0.15" d="M200 3L200 6L0 6V3H200Z" fill="#EDE9E9"></path>
        <path opacity="0.05" d="M200 0L200 2L0 2V0H200Z" fill="#EDE9E9"></path>
      </svg>
    </div>

    <div class="flex flex-col items-center bg-off-white text-black">
      <div
        class="flex w-full max-w-[1800px] flex-col justify-center px-8 py-6 text-black lg:flex-row"
      >
        <div class="min-w-max flex-col">
          <h2 class="text-lg font-bold">// Contact</h2>
          <p class="pt-4 pb-4 lg:pb-0">
            I would love to hear back from you. <br />
            Fell free to contact me.
          </p>
        </div>

        <div
          class="flex w-full items-center justify-evenly gap-4 py-5 xs:justify-center xs:gap-20 2xl:justify-end"
        >
          <a
            href="https://github.com/szymon-bosiak"
            target="_blank"
            rel="noreferrer"
            ><i
              class="fa-brands fa-github fill-black text-4xl transition hover:scale-110 md:text-5xl"
            ></i
          ></a>
          <a
            href="https://www.linkedin.com/in/szymon-bosiak-b228151a4/"
            target="_blank"
            rel="noreferrer"
            ><i
              class="fa-brands fa-linkedin fill-black text-4xl transition hover:scale-110 md:text-5xl"
            ></i
          ></a>
          <a
            href="https://www.facebook.com/szymon.bosiak/"
            target="_blank"
            rel="noreferrer"
            ><i
              class="fa-brands fa-facebook fill-black text-4xl transition hover:scale-110 md:text-5xl"
            ></i
          ></a>
          <a href="mailto:szymon.bosiak.99@gmail.com"
            ><i
              class="fa-regular fa-envelope fill-black text-4xl transition hover:scale-110 md:text-5xl"
            ></i
          ></a>
        </div>
      </div>

      <div class="flex w-full justify-between px-2 pb-1 text-xs">
        <p>Szymon Bosiak©2023</p>
        <p>
          3D model by
          <a
            href="https://sketchfab.com/silvercrow101"
            class="font-outline text-off-white"
            >silvercrow101</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
