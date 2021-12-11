<template>
  <div v-for="category in categories" :key="category.id">
    <label>{{ category.name }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loadCategories } from '../services/quiz-api'
import { ITriviaCategory } from '../types/api-responses'

export default defineComponent({
  setup() {
    const categories = ref<ITriviaCategory[]>([])

    onMounted(async () => {
      const apiCategories = await loadCategories();
      categories.value = apiCategories;
    });
    return {
      categories
    }
  },
})
</script>

<style lang="scss" scoped>

</style>