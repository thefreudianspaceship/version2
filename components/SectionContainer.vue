<script setup>
const props = defineProps({
  // Section heading
  heading: {
    type: String,
    required: false
  },
  // Number of columns in grid
  columns: {
    type: Number,
    default: 3,
    validator: (value) => value >= 1 && value <= 4
  },
  // Background color
  backgroundColor: {
    type: String,
    default: 'var(--bg-section)'
  },
  // Heading alignment
  headingAlignment: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})
</script>

<template>
  <section class="section-container" :style="{ backgroundColor: backgroundColor }">
    <div class="section-inner">
      <h2
        v-if="heading"
        class="section-heading"
        :style="{ textAlign: headingAlignment }"
      >
        {{ heading }}
      </h2>
      <div
        class="section-grid"
        :style="{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          '--section-columns': columns
        }"
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  width: 100%;
  padding: 4rem 2rem;
}

.section-inner {
  max-width: 1400px;
  margin: 0 auto;
}

.section-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 3rem 0;
}

.section-grid {
  display: grid;
  gap: 2rem;
  align-items: start;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 3rem 1.5rem;
  }

  .section-heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .section-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-heading {
    font-size: 2rem;
  }
}
</style>
