<template>
  <h3>Finished</h3>
  <div>
    You have answered {{ correctAnswers }}/{{ totalQuestions }} questions
    correctly. This took you
    <span class="highlight">{{ duration }}</span>
  </div>
  <br />
  <div>
    You
    <span :class="finishType">{{ finishType }}</span> this quiz with a final
    score of
    <span class="highlight">{{ score }}</span>.
  </div>
  <div class="questions-summary">
    <h3>Answer summary</h3>
    <div v-for="question in questions" :key="question.question" class="spoiler">
      <label v-html="question.question" />
      <br />Correct answer:&nbsp;
      <span
        :style="{ color: question.answeredCorrectly ? 'green' : 'red' }"
        v-html="question.correct_answer"
      />
      <br />
      Difficulty: {{ question.difficulty }}, Points awarded:
      {{ getScore(question) * 10 }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { IQuizQuestionViewModel } from "@/types/viewModels";
import { PropType } from "vue";

enum Difficulty {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

const PASS_SCORE = 75;

const props = defineProps({
  questions: {
    type: Object as PropType<IQuizQuestionViewModel[]>,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
  },
});

function getScore(question: IQuizQuestionViewModel): number {
  function scoreModificator(mod: Difficulty) {
    switch (mod) {
      case Difficulty.Easy:
        return 1;
      case Difficulty.Medium:
        return 1.25;
      case Difficulty.Hard:
        return 1.5;
      default:
        return 0;
    }
  }
  return question.answeredCorrectly
    ? scoreModificator(question.difficulty)
    : 0;
}

const score =
  (props.questions
    .map(getScore)
    .reduce((score, finalScore) => finalScore + score) /
    props.totalQuestions) *
  100;

const passed = score > PASS_SCORE;
const finishType = passed ? "passed" : "failed";
</script>

<style lang="scss" scoped>
.questions-summary {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 50vw;
  margin-top: 1.5em;
  @media screen and (orientation: portrait) {
    width: 90vw;
  }
}

.highlight {
  color: white;
}

.passed {
  color: green;
}

.failed {
  color: red;
}
.spoiler {
  margin-top: 0.5rem;
  text-align: left;
}
</style>