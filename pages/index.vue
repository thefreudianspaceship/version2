<script setup>
import SpaceshipHero from '../components/organisms/SpaceshipHero.vue'
import ForNewEarth from '../components/organisms/ForNewEarth.vue'
import FAQBasics from '../components/organisms/FAQBasics.vue'
</script>

<template>
  <div class="home-page">
    <SpaceshipHero />
    <ForNewEarth />
    <FAQBasics />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>
