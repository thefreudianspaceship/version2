<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '85%',
    validator: (value) => {
      // Accept percentage or CSS units like px, rem, vw, etc.
      return /^(\d+(\.\d+)?(%|px|rem|em|vw|vh))$/.test(value)
    }
  }
})
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    class="circular-image"
    :style="{ width: size, height: size }"
  />
</template>

<style scoped>
.circular-image {
  object-fit: cover;
  border-radius: 50%;
}
</style>
