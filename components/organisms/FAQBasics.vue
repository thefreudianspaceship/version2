<script setup>
import PlainText from '../atoms/PlainText.vue'
import AccordionItem from '../molecules/AccordionItem.vue'
import SpaceshipHero from './SpaceshipHero.vue';

const faqs = [
  {
    question: 'What is the Freudian Spaceship?',
    answer: 'An image that can open up a space for thinking; a combination of ideas to produce new concepts from hybrid mutations; the name of a research project that combines schizoanalysis with the thought of Frantz Fanon; a space to develop a new practice of philosophy and psychoanalysis; a name for a new earth in which we might be at home.'
  },
  {
    question: 'What is this website for?',
    answer: 'Eric Harper and Matt Lee have collaborated on essays and materials exploring the Freudian Spaceship concept. The website serves to broaden their dialogues and involve others in conversation. Their initial focus includes developing the "Conversations about Concepts" podcast and organizing their research materials into an accessible format on the research page.'
  },
  {
    question: 'How does this website work?',
    answer: 'Originally built on WordPress we noticed we were limited in what we could do. Some conversations with colleagues touched on alternative visions and multiple paths that we wanted to explore. So a while later, and after working with servers and code and much playing with claude, we moved through Hugo and into Vue and Nuxt via p5.js for fun. So that\'s how the website works, and it means we might be a bit more flexible now - so alternative modes are potentially more viable.'
  },
  {
    question: 'How can I get involved?',
    answer: 'The podcast (Conversations about concepts) and blog pieces serve as a textual and audio assemblage for the thoughts and practices we are working with.  \n\nIt\'s an attempt to give those thoughts and practices some space, as is needed for any body. We began developing the website as a way to think the body.  Our work on Breath was and is part of a triangulation of breath, body and earth.  \n\nThere are only limited episodes of the podcast, think of them more as an hour of conversation about a concept, an idea that you can listen to people talking about.  Alongside this there is an overview text of the concept and then, further in and if you\'re interested, there is the use of that concept within the research work.  The idea is to generate connections.'
  }
]
</script>

<template>
  <section class="faq-basics">
    <div class="faq-container">
      <div class="faq-grid">
        <!-- Left Column: Section Title and Description -->
        <div class="faq-intro">
          <h2 class="faq-heading">FAQ: Some Basics</h2>
          <PlainText
            text="Frequently asked questions about The Freudian Spaceship project, our mission, and how to get involved."
            align="left"
          />
        </div>

        <!-- Right Column: Accordion Q&A -->
        <div class="faq-questions">
          <AccordionItem
            v-for="(faq, index) in faqs"
            :key="index"
            :question="faq.question"
            :answer="faq.answer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-basics {
  background-color: #252525;
  padding: 4rem 2rem;
  width: 100%;
}

.faq-container {
  max-width: 1400px;
  margin: 0 auto;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.faq-intro {
  position: sticky;
  top: 6rem;
}

.faq-heading {
  color: var(--accent-blue);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.faq-questions {
  display: flex;
  flex-direction: column;
}

/* Responsive */
@media (max-width: 1024px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .faq-intro {
    position: static;
  }
}

@media (max-width: 768px) {
  .faq-basics {
    padding: 3rem 1.5rem;
  }

  .faq-heading {
    font-size: 1.75rem;
  }
}
</style>
