<script setup>
import userAvatar from '@/lib/dicebear';
import PlayerCard from './PlayerCard.vue';

const props = defineProps({
  now_playing: Boolean,
  name: String,
  nickname: String,
  song_title: String,
});
</script>

<template>
<v-card
  elevation="0"
  class="w-100 pa-3 player_content"
  >
  <v-card-item>
    <div class="player_card_container d-flex">
      <PlayerCard 
        :avatar="userAvatar(props.nickname || props.name)" 
        classes="text-h5 font-weight-bold" 
        :name="props.name" 
        :nickname="props.nickname"
      />
    </div>
    <v-card-subtitle class="mt-1">
      <span v-if="props.now_playing" class="text-green font-weight-bold">
        <v-icon icon="mdi-play-circle" size="small" color="green"></v-icon> Now playing:
      </span> 
      {{ props.song_title }}
      </v-card-subtitle>
  </v-card-item>
</v-card>
</template>