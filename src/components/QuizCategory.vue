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
  @media screen and (orientation: portrait) {
    button {
      margin-left: 12.5vw;
      margin-right: 12.5vw;
    }
  }
</style>