<script setup>
import Orbit from '../atoms/Orbit.vue'
</script>

<template>
  <section class="spaceship-hero">
    <Orbit
      size="80vw"
      max-size="1400px"
      border-width="10px"
      :particle-count="1"
      :speed="8"
    >
      <img
        src="/spaceship-logo.png"
        alt="Freudian Spaceship"
        class="spaceship-image"
      />
    </Orbit>
  </section>
</template>

<style scoped>
.spaceship-hero {
  width: 100%;
}

.spaceship-image {
  width: 85%;
  height: 85%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
