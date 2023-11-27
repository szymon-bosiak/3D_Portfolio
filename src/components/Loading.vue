<template>
  <div
    v-if="!isLoaded"
    class="fixed z-50 flex h-screen w-screen items-center justify-center bg-black"
  >
    <p class="text-off-white">LOADING...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isLoaded = ref(false);

onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      isLoaded.value = !isLoaded.value;
    }
  };
});
</script>
