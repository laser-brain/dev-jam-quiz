<template>
  <div>
    <router-link :to="`/quiz/${category.id}`" custom v-slot="{ navigate }">
      <button @click="navigate">{{ category.name }}</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ITriviaCategory } from "@/types/api-responses";

defineProps({
  category: {
    type: Object as PropType<ITriviaCategory>,
    required: true,
  },
});
</script>
