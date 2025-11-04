<script setup>
import { computed } from 'vue'
import PostCard from '../molecules/PostCard.vue'

// Query Nuxt Content for all blog posts
const { data: allPosts } = await useAsyncData('featured-posts', async () => {
  try {
    const posts = await queryCollection('blog').all()
    // Sort by date descending
    return posts.sort((a, b) => new Date(b.meta?.date || 0).getTime() - new Date(a.meta?.date || 0).getTime())
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
})

// Filter for featured posts and transform data to match PostCard props
const featuredPosts = computed(() => {
  const posts = allPosts.value || []

  return posts
    .filter(post => post.meta?.tags?.includes('featured'))
    .slice(0, 3)
    .map(post => ({
      slug: post.path?.replace('/blog/', '') || '',
      title: post.title,
      description: post.description,
      date: post.meta?.date,
      image: post.meta?.image,
      tags: post.meta?.tags
    }))
})
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
