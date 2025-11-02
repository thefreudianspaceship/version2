<script setup>
const title = 'THE FREUDIAN SPACESHIP'
const letters = title.split('').map((char, index) => ({
  char: char,
  index: index,
  isSpace: char === ' '
}))

const triggerRipple = () => {
  const letterElements = document.querySelectorAll('.letter')
  letterElements.forEach((el) => {
    el.classList.remove('ripple')
    void el.offsetWidth // Force reflow
    el.classList.add('ripple')
  })
}
</script>

<template>
  <header class="site-header">
    <h1 class="site-title" @mouseenter="triggerRipple">
      <span
        v-for="letter in letters"
        :key="letter.index"
        :style="{ animationDelay: `${letter.index * 0.05}s` }"
        :class="['letter', 'ripple', { 'word-space': letter.isSpace }]"
      >
        {{ letter.char }}
      </span>
    </h1>
  </header>
</template>

<style scoped>
.site-header {
  background-color: var(--bg-primary);
  padding: 2rem 2rem 1rem 2rem;
  text-align: left;
}

.site-title {
  color: var(--text-primary);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8vw;
  font-weight: 400;
  letter-spacing: 3px;
  word-spacing: 3rem;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
  display: block;
  cursor: pointer;
}

.letter {
  display: inline-block;
  transition: all 0.3s ease;
}

.letter.word-space {
  padding-right: 1.5rem;
}

.letter.ripple {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    transform: translateY(0) scale(1);
    color: var(--text-primary);
  }
  25% {
    transform: translateY(-10px) scale(1.1);
    color: var(--accent-teal);
    text-shadow: 0 0 20px rgba(95, 195, 193, 0.8);
  }
  50% {
    transform: translateY(-5px) scale(1.05);
    color: var(--accent-blue);
  }
  75% {
    transform: translateY(0) scale(1);
    color: var(--text-primary);
  }
  100% {
    transform: translateY(0) scale(1);
    color: var(--text-primary);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .site-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .site-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
}
</style>
