<script setup lang="ts">
import avatarImg from "@/assets/img/avatar.png";
import { USER_COLOR } from "@/constants";
import { useGameStore } from "@/store/gameStore";
import { computed } from "vue";

const props = defineProps<{ name: string; you?: boolean }>();
const gameStore = useGameStore();
const text = computed(() => {
  if (!gameStore.playerReady) return;
  if (gameStore.turn === USER_COLOR && props.you) return "Ваш ход";
  if (gameStore.turn !== USER_COLOR && !props.you) return "Думает...";
});
</script>

<template>
  <div :class="['player', { reverse: you }]">
    <img :src="avatarImg" alt="Avatar" class="avatar" />
    <p class="name">{{ name }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped>
.player {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 120px;
}

.player.reverse {
  flex-direction: column-reverse;
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

.text {
  color: #61c8af;
}
</style>
