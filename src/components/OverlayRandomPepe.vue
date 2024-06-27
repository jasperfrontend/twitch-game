<script setup>
const props = defineProps({
  show: Boolean,
})
</script>

<template>
<div v-if="props.show" class="random_pepe"></div>
</template>