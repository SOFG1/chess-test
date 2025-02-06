<script setup lang="ts">
import { useGameStore } from "@/store/gameStore";
import UIButton from "@/UI/UIButton.vue";

const { setReady } = useGameStore();
</script>

<template>
  <div class="block">
    <p class="text">Вы готовы?</p>
    <UIButton @click="setReady(true)">Готов</UIButton>
  </div>
</template>

<style scoped>
.block {
  position: absolute;
  bottom: 40px;
  right: 0;
}
.text {
  color: #f9f1df;
  font-size: 22px;
  text-align: right;
  margin-bottom: 10px;
}
.title {
  color: red !important;
}
</style>
