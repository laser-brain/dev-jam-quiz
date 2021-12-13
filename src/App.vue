<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
    <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Share+Tech+Mono&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  background: black;
}

#app {
    font-family: 'Share Tech Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: gray;
  width: 100vw;
  height: 100vh;
}

button {
  width: 22.5vw;
  height: 4rem;
  margin: 1.5em;
  border-radius: 5px;
  color: gray;
  font-family: inherit;
  background-color: black;
  cursor: pointer;

  @media screen and (orientation: portrait) {
    width: 75vw;
  }
}
</style>
