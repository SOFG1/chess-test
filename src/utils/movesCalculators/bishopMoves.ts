import {
  BOTTOM_BORDER_CELLS,
  LEFT_BORDER_CELLS,
  RIGHT_BORDER_CELLS,
  TOP_BORDER_CELLS,
} from "@/constants";
import { USER_COLOR } from "@/store/gameStore";
import { CellType } from "@/types";

export function bishopMoves(table: CellType[], figureIndex: number): number[] {
  const moves = [];

  //1. top/left moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex - 9 * i;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (TOP_BORDER_CELLS.includes(figureIndex)) break;
    if (LEFT_BORDER_CELLS.includes(figureIndex)) break;
    if (TOP_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (LEFT_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //2. top/right moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex - 7 * i;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (TOP_BORDER_CELLS.includes(figureIndex)) break;
    if (RIGHT_BORDER_CELLS.includes(figureIndex)) break;
    if (TOP_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (RIGHT_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //3. bottom/left moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex + 7 * i;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (BOTTOM_BORDER_CELLS.includes(figureIndex)) break;
    if (LEFT_BORDER_CELLS.includes(figureIndex)) break;
    if (BOTTOM_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (LEFT_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //4. bottom/right moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex + 9 * i;
    if (table[stepCell]?.color === USER_COLOR) break;
    if (BOTTOM_BORDER_CELLS.includes(figureIndex)) break;
    if (RIGHT_BORDER_CELLS.includes(figureIndex)) break;
    if (BOTTOM_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (RIGHT_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }
  return moves;
}
