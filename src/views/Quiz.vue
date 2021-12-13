<template>
  <div class="quiz">
    <h1>Quiz Time</h1>
    <span>{{ categoryName }}</span>
    <QuizQuestion
      v-for="question in questions"
      :key="question.question"
      :question="question"
      :next="next"
    />
    <div v-if="finished" class="summary">
      <QuizSummary
        :questions="questions"
        :correctAnswers="correctAnswers"
        :total-questions="questions.length"
        :duration="time"
      />
      <div class="navButtons">
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate">Category Selection</button>
        </router-link>
        <button @click="reload">Restart</button>
      </div>
    </div>
    <div v-else class="stats">
      <ConsoleLine :content="time" :show-caret="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getQuestions } from "@/services/quiz-api";
import { IQuizQuestionViewModel } from "@/types/viewModels";
import QuizQuestion from "@/components/QuizQuestion.vue";
import QuizSummary from "@/components/QuizSummary.vue";
import StopWatch from "@/services/timer";
import { LS_CATEGORY_KEY } from "@/services/helpers";
import { ITriviaCategory } from "@/types/api-responses";
import ConsoleLine from "../components/ConsoleLine.vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    const questions = ref<IQuizQuestionViewModel[]>([]);

    const timer = new StopWatch();
    let timerInterval: number;
    const time = ref("");
    if (typeof route.params.categoryId !== "string") {
      throw new Error(
        `Invalid route param ${JSON.stringify(route.params.categoryId)}`
      );
    }
    const categoryId = parseInt(route.params.categoryId);

    onMounted(async () => {
      timer.start();
      timerInterval = setInterval(() => {
        time.value = timer.formatTimespan(timer.elapsed());
      }, 20);
      const response = await getQuestions(categoryId, 10);
      questions.value = response.map((res) => {
        return { ...res, activeQuestion: false, answeredCorrectly: false };
      });
      questions.value[0].activeQuestion = true;
    });

    const finished = ref(false);

    function next(question: IQuizQuestionViewModel) {
      const index = questions.value.indexOf(question);
      question.activeQuestion = false;
      finished.value = index === questions.value.length - 1;

      if (finished.value) {
        timer.stop();
        clearInterval(timerInterval);
      } else {
        questions.value[index + 1].activeQuestion = true;
      }
    }

    const correctAnswers = computed(() => {
      return questions.value.filter((question) => question.answeredCorrectly)
        .length;
    });

    const categories: ITriviaCategory[] = JSON.parse(
      localStorage.getItem(LS_CATEGORY_KEY) || "[]"
    );
    const categoryName = categories.filter(
      (category) => category.id === categoryId
    )[0].name;

    function reload() {
      location.reload();
    }

    return {
      categoryName,
      reload,
      questions,
      next,
      correctAnswers,
      finished,
      time,
    };
  },
  components: { QuizQuestion, QuizSummary, ConsoleLine },
});
</script>

<style lang="scss" scoped>
.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 1em;
  }
  @media screen and (orientation: portrait) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
}

.stats {
  display: flex;
  justify-content: left;
  @media screen and (orientation: portrait) {
    width: 100vw;
  }
}
</style>