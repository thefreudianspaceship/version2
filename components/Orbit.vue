<template>
  <div class="orbit-wrapper">
    <div
      class="orbit-circle"
      :style="{
        '--orbit-size': size,
        '--orbit-max-size': maxSize,
        '--orbit-border-width': borderWidth,
        '--orbit-border-color': borderColor,
        '--orbit-particle-size': particleSize
      }"
    >
      <!-- Animated particle(s) -->
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="orbit-particle"
        :style="{
          animationDuration: `${speed}s`,
          animationDelay: `${particle.delay}s`
        }"
      ></div>

      <!-- Slot for content inside the orbit -->
      <div class="orbit-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Size of the orbit circle (e.g., '80vw', '400px')
  size: {
    type: String,
    default: '80vw'
  },
  // Maximum size constraint
  maxSize: {
    type: String,
    default: '800px'
  },
  // Border width
  borderWidth: {
    type: String,
    default: '10px'
  },
  // Border color
  borderColor: {
    type: String,
    default: 'var(--accent-blue)'
  },
  // Number of particles orbiting
  particleCount: {
    type: Number,
    default: 1
  },
  // Particle size
  particleSize: {
    type: String,
    default: '12px'
  },
  // Orbit speed in seconds
  speed: {
    type: Number,
    default: 8
  },
  // Background gradient
  showBackground: {
    type: Boolean,
    default: true
  }
})

// Calculate particle delays for even distribution
const particles = []
for (let i = 0; i < props.particleCount; i++) {
  particles.push({
    delay: (i * props.speed) / props.particleCount
  })
}

// Calculate orbit radius accounting for max-size
const orbitRadius = computed(() => {
  // Parse the size value
  if (props.size.includes('vw')) {
    const vwValue = parseFloat(props.size)
    const maxSizeValue = parseFloat(props.maxSize)
    // For viewport width, calculate in terms of percentage and max
    return `min(${vwValue / 2}vw, ${maxSizeValue / 2}px)`
  } else {
    // For pixel values, just use half
    return `${parseFloat(props.size) / 2}px`
  }
})
</script>

<style scoped>
.orbit-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

.orbit-circle {
  position: relative;
  width: var(--orbit-size);
  height: var(--orbit-size);
  max-width: var(--orbit-max-size);
  max-height: var(--orbit-max-size);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--orbit-border-width);
  border-color: var(--orbit-border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(59, 107, 148, 0.05) 0%,
    rgba(20, 20, 20, 0.3) 100%
  );
  box-shadow: 0 0 30px rgba(59, 107, 148, 0.3);
}

.orbit-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Animated Particle */
.orbit-particle {
  position: absolute;
  width: var(--orbit-particle-size);
  height: var(--orbit-particle-size);
  background: radial-gradient(
    circle,
    var(--accent-teal) 0%,
    var(--accent-blue) 50%,
    transparent 70%
  );
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-top: calc(var(--orbit-particle-size) / -2);
  margin-left: calc(var(--orbit-particle-size) / -2);
  animation: orbit linear infinite;
  box-shadow: 0 0 10px var(--accent-teal), 0 0 20px rgba(95, 195, 193, 0.5);
  z-index: 10;
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(v-bind(orbitRadius)) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(v-bind(orbitRadius)) rotate(-360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .orbit-circle {
    border-width: 8px;
  }
}

@media (max-width: 480px) {
  .orbit-circle {
    border-width: 6px;
  }
}
</style>
