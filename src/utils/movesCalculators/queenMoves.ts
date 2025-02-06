import { CellType } from "@/types";
import { bishopMoves } from "./bishopMoves";
import { rookMoves } from "./rookMoves";

export function queenMoves(table: CellType[], figureIndex: number): number[] {
  const bishop = bishopMoves(table, figureIndex);
  const rook = rookMoves(table, figureIndex);

  return [...bishop, ...rook];
}
