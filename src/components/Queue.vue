<script setup>
const props = defineProps({
  show: Boolean,
})

import { onMounted, ref } from 'vue';
import userAvatar from '@/lib/dicebear';
import PlayerCard from './PlayerCard.vue';
import { supabase } from '@/lib/supabase';

const isLoading = ref(false);
const queue = ref([]);
const avatars = ref(null);
const queueHidden = ref(false);

async function getQueue() {
  isLoading.value = true;
  const { data:queueData, error:queueDataError } = await supabase
    .from('users')
    .select(`twitch_id, uid, name, nickname`)
    .order('created_at', {ascending: true});

  if(queueDataError) {
    console.error(`Failed to fetch queue: ${queueDataError}`);
    isLoading.value = false;
  }
  if(queueData.length === 0) {
    console.error(`No data returned: ${queueData.length}`);
    isLoading.value = false;
  }
  if(queueData.length > 0) {
    queue.value = queueData;
    avatars.value = queueData.map(player => {
      return {
        name: player.name,
        avatar: userAvatar(player?.nickname || player.name),
      };
    });
    isLoading.value = false;
  }

}

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
  transition: all 150ms ease;
  transform: translateX(0);
}

.v-enter-from,
.v-leave-to {
  opacity: 0; 
  transform: translateX(-400px);
}
</style>