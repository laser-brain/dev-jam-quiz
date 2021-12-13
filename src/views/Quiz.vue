<template>
  <h1>Quiz Time</h1>
  <label>{{ categoryId }}</label>
  <QuizQuestion v-for="question in questions" :key="question.question" :question="question" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getQuestions } from "@/services/quiz-api";
import { IQuizQuestion } from "@/types/api-responses";
import QuizQuestion from "@/components/QuizQuestion.vue";

export default defineComponent({
    setup() {
        const route = useRoute();
        const questions = ref<IQuizQuestion[]>([]);
        onMounted(async () => {
            const categoryId = route.params.categoryId;
            if (typeof categoryId === "string") {
                questions.value = await getQuestions(categoryId, 10);
            }
        });
        return {
            categoryId: route.params.categoryId,
            questions,
        };
    },
    components: { QuizQuestion }
});
</script>
