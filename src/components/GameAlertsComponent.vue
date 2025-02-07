<script setup lang="ts">
import { USER_COLOR } from "@/constants";
import { useGameStore } from "@/store/gameStore";
import UIAlert from "@/UI/UIAlert.vue";
import { computed } from "vue";

const gameStore = useGameStore();

const gameResult = computed<string | undefined>(() => {
  //Won
  if (
    gameStore.isCheck &&
    !gameStore.allPosibleMoves.count &&
    gameStore.turn === USER_COLOR
  ) {
    return "Мат! Вы проиграли.";
  }
  //Lost
  if (
    gameStore.isCheck &&
    !gameStore.allPosibleMoves.count &&
    gameStore.turn !== USER_COLOR
  ) {
    return "Мат! Поздравляем Вы выиграли!";
  }
  //Draw
  if (!gameStore.allPosibleMoves.count) {
    return "Ничья. Пат!";
  }
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
