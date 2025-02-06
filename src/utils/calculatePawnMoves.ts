import { LEFT_BORDER_CELLS, RIGHT_BORDER_CELLS } from "@/constants";
import { USER_COLOR } from "@/store/gameStore";
import { CellType } from "@/types";

export function calculatePawnMoves(
  table: CellType[],
  figureIndex: number
): number[] {
  const moves = [];
  //1. Pawn frist step (top cell)
  let valid1 = true;
  const topCell = figureIndex - 8;
  if (topCell < 0) valid1 = false;
  if (table[topCell]) valid1 = false;
  if (valid1) moves.push(topCell);

  //2. Pawn second step (2 steps to top)
  let valid2 = valid1; //if step1 is not valid step2 is not valid too
  const step2Cell = figureIndex - 16;
  if (step2Cell < 0) valid2 = false;
  if (figureIndex < 48) valid2 = false;
  if (table[step2Cell]) valid2 = false;
  if (valid2) moves.push(step2Cell);

  //3. Beat left figure
  let valid3 = true;
  const step3Cell = figureIndex - 9;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (!table[step3Cell]) valid3 = false;
  if (table[step3Cell]?.color === USER_COLOR) valid3 = false;
  if (valid3) moves.push(step3Cell);

  //4. Beat right figure
  let valid4 = true;
  const step4Cell = figureIndex - 7;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid4 = false;
  if (!table[step4Cell]) valid4 = false;
  if (table[step4Cell]?.color === USER_COLOR) valid4 = false;
  if (valid4) moves.push(step4Cell);

  //Result
  return moves;
}
