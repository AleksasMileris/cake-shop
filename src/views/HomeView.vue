<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PhotoTile from '@/components/PhotoTile.vue'
import { site, offers, gallery, heroImage } from '@/config/site'

const heroFailed = ref(false)
const c = site.contact
const o = site.ordering

const steps = [
  {
    title: 'Parašykite',
    text: 'Nurodykite datą, progą, svečių skaičių ir norimą tortą ar desertą.',
  },
  {
    title: 'Suderiname',
    text: 'Patvirtiname skonį, dydį, dizainą ir kainą.',
  },
  {
    title: 'Atsiimate',
    text: `${o.pickup}. ${o.delivery}.`,
  },
]
</script>

<template>
  <div class="home">
    <!-- PRADŽIA -->
    <section id="pradzia" class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">{{ site.tagline }} · {{ site.city }}</span>
          <h1 class="hero-title">{{ site.hero.title }}</h1>
          <p class="lead">{{ site.hero.subtitle }}</p>
          <div class="hero-actions">
            <RouterLink to="/parduotuve" class="btn btn-primary">Užsakyti tortą</RouterLink>
            <a href="#galerija" class="btn btn-ghost">Peržiūrėti darbus</a>
          </div>
        </div>
        <figure class="hero-visual">
          <div class="hero-frame">
            <img v-if="!heroFailed" :src="heroImage" alt="" @error="heroFailed = true" />
            <PhotoTile
              v-else
              :src="gallery[0]?.src ?? ''"
              :alt="gallery[0]?.alt ?? ''"
              :index="0"
            />
          </div>
          <figcaption class="label">Rankų<br />darbas</figcaption>
        </figure>
      </div>
    </section>

    <!-- APIE MUS -->
    <section id="apie" class="section about">
      <div class="container about-grid">
        <div>
          <span class="eyebrow">Apie mus</span>
          <h2 class="section-title">{{ site.about.title }}</h2>
        </div>
        <div class="about-text">
          <p v-for="(p, i) in site.about.paragraphs" :key="i">{{ p }}</p>
        </div>
      </div>
    </section>

    <!-- KĄ KEPAME -->
    <section id="ka-kepame" class="section">
      <div class="container">
        <span class="eyebrow">Ką kepame</span>
        <h2 class="section-title">Saldumynai kiekvienai progai</h2>
        <div class="offer-grid">
          <article v-for="item in offers" :key="item.title" class="offer">
            <span v-if="item.icon" class="offer-icon" aria-hidden="true">{{ item.icon }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <div v-if="site.dietOptions.length" class="diet">
          <span class="diet-label">Taip pat galime:</span>
          <ul>
            <li v-for="d in site.dietOptions" :key="d">{{ d }}</li>
          </ul>
        </div>
        <RouterLink to="/meniu" class="menu-link">Visas meniu su skoniais →</RouterLink>
      </div>
    </section>

    <!-- DARBAI -->
    <section id="galerija" class="section works">
      <div class="container">
        <div class="gallery-head">
          <div>
            <span class="eyebrow">Darbai</span>
            <h2 class="section-title">Mūsų tortai</h2>
          </div>
          <a v-if="c.instagram" :href="c.instagram" target="_blank" rel="noopener" class="more-link"
            >Daugiau Instagram {{ c.instagramHandle }} →</a
          >
        </div>
        <div class="gallery-grid">
          <PhotoTile v-for="(g, i) in gallery" :key="g.src" :src="g.src" :alt="g.alt" :index="i" />
        </div>
      </div>
    </section>

    <!-- KAIP UŽSISAKYTI -->
    <section id="uzsakymas" class="section steps-section">
      <div class="container">
        <span class="eyebrow">Kaip užsisakyti</span>
        <h2 class="section-title">Trys paprasti žingsniai</h2>
        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.title">
            <span class="step-num">{{ i + 1 }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </li>
        </ol>
        <dl class="terms">
          <div>
            <dt>Terminas</dt>
            <dd>
              Užsakykite bent prieš {{ o.leadDays }} d. Skubu? Parašykite tiesiogiai, pasistengsime.
            </dd>
          </div>
          <div>
            <dt>Avansas</dt>
            <dd>{{ o.deposit }}</dd>
          </div>
          <div>
            <dt>Įmonėms</dt>
            <dd>
              Užsakote biurui ar klientams?
              <RouterLink to="/imonems">Žr. pasiūlymą įmonėms</RouterLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- KONTAKTAI -->
    <section id="kontaktai" class="section contact">
      <div class="container contact-grid">
        <div>
          <span class="eyebrow">Kontaktai</span>
          <h2 class="section-title">Pasikalbėkime apie jūsų šventę</h2>
          <p class="lead">
            Greičiausiai atsakome per Instagram žinutes. Parašykite datą, progą ir svečių skaičių.
          </p>
          <a
            v-if="c.instagram"
            :href="c.instagram"
            target="_blank"
            rel="noopener"
            class="btn btn-primary contact-cta"
            >Rašyti Instagram</a
          >
        </div>
        <dl class="contact-list">
          <div v-if="c.phone">
            <dt>Telefonas</dt>
            <dd>
              <a :href="`tel:${c.phone.replace(/\s/g, '')}`">{{ c.phone }}</a>
            </dd>
          </div>
          <div v-if="c.email">
            <dt>El. paštas</dt>
            <dd>
              <a :href="`mailto:${c.email}`">{{ c.email }}</a>
            </dd>
          </div>
          <div v-if="c.instagram">
            <dt>Instagram</dt>
            <dd>
              <a :href="c.instagram" target="_blank" rel="noopener">{{ c.instagramHandle }}</a>
            </dd>
          </div>
          <div v-if="c.facebook">
            <dt>Facebook</dt>
            <dd>
              <a :href="c.facebook" target="_blank" rel="noopener">Facebook puslapis</a>
            </dd>
          </div>
          <div v-if="c.address">
            <dt>Atsiėmimas</dt>
            <dd>{{ c.address }}</dd>
          </div>
          <div v-if="c.hours">
            <dt>Darbo laikas</dt>
            <dd>{{ c.hours }}</dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* PRADŽIA */
.hero {
  padding: clamp(40px, 7vw, 96px) 0 clamp(56px, 8vw, 104px);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
}
.hero-title {
  font-size: clamp(2.6rem, 6.5vw, 4.6rem);
  margin-bottom: 1.25rem;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
.hero-visual {
  position: relative;
}
/* arkos formos nuotrauka, kaip pirmoje versijoje */
.hero-frame {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 200px 200px var(--radius) var(--radius);
  background: var(--bone-deep);
  box-shadow: 0 10px 30px -12px rgba(59, 42, 36, 0.18);
}
.hero-frame img,
.hero-frame :deep(.tile) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: auto;
  border-radius: 0;
}
.label {
  position: absolute;
  left: -18px;
  bottom: 36px;
  width: 104px;
  height: 104px;
  display: grid;
  place-items: center;
  text-align: center;
  border-radius: 50%;
  background: var(--berry);
  color: var(--white);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.1;
  box-shadow: 0 10px 30px -12px rgba(59, 42, 36, 0.3);
  transform: rotate(-8deg);
}

/* APIE MUS */
.about {
  background: var(--bone-light);
}
.about-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(24px, 6vw, 80px);
  align-items: end;
}
.about-text p {
  color: var(--ink-soft);
  margin-bottom: 1.1rem;
  font-size: 1.1rem;
  max-width: 58ch;
}
.about-text p:last-child {
  margin-bottom: 0;
}

/* KĄ KEPAME */
.offer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
}
.offer {
  background: var(--bone-light);
  border-radius: var(--radius);
  padding: 1.6rem 1.4rem;
}
.offer-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--blush-soft);
  font-size: 1.5rem;
  margin-bottom: 1.1rem;
}
.offer h3 {
  font-size: 1.55rem;
  margin-bottom: 0.5rem;
}
.offer p {
  color: var(--ink-soft);
  font-size: 0.95rem;
}
.menu-link {
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--berry);
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
.diet {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.diet-label {
  font-size: 0.9rem;
  color: var(--ink-soft);
}
.diet ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.diet li {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--berry);
  border: 1px solid color-mix(in srgb, var(--berry) 35%, transparent);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
}

/* DARBAI */
.works {
  background: var(--bone-deep);
}
.gallery-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.gallery-head .section-title {
  margin-bottom: 0;
}
.more-link {
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
.more-link:hover {
  color: var(--berry);
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

/* KAIP UŽSISAKYTI – rausvas fonas kaip pirmoje versijoje */
.steps-section {
  background: var(--blush-soft);
}
.steps-section .terms > div {
  border-color: color-mix(in srgb, var(--berry) 18%, transparent);
}
.steps {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
}
.steps li {
  background: var(--bone-light);
  border-radius: var(--radius);
  padding: 1.6rem 1.5rem;
}
.step-num {
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1;
  color: var(--berry);
  font-style: italic;
}
.steps h3 {
  font-size: 1.6rem;
  margin: 0.5rem 0;
}
.steps p {
  color: var(--ink-soft);
  font-size: 0.95rem;
}
.terms {
  margin-top: 2rem;
  display: grid;
  gap: 0;
  border-top: 1px solid var(--line);
}
.terms > div {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--line);
}
.terms dd {
  color: var(--ink-soft);
  font-weight: 400;
  font-size: 0.98rem;
}
.terms a {
  color: var(--berry);
  font-weight: 700;
}

/* KONTAKTAI */
.contact {
  background: var(--bone-light);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}
.contact-cta {
  margin-top: 2rem;
}
.contact-list {
  background: var(--bone);
  border-radius: var(--radius);
  padding: 0.5rem 1.5rem;
}
.contact-list > div {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--line);
}
.contact-list > div:last-child {
  border-bottom: 0;
}
dt {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  padding-top: 0.3rem;
}
dd {
  margin: 0;
  font-weight: 600;
  font-size: 1.05rem;
  min-width: 0;
  overflow-wrap: anywhere;
}
dd a {
  text-decoration: none;
}
dd a:hover {
  color: var(--berry);
}

/* EKRANŲ DYDŽIAI */
@media (max-width: 960px) {
  .offer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 820px) {
  .hero-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .hero-visual {
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
  }
  .label {
    left: 0;
  }
  .steps {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .offer-grid {
    grid-template-columns: 1fr;
  }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .terms > div,
  .contact-list > div {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}
</style>
