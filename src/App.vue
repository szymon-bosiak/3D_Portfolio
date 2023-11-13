<template>
  <TresCanvas shadows window-size>
    <TresPerspectiveCamera :position="[6, 4, 8]"/>
    <CameraControls
      v-bind="controlsState"
      make-default
    />
    <Suspense>
      <GLTFModel
      :position="[0, -3, 0]"
        path="https://raw.githubusercontent.com/szymon-bosiak/3D_Portfolio/main/src/assets/scene.gltf"
        draco
      />
    </Suspense>
    <!-- <TresGridHelper /> -->
  </TresCanvas>
</template>

<script setup>
import { reactive } from 'vue'
import { TresCanvas } from "@tresjs/core";
import { CameraControls, GLTFModel } from "@tresjs/cientos";

const controlsState = reactive({
  minDistance: 8,
  maxDistance: 11,
  minPolarAngle: (Math.PI/3),
  maxPolarAngle: (Math.PI/2.2),
})
</script>