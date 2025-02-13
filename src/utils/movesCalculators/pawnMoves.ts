import {
  BOTTOM_BORDER_CELLS,
  LEFT_BORDER_CELLS,
  RIGHT_BORDER_CELLS,
  TOP_BORDER_CELLS,
} from "@/constants";
import { CellType, ColorType } from "@/types";
import { CalculatorReturnType } from "./types";
import { checkKingCell } from "../checkKingCell";

export function pawnMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): CalculatorReturnType {
  if (color === "white") return whitePawnMoves(table, figureIndex, color);
  if (color === "black") return blackPawnMoves(table, figureIndex, color);
}

//White
function whitePawnMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): CalculatorReturnType {
  const moves = [];
  let beatsKing = false;

  //1. Pawn frist step (top cell)
  let valid1 = true;
  const topCell = figureIndex - 8;
  if (TOP_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (table[topCell]) valid1 = false;
  if (valid1) moves.push(topCell);

  //2. Pawn second step (2 steps to top)
  let valid2 = valid1; //if step1 is not valid step2 is not valid too
  const step2Cell = figureIndex - 16;
  if (TOP_BORDER_CELLS.includes(figureIndex - 8)) valid2 = false;
  if (table[step2Cell]) valid2 = false;
  if (valid2) moves.push(step2Cell);

  //3. Beat left figure
  let valid3 = true;
  const step3Cell = figureIndex - 9;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (!table[step3Cell]) valid3 = false;
  if (table[step3Cell]?.color === color) valid3 = false;
  if (valid3) moves.push(step3Cell);
  if (checkKingCell(table[step3Cell], color)) {
    beatsKing = true;
  }

  //4. Beat right figure
  let valid4 = true;
  const step4Cell = figureIndex - 7;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid4 = false;
  if (!table[step4Cell]) valid4 = false;
  if (table[step4Cell]?.color === color) valid4 = false;
  if (valid4) moves.push(step4Cell);
  if (checkKingCell(table[step4Cell], color)) {
    beatsKing = true;
  }

  //Result
  return { moves, beatsKing };
}

//Black
function blackPawnMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): CalculatorReturnType {
  const moves = [];
  let beatsKing = false;

  //1. Pawn frist step (bottom cell)
  let valid1 = true;
  const topCell = figureIndex + 8;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex)) valid1 = false;
  if (table[topCell]) valid1 = false;
  if (valid1) moves.push(topCell);

  //2. Pawn second step (2 steps to top)
  let valid2 = valid1; //if step1 is not valid step2 is not valid too
  const step2Cell = figureIndex + 16;
  if (BOTTOM_BORDER_CELLS.includes(figureIndex + 8)) valid2 = false;
  if (table[step2Cell]) valid2 = false;
  if (valid2) moves.push(step2Cell);

  //3. Beat left figure
  let valid3 = true;
  const step3Cell = figureIndex + 7;
  if (LEFT_BORDER_CELLS.includes(figureIndex)) valid3 = false;
  if (!table[step3Cell]) valid3 = false;
  if (table[step3Cell]?.color === color) valid3 = false;
  if (valid3) moves.push(step3Cell);
  if (table[step3Cell]?.color !== color && table[step3Cell]?.type === "king") {
    beatsKing = true;
  }

  //4. Beat right figure
  let valid4 = true;
  const step4Cell = figureIndex + 9;
  if (RIGHT_BORDER_CELLS.includes(figureIndex)) valid4 = false;
  if (!table[step4Cell]) valid4 = false;
  if (table[step4Cell]?.color === color) valid4 = false;
  if (valid4) moves.push(step4Cell);
  if (table[step4Cell]?.color !== color && table[step4Cell]?.type === "king") {
    beatsKing = true;
  }

  //Result
  return { moves, beatsKing };
}
