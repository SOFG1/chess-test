<script setup lang="ts">
import CellComponent from "@/components/CellComponent.vue";
import { Figure } from "@/types";

const table: (Figure | null)[] = [
  { type: "rook", color: "black" },
  { type: "knight", color: "black" },
  { type: "bishop", color: "black" },
  { type: "queen", color: "black" },
  { type: "king", color: "black" },
  { type: "bishop", color: "black" },
  { type: "knight", color: "black" },
  { type: "rook", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  { type: "pawn", color: "black" },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "pawn", color: "white" },
  { type: "rook", color: "white" },
  { type: "knight", color: "white" },
  { type: "bishop", color: "white" },
  { type: "queen", color: "white" },
  { type: "king", color: "white" },
  { type: "bishop", color: "white" },
  { type: "knight", color: "white" },
  { type: "rook", color: "white" },
];
</script>

<template>
  <div class="table">
    <div class="field">
      <CellComponent v-for="c in table" :figure="c" />
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
