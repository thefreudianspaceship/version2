<template>
  <header class="header">
    <!-- Desktop Navigation with Centered Logo -->
    <div class="nav-container">
      <!-- Left Nav Links -->
      <nav class="nav nav-left">
        <NuxtLink to="/" class="nav-link">BLOG</NuxtLink>
        <span class="nav-divider">:</span>
        <NuxtLink to="/podcast" class="nav-link">PODCAST</NuxtLink>
      </nav>

      <!-- Centered Logo -->
      <NuxtLink to="/" class="logo-link">
        <CircularImage
          src="/spaceship-logo.png"
          alt="Freudian Spaceship"
          size="50px"
          class="nav-logo"
        />
      </NuxtLink>

      <!-- Right Nav Links -->
      <nav class="nav nav-right">
        <NuxtLink to="/research" class="nav-link">RESEARCH</NuxtLink>
        <span class="nav-divider">:</span>
        <NuxtLink to="/contact" class="nav-link">CONTACT US</NuxtLink>
      </nav>
    </div>

    <!-- Mobile Menu Button and Logo -->
    <div class="mobile-header">
      <button
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="hamburger" :class="{ open: mobileMenuOpen }"></span>
      </button>

      <NuxtLink to="/" class="mobile-logo-link">
        <CircularImage
          src="/spaceship-logo.png"
          alt="Freudian Spaceship"
          size="40px"
          class="mobile-nav-logo"
        />
      </NuxtLink>
    </div>

    <!-- Mobile Navigation -->
    <nav v-if="mobileMenuOpen" class="mobile-nav">
      <NuxtLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
        BLOG
      </NuxtLink>
      <NuxtLink to="/podcast" class="mobile-nav-link" @click="closeMobileMenu">
        PODCAST
      </NuxtLink>
      <NuxtLink to="/research" class="mobile-nav-link" @click="closeMobileMenu">
        RESEARCH
      </NuxtLink>
      <NuxtLink to="/contact" class="mobile-nav-link" @click="closeMobileMenu">
        CONTACT US
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import CircularImage from '../atoms/CircularImage.vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background-color: var(--bg-header);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Desktop Navigation Container */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

/* Individual Nav Sections */
.nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.nav-left {
  justify-content: flex-start;
}

.nav-right {
  justify-content: flex-end;
}

/* Centered Logo */
.logo-link {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.nav-logo {
  display: block;
}

/* Nav Links */
.nav-link {
  color: var(--accent-blue);
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: 1.5625rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-blue);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-divider {
  color: var(--accent-blue);
  font-size: 1.5625rem;
  user-select: none;
}

/* Mobile Header */
.mobile-header {
  display: none;
  align-items: center;
  justify-content: space-between;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--accent-blue);
  position: relative;
  transition: background-color 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--accent-blue);
  position: absolute;
  transition: transform 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.open {
  background-color: transparent;
}

.hamburger.open::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.open::after {
  transform: rotate(-45deg);
  bottom: 0;
}

/* Mobile Logo */
.mobile-logo-link {
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
}

.mobile-logo-link:hover {
  opacity: 0.8;
}

/* Mobile Navigation */
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.mobile-nav-link {
  color: var(--accent-blue);
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: var(--text-primary);
}

/* Responsive - Switch to mobile layout at 1024px to prevent text overlap */
@media (max-width: 1024px) {
  .nav-container {
    display: none;
  }

  .mobile-header {
    display: flex;
  }
}
</style>
