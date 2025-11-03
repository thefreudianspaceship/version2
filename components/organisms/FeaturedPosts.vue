<script setup>
import PostCard from '../molecules/PostCard.vue'

// Sample blog posts data (in real app, this would come from a CMS or API)
const allPosts = [
  {
    slug: 'post-1',
    title: 'Schizoanalysis and Decolonial Thought',
    description: 'Exploring the intersections between Deleuze and Guattari\'s schizoanalysis and Frantz Fanon\'s decolonial philosophy.',
    date: '2025-01-15',
    image: '/deleuze 407x495.png',
    tags: ['featured', 'research', 'philosophy']
  },
  {
    slug: 'post-2',
    title: 'Towards a New Earth: Practice and Experimentation',
    description: 'How can we develop new modes of thinking and being that break free from colonial and capitalist subjectivities?',
    date: '2025-01-10',
    image: '/Fanon 407x495.png',
    tags: ['featured', 'practice']
  },
  {
    slug: 'post-3',
    title: 'The Role of Psychoanalysis in Revolutionary Thought',
    description: 'Examining how psychoanalytic concepts can inform radical political and social transformation.',
    date: '2025-01-05',
    image: '/Sigmund_Freud,_by_Max_Halberstadt_(cropped).jpg',
    tags: ['featured', 'psychoanalysis', 'revolution']
  },
  {
    slug: 'post-4',
    title: 'Another Featured Post',
    description: 'This is another featured post to demonstrate filtering.',
    date: '2024-12-20',
    image: '/placeholder-post-4.jpg',
    tags: ['featured']
  }
]

// Filter posts with 'featured' tag and limit to 3
const featuredPosts = allPosts
  .filter(post => post.tags.includes('featured'))
  .slice(0, 3)
</script>

<template>
  <section class="featured-posts">
    <div class="featured-container">
      <h2 class="featured-heading">Featured Posts</h2>

      <div class="posts-grid">
        <PostCard
          v-for="post in featuredPosts"
          :key="post.slug"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-posts {
  background-color: var(--bg-primary);
  padding: 4rem 2rem;
  width: 100%;
}

.featured-container {
  max-width: 1400px;
  margin: 0 auto;
}

.featured-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 0 3rem 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .featured-posts {
    padding: 3rem 1.5rem;
  }

  .featured-heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .featured-heading {
    font-size: 2rem;
  }
}
</style>
