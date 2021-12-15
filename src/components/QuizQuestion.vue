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
h2 {
  text-align: center;
  min-height: 2.5em;
}

.question {
  display: flex;
  width: 50vw;
  justify-content: center;
  flex-wrap: wrap;
  min-height: calc(4rem * 2 + 2em * 2);
}

.questionContainer {
  width: 50vw;
}

@media screen and (orientation: portrait) {
  h2 {
    min-height: 7em;
  }
  .question {
    width: 100vw;
    min-height: calc(4rem * 4 + 2em * 4);
    flex-direction: column;
    justify-content: start;
  }

  .questionContainer {
    width: 100vw;
  }
}
</style>