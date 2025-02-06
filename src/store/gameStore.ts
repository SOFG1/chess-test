import { CellType } from "@/types";
import { calculatePossibleMoves } from "@/utils/calculatePossibleMoves";
import { generateInitialTable } from "@/utils/generateInitialTable";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const USER_COLOR = "white"

export const useGameStore = defineStore("gameStore", () => {
  const playerReady = ref(false);
  const turn = ref<"black" | "white">("black");
  const table = ref<CellType[]>(generateInitialTable());
  const possibleMoves = ref<number[]>([]);

  const isUserMove = computed(() => {
    return playerReady.value && turn.value === USER_COLOR
  })

  function setReady(ready: boolean) {
    if (playerReady.value) return;
    playerReady.value = ready;
    turn.value = USER_COLOR;
  }

  function onSelectFigure(index: number) {
    if (!isUserMove.value) return;
    possibleMoves.value = calculatePossibleMoves(table.value, index);
  }

  return { playerReady, turn, possibleMoves, table, isUserMove, onSelectFigure, setReady };
});
