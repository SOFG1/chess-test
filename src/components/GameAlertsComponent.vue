<script setup lang="ts">
import { useGameStore, USER_COLOR } from "@/store/gameStore";
import UIAlert from "@/UI/UIAlert.vue";
import { computed } from "vue";

const gameStore = useGameStore();

const gameResult = computed<string | undefined>(() => {
  if (!gameStore.isCheck || gameStore.allPosibleMoves.count) return;
  if (gameStore.turn == USER_COLOR) return "Вы проиграли.";
  return "Поздравляем! Вы выиграли";
});
</script>

<template>
  <UIAlert
    v-if="!gameStore.playerReady"
    title="Ожидаем готовность комнаты"
    text="Оставайтесь и одержите победу!"
  />
  <UIAlert v-if="gameResult" :title="gameResult" />
</template>
