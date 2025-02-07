import { CellType, ColorType } from "@/types";
import { knightMoves } from "./knightMoves";
import { pawnMoves } from "./pawnMoves";
import { bishopMoves } from "./bishopMoves";
import { rookMoves } from "./rookMoves";
import { queenMoves } from "./queenMoves";
import { kingMoves } from "./kingMoves";
import { CalculatorReturnType } from "./types";
import { moveFigureOnTable } from "../moveFigureOnTable";
import { getTableFigures } from "../getTableFigures";

//Calculates figure's possible moves
export function calculatePossibleMoves(
  table: CellType[],
  figureIndex: number,
  color: ColorType
): number[] {
  const { moves } = calculateFigureMoves(table, figureIndex, color);

  const movesFiltered = moves.filter((move) => {
    const updatedTable = moveFigureOnTable(table, figureIndex, move); //Updated table after move
    return !getIsCheck(updatedTable, color) //If is check move is impossible
  });

  return movesFiltered;
}

//Check king is checked or not
export function getIsCheck(table: CellType[], color: ColorType) {
  const opponentColor = color === "black" ? "white" : "black";
  const opponentFigures = getTableFigures(table, opponentColor);
  let beats = false;
  opponentFigures.forEach((f) => {
    const { beatsKing } = calculateFigureMoves(
      table,
      f.index,
      f.color
    );
    if (beatsKing) beats = true;
  });
  return beats;
}

//Calculate figure moves
function calculateFigureMoves(
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
