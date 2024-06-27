<script setup>
const props = defineProps({
  show: Boolean,
})

import { onMounted, ref } from 'vue';
import supabaseQuery from '@/lib/supabaseQuery';

const isLoading = ref(false);
const queue = ref([]);
const avatars = ref(null);
const queueHidden = ref(false);
const delay = ms => new Promise(res => setTimeout(res, ms));
import { createAvatar } from '@dicebear/core';
import { avataaarsNeutral } from '@dicebear/collection';

const getQueue = async () => {
  isLoading.value = true;

  const onEmpty = (data) => {
    console.error(`No data returned: ${data.length}`);
  }

  const onSuccess = (data) => {
    queue.value = data;

    // Compute unique avatars for each player
    avatars.value = data.map(player => {
      const avatar = createAvatar(avataaarsNeutral, {
        seed: player.nickname || player.name,
        radius: 20,
        eyes: ["eyeRoll", "happy", "hearts", "winkWacky", "xDizzy", "default", "wink"],
        mouth: ["default", "grimace", "smile", "tongue", "twinkle", "serious", "screamOpen"],
        // backgroundColor: ["b6e3f4", "80edb8", "edcb91", "b69aed", "f0a1bc", "e8dca2", "e6b3ac"],
      });
      return {
        name: player.nickname || player.name,
        avatar: avatar.toString(),
      };
    });
  };

  const onError = (error) => {
    console.error(`Failed to fetch queue: ${error}`);
  };

  const finallyCallback = () => {
    isLoading.value = false;
  };

  const queryBuilder = (query) => query.order('created_at', {ascending: true});

  await delay(1000); // fake loading time

  await supabaseQuery('users', `twitch_id, uid, name, nickname`, queryBuilder, onEmpty, onSuccess, onError, finallyCallback);
};
onMounted(() => {
  getQueue();
});



</script>

<template>
<div class="player_queue d-flex flex-column h-auto">
  <div>
    <v-btn @click="queueHidden = !queueHidden"><span v-if="queueHidden">Show</span><span v-else>Hide</span> Queue</v-btn>
  </div>
  <Transition>
    <div v-if="props.show && queue.length > 0 && !queueHidden">
      <v-list>
        <v-list-item 
          v-for="(user, index) in queue" 
          :key="index" 
          density="compact"
          link
          @click="console.log(user.nickname || user.name)"
          >
          <div class="d-flex align-center pa-0 ma-0">
            <div v-html="avatars[index]?.avatar" class="player_avatar mr-3"></div>
            <div class="player_name">{{ user.nickname || user.name }}</div>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </Transition>
</div>
</template>
<style scoped>
.player_queue {
  width: 300px;
}
.player_avatar {
  width: 25px;
  height: 25px;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
}

.v-enter-from,
.v-leave-to {
  opacity: 0; 
  transform: translateX(-400px);
}
</style>