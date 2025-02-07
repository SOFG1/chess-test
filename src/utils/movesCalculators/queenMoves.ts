import { CellType, ColorType } from "@/types";
import { bishopMoves } from "./bishopMoves";
import { rookMoves } from "./rookMoves";

export function queenMoves(table: CellType[], figureIndex: number, color: ColorType): number[] {
  const bishop = bishopMoves(table, figureIndex, color);
  const rook = rookMoves(table, figureIndex, color);

  return [...bishop, ...rook];
}
