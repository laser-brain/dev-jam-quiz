<template>
  <h3>Finished</h3>
  <span>You have answered {{ correctAnswers }}/{{ totalQuestions }} questions correctly.</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    correctAnswers: {
      type: Number
    },
    totalQuestions: {
      type: Number
    },
  }
})
</script>
