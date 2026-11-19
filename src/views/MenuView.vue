<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PhotoTile from '@/components/PhotoTile.vue'
import { menu, menuIsExample, site } from '@/config/site'
</script>

<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Meniu</span>
      <h1 class="title">Ką kepame</h1>
      <p class="lead">
        Nedidelis, bet apgalvotas pasirinkimas. Kiekvieną skonį gaminame daug kartų, todėl žinome,
        kad jis pavyks.
      </p>

      <p v-if="menuIsExample" class="example-note">
        Pavyzdinis meniu: skoniai ir kainos dar bus patikslinti.
      </p>

      <div class="cats">
        <article v-for="(cat, ci) in menu" :id="cat.id" :key="cat.id" class="cat">
          <div v-if="cat.image" class="cat-photo">
            <PhotoTile :src="cat.image" :alt="cat.title" :index="ci" />
          </div>
          <header class="cat-head">
            <h2>{{ cat.title }}</h2>
            <p v-if="cat.note">{{ cat.note }}</p>
          </header>
          <ul class="items">
            <li v-for="item in cat.items" :key="item.name" class="item">
              <div class="item-line">
                <span class="item-name">{{ item.name }}</span>
                <span v-if="item.price" class="leader" aria-hidden="true" />
                <span v-if="item.price" class="item-price">{{ item.price }}</span>
              </div>
              <p v-if="item.desc" class="item-desc">{{ item.desc }}</p>
              <ul v-if="item.tags?.length" class="tags">
                <li v-for="t in item.tags" :key="t">{{ t }}</li>
              </ul>
            </li>
          </ul>
        </article>
      </div>

      <div class="foot">
        <p v-if="site.dietOptions.length">
          Taip pat galime: <strong>{{ site.dietOptions.join(', ').toLowerCase() }}</strong
          >.
        </p>
        <RouterLink to="/parduotuve" class="btn btn-primary">Užsakyti</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  margin-bottom: 1rem;
}
.cats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
  align-items: start;
}
.example-note {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1.5px dashed var(--gold);
  color: var(--gold);
  font-size: 0.88rem;
  font-weight: 700;
}
.cat {
  background: var(--bone-light);
  border-radius: var(--radius);
  padding: 1.8rem;
  scroll-margin-top: calc(var(--header-h) + 16px);
}
/* nuotrauka per visą kortelės plotį viršuje */
.cat-photo {
  margin: -1.8rem -1.8rem 1.4rem;
  aspect-ratio: 16 / 7;
  overflow: hidden;
  border-radius: var(--radius) var(--radius) 0 0;
}
.cat-photo :deep(.tile) {
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
  border-radius: 0;
}
.cat-photo :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cat-head {
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--line);
}
.cat-head h2 {
  font-size: 1.9rem;
}
.cat-head p {
  color: var(--ink-soft);
  font-size: 0.92rem;
  margin-top: 0.25rem;
}
.items {
  list-style: none;
  padding: 0;
}
.item {
  padding: 0.85rem 0;
}
.item + .item {
  border-top: 1px dashed var(--line);
}
/* kavinės meniu stilius: pavadinimas ...... kaina */
.item-line {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}
.item-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  min-width: 0;
}
.leader {
  flex: 1;
  border-bottom: 1.5px dotted var(--gold);
  transform: translateY(-4px);
}
.item-price {
  font-weight: 700;
  color: var(--berry);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.item-desc {
  color: var(--ink-soft);
  font-size: 0.92rem;
}
.tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.4rem;
}
.tags li {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--berry);
  border: 1px solid color-mix(in srgb, var(--berry) 35%, transparent);
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
}
.foot {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--ink-soft);
}
@media (max-width: 820px) {
  .cats {
    grid-template-columns: 1fr;
  }
  .cat {
    padding: 1.4rem;
  }
  .cat-photo {
    margin: -1.4rem -1.4rem 1.2rem;
  }
}
</style>
