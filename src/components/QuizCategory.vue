<template>
  <div>
    <router-link :to="`/quiz/${id}`" custom v-slot="{ navigate }">
      <button @click="navigate">{{ name }}</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    }
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
button {
  width: 22.5vw;
  height: 4rem;
  margin: 1vw;
  border-radius: 5px;
  color: white;
  background-color: black;
  cursor: pointer;

  @media screen and (orientation: portrait) {
    width: 75vw;
    margin-right: 10vw;
    margin-left: 10vw;
  }
}
</style>
