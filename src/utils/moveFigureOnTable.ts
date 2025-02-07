import { BOTTOM_BORDER_CELLS, TOP_BORDER_CELLS } from "@/constants";
import { CellType } from "@/types";

//Moves figure on table and returns updated table
export function moveFigureOnTable(
  table: CellType[],
  from: number,
  to: number
): CellType[] {
  const copy = [...table];
  copy[to] = copy[from];
  copy[from] = null;
  //Check if a pawn gets to a queen
  if (copy[to].type !== "pawn") return copy;
  if (copy[to].color === "white" && TOP_BORDER_CELLS.includes(to)) {
    copy[to] = { type: "queen", color: "white" };
  }
  if (copy[to].color === "black" && BOTTOM_BORDER_CELLS.includes(to)) {
    copy[to] = { type: "queen", color: "black" };
  }
  return copy;
}
