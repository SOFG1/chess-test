<script setup lang="ts">
import PlayerComponent from "@/components/PlayerComponent.vue";
import ReadyComponent from "@/components/ReadyComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import { useGameStore } from "@/store/gameStore";
import UIAlert from "@/UI/UIAlert.vue";
const gameStore = useGameStore();

function handlePageClick(e: PointerEvent) {
  const isMovableCellClick = (e.target as Element)?.closest(".cell-possible");
  if (!isMovableCellClick) {
    gameStore.setPossibleMoves([]);
    gameStore.setSelectedFigure(null);
  }
}
</script>

<template>
  <div class="wrapper" @click="handlePageClick">
    <div class="container">
      <PlayerComponent name="Компьютер" />
      <TableComponent />
      <PlayerComponent name="Вы" :you="true" />
      <UIAlert
        v-if="!gameStore.playerReady"
        title="Ожидаем готовность комнаты"
        text="Оставайтесь и одержите победу!"
      />
      <ReadyComponent v-if="!gameStore.playerReady" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  padding: 0 15px;
}

.container {
  position: relative;
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
