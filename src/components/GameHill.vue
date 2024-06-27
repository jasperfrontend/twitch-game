<script setup>
const base = "https://www.pixelplush.dev/hillroll/christmas.html?";
const rest = "channel=jasperdiscovers&clouds=true&command=hill&cooldown=90000&defaultCountdown=30&hideTilRoll=true&overlay=true&volume=25";
const game = base+rest;

const props = defineProps({
  show: Boolean,
})
</script>

<template>
<div v-if="props.show" class="game_hill w-100 h-100 position-absolute top-0 left-0">
<iframe 
  width="100%" 
  height="100%" 
  frameborder="0" 
  allowfullscreen 
  allowtransparency
  :src="game"
  ></iframe>
</div>
</template>
<style scoped>
.game_hill {
  z-index: 1;
}
iframe {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>