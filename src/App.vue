<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
@font-face {
  font-family: Lato;
  src: url("./assets/fonts/Lato-Regular.ttf");
}

@font-face {
  font-family: Averia Serif Libre;
  src: url("./assets/fonts/AveriaSerifLibre-Regular.ttf");
}

body {
  margin: 0;
}
</style>
