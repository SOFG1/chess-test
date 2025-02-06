<script setup lang="ts">
import CellComponent from "@/components/CellComponent.vue";
import { useGameStore } from "@/store/gameStore";
const gameStore = useGameStore();
</script>

<template>
  <div class="table">
    <div class="field">
      <CellComponent v-for="(c, i) in gameStore.table" :figure="c" :index="i" />
    </div>
  </div>
</template>

<style scoped>
.table {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 577px;
  background-image: url(../assets/img/table.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.field {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 424px;
  width: 408px;
  margin-right: 3px;
  margin-top: 8px;
}
</style>
