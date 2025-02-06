type FigureType = "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";

export type Figure = {
  type: FigureType;
  color: "black" | "white";
};

export type CellType = Figure | null