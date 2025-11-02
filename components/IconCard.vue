<script setup>
const props = defineProps({
  // Icon image source (path to image file)
  icon: {
    type: String,
    required: true
  },
  // Card heading
  heading: {
    type: String,
    required: true
  },
  // Card body text
  text: {
    type: String,
    required: true
  },
  // Icon size
  iconSize: {
    type: String,
    default: '80px'
  },
  // Text alignment
  alignment: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})
</script>

<template>
  <div class="icon-card" :style="{ textAlign: alignment }">
    <div class="icon-wrapper">
      <img :src="icon" :alt="heading" class="card-icon" :style="{ width: iconSize, height: iconSize }" />
    </div>
    <h3 class="card-heading">{{ heading }}</h3>
    <p class="card-text">{{ text }}</p>
  </div>
</template>

<style scoped>
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  transition: transform 0.3s ease;
}

.icon-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  margin-bottom: 1.5rem;
}

.card-icon {
  display: block;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.icon-card:hover .card-icon {
  filter: brightness(1.1);
}

.card-heading {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-text {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 350px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .icon-card {
    padding: 1.5rem 1rem;
  }

  .card-heading {
    font-size: 1.25rem;
  }

  .card-text {
    font-size: 0.95rem;
  }
}
</style>
