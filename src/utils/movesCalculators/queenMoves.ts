import { CellType, ColorType } from "@/types";
import { bishopMoves } from "./bishopMoves";
import { rookMoves } from "./rookMoves";
import { CalculatorReturnType } from "./types";

export function queenMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): CalculatorReturnType {
  const bishop = bishopMoves(table, figureIndex, color);
  const rook = rookMoves(table, figureIndex, color);
  const moves = [...bishop.moves, ...rook.moves];
  const beatsKing = bishop.beatsKing || rook.beatsKing;
  return { moves, beatsKing };
}
