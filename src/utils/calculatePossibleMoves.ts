import { CellType } from "@/types";
import { calculatePawnMoves } from "./calculatePawnMoves";

export function calculatePossibleMoves(
  table: CellType[],
  figureIndex: number
): number[] {
  const figureType = table[figureIndex].type;

  switch (figureType) {
    case "pawn":
      return calculatePawnMoves(table, figureIndex);
    case "knight":
      return knightMoves(table, figureIndex);
    case "bishop":
      return bishopMoves(table, figureIndex);
    case "rook":
      return rookMoves(table, figureIndex);
    case "queen":
      return queenMoves(table, figureIndex);
    case "king":
      return kingMoves(table, figureIndex);
  }
}

function knightMoves(table: CellType[], figureIndex: number): number[] {
  return [44, 36, 12];
}

function bishopMoves(table: CellType[], figureIndex: number): number[] {
  return [44, 36, 12];
}

function rookMoves(table: CellType[], figureIndex: number): number[] {
  return [44, 36, 12];
}

function queenMoves(table: CellType[], figureIndex: number): number[] {
  return [44, 36, 12];
}

function kingMoves(table: CellType[], figureIndex: number): number[] {
  return [44, 36, 12];
}
