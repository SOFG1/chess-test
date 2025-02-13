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
import { useGameStore } from "@/store/gameStore";
import { computed } from "vue";

const props = defineProps<{ figure: CellType; index: number }>();
const gameStore = useGameStore();

const isPossibleMove = computed(() => {
  return gameStore.selectedPossibleMoves.includes(props.index);
});

const isDisabled = computed(() => {
  if (!gameStore.isUserMove) return true;
  if (!gameStore.playerReady) return true;
  if (!isPossibleMove.value && props?.figure?.color !== gameStore.turn) {
    return true;
  }
  return false;
});

const isCheck = computed(() => {
  return (
    gameStore.isCheck &&
    props.figure?.color === gameStore.turn &&
    props.figure.type === "king"
  );
});

function handleClick(e: PointerEvent) {
  //Select figure
  if (props?.figure?.color === gameStore.turn) {
    gameStore.onSelectFigure(props.index);
    e.stopPropagation();
    return;
  }
  //Move figure
  if (isPossibleMove) {
    gameStore.moveFigure(props.index);
  }
}

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
  <button
    :class="[
      'cell',
      {
        possible: isPossibleMove,
        beat: figure,
        disabled: isDisabled,
        checked: isCheck,
        selected: gameStore.selectedFigure === index,
      },
    ]"
    @click="handleClick"
  >
    <img
      v-if="figure"
      :src="figures[`${figure.type}_${figure.color}`]"
      alt="Figure"
      class="figure"
    />
  </button>
</template>

<style scoped>
.cell {
  position: relative;
  height: 53px;
  width: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  transition: 200ms linear;
}

.possible {
  background-color: rgba(97, 200, 174, 0.4);
  cursor: pointer;
}

.possible.beat {
  background-color: rgba(217, 60, 68, 0.7);
}

.checked {
  background-color: rgba(217, 60, 68, 0.915);
}

.selected {
  border: 1px solid #000;
}

.cell:not(.disabled) {
  cursor: pointer;
}

.cell:hover:not(.disabled) {
  opacity: 0.6;
}

.figure {
  height: 53px;
  width: 51px;
  z-index: 1;
}
</style>
