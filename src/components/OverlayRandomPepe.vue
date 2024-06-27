<script setup>
const props = defineProps({
  pepe: Boolean,
})
</script>

<template>
<div v-if="props.pepe" class="random_pepe"></div>
</template>