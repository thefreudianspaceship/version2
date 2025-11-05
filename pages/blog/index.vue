<script setup>
// Fetch the 12 most recent blog posts
const { data: posts } = await useAsyncData('blog-posts', async () => {
  const allPosts = await queryCollection('blog').all()

  // Transform posts to ensure slug is available
  const transformedPosts = allPosts.map(post => {
    // Extract slug from path (format is "/blog/slug-name")
    const slug = post.path?.replace('/blog/', '') || post._id || post.title?.toLowerCase().replace(/\s+/g, '-')

    return {
      ...post,
      slug: slug
    }
  })

  return transformedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 12)
})

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper function to get excerpt
const getExcerpt = (description, length = 150) => {
  if (!description) return ''
  if (description.length <= length) return description
  return description.substring(0, length).trim() + '...'
}
</script>

<template>
  <div class="blog-page">
    <section class="page-header">
      <div class="container">
        <h1>Blog</h1>
        <p class="subtitle">Exploring philosophy, psychoanalysis, and revolutionary thought</p>
      </div>
    </section>

    <section class="blog-posts">
      <div class="container">
        <div v-if="posts && posts.length > 0" class="posts-grid">
          <article v-for="post in posts" :key="post.slug" class="post-card">
            <NuxtLink :to="`/blog/${post.slug}`" class="post-link">
              <div v-if="post.meta?.image" class="post-image">
                <img :src="post.meta.image" :alt="post.title" />
              </div>
              <div class="post-content">
                <div class="post-meta">
                  <span class="post-date">{{ formatDate(post.meta?.date) }}</span>
                  <span v-if="post.meta?.author" class="post-author">by {{ post.meta.author }}</span>
                </div>
                <h2 class="post-title">{{ post.title }}</h2>
                <p class="post-excerpt">{{ getExcerpt(post.description) }}</p>
                <div v-if="post.meta?.tags && post.meta.tags.length > 0" class="post-tags">
                  <span v-for="tag in post.meta.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
        <div v-else class="no-posts">
          <p>No blog posts found.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page {
  width: 100%;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, rgba(59, 107, 148, 0.1) 0%, rgba(20, 20, 20, 0.3) 100%);
  border-bottom: 1px solid rgba(59, 107, 148, 0.2);
  padding: 4rem 0 3rem;
  margin-bottom: 3rem;
}

.page-header h1 {
  color: var(--accent-blue);
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  font-style: italic;
  max-width: 600px;
}

/* Blog Posts Grid */
.blog-posts {
  padding: 0 0 4rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

/* Post Card */
.post-card {
  background: var(--bg-secondary);
  border: 1px solid rgba(59, 107, 148, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.post-card:hover {
  border-color: var(--accent-blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(59, 107, 148, 0.2);
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--bg-primary);
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.post-date {
  color: var(--accent-teal);
}

.post-author {
  color: var(--text-secondary);
}

.post-title {
  color: var(--accent-blue);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.post-card:hover .post-title {
  color: var(--accent-teal);
}

.post-excerpt {
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(59, 107, 148, 0.2);
  color: var(--accent-blue);
  border: 1px solid rgba(59, 107, 148, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: lowercase;
}

.no-posts {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
  font-size: 1.125rem;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .post-image {
    height: 200px;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>
