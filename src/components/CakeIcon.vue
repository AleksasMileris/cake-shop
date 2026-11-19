<script setup lang="ts">
/** Mažas dviejų aukštų tortas su žvake. Be animacijų. */
</script>

<template>
  <svg class="cake" viewBox="0 0 32 32" aria-hidden="true">
    <!-- liepsna ir žvakė -->
    <path
      class="flame"
      d="M16 1.6c1.6 1.9 2.1 3.2 1.4 4.3-.5.8-2.3.8-2.8 0-.7-1.1-.2-2.4 1.4-4.3Z"
    />
    <rect class="candle" x="15.1" y="7" width="1.8" height="5" rx=".6" />
    <!-- viršutinis aukštas su glajumi -->
    <rect class="tier" x="9" y="12" width="14" height="7.5" rx="2" />
    <path
      class="drip"
      d="M9 14c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v.6c-.9 0-1.2 1.6-2 1.6s-.9-1-1.7-1-.9 2.2-1.9 2.2-1-2.2-1.9-2.2-1 1.2-1.9 1.2-1-1.6-1.9-1.6-1.1 1-1.7 1-.6-.9-1-.9V14Z"
    />
    <!-- apatinis aukštas -->
    <rect class="tier" x="5" y="19.5" width="22" height="8.5" rx="2" />
    <path class="berry-dots" d="M9.5 23.6h.01M14 23.6h.01M18 23.6h.01M22.5 23.6h.01" />
    <!-- lėkštė -->
    <path class="plate" d="M3 29.6h26" />
  </svg>
</template>

<style scoped>
.cake {
  width: 26px;
  height: 26px;
  overflow: visible;
}
.tier {
  fill: var(--bone-light);
  stroke: currentColor;
  stroke-width: 1.4;
}
.drip {
  fill: var(--blush);
  stroke: currentColor;
  stroke-width: 1.2;
  stroke-linejoin: round;
}
.candle {
  fill: var(--berry);
}
.flame {
  fill: var(--gold);
  transform-origin: 16px 6px;
}
.berry-dots {
  stroke: var(--berry);
  stroke-width: 2.4;
  stroke-linecap: round;
}
.plate {
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
}
</style>
