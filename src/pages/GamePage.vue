<script setup lang="ts">
import Player from "@/components/Player.vue";
</script>

<template>
  <div class="wrapper">
    <Player />
    <Player />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
