<template>
  <div>
    <router-link :to="`/quiz/${category.id}`" custom v-slot="{ navigate }">
      <button @click="navigate">{{ category.name }}</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITriviaCategory } from "@/types/api-responses";

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<ITriviaCategory>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 22.5vw;
  height: 4rem;
  margin: 1vw;
  border-radius: 5px;
  background-color: black;
  font-family : inherit;
  color: gray;
  border: 1px solid gray;
  cursor: pointer;

  @media screen and (orientation: portrait) {
    width: 75vw;
    margin-right: 10vw;
    margin-left: 10vw;
  }
}
</style>
