import { CellType, ColorType } from "@/types";
import { calculatePossibleMoves } from "@/utils/movesCalculators";
import { generateInitialTable } from "@/utils/generateInitialTable";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const USER_COLOR = "white";

export const useGameStore = defineStore("gameStore", () => {
  const playerReady = ref(false);
  const turn = ref<ColorType>("black");
  const table = ref<CellType[]>(generateInitialTable());
  const possibleMoves = ref<number[]>([]);
  const selectedFigure = ref<number | null>(null);

  const isUserMove = computed(() => {
    return playerReady.value && turn.value === USER_COLOR;
  });

  function setReady(ready: boolean) {
    if (playerReady.value) return;
    playerReady.value = ready;
    turn.value = USER_COLOR;
  }

  function onSelectFigure(index: number) {
    // if (!isUserMove.value) return;
    setSelectedFigure(index);
    const { moves } = calculatePossibleMoves(table.value, index, turn.value);
    setPossibleMoves(moves);
  }

  function setPossibleMoves(moves: number[]) {
    possibleMoves.value = moves;
  }

  function setSelectedFigure(val: number | null) {
    selectedFigure.value = val;
  }

  function switchTurn() {
    turn.value = turn.value === "white" ? "black" : "white";
  }

  function moveFigure(cellIndex: number) {
    if (!possibleMoves.value.includes(cellIndex)) return;
    table.value[cellIndex] = table.value[selectedFigure.value];
    table.value[selectedFigure.value] = null;
    setSelectedFigure(null);
    setPossibleMoves([]);
    switchTurn(); //Next player's move
  }

  return {
    playerReady,
    turn,
    possibleMoves,
    table,
    isUserMove,
    onSelectFigure,
    setReady,
    setPossibleMoves,
    setSelectedFigure,
    moveFigure,
  };
});
