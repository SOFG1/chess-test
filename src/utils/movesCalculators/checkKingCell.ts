import { CellType, ColorType } from "@/types";

//Checks if opponents king is in the cell or not
export function checkKingCell(cell: CellType, color: ColorType) {
  const opponentColor = color === "white" ? "black" : "white";
  return cell?.color === opponentColor && cell?.type === "king";
}
