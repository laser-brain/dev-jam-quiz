<template>
  <div class="category-container">
    <div class="console">
      <ConsoleLine :content="'Welcome unknown user ...'" />
      <ConsoleLine :content="'Choose a category to start a new quiz!'" :showCaret="true" />
    </div>
    <QuizCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
    <div class="stretch" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getCategories } from "@/services/quiz-api";
import { ITriviaCategory } from "@/types/api-responses";
import QuizCategory from "@/components/QuizCategory.vue";
import ConsoleLine from "@/components/ConsoleLine.vue";
import { LS_CATEGORY_KEY } from "@/services/helpers";

export default defineComponent({
  components: { QuizCategory, ConsoleLine },
  setup() {
    const categories = ref<ITriviaCategory[]>([]);
    onMounted(async () => {
      const apiCategories = await getCategories();
      categories.value = apiCategories;

      localStorage.setItem(LS_CATEGORY_KEY, JSON.stringify(apiCategories));
    });
    return {
      categories,
    };
  },
});
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;

  .console {
    text-align: left;
    width: 100vw;
  }

  .stretch {
    width: 100vw;
    height: calc(100vh - (4rem * 6) - 4rem - (1vw * 12));
  }
}
</style>