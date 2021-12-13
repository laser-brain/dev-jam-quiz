<template>
  <h1>Quiz Time</h1>
  <label>{{ categoryId }}</label>
  <QuizQuestion
    v-for="question in questions"
    :key="question.question"
    :question="question"
    :next="next"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getQuestions } from "@/services/quiz-api";
import { IQuizQuestionViewModel } from "@/types/viewModels";
import QuizQuestion from "@/components/QuizQuestion.vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    const questions = ref<IQuizQuestionViewModel[]>([]);
    onMounted(async () => {
      const categoryId = route.params.categoryId;
      if (typeof categoryId === "string") {
        const response = await getQuestions(categoryId, 10);
        questions.value = response.map((res) => {
          return { ...res, activeQuestion: false, answeredCorrectly: false };
        });
        questions.value[0].activeQuestion = true;
      }
    });

    function next(question: IQuizQuestionViewModel) {
      const index = questions.value.indexOf(question);
      question.activeQuestion = false;
      const finished = index === questions.value.length - 1;
      if (finished) {
        console.log(questions.value);
      } else {
        questions.value[index + 1].activeQuestion = true;
      }
    }
    return {
      categoryId: route.params.categoryId,
      questions,
      next,
    };
  },
  components: { QuizQuestion },
});
</script>
