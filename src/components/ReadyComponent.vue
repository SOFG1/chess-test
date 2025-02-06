<script setup lang="ts">
import UIButton from "@/UI/UIButton.vue";
</script>

<template>
  <div class="block">
    <p class="text">Вы готовы?</p>
    <UIButton>Готов</UIButton>
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
