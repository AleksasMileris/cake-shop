<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

/**
 * Pagrindinio puslapio „turinys“ kaip PDF dokumento kontūras:
 * kompiuteryje – prilipęs skyrių sąrašas kairėje,
 * telefone – apatinė juosta su dabartiniu skyriumi ir mygtuku „Užsakyti“.
 */
const props = defineProps<{ chapters: { id: string; label: string }[] }>()

const active = ref(props.chapters[0]?.id ?? '')
const progress = ref(0)
const open = ref(false)

const activeIndex = computed(() => props.chapters.findIndex((c) => c.id === active.value))
const activeLabel = computed(() => props.chapters[activeIndex.value]?.label ?? '')

let observer: IntersectionObserver | undefined

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
}

function go(id: string) {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id
    },
    { rootMargin: '-35% 0px -60% 0px' },
  )
  for (const c of props.chapters) {
    const el = document.getElementById(c.id)
    if (el) observer.observe(el)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <!-- Kompiuteris: šoninis kontūras -->
  <aside class="rail" aria-label="Puslapio turinys">
    <p class="rail-title">Turinys</p>
    <ol class="rail-list" :style="{ '--p': progress }">
      <li v-for="(c, i) in chapters" :key="c.id">
        <a
          :href="`#${c.id}`"
          :class="{ on: c.id === active, past: i < activeIndex }"
          :aria-current="c.id === active ? 'true' : undefined"
          @click.prevent="go(c.id)"
        >
          <span class="mark" aria-hidden="true" />
          {{ c.label }}
        </a>
      </li>
    </ol>
  </aside>

  <!-- Telefonas: apatinė juosta -->
  <div class="dock">
    <div v-if="open" class="dock-menu" role="menu">
      <a
        v-for="c in chapters"
        :key="c.id"
        :href="`#${c.id}`"
        role="menuitem"
        :class="{ on: c.id === active }"
        @click.prevent="go(c.id)"
        >{{ c.label }}</a
      >
    </div>
    <div class="dock-bar">
      <button class="dock-current" :aria-expanded="open" @click="open = !open">
        <span class="dock-count">{{ activeIndex + 1 }}/{{ chapters.length }}</span>
        {{ activeLabel }}
        <span class="caret" :class="{ up: open }" aria-hidden="true" />
      </button>
      <RouterLink to="/parduotuve" class="btn btn-primary dock-cta">Užsakyti</RouterLink>
    </div>
    <div class="dock-progress" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

<style scoped>
/* ---------- Šoninis kontūras ---------- */
.rail {
  position: fixed;
  top: calc(var(--header-h) + 48px);
  left: max(24px, calc((100vw - var(--container)) / 2 - 180px));
  width: 168px;
  z-index: 40;
  display: none;
}
.rail-title {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}
.rail-list {
  list-style: none;
  padding: 0;
  position: relative;
  border-left: 1px solid var(--line);
}
/* skaitymo progreso linija */
.rail-list::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 0;
  width: 1px;
  height: calc(var(--p) * 100%);
  background: var(--berry);
  transition: height 0.15s linear;
}
.rail-list a {
  position: relative;
  display: block;
  padding: 0.42rem 0 0.42rem 1rem;
  font-size: 0.88rem;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.2s;
}
.rail-list a:hover {
  color: var(--ink);
}
.mark {
  position: absolute;
  left: -4px;
  top: 50%;
  width: 7px;
  height: 7px;
  margin-top: -3.5px;
  background: var(--bone);
  border: 1px solid var(--line);
  transform: rotate(45deg);
  transition:
    background 0.2s,
    border-color 0.2s;
}
.rail-list a.past .mark {
  border-color: var(--berry);
}
.rail-list a.on {
  color: var(--berry);
  font-weight: 700;
}
.rail-list a.on .mark {
  background: var(--berry);
  border-color: var(--berry);
}
.rail-cta {
  margin-top: 1.75rem;
  width: 100%;
  padding: 0.75rem 0.5rem;
  font-size: 0.72rem;
}

/* ---------- Apatinė juosta telefone ---------- */
.dock {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  background: var(--bone-light);
  border-top: 1px solid var(--line);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
.dock-bar {
  display: flex;
  align-items: stretch;
  height: 56px;
}
.dock-current {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 var(--gutter);
  background: none;
  border: 0;
  font: inherit;
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--ink);
  text-align: left;
  cursor: pointer;
}
.dock-count {
  font-size: 0.72rem;
  color: var(--gold);
  letter-spacing: 0.1em;
  font-variant-numeric: tabular-nums;
}
.caret {
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-135deg) translate(-2px, -2px);
  margin-left: 0.2rem;
  transition: transform 0.2s;
}
.caret.up {
  transform: rotate(45deg);
}
.dock-cta {
  padding: 0 1.4rem;
}
.dock-menu {
  display: grid;
  border-bottom: 1px solid var(--line);
}
.dock-menu a {
  padding: 0.85rem var(--gutter);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
  font-weight: 600;
}
.dock-menu a:last-child {
  border-bottom: 0;
}
.dock-menu a.on {
  color: var(--berry);
}
.dock-progress {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--berry);
  transform-origin: left;
}

@media (min-width: 1100px) {
  .rail {
    display: block;
  }
  .dock {
    display: none;
  }
}
</style>
