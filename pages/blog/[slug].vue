<script setup>
import { useRoute } from 'vue-router'
import Tag from '../../components/atoms/Tag.vue'

const route = useRoute()

// Query Nuxt Content for the current blog post
const { data: currentPost } = await useAsyncData(`blog-${route.params.slug}`, async () => {
  const posts = await queryCollection('blog').all()
  const post = posts.find(post => post.path === `/blog/${route.params.slug}`)

  // Transform post to match expected structure
  if (post) {
    return {
      ...post,
      author: post.meta?.author,
      date: post.meta?.date,
      image: post.meta?.image,
      tags: post.meta?.tags
    }
  }
  return null
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
      <div class="post-content">
        <ContentRenderer :value="currentPost" />
      </div>
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
