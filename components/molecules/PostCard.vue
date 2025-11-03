<template>
  <article class="post-card">
    <NuxtLink :to="`/blog/${post.slug}`" class="post-link">
      <!-- Featured Image -->
      <div v-if="post.image" class="post-image">
        <img :src="post.image" :alt="post.title" loading="lazy" />
      </div>

      <!-- Post Content -->
      <div class="post-content">
        <h2 class="post-title">{{ post.title }}</h2>

        <div class="post-meta">
          <time :datetime="post.date" class="post-date">
            {{ formatDate(post.date) }}
          </time>
        </div>

        <p v-if="post.description" class="post-excerpt">
          {{ post.description }}
        </p>

        <span class="read-more">Continue Reading →</span>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
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

<style scoped>
.post-card {
  background-color: var(--bg-secondary);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.post-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
}

.post-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--bg-primary);
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; /* Focus on top of image for portrait photos */
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 2rem 1.5rem 1.5rem; /* Increased top padding to prevent text clipping */
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-title {
  color: var(--accent-blue);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  transition: transform 0.3s ease, color 0.3s ease;
  transform-origin: left top; /* Anchor expansion from top-left to prevent clipping */
}

.post-card:hover .post-title {
  transform: scale(1.02); /* Subtle 2% text expansion on hover */
  color: var(--accent-teal); /* Color shift on hover */
}

.post-meta {
  margin-bottom: 1rem;
}

.post-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
}

.post-excerpt {
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.read-more {
  color: var(--accent-teal);
  font-weight: 600;
  font-size: 0.95rem;
  align-self: flex-start;
  transition: opacity 0.2s ease;
}

.post-card:hover .read-more {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 1.25rem;
  }

  .post-content {
    padding: 1rem;
  }
}
</style>
