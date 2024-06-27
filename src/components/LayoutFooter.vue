<script setup>
import NowPlaying from './NowPlaying.vue';
import PlayerLeft from './PlayerLeft.vue';
import PlayerRight from './PlayerRight.vue';
</script>

<template>
  <footer class="d-flex w-100 h-100 justify-space-between">
    <div class="player_left w-50 align-self-end"><PlayerLeft /></div>
    <div class="now_playing w-25 align-self-end"><NowPlaying left /></div>
    <div class="player_right w-50 align-self-end"><PlayerRight /></div>
  </footer>
</template>