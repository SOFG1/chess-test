import {
  BOTTOM_BORDER_CELLS,
  LEFT_BORDER_CELLS,
  RIGHT_BORDER_CELLS,
  TOP_BORDER_CELLS,
} from "@/constants";
import { USER_COLOR } from "@/store/gameStore";
import { CellType } from "@/types";

export function rookMoves(table: CellType[], figureIndex: number): number[] {
  const moves = [];
  //Left moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex - i;
    if (LEFT_BORDER_CELLS.includes(stepCell + 1)) break;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //Right moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex + i;
    if (RIGHT_BORDER_CELLS.includes(stepCell - 1)) break;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //Top moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex - i * 8;
    if (TOP_BORDER_CELLS.includes(stepCell + 8)) break;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //Bottom moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex + i * 8;
    if (BOTTOM_BORDER_CELLS.includes(stepCell - 8)) break;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  return moves;
}
