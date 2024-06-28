<script setup>
import LayoutMeta from './LayoutMeta.vue';
import Queue from './Queue.vue';
import Wheel from './Wheel.vue';
import PiniaCheck from './PiniaCheck.vue';
import YouTubePlayer from './YouTubePlayer.vue';
</script>

<template>
  <main>
    <Wheel show />
    <Queue show />
    <PiniaCheck show />
    <LayoutMeta show />
    <YouTubePlayer :show="false" />
  </main>
</template>
