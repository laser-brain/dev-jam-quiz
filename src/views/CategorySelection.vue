<template>
  <div class="category-container">
<h1>Select a category</h1>
    <QuizCategory
      v-for="category in categories"
      :key="category.id"
      :name="category.name"
      :id="category.id"
    />
  <div class="stretch" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { loadCategories } from "@/services/quiz-api";
import { ITriviaCategory } from "@/types/api-responses";
import QuizCategory from "@/components/QuizCategory.vue";

export default defineComponent({
  components: { QuizCategory },
  setup() {
    const categories = ref<ITriviaCategory[]>([]);
    onMounted(async () => {
      const apiCategories = await loadCategories();
      categories.value = apiCategories;
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
  background: linear-gradient(45deg, green, black);

  h1 {
    width: 100vw;
    height: 4rem;
    color: white;
  }

  .stretch {
    width: 100vw;
    height: calc(100vh - (4rem * 6) - 4rem - (1vw * 12));
  }
}
</style>