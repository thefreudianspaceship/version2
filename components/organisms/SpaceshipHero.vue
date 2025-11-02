<script setup>
import Orbit from '../atoms/Orbit.vue'
import CircularImage from '../atoms/CircularImage.vue'
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
      <CircularImage
        src="/spaceship-logo.png"
        alt="Freudian Spaceship"
        size="85%"
      />
    </Orbit>
  </section>
</template>

<style scoped>
.spaceship-hero {
  width: 100%;
}
</style>
