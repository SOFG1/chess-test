<script setup lang="ts">
defineProps<{ title: string; text?: string }>();
</script>

<template>
  <div class="alert">
    <p class="title">{{ title }}</p>
    <p v-if="text" class="text">{{ text }}</p>
  </div>
</template>

<style scoped>

.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.85);
  padding: 20px;
  border-radius: 20px;
  color: #F9F1DF;
  text-align: center;
}

.title {
  font-size: 28px;
  font-family: "Arial";
  margin-bottom: 10px;
}

.text {
  font-size: 18px;
}
</style>
