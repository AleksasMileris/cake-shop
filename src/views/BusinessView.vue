<script setup lang="ts">
import { site, business } from '@/config/site'

const c = site.contact
</script>

<template>
  <section class="section intro">
    <div class="container intro-grid">
      <div>
        <span class="eyebrow">Įmonėms</span>
        <h1 class="title">{{ business.title }}</h1>
      </div>
      <p class="lead">{{ business.intro }}</p>
    </div>
  </section>

  <section class="section services">
    <div class="container">
      <ul class="service-list">
        <li v-for="s in business.services" :key="s.title">
          <h2>{{ s.title }}</h2>
          <p>{{ s.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="section ask">
    <div class="container ask-grid">
      <div>
        <h2 class="section-title">Gaukite pasiūlymą</h2>
        <p class="lead">
          Parašykite renginio datą, svečių skaičių ir ko norėtumėte. Atsakysiu su pasiūlymu ir
          kaina.
        </p>
        <p v-if="business.invoices" class="small">{{ business.invoices }}</p>
      </div>
      <div class="ask-actions">
        <a
          v-if="c.email"
          class="btn btn-primary"
          :href="`mailto:${c.email}?subject=${encodeURIComponent('Užklausa įmonei')}`"
          >Rašyti el. paštu</a
        >
        <a
          v-if="c.instagram"
          class="btn"
          :class="c.email ? 'btn-ghost' : 'btn-primary'"
          :href="c.instagram"
          target="_blank"
          rel="noopener"
          >Rašyti Instagram</a
        >
        <a v-if="c.phone" class="btn btn-ghost" :href="`tel:${c.phone.replace(/\s/g, '')}`">{{
          c.phone
        }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding-bottom: clamp(32px, 5vw, 56px);
}
.intro-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(24px, 6vw, 80px);
  align-items: end;
}
.title {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
}
.services {
  padding-top: 0;
}
.service-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.service-list li {
  padding: 1.8rem;
  background: var(--bone-light);
  border-radius: var(--radius);
}
.service-list h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}
.service-list p {
  color: var(--ink-soft);
  max-width: 44ch;
}
.ask {
  background: var(--bone-light);
  border-top: 1px solid var(--line);
}
.ask-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}
.small {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--gold);
  font-weight: 700;
}
.ask-actions {
  display: grid;
  gap: 0.75rem;
}
@media (max-width: 820px) {
  .intro-grid,
  .ask-grid,
  .service-list {
    grid-template-columns: 1fr;
  }
  .service-list li {
    padding: 1.4rem;
  }
}
</style>
