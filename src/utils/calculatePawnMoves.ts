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
  let valid3

  //Result
  return moves
}
