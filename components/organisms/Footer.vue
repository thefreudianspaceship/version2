<script setup>
import { ref, onMounted } from 'vue'

const isLoginOpen = ref(false)
const currentUser = ref(null)

const toggleLogin = () => {
  isLoginOpen.value = !isLoginOpen.value
}

const openIdentityWidget = () => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.open()
  }
}

const logout = () => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.logout()
    currentUser.value = null
  }
}

const goToAdmin = () => {
  window.location.href = '/admin'
}

onMounted(() => {
  if (window.netlifyIdentity) {
    // Check current user
    currentUser.value = window.netlifyIdentity.currentUser()

    // Listen for login events
    window.netlifyIdentity.on('login', (user) => {
      currentUser.value = user
      isLoginOpen.value = false
    })

    // Listen for logout events
    window.netlifyIdentity.on('logout', () => {
      currentUser.value = null
    })
  }
})
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main footer content -->
      <div class="footer-content">
        <div class="footer-left">
          <div class="copyleft-container">
            <img src="/images/copyleft.svg" alt="Copyleft" class="copyleft-icon" />
            <span class="copyleft-text">Copyleft // Open Access</span>
          </div>
          <p class="footer-tagline">Towards a Fanonian Schizoanalysis</p>
        </div>

        <!-- Admin Access Panel -->
        <div class="admin-panel">
          <button
            @click="toggleLogin"
            class="admin-toggle"
            :class="{ 'active': isLoginOpen }"
          >
            <span class="admin-icon">◆</span>
            <span class="admin-label">{{ currentUser ? 'Editor' : 'Admin Access' }}</span>
          </button>

          <!-- Login/User Panel -->
          <transition name="slide-up">
            <div v-if="isLoginOpen" class="login-panel">
              <div v-if="currentUser" class="user-info">
                <div class="user-avatar">
                  {{ currentUser.email.charAt(0).toUpperCase() }}
                </div>
                <div class="user-details">
                  <p class="user-email">{{ currentUser.email }}</p>
                  <p class="user-role">Editor</p>
                </div>
                <div class="user-actions">
                  <button @click="goToAdmin" class="btn-admin">
                    <span>Go to CMS</span>
                    <span class="arrow">→</span>
                  </button>
                  <button @click="logout" class="btn-logout">
                    Sign Out
                  </button>
                </div>
              </div>

              <div v-else class="login-prompt">
                <div class="login-icon">⬡</div>
                <h3 class="login-title">Editor Access</h3>
                <p class="login-description">Sign in to access the content management system</p>
                <button @click="openIdentityWidget" class="btn-login">
                  Sign In
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
  border-top: 1px solid rgba(59, 107, 148, 0.2);
  padding: 2rem 0;
  margin-top: 0;
  position: relative;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-left {
  flex: 1;
}

.copyleft-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.copyleft-icon {
  width: 24px;
  height: 24px;
  filter: invert(54%) sepia(13%) saturate(350%) hue-rotate(169deg) brightness(95%) contrast(87%);
  opacity: 0.8;
}

.copyleft-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.footer-tagline {
  color: rgba(95, 195, 193, 0.6);
  font-size: 0.85rem;
  font-style: italic;
  margin-left: 0;
}

/* Admin Panel */
.admin-panel {
  position: relative;
}

.admin-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(59, 107, 148, 0.1);
  border: 1px solid rgba(59, 107, 148, 0.3);
  border-radius: 6px;
  color: var(--accent-blue);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.admin-toggle:hover {
  background: rgba(59, 107, 148, 0.2);
  border-color: var(--accent-blue);
  transform: translateY(-2px);
}

.admin-toggle.active {
  background: rgba(59, 107, 148, 0.25);
  border-color: var(--accent-teal);
  color: var(--accent-teal);
}

.admin-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.admin-toggle.active .admin-icon {
  transform: rotate(45deg);
}

.admin-label {
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Login Panel */
.login-panel {
  position: absolute;
  bottom: calc(100% + 1rem);
  right: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #141414 100%);
  border: 1px solid rgba(59, 107, 148, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 320px;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(95, 195, 193, 0.1);
  z-index: 1000;
}

/* Login Prompt */
.login-prompt {
  text-align: center;
}

.login-icon {
  font-size: 2.5rem;
  color: var(--accent-teal);
  margin-bottom: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

.login-title {
  color: var(--accent-blue);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.login-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.btn-login {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, var(--accent-blue) 0%, rgba(59, 107, 148, 0.8) 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 107, 148, 0.3);
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 107, 148, 0.5);
}

/* User Info */
.user-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(95, 195, 193, 0.3);
}

.user-details {
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(59, 107, 148, 0.2);
}

.user-email {
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.user-role {
  color: var(--accent-teal);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.user-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-admin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: linear-gradient(135deg, var(--accent-blue) 0%, rgba(59, 107, 148, 0.8) 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 107, 148, 0.3);
}

.btn-admin:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 107, 148, 0.5);
}

.btn-admin .arrow {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.btn-admin:hover .arrow {
  transform: translateX(4px);
}

.btn-logout {
  width: 100%;
  padding: 0.75rem;
  background: rgba(59, 107, 148, 0.1);
  color: var(--text-secondary);
  border: 1px solid rgba(59, 107, 148, 0.2);
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: rgba(59, 107, 148, 0.15);
  color: var(--text-primary);
  border-color: rgba(59, 107, 148, 0.3);
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-left {
    text-align: center;
  }

  .admin-panel {
    display: flex;
    justify-content: center;
  }

  .login-panel {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateX(-50%) translateY(10px);
  }
}
</style>
