<template>  
  <div>
    <span v-html="question.question" />
  </div>
</template>

<script lang="ts">
import { IQuizQuestion } from '@/types/api-responses'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<IQuizQuestion>,
      required: true
    }
  },
  setup() {
    
  },
})
</script>
