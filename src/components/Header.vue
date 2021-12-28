<template>
  <router-link to="/" custom v-slot="{ navigate, href }">
    <a :href="href" @click="navigate">
      <img :src="q" height="42" @click="navigate" />
    </a>
  </router-link>
</template>

<script setup lang="ts">
import q from "@/assets/q.svg";
</script>

<style lang="scss" scoped>
img {
  cursor: pointer;
  margin-top: 1.5em;
  margin-left: 1.5em;
}
</style>