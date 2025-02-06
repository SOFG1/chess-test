import { CellType } from "@/types";

export function generateInitialTable(): CellType[] {
  const array: CellType[] = new Array(64).fill(null);
  array[0] = { type: "rook", color: "black" };
  array[1] = { type: "knight", color: "black" };
  array[2] = { type: "bishop", color: "black" };
  array[3] = { type: "queen", color: "black" };
  array[4] = { type: "king", color: "black" };
  array[5] = { type: "bishop", color: "black" };
  array[6] = { type: "knight", color: "black" };
  array[7] = { type: "rook", color: "black" };

  array[8] = { type: "pawn", color: "black" };
  array[9] = { type: "pawn", color: "black" };
  array[10] = { type: "pawn", color: "black" };
  array[11] = { type: "pawn", color: "black" };
  array[12] = { type: "pawn", color: "black" };
  array[13] = { type: "pawn", color: "black" };
  array[14] = { type: "pawn", color: "black" };
  array[15] = { type: "pawn", color: "black" };

  array[48] = { type: "pawn", color: "white" };
  array[49] = { type: "pawn", color: "white" };
  array[50] = { type: "pawn", color: "white" };
  array[51] = { type: "pawn", color: "white" };
  array[52] = { type: "pawn", color: "white" };
  array[53] = { type: "pawn", color: "white" };
  array[54] = { type: "pawn", color: "white" };
  array[55] = { type: "pawn", color: "white" };

  array[56] = { type: "rook", color: "white" };
  array[57] = { type: "knight", color: "white" };
  array[58] = { type: "bishop", color: "white" };
  array[59] = { type: "queen", color: "white" };
  array[60] = { type: "king", color: "white" };
  array[61] = { type: "bishop", color: "white" };
  array[62] = { type: "knight", color: "white" };
  array[63] = { type: "rook", color: "white" };

  return array;
}
