<script setup lang="ts">
import avatarImg from "@/assets/img/avatar.png";

defineProps<{ name: string, you?: boolean }>();
</script>

<template>
  <div :class="['player', {'reverse': you}]">
    <img :src="avatarImg" alt="Avatar" class="avatar" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.avatar {
  height: 68px;
  width: 68px;
  padding: 5px;
  border-radius: 50%;
  background-color: #2c2c2c;
  border: 1px solid #4f4f4f;
}

.name {
  text-align: center;
  color: #fff;
  background-color: rgb(20, 19, 19);
  padding: 7px 15px;
  min-width: 75px;
}

.reverse {
  flex-direction: column-reverse;
}
</style>
