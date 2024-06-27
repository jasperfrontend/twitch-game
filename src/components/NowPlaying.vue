<script setup>
const props = defineProps({
  left: Boolean,
  right: Boolean
});
</script>

<template>
<div class="now_playing position-relative">
  <v-card v-if="props.left"
    image="https://img.youtube.com/vi/AfArd3yYitM/maxresdefault.jpg"
    class="pa-3 text-high-emphasis"
  >
    <v-card-item
      prepend-avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/3a98cf88-a86c-4c4a-9166-05ba51373ea8-profile_image-70x70.png"
    >
      <v-card-title>Dub Libitum - Plenty</v-card-title>
      <v-card-subtitle class="text-high-emphasis" style="opacity: 1;">
        Requested by TicanUK
      </v-card-subtitle>
    </v-card-item>
  </v-card>

  <v-card v-if="props.right"
    image="https://img.youtube.com/vi/1ti2YCFgCoI/maxresdefault.jpg"
    class="pa-3 text-high-emphasis"
  >
    <v-card-item
      append-avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/1d0df896-13c2-4f15-b6ca-f7d40d2fffc5-profile_image-70x70.png"
    >
      <v-card-title>Bob Marley & The Wailers - Could You Be Loved</v-card-title>
      <v-card-subtitle class="text-high-emphasis" style="opacity: 1;">
        Requested by JasperDiscovers
      </v-card-subtitle>
    </v-card-item>
  
  </v-card>
  <div class="arrow left" v-if="props.left"></div>
  <div class="arrow right" v-if="props.right"></div>
</div>
</template>

<style scoped>
.now_playing {
  position: relative;
  width: 100%;
}
.arrow {
  position: absolute;
  top: 50%;
  height: 20px;
  width: 20px;
  transform: translateY(-10px) rotate(45deg);
  transform-origin: center;
  background: #212121;
  z-index: 200;
}
.arrow.left {
  left: -10px;
}
.arrow.right {
  right: -10px;
}
.v-card-title,
.v-card-subtitle {
  text-shadow: 0 1px 2px rgba(15,15,15,.9);
}
</style>