<script setup>
import SectionContainer from './SectionContainer.vue'
import IconCard from '../molecules/IconCard.vue'

// Content for the three cards
const cards = [
  {
    icon: '/icons/research.svg',
    heading: 'Research',
    text: 'A project that begins from "I can\'t breath", combining schizoanalysis with Frantz Fanon\'s decolonial thought and examining contemporary political-psychic landscapes.'
  },
  {
    icon: '/icons/practice.svg',
    heading: 'Practice',
    text: 'An experimental space merging philosophy, psychoanalysis, revolution, and sorcery, fostering playful experiment, open conversation and radical thought.'
  },
  {
    icon: '/icons/creativity.svg',
    heading: 'Creativity',
    text: 'A synthesis creating a Fanonian schizoanalysis, enabling new modes of adaptation, resistance and resilience.'
  }
]
</script>

<template>
  <SectionContainer heading="For a New Earth" :columns="3">
    <IconCard
      v-for="(card, index) in cards"
      :key="index"
      :icon="card.icon"
      :heading="card.heading"
      :text="card.text"
    />
  </SectionContainer>
</template>

<style scoped>
/* Additional styling specific to this section can go here */
</style>
