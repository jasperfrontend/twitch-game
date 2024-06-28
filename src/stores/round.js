import { defineStore } from 'pinia';

export const useRoundStore = defineStore('round', {
  state: () => ({
    roundId: null,
    categoryId: null,
    player1: {
      uid: null,
      song: {
        youTubeId: null,
        thumbnail: null,
      },
    },
    player2: {
      uid: null,
      song: null,
    },
    roundComplete: null
  })
});