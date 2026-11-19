<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ src: string; alt: string; index?: number }>()

// Kol nuotraukos failas neįkeltas, rodomas pastelinis pakaitalas.
const failed = ref(false)
</script>

<template>
  <figure class="tile" :class="`tone-${(index ?? 0) % 4}`">
    <img v-if="!failed" :src="src" :alt="alt" loading="lazy" @error="failed = true" />
    <figcaption v-else class="placeholder">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M14 30h36v22a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V30Z M10 30c0-4 3-7 7-7h30c4 0 7 3 7 7 M18 23v-4 M32 23v-6 M46 23v-4 M32 12c-1.5 1.5-1.5 3 0 4"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 40c4 3 8 3 12 0s8-3 12 0 8 3 12 0"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
        />
      </svg>
      <span>{{ alt }}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.tile {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--blush-soft);
}
.tone-1 {
  background: var(--bone-deep);
}
.tone-2 {
  background: #e9dfcd;
}
.tone-3 {
  background: #f3dede;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.tile:hover img {
  transform: scale(1.04);
}
.placeholder {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 0.75rem;
  padding: 1rem;
  text-align: center;
  color: var(--berry);
  opacity: 0.75;
  font-size: 0.85rem;
}
.placeholder svg {
  width: 48px;
  height: 48px;
}
</style>
