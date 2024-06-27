<script setup>
const props = defineProps({
  show: Boolean
})
import GameHill from './GameHill.vue';
import GameJump from './GameJump.vue';
import OverlayRandomDuck from './OverlayRandomDuck.vue';
import OverlayRandomGif from './OverlayRandomGif.vue';
import OverlayRandomPepe from './OverlayRandomPepe.vue';
import OverlayRandomSticker from './OverlayRandomSticker.vue';

</script>

<template>
<div class="meta" v-if="props.show">
  <GameHill :hill="false" />
  <GameJump :jump="false" />
  <OverlayRandomDuck :duck="false" />
  <OverlayRandomPepe :pepe="false" />
  <OverlayRandomGif :gif="false" />
  <OverlayRandomSticker :sticker="false" />
</div>
</template>