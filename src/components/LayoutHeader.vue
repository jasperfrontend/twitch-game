<script setup>
import Guest from './Guest.vue';
import { ref } from 'vue';
const guestShown = ref(false);
</script>

<template>
<header class="d-flex">
  <Guest :guest="guestShown" />
</header>
</template>