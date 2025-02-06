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

defineProps<{ figure: CellType }>();

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
  <div class="cell">
    <img
      v-if="figure"
      :src="figures[`${figure.type}_${figure.color}`]"
      alt="Figure"
      class="figure"
    />
  </div>
</template>

<style scoped>
.cell {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.figure {
    height: 100%;
    width: 100%;
    cursor: pointer;
    transition: 200ms linear;
}
.figure:hover {
    opacity: .6;
}
</style>
