<script setup>
const props = defineProps({
  show: Boolean,
})

import { ref } from 'vue';
import supabaseQuery from '@/lib/supabaseQuery';


const isLoading = ref(false);
const categories = ref([]);
const spinResult = ref(null);
const delay = ms => new Promise(res => setTimeout(res, ms));

const getCategories = async () => {
  isLoading.value = true;

  const onEmpty = (data) => {
    console.error(`No data returned: ${data.length}`);
  }
  
  const onSuccess = (data) => {
    categories.value = data;
    spinResult.value = Math.floor(Math.random() * data.length);
  };

  const onError = (error) => {
    console.error(`Failed to fetch categories: ${error}`);
  };

  const finallyCallback = () => {
    isLoading.value = false;
  };

  // const queryBuilder = (query) => query.eq('id', 'this and that filter');
  const queryBuilder = null;

  await delay(1000); // fake loading time
  await supabaseQuery('categories', 'name', queryBuilder, onEmpty, onSuccess, onError, finallyCallback);
};

</script>

<template>

  <div class="position-absolute w-100 h-100 top-0 left-0 d-flex flex-column align-center justify-center">
    <v-sheet width="800" class="align-center text-center pa-5 rounded-xl">
      <div style="min-height: 120px;">
        <div v-if="categories.length > 0 && !isLoading && props.show">
          <div class="text-h2 pa-3 font-weight-black">{{ categories[spinResult].name }}</div>
        </div>
      </div>
      <div class="ma-3">
        <v-btn 
          size="x-large" 
          color="deep-purple"
          class="w-100 pa-5 rounded-xl"
          style="height: auto"
          @click="getCategories" 
          :loading="isLoading"
          >Spin</v-btn>
      </div>
    </v-sheet>
  </div>
</template>
