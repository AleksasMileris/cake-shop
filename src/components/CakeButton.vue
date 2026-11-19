<script setup lang="ts">
import { useId } from 'vue'
import { RouterLink } from 'vue-router'

/*
 * Užsakymo mygtukas, nupieštas kaip dviejų aukštų tortas su žvake.
 * Užrašas yra ant apatinio aukšto. Jokių animacijų, tik tamsesnė spalva užvedus pele.
 */
withDefaults(defineProps<{ to?: string; label?: string }>(), {
  to: '/parduotuve',
  label: 'Užsakyti',
})

const id = useId()

/** Glajaus juosta su lašais: viršus tiesus, apačia banguota. */
function icing(x0: number, x1: number, yTop: number, yBase: number, n: number) {
  const w = (x1 - x0) / n
  let d = `M${x0} ${yTop} H${x1} V${yBase}`
  for (let i = 0; i < n; i++) {
    const x = x1 - i * w
    const drop = i % 2 === 0 ? 4.5 : 2.2
    d += ` Q${x - w / 2} ${yBase + drop} ${x - w} ${yBase}`
  }
  return d + ' Z'
}

const topIcing = icing(26, 106, 13, 18, 12)
const bottomIcing = icing(8, 124, 27, 32, 14)
</script>

<template>
  <RouterLink :to="to" class="cake-btn" :aria-label="`${label} tortą`">
    <svg viewBox="0 0 132 56" aria-hidden="true">
      <defs>
        <clipPath :id="`${id}-top`"><rect x="26" y="13" width="80" height="15" rx="6" /></clipPath>
        <clipPath :id="`${id}-bot`"><rect x="8" y="27" width="116" height="24" rx="9" /></clipPath>
      </defs>

      <!-- žvakė -->
      <path
        class="flame"
        d="M66 .8c2.1 2.5 2.8 4.1 1.9 5.6-.7 1-3 1-3.8 0-.9-1.5-.2-3.1 1.9-5.6Z"
      />
      <rect class="candle" x="64.8" y="6.6" width="2.4" height="6.6" rx=".8" />

      <!-- viršutinis aukštas -->
      <rect class="tier-top" x="26" y="13" width="80" height="15" rx="6" />
      <path class="icing" :d="topIcing" :clip-path="`url(#${id}-top)`" />
      <rect class="outline" x="26" y="13" width="80" height="15" rx="6" />

      <!-- apatinis aukštas su užrašu -->
      <rect class="tier-bottom" x="8" y="27" width="116" height="24" rx="9" />
      <path class="icing" :d="bottomIcing" :clip-path="`url(#${id}-bot)`" />
      <text x="66" y="45.2" class="label">{{ label.toUpperCase() }}</text>

      <!-- lėkštė -->
      <path class="plate" d="M3 53.8h126" />
    </svg>
  </RouterLink>
</template>

<style scoped>
.cake-btn {
  display: inline-block;
  width: 132px;
  line-height: 0;
  border-radius: 12px;
}
svg {
  width: 100%;
  height: auto;
  overflow: visible;
}
.flame {
  fill: var(--gold);
}
.candle {
  fill: var(--berry);
}
.tier-top {
  fill: var(--bone-light);
}
.outline {
  fill: none;
  stroke: var(--berry);
  stroke-width: 1.3;
}
.tier-bottom {
  fill: var(--berry);
  transition: fill 0.2s;
}
.icing {
  fill: var(--blush);
}
.label {
  fill: var(--white);
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-anchor: middle;
}
.plate {
  stroke: var(--line);
  stroke-width: 2;
  stroke-linecap: round;
}
.cake-btn:hover .tier-bottom,
.cake-btn.router-link-active .tier-bottom {
  fill: var(--berry-dark);
}
@media (max-width: 640px) {
  .cake-btn {
    width: 112px;
  }
}
</style>
