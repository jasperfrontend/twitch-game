<script setup>
const props = defineProps({
  guest: Boolean,
})
</script>

<template>
<div v-if="props.guest" class="guest">
  mylvan
</div>
</template>