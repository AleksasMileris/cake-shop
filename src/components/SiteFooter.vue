<script setup lang="ts">
import { site } from '@/config/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <div>
        <p class="name">{{ site.name }}</p>
        <p class="muted">{{ site.tagline }} · {{ site.city }}</p>
      </div>
      <div class="links">
        <a
          v-if="site.contact.instagram"
          :href="site.contact.instagram"
          target="_blank"
          rel="noopener"
          >Instagram</a
        >
        <a v-if="site.contact.facebook" :href="site.contact.facebook" target="_blank" rel="noopener"
          >Facebook</a
        >
        <a v-if="site.contact.email" :href="`mailto:${site.contact.email}`">{{
          site.contact.email
        }}</a>
      </div>
      <p class="muted copy">© {{ year }} {{ site.name }}. Visos teisės saugomos.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--bone);
  padding: 48px 0 32px;
}
.inner {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr auto;
  align-items: center;
}
.name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}
.muted {
  color: rgba(251, 246, 240, 0.65);
  font-size: 0.9rem;
}
.links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.links a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
}
.links a:hover {
  color: var(--blush);
}
.copy {
  grid-column: 1 / -1;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(251, 246, 240, 0.15);
  font-size: 0.8rem;
}
@media (max-width: 640px) {
  .inner {
    grid-template-columns: 1fr;
  }
}
</style>
