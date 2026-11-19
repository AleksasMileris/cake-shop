<script setup lang="ts">
import { site } from '@/config/site'
import CakeIcon from '@/components/CakeIcon.vue'

/*
 * Užsakymo puslapis. Vienintelis „Užsakyti“ mygtukas veda čia.
 * Kai bus tortų konstruktorius, jis atsiras šio puslapio viršuje.
 */
const c = site.contact
const o = site.ordering
</script>

<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Užsakymas</span>
      <h1 class="title">Užsakyti tortą</h1>
      <p class="lead">
        Parašykite mums datą, progą, svečių skaičių ir norimą tortą ar desertą. Atsakysime ir
        suderinsime detales.
      </p>

      <div class="ways">
        <div class="way-main">
          <h2>Greičiausiai: Instagram žinute</h2>
          <a
            v-if="c.instagram"
            :href="c.instagram"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
            >Rašyti {{ c.instagramHandle }}</a
          >
          <div class="others">
            <a v-if="c.phone" :href="`tel:${c.phone.replace(/\s/g, '')}`">{{ c.phone }}</a>
            <a v-if="c.email" :href="`mailto:${c.email}`">{{ c.email }}</a>
          </div>
        </div>

        <dl class="terms">
          <div>
            <dt>Terminas</dt>
            <dd>Bent prieš {{ o.leadDays }} d. Skubu? Parašykite tiesiogiai.</dd>
          </div>
          <div>
            <dt>Atsiėmimas</dt>
            <dd>{{ o.pickup }}. {{ o.delivery }}.</dd>
          </div>
          <div>
            <dt>Avansas</dt>
            <dd>{{ o.deposit }}</dd>
          </div>
        </dl>
      </div>

      <div class="soon">
        <CakeIcon class="soon-cake" />
        <div>
          <h2>Netrukus: susikurkite tortą patys</h2>
          <p>
            Čia atsiras tortų konstruktorius: pasirinksite dydį, biskvitą, kremą ir puošybą,
            matysite kainą iš karto, išsirinksite datą ir sumokėsite avansą.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  margin-bottom: 1rem;
}
.ways {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;
  margin-top: 2.5rem;
}
.way-main {
  background: var(--bone-light);
  border-radius: var(--radius);
  padding: 1.8rem;
  display: grid;
  gap: 1rem;
  align-content: start;
  justify-items: start;
}
.way-main h2 {
  font-size: 1.6rem;
}
.others {
  display: grid;
  gap: 0.25rem;
  font-weight: 600;
}
.others a {
  text-decoration: none;
}
.others a:hover {
  color: var(--berry);
}
.terms {
  background: var(--bone-light);
  border-radius: var(--radius);
  padding: 0.6rem 1.8rem;
}
.terms > div {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--line);
}
.terms > div:last-child {
  border-bottom: 0;
}
dt {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  padding-top: 0.25rem;
}
dd {
  margin: 0;
  color: var(--ink-soft);
}
.soon {
  margin-top: 1rem;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  border: 1.5px dashed var(--blush);
  border-radius: var(--radius);
  padding: 1.5rem 1.8rem;
  color: var(--berry);
}
.soon-cake {
  width: 48px;
  height: 48px;
  flex: none;
}
.soon h2 {
  font-size: 1.5rem;
  color: var(--ink);
}
.soon p {
  color: var(--ink-soft);
  max-width: 62ch;
}
@media (max-width: 820px) {
  .ways {
    grid-template-columns: 1fr;
  }
  .terms > div {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
  .soon {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
