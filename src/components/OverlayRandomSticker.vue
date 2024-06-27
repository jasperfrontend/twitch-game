<script setup>
const props = defineProps({
  sticker: Boolean,
})
</script>

<template>
<div v-if="props.sticker" class="random_sticker"></div>
</template>