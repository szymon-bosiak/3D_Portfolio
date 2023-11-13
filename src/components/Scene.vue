<template>
  
  <TresCanvas shadows alpha window-size>
    <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
    <OrbitControls />
    <Suspense>
      <GLTFModel path="../assets/space_boi.gltf" draco />
    </Suspense>
  </TresCanvas>

</template>

<script setup>
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, GLTFModel } from "@tresjs/cientos";
</script>
