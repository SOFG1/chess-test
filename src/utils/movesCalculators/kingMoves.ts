import { CellType, ColorType } from "@/types";
import {
  BOTTOM_BORDER_CELLS,
  LEFT_BORDER_CELLS,
  RIGHT_BORDER_CELLS,
  TOP_BORDER_CELLS,
} from "@/constants";

export function kingMoves(table: CellType[], figureIndex: number, color: ColorType): number[] {
  const moves = [];

  //1. Top Left
  let valid1 = true;
  const step1Cell = figureIndex - 9;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (table[step1Cell]?.color === color) valid1 = false;
  if (valid1) moves.push(step1Cell);

  //2. Top
  let valid2 = true;
  const step2Cell = figureIndex - 8;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid2 = false;
  if (table[step2Cell]?.color === color) valid2 = false;
  if (valid2) moves.push(step2Cell);

  //3. Top Right
  let valid3 = true;
  const step3Cell = figureIndex - 7;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (table[step3Cell]?.color === color) valid3 = false;
  if (valid3) moves.push(step3Cell);

  //4. Right
  let valid4 = true;
  const step4Cell = figureIndex + 1;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid4 = false;
  if (table[step4Cell]?.color === color) valid4 = false;
  if (valid4) moves.push(step4Cell);

  //5. Bottom Right
  let valid5 = true;
  const step5Cell = figureIndex + 9;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid5 = false;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid5 = false;
  if (table[step5Cell]?.color === color) valid5 = false;
  if (valid5) moves.push(step5Cell);

  //6. Top
  let valid6 = true;
  const step6Cell = figureIndex + 8;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid6 = false;
  if (table[step6Cell]?.color === color) valid6 = false;
  if (valid6) moves.push(step6Cell);

  //7. Bottom Left
  let valid7 = true;
  const step7Cell = figureIndex + 7;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid7 = false;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid7 = false;
  if (table[step7Cell]?.color === color) valid7 = false;
  if (valid7) moves.push(step7Cell);

  //8. Right
  let valid8 = true;
  const step8Cell = figureIndex - 1;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid8 = false;
  if (table[step8Cell]?.color === color) valid8 = false;
  if (valid8) moves.push(step8Cell);

  return moves;
}
