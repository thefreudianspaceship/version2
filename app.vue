<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Nav from './components/molecules/Nav.vue'
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'

const route = useRoute()
const showHeader = computed(() => route.path === '/')
</script>

<template>
  <div id="app">
    <div id="top"></div>
    <NuxtRouteAnnouncer />
    <Nav />
    <Header v-if="showHeader" />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Freudian Spaceship - Global Dark Theme Styles */

/* CSS Variables for Dark Theme */
:root {
  --bg-primary: #141414;
  --bg-secondary: #1a1a1a;
  --bg-section: #1a1a1a;
  --bg-header: #000000;
  --text-primary: #ADAEAF;
  --text-secondary: #888888;
  --accent-blue: #3B6B94;
  --accent-teal: #5FC3C1;
  --border-color: #333333;
  --spacing-unit: 1rem;
}

/* Reset and Base Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 18px;
  line-height: 1.8;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--accent-blue);
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.3;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: var(--accent-blue);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

a:hover {
  opacity: 0.8;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

.container-wide {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--accent-blue);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.btn:hover {
  opacity: 0.9;
}

.btn-secondary {
  background-color: var(--bg-secondary);
  color: var(--accent-blue);
  border: 1px solid var(--accent-blue);
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.mt-1 { margin-top: var(--spacing-unit); }
.mt-2 { margin-top: calc(var(--spacing-unit) * 2); }
.mt-3 { margin-top: calc(var(--spacing-unit) * 3); }

.mb-1 { margin-bottom: var(--spacing-unit); }
.mb-2 { margin-bottom: calc(var(--spacing-unit) * 2); }
.mb-3 { margin-bottom: calc(var(--spacing-unit) * 3); }

.py-1 { padding-top: var(--spacing-unit); padding-bottom: var(--spacing-unit); }
.py-2 { padding-top: calc(var(--spacing-unit) * 2); padding-bottom: calc(var(--spacing-unit) * 2); }
.py-3 { padding-top: calc(var(--spacing-unit) * 3); padding-bottom: calc(var(--spacing-unit) * 3); }

/* Responsive */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}

/* App Layout */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
