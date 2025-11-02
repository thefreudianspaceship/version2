<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})
</script>

<template>
  <div class="plain-text" :style="{ textAlign: align }">
    {{ text }}
  </div>
</template>

<style scoped>
.plain-text {
  color: var(--text-primary);
  font-size: 1.125rem;
  line-height: 1.8;
}
</style>
