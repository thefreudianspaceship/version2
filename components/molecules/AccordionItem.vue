<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

function toggleAccordion() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="accordion-item">
    <button class="accordion-header" @click="toggleAccordion" :aria-expanded="isOpen">
      <span class="question">{{ question }}</span>
      <span class="icon" :class="{ open: isOpen }">+</span>
    </button>
    <div class="accordion-content" :class="{ open: isOpen }">
      <div class="accordion-inner">
        <p class="answer">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-item {
  border-bottom: 1px solid var(--border-color);
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
}

.accordion-header:hover {
  opacity: 0.8;
}

.question {
  color: var(--accent-blue);
  font-size: 1.25rem;
  font-weight: 600;
  flex: 1;
  padding-right: 1rem;
}

.icon {
  color: var(--accent-blue);
  font-size: 2rem;
  font-weight: 300;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.icon.open {
  transform: rotate(45deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out, opacity 0.3s ease-out;
  opacity: 0;
}

.accordion-content.open {
  max-height: 500px;
  opacity: 1;
  transition: max-height 0.4s ease-in, opacity 0.3s ease-in;
}

.accordion-inner {
  padding: 0 0 1.5rem 0;
}

.answer {
  color: var(--text-primary);
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0;
}
</style>
