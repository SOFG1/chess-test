import {
  BOTTOM_BORDER_CELLS,
  LEFT_BORDER_CELLS,
  RIGHT_BORDER_CELLS,
  TOP_BORDER_CELLS,
} from "@/constants";
import { CellType, ColorType } from "@/types";
import { CalculatorReturnType } from "./types";
import { checkKingCell } from "../checkKingCell";

export function rookMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): CalculatorReturnType {
  const moves = [];
  let beatsKing = false;

  //Left moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex - i;
    if (checkKingCell(table[stepCell], color)) beatsKing = true; //Check beats king or not
    if (table[stepCell]?.color === color) break;
    if (LEFT_BORDER_CELLS.includes(figureIndex)) break;
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

  //Right moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex + i;
    if (checkKingCell(table[stepCell], color)) beatsKing = true; //Check beats king or not
    if (RIGHT_BORDER_CELLS.includes(figureIndex)) break;
    if (table[stepCell]?.color === color) break;
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

  //Top moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex - i * 8;
    if (checkKingCell(table[stepCell], color)) beatsKing = true; //Check beats king or not
    if (TOP_BORDER_CELLS.includes(figureIndex)) break;
    if (table[stepCell]?.color === color) break;
    if (TOP_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  //Bottom moves
  for (let i = 1; i < 8; i++) {
    const stepCell = figureIndex + i * 8;
    if (checkKingCell(table[stepCell], color)) beatsKing = true; //Check beats king or not
    if (BOTTOM_BORDER_CELLS.includes(figureIndex)) break;
    if (table[stepCell]?.color === color) break;
    if (BOTTOM_BORDER_CELLS.includes(stepCell)) {
      moves.push(stepCell);
      break;
    }
    if (table[stepCell]) {
      moves.push(stepCell);
      break;
    }
    moves.push(stepCell);
  }

  return { moves, beatsKing };
}
