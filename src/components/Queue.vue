<script setup>
const props = defineProps({
  show: Boolean,
})

import { onMounted, ref } from 'vue';
import supabaseQuery from '@/lib/supabaseQuery';
import userAvatar from '@/lib/dicebear';
import PlayerCard from './PlayerCard.vue';

const isLoading = ref(false);
const queue = ref([]);
const avatars = ref(null);
const queueHidden = ref(false);
const delay = ms => new Promise(res => setTimeout(res, ms));

const getQueue = async () => {
  isLoading.value = true;

  const onEmpty = (data) => {
    console.error(`No data returned: ${data.length}`);
  }

  const onSuccess = (data) => {
    queue.value = data;

    avatars.value = data.map(player => {
      return {
        name: player.name,
        avatar: userAvatar(player?.nickname || player.name),
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
          <PlayerCard 
            :avatar="avatars[index]?.avatar" 
            text_size="text" 
            :name="user.name" 
            classes="text-normal font-weight-normal ml-3" 
            :nickname="user?.nickname" />
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