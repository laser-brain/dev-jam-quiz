<template>
  <div>
    <router-link :to="`/quiz/${category.id}`" custom v-slot="{ navigate }">
      <button @click="startQuiz(navigate)">{{ category.name }}</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITriviaCategory } from "@/types/api-responses";
import { LS_CATEGORY_KEY } from "@/services/helpers";

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<ITriviaCategory>,
      required: true,
    },
  },
  setup(props) {
    function startQuiz(navigate: Function) {
      localStorage.setItem(LS_CATEGORY_KEY, props.category.name);
      navigate();
    }

    return {
      startQuiz
    }
  }
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
