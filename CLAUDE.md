# CLAUDE.md

This file provides guidance to Claude Code when working with the Freudian Spaceship Nuxt project.

## Overview

This is a Nuxt 4 website for The Freudian Spaceship - a philosophy and research platform exploring psychoanalysis, decolonial thought, and radical political theory. The site is being rebuilt from WordPress to provide greater flexibility and enable experimental interface modes.

## Architecture

**Framework:** Nuxt 4.2.0 with Vue 3 Composition API
**Design System:** Atomic Design (atoms → molecules → organisms)
**Styling:** CSS Custom Properties, scoped component styles
**Fonts:** Bebas Neue (headings), Merriweather Sans (body)
**Theme:** Dark mode (#141414 background, #3B6B94 accent blue, #5FC3C1 accent teal)

## Directives

### 1. Atomic Design Pattern
Follow strict atomic design hierarchy:
- **Atoms:** CircularImage, Tag, PlainText - single-purpose, reusable
- **Molecules:** PostCard, AccordionItem, Nav - combinations of atoms
- **Organisms:** Header, FeaturedPosts, FAQBasics - complete sections
- **Pages:** Compose organisms into full layouts

When creating new components, always consider reusability and proper atomic placement.

### 2. Component Naming and Structure
- Use PascalCase for component files
- Scoped styles only (never global styles in components)
- Use `<script setup>` syntax (Composition API)
- Props should have type definitions and defaults

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop)
- Test all components at multiple viewport sizes
- Use CSS Grid and Flexbox for layouts

### 4. Image Handling
- Store images in `/public/` directory
- Reference as `/filename.ext` in code
- Use `object-fit: cover` with `object-position: center top` for portraits
- Maintain 16:9 aspect ratio for post card images

## Suggestives (Design Philosophy)

### Content as Atoms: API/CMS Vision

The long-term vision is to treat **content as atomic units** that can be dynamically composed:

**Content Backend:**
- A simple backend text editor (potentially a lightweight CMS or API)
- Drops markdown/content files with rich metadata into a folder
- Each file becomes a "content atom" with:
  - Tags for filtering and relationships
  - Metadata (author, date, type, difficulty, concepts)
  - Media attachments (images, PDFs, audio)
  - Fragment markers (addressable sections)

**Content Structure:**
```
/content/
  /blog/
    post-1.md (with frontmatter: tags, date, image, etc.)
    post-2.md
  /research/
    paper-1.pdf (with metadata JSON)
  /podcasts/
    episode-1.md (with audio link, transcript, timestamps)
```

**API/Query Layer:**
- Components query content via composables: `useContentQuery()`, `useMetadata()`
- Filtering by tags, dates, concepts, media type
- Content atoms can be recombined for different contexts
- No hardcoded content in components (current implementation is temporary)

**Current State vs. Vision:**
- ✓ Tag filtering system implemented (FeaturedPosts organism)
- ✓ Component structure ready for dynamic content
- ⚠️ Currently using hardcoded data arrays (temporary)
- 🔜 Next: Connect to Nuxt Content or custom API
- 🔜 Future: Implement rich metadata schema

### Metamorphic Research Interface (Long-term Vision)

Referenced in `freudianspaceshipnuxt-design-note1.md` - this is the ambitious endpoint:

**Concept:** Multiple "modes" for experiencing the same content corpus through different epistemological lenses:
- **Linear Mode:** Traditional blog/research navigation
- **Spatial Mode:** 3D keyword cloud, concept mapping
- **Ambient Mode:** Sound-based browsing, atmospheric exploration
- **Serendipity Mode:** Randomized encounters, oracle-style
- **Dialogic Mode:** Conversational AI-mediated exploration

**Technical Approach:**
- Dynamic layouts per mode (`/modes/linear/`, `/modes/spatial/`)
- Shared content queries via composables
- P5.js integration for generative visualizations
- State persistence across mode transitions
- Mode-switching UI/gestures

**Philosophy:** Each mode is a different "ritual space" or "invocation" of the research corpus. The interface becomes performative - users don't just read research, they enact it.

**Status:** Aspirational. Current build focuses on solid Linear Mode foundation with component architecture flexible enough to support future modes.

## Current Site Structure

```
/pages/
  index.vue           - Home (hero, FAQ, featured posts)
  blog.vue            - Blog listing
  blog/[slug].vue     - Individual blog posts (dynamic route)
  podcast.vue         - Podcast page
  research.vue        - Research page
  contact.vue         - Contact page

/components/
  /atoms/
    CircularImage.vue
    Tag.vue
    PlainText.vue
  /molecules/
    Nav.vue
    PostCard.vue
    AccordionItem.vue
  /organisms/
    Header.vue
    SpaceshipHero.vue
    ForNewEarth.vue
    FAQBasics.vue
    FeaturedPosts.vue

/public/
  spaceship-logo.png
  deleuze 407x495.png
  Fanon 407x495.png
  Sigmund_Freud,_by_Max_Halberstadt_(cropped).jpg
```

## Development Workflow

**Dev Server:**
```bash
npm run dev -- --host 0.0.0.0
```
Runs on port 3000, accessible via VSCode port forwarding or network address.

**Key Files:**
- `assets/css/main.css` - Global theme variables and base styles
- `app.vue` - Root layout with conditional header display
- `nuxt.config.ts` - Nuxt configuration

**Git Workflow:**
- Commit frequently with descriptive messages
- Use conventional commit style
- Include co-authorship attribution

## Notes

- This project is part of a learning journey through WordPress → Hugo → Vue/Nuxt
- The codebase should be readable and educational
- Balance ambition (metamorphic modes) with pragmatism (ship working features)
- Content focuses on psychoanalysis, decolonial thought, schizoanalysis, and radical politics
