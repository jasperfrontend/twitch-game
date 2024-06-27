<script setup>
const props = defineProps({
  gif: Boolean,
})
</script>

<template>
<div v-if="props.gif" class="random_gif"></div>
</template>