<script setup>
const props = defineProps({
  show: Boolean,
})
</script>

<template>
<div class="game_jump" v-if="props.show">
  jump
</div>
</template>