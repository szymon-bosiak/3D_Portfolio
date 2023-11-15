<template>
  <img src="../assets/chat.svg" class="absolute z-10 w-60 h-60 top-[12%] left-[52%]">
  <TresCanvas shadows>
    <TresPerspectiveCamera
      :position="[0, 2, 14]"
      :args="[55, 1 / 4, 0.1, 1000]"
    />
    <Suspense>
      <GLTFModel
        :position="[0, 0, 4]"
        ref="cameraRef"
        path="https://raw.githubusercontent.com/szymon-bosiak/3D_Portfolio/main/src/assets/scene.gltf"
        draco
      />
    </Suspense>
  </TresCanvas>
</template>

<script setup>
import { shallowRef } from "vue";
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { GLTFModel } from "@tresjs/cientos";
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();

const cameraRef = shallowRef();

const { onLoop } = useRenderLoop();

onLoop(() => {
  if (cameraRef.value) {
    cameraRef.value.value.rotation.y = x.value / 10000 - 0.7;
    cameraRef.value.value.rotation.x = y.value / 40000 + 0.3;
  }
});

onLoop(() => {
  if (cameraRef.value) {
    cameraRef.value.value.rotation.y += 0.05;
    cameraRef.value.value.rotation.x += 0.05;
  }
});

onLoop(() => {
  if (cameraRef.value) {
    cameraRef.value.value.rotation.y -= 0.05;
    cameraRef.value.value.rotation.x -= 0.05;
  }
});
</script>
