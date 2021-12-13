<template>
  <h3>Finished</h3>
  <span>You have answered {{ correctAnswers }}/{{ totalQuestions }} questions correctly. This took you {{ duration }}.</span>
  <div class="questions-summary">
    <div v-for="question in questions" :key="question.question" class="spoiler">
      <label v-html=" question.question" /><br/>Correct answer:&nbsp;
      <span
        :style="{ color: question.answeredCorrectly ? 'green' : 'red' }"
        v-html="question.correct_answer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { IQuizQuestionViewModel } from "@/types/viewModels";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    questions: {
      type: Object as PropType<IQuizQuestionViewModel[]>,
      required: true,
    },
    correctAnswers: {
      type: Number,
    },
    totalQuestions: {
      type: Number,
    },
    duration: {
      type: String,
    },
  },
});
</script>


<style lang="scss" scoped>
  .questions-summary {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items:flex-start;
    width: 50vw;
    margin-left: 25vw;
    margin-top: 5rem;
  }

  .spoiler {
    margin-top: .5rem;
    text-align: left;
  }
</style>