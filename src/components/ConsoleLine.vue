<template>
  <div class="line">
    <div class="content">{{ content }}</div>
    <div v-if="showCaret" class="caret" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
    showCaret: {
      type: Boolean,
    },
  },
});
</script>

<style scoped>
div,
span {
  font-size: larger;
  font-weight: bold;
}

.line {
  min-height: 22px;
}

.caret {
  height: 18px;
  width: 6px;
  border: none;
  background-color: white;
  animation: blink-caret 0.5s step-end infinite;
}

@keyframes blink-caret {
  0%,
  to {
    background-color: transparent;
  }
  50% {
    background-color: white;
  }
}
</style>
