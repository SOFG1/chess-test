type FigureType = "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";


export type ColorType = "black" | "white";

export type Figure = {
  type: FigureType;
  color: ColorType;
};

export type CellType = Figure | null;
