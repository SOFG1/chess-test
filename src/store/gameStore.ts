import { CellType, ColorType } from "@/types";
import { calculatePossibleMoves, getIsCheck } from "@/utils/movesCalculators";
import { generateInitialTable } from "@/utils/generateInitialTable";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { moveFigureOnTable } from "@/utils/moveFigureOnTable";
import { getTableFigures } from "@/utils/getTableFigures";
import { USER_COLOR } from "@/constants";
import { delay } from "@/utils/delay";

export const useGameStore = defineStore("gameStore", () => {
  const playerReady = ref(false);
  const turn = ref<ColorType>("black");
  const table = ref<CellType[]>(generateInitialTable());
  const selectedFigure = ref<number | null>(null);

  const isUserMove = computed<boolean>(() => {
    return playerReady.value && turn.value === USER_COLOR;
  });

  const isCheck = computed<boolean>(() => {
    return getIsCheck(table.value, turn.value);
  });

  const allPosibleMoves = computed<{
    moves: Record<string, number[]>;
    count: number;
  }>(() => {
    const moves = {};
    let count = 0;
    const figures = getTableFigures(table.value, turn.value);
    figures.forEach((figure) => {
      const figureMoves = calculatePossibleMoves(
        table.value,
        figure.index,
        turn.value
      );
      moves[figure.index] = figureMoves;
      count += figureMoves.length;
    });
    return { moves, count };
  });

  const selectedPossibleMoves = computed(() => {
    return allPosibleMoves.value.moves[selectedFigure.value] || [];
  });

  function setReady(ready: boolean) {
    if (playerReady.value) return;
    playerReady.value = ready;
    turn.value = USER_COLOR;
  }

  function onSelectFigure(index: number) {
    if (!isUserMove.value) return;
    setSelectedFigure(index);
  }

  function setSelectedFigure(val: number | null) {
    selectedFigure.value = val;
  }

  function switchTurn() {
    turn.value = turn.value === "white" ? "black" : "white";
  }

  function moveFigure(cellIndex: number) {
    if (!selectedPossibleMoves.value.includes(cellIndex)) return;
    table.value = moveFigureOnTable(
      table.value,
      selectedFigure.value,
      cellIndex
    );
    setSelectedFigure(null); //Reset selected
    switchTurn(); //Next player's move
  }

  async function AIMove() {
    await delay(700);
    const moves = [];
    Object.keys(allPosibleMoves.value.moves).forEach((key: string) => {
      allPosibleMoves.value.moves[key].forEach((move: number) => {
        moves.push({ from: Number(key), to: move });
      });
    });
    if(!moves.length) return
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    setSelectedFigure(randomMove.from);
    await delay(1300);
    moveFigure(randomMove.to);
  }

  watch(turn, () => {
    if (turn.value !== USER_COLOR) {
      AIMove();
    }
  });

  return {
    playerReady,
    turn,
    selectedPossibleMoves,
    table,
    isUserMove,
    selectedFigure,
    isCheck,
    allPosibleMoves,
    onSelectFigure,
    setReady,
    setSelectedFigure,
    moveFigure,
  };
});
