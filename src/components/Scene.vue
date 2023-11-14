<template>
  <TresCanvas shadows>
    <TresPerspectiveCamera :position="[0, 2, 14]" />
    <Suspense>
      <GLTFModel
        :position="[0, -1, 4]"
        ref="cameraRef"
        path="https://raw.githubusercontent.com/szymon-bosiak/3D_Portfolio/main/src/assets/scene.gltf"
        draco
      />
    </Suspense>
    <!-- <TresGridHelper /> -->
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
