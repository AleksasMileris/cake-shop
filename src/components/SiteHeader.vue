<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { site } from '@/config/site'
import CakeButton from './CakeButton.vue'

/*
 * Standartinė parduotuvės antraštė:
 * kairėje ☰ Meniu (paprastas išskleidžiamas sąrašas), centre pavadinimas, dešinėje „Užsakyti“.
 * Jokių animacijų.
 */
const open = ref(false)
const route = useRoute()
const root = ref<HTMLElement | null>(null)

const pages = [
  { to: '/', label: 'Pradžia' },
  { to: '/meniu', label: 'Tortai ir skoniai' },
  { to: '/imonems', label: 'Įmonėms' },
  { to: '/#kontaktai', label: 'Kontaktai' },
]

watch(
  () => route.fullPath,
  () => (open.value = false),
)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
function onClickOutside(e: MouseEvent) {
  if (open.value && root.value && !root.value.contains(e.target as Node)) open.value = false
}
onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.addEventListener('click', onClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <header class="header">
    <div class="bar">
      <div ref="root" class="menu">
        <button
          type="button"
          class="menu-btn"
          :aria-expanded="open"
          aria-controls="site-menu"
          @click="open = !open"
        >
          <svg v-if="!open" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 5.5h14M3 10h14M3 14.5h14" />
          </svg>
          <svg v-else viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
          <span class="menu-text">Meniu</span>
        </button>

        <nav v-show="open" id="site-menu" class="dropdown" aria-label="Puslapiai">
          <ul>
            <li v-for="p in pages" :key="p.to">
              <RouterLink
                :to="p.to"
                :class="{ current: !p.to.includes('#') && route.path === p.to }"
                @click="open = false"
                >{{ p.label }}</RouterLink
              >
            </li>
          </ul>
          <a
            v-if="site.contact.instagram"
            :href="site.contact.instagram"
            target="_blank"
            rel="noopener"
            class="dropdown-extra"
            >Instagram {{ site.contact.instagramHandle }}</a
          >
        </nav>
      </div>

      <RouterLink to="/" class="brand">
        <span class="brand-name">{{ site.name }}</span>
        <span class="brand-tag">{{ site.tagline }}</span>
      </RouterLink>

      <div class="right">
        <!-- Vienintelis užsakymo mygtukas: dabar veda į užsakymo būdus, vėliau į konstruktorių -->
        <CakeButton />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bone) 94%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  height: var(--header-h);
  /* per visą ekrano plotį, tik su šoniniais tarpais */
  padding-inline: clamp(16px, 3vw, 40px);
}

/* Kairė: ☰ Meniu */
.menu {
  position: relative;
  justify-self: start;
}
.menu-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.4rem;
  border-radius: 10px;
  background: none;
  border: 0;
  color: var(--ink);
  font: inherit;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
}
.menu-btn:hover {
  color: var(--berry);
}
.menu-btn svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
}
.dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 240px;
  background: var(--bone-light);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: 0 16px 32px -16px rgba(51, 36, 31, 0.3);
  padding: 0.5rem;
}
.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown a {
  display: block;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  color: var(--ink);
}
.dropdown a:hover {
  background: var(--bone);
}
.dropdown a.current {
  color: var(--berry);
}
.dropdown-extra {
  margin-top: 0.35rem;
  border-top: 1px solid var(--line);
  border-radius: 0 0 10px 10px !important;
  font-size: 0.88rem;
  color: var(--ink-soft) !important;
}

/* Centras: pavadinimas */
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  line-height: 1.1;
  min-width: 0;
}
.brand-name {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 600;
  white-space: nowrap;
}
.brand-tag {
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
}

/* Dešinė: Užsakyti */
.right {
  justify-self: end;
}

@media (max-width: 640px) {
  .brand-name {
    font-size: 1.25rem;
  }
  .brand-tag {
    display: none;
  }
  .menu-text {
    display: none;
  }
}
</style>
