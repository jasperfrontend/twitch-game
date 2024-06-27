<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>

<style>
html, body {
  overflow: hidden;
  background-color: transparent;
}
body .v-card-subtitle {
  opacity: 1;
}

/* footer player card */
.player_right .player_content,
.player_right .player_content .player_card_container .d-flex {
  display: flex;
  flex-flow: row-reverse;
  text-align: right;
}
.player_content .player_card_container .d-flex .player_name {
  margin: 0 10px;
}
/* .player_right .player_content .player_card_container .d-flex .player_avatar {
  margin-left: 1ch;
} */
</style>