<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  components: {
    Header
  },
})
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Share+Tech+Mono&display=swap");

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: black;
  }

  #app {
    font-family: "Share Tech Mono", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: gray;
    width: 100vw;
    height: 100vh;
  }

  button {
    width: 22.5vw;
    height: 4rem;
    margin: 1em;
    margin-left: calc(4px + 1.5em);
    border-radius: 5px;
    color: gray;
    border: 1px solid gray;
    font-family: inherit;
    background-color: black;
    cursor: pointer;

    @media screen and (orientation: portrait) {
      width: 75vw;
      margin-left: 12.5vw;
      margin-right: 12.5vw;
    }
  }
</style>
