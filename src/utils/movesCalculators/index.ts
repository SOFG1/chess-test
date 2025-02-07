import { CellType, ColorType } from "@/types";
import { knightMoves } from "./knightMoves";
import { pawnMoves } from "./pawnMoves";
import { bishopMoves } from "./bishopMoves";
import { rookMoves } from "./rookMoves";
import { queenMoves } from "./queenMoves";
import { kingMoves } from "./kingMoves";
import { CalculatorReturnType } from "./types";

export function calculatePossibleMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): CalculatorReturnType {
  const figureType = table[figureIndex].type;

  switch (figureType) {
    case "pawn":
      return pawnMoves(table, figureIndex, color);
    case "knight":
      return knightMoves(table, figureIndex, color);
    case "bishop":
      return bishopMoves(table, figureIndex, color);
    case "rook":
      return rookMoves(table, figureIndex, color);
    case "queen":
      return queenMoves(table, figureIndex, color);
    case "king":
      return kingMoves(table, figureIndex, color);
  }
}
