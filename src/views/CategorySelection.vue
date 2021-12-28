<template>
  <div class="category-container">
    <div class="console">
      <ConsoleLine :content="'Welcome unknown user ...'" />
      <ConsoleLine :content="'Choose a category to start a new quiz!'" :showCaret="true" />
    </div>
    <QuizCategory v-for="category in categories" :key="category.id" :category="category" />
    <div class="stretch" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCategories } from "@/services/quiz-api";
import { ITriviaCategory } from "@/types/api-responses";
import QuizCategory from "@/components/QuizCategory.vue";
import ConsoleLine from "@/components/ConsoleLine.vue";
import { LS_CATEGORY_KEY } from "@/services/helpers";

const categories = ref<ITriviaCategory[]>([]);
onMounted(async () => {
  const apiCategories = await getCategories();
  categories.value = apiCategories;

  localStorage.setItem(LS_CATEGORY_KEY, JSON.stringify(apiCategories));
});
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;

  .console {
    text-align: left;
    width: calc(100vw - 3em);
    margin: 1.5em;
  }
}
</style>