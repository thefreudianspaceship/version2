<script setup>
import SpaceshipHero from '../components/organisms/SpaceshipHero.vue'
import ForNewEarth from '../components/organisms/ForNewEarth.vue'
import FAQBasics from '../components/organisms/FAQBasics.vue'
import FeaturedPosts from '../components/organisms/FeaturedPosts.vue'
</script>

<template>
  <div class="home-page">
    <SpaceshipHero />
    <ForNewEarth />
    <FAQBasics />
    <FeaturedPosts />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>
