This is a fascinating design challenge - you're essentially trying to create a **metamorphic research interface** where the content itself becomes part of the structural design system, and the entire mode of interaction can shift. Let me think through this with you.

## The Core Conceptual Problem

You're not just building a website with alternative themes - you're building a **platform for experiencing research through different phenomenological lenses**. Each "mode" would be almost like a different cognitive approach to the same corpus of knowledge.

## Architectural Thinking

### 1. **Content as Atoms (Your Instinct is Right)**

If your atoms include the actual research artifacts (PDFs, podcasts, etc.), then you need:

- **Rich metadata layer**: Each piece of content needs extensive tagging - not just keywords, but sentiment, density, media type, temporal markers, conceptual relationships, difficulty level, etc.
- **Content fragments**: Break larger pieces into addressable units (PDF sections, podcast timestamps, blog paragraphs) so modes can recombine them differently
- **Uniform access layer**: A normalized API to your content regardless of format, so any mode can query and display it

### 2. **Modes as Epistemological Frameworks**

Think of each mode not as a skin but as a **way of knowing**:

- **Linear/Academic Mode**: Traditional navigation, citations, bibliography style
- **Spatial/Cloud Mode**: Your keyword cloud idea - concepts float in 3D space, clustering by relationship
- **Narrative/Temporal Mode**: Content arranged by time, story, or argument flow
- **Ambient/Atmospheric Mode**: Sound-based browsing, background listening while visual elements drift
- **Serendipitous/Aleatory Mode**: Randomized encounters, juxtapositions, "oracle" style interactions
- **Dialogic Mode**: Conversational interface, perhaps AI-mediated exploration

### 3. **Nuxt Architecture for This**

```
/modes/
  /linear/
  /spatial/
  /ambient/
  /serendipity/
/composables/
  useContentQuery.js      // Unified content access
  useModeState.js         // Current mode context
  useMetadata.js          // Rich content metadata
/content/
  /research/
    - indexed, tagged, fragmented
/layouts/
  mode-wrapper.vue        // Shell that all modes inhabit
```

**Key Nuxt features to leverage:**
- **Dynamic layouts**: Switch entire layout structures per mode
- **Middleware**: Mode-switching logic, authentication if needed
- **Server routes**: Content processing, ML outputs, search indexes
- **Islands**: Embed p5.js canvases or heavy visualizations without blocking
- **Composables**: Share content queries across wildly different modes

### 4. **The Transition Problem**

How do you move between modes? This is crucial:

- **Persistent context**: If I'm exploring a concept in spatial mode, can I "carry it" into ambient mode?
- **Mode-switching UI**: Always accessible, perhaps a gesture, keystroke, or persistent element
- **Transitional animations**: The shift between modes should feel meaningful, not jarring
- **State preservation**: Bookmarking, history that works across modes

## Technical Considerations

### Content Processing Pipeline

You'll need build-time (or runtime) processing:

```javascript
// Potential flow
PDF → extract text, images, citations → chunk into sections
Podcast → transcribe → timestamp → extract topics → generate waveform
Blog → parse → extract quotes → identify key concepts
Images → alt text, tags, visual analysis → embed in network
```

Could use:
- **ML/NLP**: Topic modeling, entity extraction, semantic similarity
- **Vector databases**: For semantic search across all content types
- **Graph databases**: For relationship mapping between concepts

### P5.js Integration Specifically

Since you mention p5.js canvases as content atoms:

- Create a `<P5Canvas>` component that can:
  - Accept sketch code as a prop
  - Run in isolation (Nuxt Islands)
  - Respond to mode context (colors, speed, interaction based on current mode)
  - Generate metadata (what concepts does this visualization represent?)

```vue
<P5Canvas 
  :sketch="researchSketch"
  :mode-context="currentMode"
  :concepts="['emergence', 'complexity']"
  @interaction="handleSketchInteraction"
/>
```

## Philosophical/Sorcerous Angle

Given your background, you might consider:

**Modes as ritual spaces**: Each mode is a different invocation of the research corpus. The spatial mode is scrying, the ambient mode is meditation, the serendipitous mode is divination. The transition between modes becomes a crossing of thresholds.

**The interface as sigil**: The overall structure - the ability to shift between these modes - creates a meta-pattern that's greater than any individual mode. Users aren't just reading research; they're performing it.

## Practical Next Steps

1. **Start with two extreme modes**: Build one traditional (linear) and one radical (spatial cloud). This will reveal the abstraction layers you need.

2. **Create your content schema first**: Before worrying about display, nail down how you'll describe and relate your research pieces.

3. **Build the mode-switching mechanism**: Even if it just switches between two simple layouts initially, get the infrastructure right.

4. **Prototype one "smart" feature**: Maybe the keyword cloud with actual ML, or one p5.js sketch that responds to mode context. Prove the concept.

5. **Consider a "mode builder"**: Eventually, could users/collaborators create their own modes? That's the ultimate flexibility.

## Questions to Consider

- Should modes be discoverable by exploration, or explicitly chosen?
- Can modes blend (spatial + ambient)?
- Who's the audience? Researchers who'll appreciate radical interfaces, or broader publics who need training wheels?
- Is there a "null" or "void" mode - no interface, just search?

This is genuinely exciting territory - you're building something between a research repository, an art piece, and a philosophical tool. The fact that you're thinking about it in terms of Nuxt's component system is smart because it forces you to think modularly about both content and interaction paradigms.

What aspects resonate most? Where should we dig deeper?