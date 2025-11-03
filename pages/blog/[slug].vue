<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Tag from '../../components/atoms/Tag.vue'

const route = useRoute()

// Sample blog posts data (in real app, this would come from a CMS or API)
const blogPosts = {
  'post-1': {
    slug: 'post-1',
    title: 'Schizoanalysis and Decolonial Thought',
    description: 'Exploring the intersections between Deleuze and Guattari\'s schizoanalysis and Frantz Fanon\'s decolonial philosophy.',
    date: '2025-01-15',
    author: 'Eric Harper',
    image: '/placeholder-post-1.jpg',
    tags: ['featured', 'research', 'philosophy'],
    content: `
      <p>This is the full content of the blog post. In a real implementation, this would come from a CMS or markdown file.</p>

      <h2>Introduction</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <h2>Main Argument</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <h2>Conclusion</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `
  },
  'post-2': {
    slug: 'post-2',
    title: 'Towards a New Earth: Practice and Experimentation',
    description: 'How can we develop new modes of thinking and being that break free from colonial and capitalist subjectivities?',
    date: '2025-01-10',
    author: 'Matt Lee',
    image: '/placeholder-post-2.jpg',
    tags: ['featured', 'practice'],
    content: `
      <p>Sample content for post 2.</p>
      <h2>Section One</h2>
      <p>Content here...</p>
    `
  },
  'post-3': {
    slug: 'post-3',
    title: 'The Role of Psychoanalysis in Revolutionary Thought',
    description: 'Examining how psychoanalytic concepts can inform radical political and social transformation.',
    date: '2025-01-05',
    author: 'Eric Harper & Matt Lee',
    image: '/placeholder-post-3.jpg',
    tags: ['featured', 'psychoanalysis', 'revolution'],
    content: `
      <p>Sample content for post 3.</p>
      <h2>Revolutionary Concepts</h2>
      <p>Content here...</p>
    `
  }
}

// Get the current post based on the route slug
const currentPost = computed(() => {
  return blogPosts[route.params.slug] || null
})

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="currentPost" class="blog-post">
    <!-- Hero Section with Featured Image -->
    <div class="post-hero">
      <div v-if="currentPost.image" class="hero-image">
        <img :src="currentPost.image" :alt="currentPost.title" />
      </div>
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="post-title">{{ currentPost.title }}</h1>

          <div class="post-meta">
            <span class="post-author">By {{ currentPost.author }}</span>
            <span class="meta-divider">•</span>
            <time :datetime="currentPost.date" class="post-date">
              {{ formatDate(currentPost.date) }}
            </time>
          </div>

          <div class="post-tags">
            <Tag
              v-for="tag in currentPost.tags"
              :key="tag"
              :label="tag"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <div class="post-content-wrapper">
      <div class="post-content" v-html="currentPost.content"></div>
    </div>
  </article>

  <!-- 404 if post not found -->
  <div v-else class="post-not-found">
    <h1>Post Not Found</h1>
    <p>The blog post you're looking for doesn't exist.</p>
    <NuxtLink to="/blog" class="back-link">← Back to Blog</NuxtLink>
  </div>
</template>

<style scoped>
/* Hero Section */
.post-hero {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  background-color: var(--bg-header);
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(20,20,20,0.9));
  display: flex;
  align-items: flex-end;
  padding: 3rem 2rem;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.post-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1rem;
}

.post-author {
  font-weight: 600;
  color: var(--accent-teal);
}

.meta-divider {
  color: var(--text-secondary);
}

.post-date {
  font-style: italic;
  color: var(--text-secondary);
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Post Content */
.post-content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.post-content {
  color: var(--text-primary);
  font-size: 1.125rem;
  line-height: 1.8;
}

.post-content :deep(h2) {
  color: var(--accent-blue);
  font-size: 2rem;
  font-weight: 600;
  margin: 2.5rem 0 1rem 0;
  line-height: 1.3;
}

.post-content :deep(h3) {
  color: var(--accent-blue);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 0.75rem 0;
}

.post-content :deep(p) {
  margin-bottom: 1.5rem;
}

.post-content :deep(a) {
  color: var(--accent-teal);
  text-decoration: underline;
}

.post-content :deep(a:hover) {
  opacity: 0.8;
}

/* Not Found */
.post-not-found {
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem;
  text-align: center;
}

.post-not-found h1 {
  color: var(--accent-blue);
  font-size: 3rem;
  margin-bottom: 1rem;
}

.post-not-found p {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.back-link {
  color: var(--accent-teal);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.back-link:hover {
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .post-hero {
    height: 50vh;
    min-height: 350px;
  }

  .hero-overlay {
    padding: 2rem 1.5rem;
  }

  .post-title {
    font-size: 2.5rem;
  }

  .post-meta {
    font-size: 0.9rem;
    flex-wrap: wrap;
  }

  .post-content-wrapper {
    padding: 3rem 1.5rem;
  }

  .post-content {
    font-size: 1rem;
  }

  .post-content :deep(h2) {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 2rem;
  }

  .post-content :deep(h2) {
    font-size: 1.5rem;
  }
}
</style>
