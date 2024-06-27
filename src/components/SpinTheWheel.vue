<script setup>
import LayoutFooter from './LayoutFooter.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <div class="d-flex flex-column ma-0 w-100 h-100">
    <div class="layout_header"><LayoutHeader /></div>
    <div class="layout_main"><LayoutMain /></div>
    <div class="layout_footer"><LayoutFooter /></div>
  </div>
</template>

<style scoped>
.layout_header {
  height: 8vh;
}
.layout_main {
  height: 80vh;
}
.layout_footer {
  height: 12vh;
}
</style>