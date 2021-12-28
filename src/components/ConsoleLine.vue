<template>
  <div class="line">
    <div class="content">
      <span>{{ content }}</span>
      <span v-if="showCaret" class="caret" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
  showCaret: {
    type: Boolean,
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
  display: inline-block;
  height: 20px;
  width: 6px;
  border: none;
  vertical-align: baseline;
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
