import { CellType } from "@/types";




export function calculatePossibleMoves(table: CellType[], figureIndex: number): number[] {
    const figureType = table[figureIndex].type
    return [44, 36, 12]
}