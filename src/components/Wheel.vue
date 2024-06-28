<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRoundStore } from '@/stores/round';

// Pinia Store
const store = useRoundStore();
const props = defineProps({
  show: Boolean,
})

const isLoading = ref(false);
const categories = ref([]);
const spinResult = ref(null);
const delay = ms => new Promise(res => setTimeout(res, ms));

async function getWheelCategories() {
  isLoading.value = true;
  await delay(1000); // fake loading time
  const { data:wheelCategories, error:wheelCategoriesError } = await supabase
    .from('categories')
    .select('*')
    .order('id', {ascending: true});
  
  if(wheelCategoriesError) {
    console.log(`Error fetching wheel categories: ${wheelCategoriesError}`); 
    isLoading.value = false;
    return;
  }
  
  if(wheelCategories.length === 0) {
    console.log(`No wheel categories returned. Data length: ${wheelCategories.length}`);
    isLoading.value = false;
    return;
  }

  if(wheelCategories.length > 0) {
    categories.value = wheelCategories;
    spinResult.value = Math.floor(Math.random() * wheelCategories.length);
    store.categoryId = spinResult.value + 1; // god knows
    if(spinResult) {
      const { error } = await supabase.rpc('increment', { cid: categories.value[spinResult.value].id });        
      if(error) {
        console.log(`Error updating wheel category: ${JSON.stringify(error)}`); 
        isLoading.value = false;
      }
    }

    isLoading.value = false;
  }
}

</script>

<template>

  <div class="position-absolute w-100 h-100 top-0 left-0 d-flex flex-column align-center justify-center">
    <v-sheet width="800" class="align-center text-center pa-5 rounded-xl">
      <div style="min-height: 120px;">
        <div v-if="categories.length > 0 && !isLoading && props.show">
          <div class="text-h2 pa-3 font-weight-black">{{ categories[spinResult].name }}</div>
          <pre>{{ categories[spinResult].id }}</pre>
        </div>
      </div>
      <div class="ma-3">
        <v-btn 
          size="x-large" 
          color="deep-purple"
          class="w-100 pa-5 rounded-xl"
          style="height: auto"
          @click="getWheelCategories()" 
          :loading="isLoading"
          >Spin</v-btn>
      </div>
    </v-sheet>
  </div>
</template>
