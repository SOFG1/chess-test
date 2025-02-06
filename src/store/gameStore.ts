import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const playerReady = ref(false);

  function setReady(ready: boolean) {
    playerReady.value = ready;
  }

  return { playerReady, setReady };
});
