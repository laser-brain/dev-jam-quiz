<template>
  <div v-if="question.activeQuestion" class="questionContainer">
    <h2 v-html="question.question" />
    <div class="question">
      <div v-for="answer in answers" :key="answer">
        <button v-html="answer" @click="getNextQuestion(answer, question)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IQuizQuestionViewModel } from "@/types/viewModels";
import { shuffleArray, checkAnswer } from "@/services/helpers";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<IQuizQuestionViewModel>,
      required: true,
    },
    next: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const answers = props.question.incorrect_answers;
    answers.push(props.question.correct_answer);

    shuffleArray(answers);

    function getNextQuestion(answer: string, question: IQuizQuestionViewModel) {
      checkAnswer(answer, question);
      props.next(question);
    }

    return {
      answers,
      getNextQuestion,
    };
  },
});
</script>

<style lang="scss" scoped>

.question {
  display: flex;
  width: 50vw;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (orientation: portrait) {
    width: 100vw;
  }
}

.questionContainer {
  width: 50vw;
  @media screen and (orientation: portrait) {
    width: 100vw;
  }
}
</style>