<script setup lang="ts">
import PlayerComponent from "@/components/PlayerComponent.vue";
import ReadyComponent from "@/components/ReadyComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import { useGameStore } from "@/store/gameStore";
import UIAlert from "@/UI/UIAlert.vue";
const gameStore = useGameStore();
</script>

<template>
  <div class="wrapper">
    <PlayerComponent name="Игорь" />
    <TableComponent />
    <PlayerComponent name="Вы" :you="true" />
    <UIAlert
      v-if="!gameStore.playerReady"
      title="Ожидаем готовность комнаты"
      text="Оставайтесь и одержите победу!"
    />
    <ReadyComponent v-if="!gameStore.playerReady" />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
