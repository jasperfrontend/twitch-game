<script setup>
const props = defineProps({
  avatar: String,
  name: String,
  nickname: String, // not errbody has a nickname and idk if twitch api then returns null?
  classes: String,
});
</script>

<template>
<div class="d-flex align-center pa-0 ma-0">
  <div class="player_avatar" v-if="props.avatar" v-html="props.avatar"></div>
  <div class="player_name" :class="props.classes" v-if="props.name">{{ props.nickname || props.name }}</div>
</div>
</template>

<style scoped>
.player_avatar {
  width: 25px;
  height: 25px;
}
</style>