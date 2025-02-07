import {
  BOTTOM_BORDER_CELLS,
  LEFT_BORDER_CELLS,
  RIGHT_BORDER_CELLS,
  TOP_BORDER_CELLS,
} from "@/constants";
import { CellType, ColorType } from "@/types";

export function knightMoves(table: CellType[], figureIndex: number, color: ColorType): number[] {
  const moves = [];
  //1) 1 step left / 2 step top
  let valid1 = true;
  const step1Cell = figureIndex - 17;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (TOP_BORDER_CELLS.includes(figureIndex - 8)) valid1 = false;
  if (table[step1Cell]?.color === color) valid1 = false;
  if (valid1) moves.push(step1Cell);

  //2) 2 step left / 1 step top
  let valid2 = true;
  const step2Cell = figureIndex - 10;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid2 = false;
  if (LEFT_BORDER_CELLS.includes(figureIndex - 1)) valid2 = false;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (table[step2Cell]?.color === color) valid2 = false;
  if (valid2) moves.push(step2Cell);

  //3) 1 step left / 2 step bottom
  let valid3 = true;
  const step3Cell = figureIndex + 15;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex + 8)) valid3 = false;
  if (table[step3Cell]?.color === color) valid3 = false;
  if (valid3) moves.push(step3Cell);

  //4) 2 step left / 1 step bottom
  let valid4 = true;
  const step4Cell = figureIndex + 6;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid4 = false;
  if (LEFT_BORDER_CELLS.includes(figureIndex - 1)) valid4 = false;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (table[step4Cell]?.color === color) valid4 = false;
  if (valid4) moves.push(step4Cell);

  //5) 1 step right / 2 step top
  let valid5 = true;
  const step5Cell = figureIndex - 15;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid5 = false;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (TOP_BORDER_CELLS.includes(figureIndex - 8)) valid1 = false;
  if (table[step5Cell]?.color === color) valid5 = false;
  if (valid5) moves.push(step5Cell);

  //6) 2 step right / 1 step top
  let valid6 = true;
  const step6Cell = figureIndex - 6;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid6 = false;
  if (RIGHT_BORDER_CELLS.includes(figureIndex + 1)) valid6 = false;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (table[step6Cell]?.color === color) valid6 = false;
  if (valid6) moves.push(step6Cell);

  //7) 1 step right / 2 step bottom
  let valid7 = true;
  const step7Cell = figureIndex + 17;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid7 = false;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex + 8)) valid3 = false;
  if (table[step7Cell]?.color === color) valid7 = false;
  if (valid7) moves.push(step7Cell);

  //8) 2 step right / 1 step bottom
  let valid8 = true;
  const step8Cell = figureIndex + 10;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid8 = false;
  if (RIGHT_BORDER_CELLS.includes(figureIndex + 1)) valid8 = false;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (table[step8Cell]?.color === color) valid8 = false;
  if (valid8) moves.push(step8Cell);

  //Result
  return moves;
}
