<script setup>
import { onMounted, onUnmounted } from 'vue'
import CircularImage from '../atoms/CircularImage.vue'
import Orbit from '../atoms/Orbit.vue'

let p5Instance = null

onMounted(() => {
  // Dynamically import p5 and create sketch
  import('p5').then((p5Module) => {
    const p5 = p5Module.default

    const sketch = (p) => {
      let particles = []
      let isPaused = false

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent('p5-background')
        p.frameRate(60)

        // Initialize 80 particles with random positions and velocities
        for (let i = 0; i < 80; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            dx: p.random(-1, 1),
            dy: p.random(-1, 1)
          })
        }

        p.noStroke()
      }

      p.draw = () => {
        // Semi-transparent background for trail effect
        p.background(51, 51, 51) // #333333 to match border-color

        if (!isPaused) {
          // Update particle positions
          for (let particle of particles) {
            particle.x += particle.dx
            particle.y += particle.dy

            // Bounce off edges
            if (particle.x < 0 || particle.x > p.width) particle.dx *= -1
            if (particle.y < 0 || particle.y > p.height) particle.dy *= -1
          }
        }

        // Draw particles (using accent-teal color)
        p.fill(95, 195, 193) // #5FC3C1
        for (let particle of particles) {
          p.circle(particle.x, particle.y, 3)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
    }

    p5Instance = new p5(sketch)
  })
})

onUnmounted(() => {
  if (p5Instance) {
    p5Instance.remove()
  }
})
</script>

<template>
  <section class="centered-image">
    <div id="p5-background" class="p5-background"></div>
    <div class="image-container">
      <a href="#top" class="scroll-to-top">
        <Orbit
          size="33vw"
          max-size="600px"
          border-width="8px"
          border-color="var(--accent-blue)"
          :particle-count="3"
          particle-size="10px"
          :speed="10"
        >
          <CircularImage
            src="/spaceship-logo.png"
            alt="Freudian Spaceship"
            size="25vw"
          />
        </Orbit>
      </a>
    </div>
  </section>
</template>

<style scoped>
.centered-image {
  position: relative;
  background-color: var(--border-color); /* Lighter grey background (#333333) */
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.p5-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.image-container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.scroll-to-top {
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scroll-to-top:hover {
  transform: scale(1.05);
}

/* Responsive - adjust image size on smaller screens */
@media (max-width: 768px) {
  .centered-image {
    padding: 3rem 1.5rem;
  }
}
</style>
