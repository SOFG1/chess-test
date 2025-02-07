import { CellType, ColorType, Figure } from "@/types";

type TableFigure = Figure & {
  index: number;
};

//Get all figures on the table of specific color
export function getTableFigures(
  table: CellType[],
  color: ColorType
): TableFigure[] {
  const figures = [];
  table.forEach((cell, index) => {
    if (cell?.color === color) {
      figures.push({ ...cell, index });
    }
  });
  return figures;
}
