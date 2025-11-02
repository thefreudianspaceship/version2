<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary'].includes(value)
  }
})
</script>

<template>
  <span class="tag" :class="`tag-${variant}`">
    {{ label }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;
}

.tag-default {
  background-color: var(--border-color);
  color: var(--text-primary);
}

.tag-primary {
  background-color: var(--accent-blue);
  color: #ffffff;
}

.tag-secondary {
  background-color: var(--accent-teal);
  color: #000000;
}

.tag:hover {
  opacity: 0.8;
}
</style>
