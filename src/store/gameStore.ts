import { CellType } from "@/types";
import { generateInitialTable } from "@/utils/generateInitialTable";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const playerReady = ref(false);
  const table = ref<CellType[]>(generateInitialTable())

  function setReady(ready: boolean) {
    playerReady.value = ready;
  }

  return { playerReady, setReady, table };
});
