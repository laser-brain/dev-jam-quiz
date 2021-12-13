<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, darkgreen, gray);
}

.app {
  text-align: center;
}
</style>
