<template>
  <div>
    <h2 v-html="question.question" />
    <div v-for="answer in answers" :key="answer">
      <span v-html="answer" />
    </div>
  </div>
</template>

<script lang="ts">
import { IQuizQuestion } from "@/types/api-responses";
import { shuffleArray } from "@/services/helpers";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<IQuizQuestion>,
      required: true,
    },
  },
  setup(props) {
    const answers = props.question.incorrect_answers;
    answers.push(props.question.correct_answer);

    shuffleArray(answers);
    console.log(props.question.correct_answer);

    return {
      answers,
    };
  },
});
</script>
