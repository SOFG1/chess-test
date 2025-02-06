<script setup lang="ts"></script>

<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  background-color: #337e7a;
  border: 1px solid #4e9692;
  padding: 12px 30px;
  border-radius: 7px;
  text-align: center;
  font-size: 18px;
  color: #f9f1df;
  min-width: 200px;
  cursor: pointer;
  transition: 250ms;
}
button:hover {
  background-color: #319b95;
}
</style>
