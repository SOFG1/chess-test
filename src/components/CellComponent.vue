<script setup lang="ts">
import { CellType } from "@/types";
import pawn_black from "@/assets/img/figures/pawn_black.svg";
import pawn_white from "@/assets/img/figures/pawn_white.svg";
import knight_white from "@/assets/img/figures/knight_white.svg";
import knight_black from "@/assets/img/figures/knight_black.svg";
import bishop_white from "@/assets/img/figures/bishop_white.svg";
import bishop_black from "@/assets/img/figures/bishop_black.svg";
import rook_white from "@/assets/img/figures/rook_white.svg";
import rook_black from "@/assets/img/figures/rook_black.svg";
import queen_white from "@/assets/img/figures/queen_white.svg";
import queen_black from "@/assets/img/figures/queen_black.svg";
import king_white from "@/assets/img/figures/king_white.svg";
import king_black from "@/assets/img/figures/king_black.svg";
import { useGameStore, USER_COLOR } from "@/store/gameStore";
import { computed } from "vue";

const props = defineProps<{ figure: CellType; index: number }>();
const gameStore = useGameStore();

const isPossibleMove = computed(() => {
  return gameStore.possibleMoves.includes(props.index);
});

const figures = {
  pawn_black,
  pawn_white,
  knight_white,
  knight_black,
  bishop_white,
  bishop_black,
  rook_white,
  rook_black,
  queen_white,
  queen_black,
  king_white,
  king_black,
};
</script>

<template>
  <div :class="['cell', { 'cell-possible': isPossibleMove }]">
    <button
      v-if="figure"
      @click.stop="() => gameStore.onSelectFigure(index)"
      :disabled="!gameStore.isUserMove || figure.color !== USER_COLOR && !isPossibleMove"
      class="button"
    >
      <img
        :src="figures[`${figure.type}_${figure.color}`]"
        alt="Figure"
        class="figure"
      />
    </button>
    <span
      v-if="isPossibleMove"
      :class="['possible-move', { beat: figure }]"
    ></span>
  </div>
</template>

<style scoped>
.cell {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cell-possible {
  cursor: pointer;
}

.button {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 0;
  padding: 0;
  transition: 200ms linear;
  z-index: 1;
}

.button:not(:disabled) {
  cursor: pointer;
}

.button:hover:not(:disabled) {
  opacity: 0.6;
}

.figure {
  height: 100%;
  width: 100%;
}

.possible-move {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(97, 200, 174, 0.4);
}

.possible-move.beat {
  background-color: rgba(217, 60, 68, 0.7);
}
</style>
