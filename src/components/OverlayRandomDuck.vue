<script setup>
const props = defineProps({
  duck: Boolean,
})
</script>

<template>
<div v-if="props.duck" class="random_duck"></div>
</template>