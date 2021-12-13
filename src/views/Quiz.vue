<template>
  <h1>Quiz Time</h1>
  <label>{{ categoryId }}</label>
  <QuizQuestion
    v-for="question in questions"
    :key="question.question"
    :question="question"
    :next="next"
  />
  <QuizSummary
    v-if="finished"
    :correctAnswers="correctAnswers"
    :total-questions="questions.length"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getQuestions } from "@/services/quiz-api";
import { IQuizQuestionViewModel } from "@/types/viewModels";
import QuizQuestion from "@/components/QuizQuestion.vue";
import QuizSummary from "@/components/QuizSummary.vue";

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

    const finished = ref(false);

    function next(question: IQuizQuestionViewModel) {
      const index = questions.value.indexOf(question);
      question.activeQuestion = false;
      finished.value = index === questions.value.length - 1;
      if (!finished.value) {
        questions.value[index + 1].activeQuestion = true;
      }
    }

    const correctAnswers = computed(() => {
      return questions.value.filter(question => question.answeredCorrectly).length;
    });

    return {
      categoryId: route.params.categoryId,
      questions,
      next,
      correctAnswers,
      finished,
    };
  },
  components: { QuizQuestion, QuizSummary },
});
</script>
