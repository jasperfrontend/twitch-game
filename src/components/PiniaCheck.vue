<script setup>
import { useRoundStore } from '@/stores/round';

// Pinia Store
const store = useRoundStore();

const props = defineProps({
  show: Boolean
});

</script>

<template>
  <div class="pinia_check d-flex flex-column pa-1 ma-1 position-absolute top-0 right-0 bg-teal-darken-4" v-if="props.show" style="width: 400px;">
    <pre style="text-align: left; padding: 1em;">
      {{ store }}
    </pre>
    <div class="check p1" v-if="store.roundId">
      r <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check p1" v-if="store.categoryId">
      c <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player1?.uid">
      p1u <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player1?.song">
      p1s <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player1?.song?.youTubeId">
      p1sy <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player1?.song?.thumbnail">
      p1st <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player2?.uid">
      p2u <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player2?.song">
      p2s <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player2?.song?.youTubeId">
      p2sy <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.player2?.song?.thumbnail">
      p1st <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>
    <div class="check s1" v-if="store.roundComplete">
      p1r <v-icon icon="mdi-check-circle" color="green"></v-icon>
    </div>

  </div>
</template>

<style scoped>
.pinia_check {
  text-align: right;
}
</style>