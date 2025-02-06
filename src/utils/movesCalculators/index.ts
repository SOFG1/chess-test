import { CellType } from "@/types";
import { knightMoves } from "./knightMoves";
import { pawnMoves } from "./pawnMoves";
import { bishopMoves } from "./bishopMoves";
import { rookMoves } from "./rookMoves";
import { queenMoves } from "./queenMoves";
import { kingMoves } from "./kingMoves";

export function calculatePossibleMoves(
  table: CellType[],
  figureIndex: number
): number[] {
  const figureType = table[figureIndex].type;

  switch (figureType) {
    case "pawn":
      return pawnMoves(table, figureIndex);
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
