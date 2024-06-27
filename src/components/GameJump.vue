<script setup>
const props = defineProps({
  jump: Boolean,
})
</script>

<template>
<div class="game_jump" v-if="props.jump">
  jump
</div>
</template>