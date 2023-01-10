<script setup lang="ts">
import chroma from 'chroma-js'

import { colors as ideoColors } from '~/data/ideou-colors'
</script>

<template>
  <ul class="main">
    <li
      v-for="color in ideoColors"
      :style="`background-color: ${color}`"
      class="pt-4"
      :class="chroma(color).luminance() < 0.4 ? 'text-white' : ''"
    >
      <ColorsCopyValue :color-hex="color" />

      <ul class="text-xs pt-2">
        <li class="lch" v-for="value in chroma(color).lch()">
          <p class="pl-2">{{ value.toFixed(1) }}</p>
        </li>
        <li
          class="w-20 h-20 mt-4 pt-2 pl-2"
          :style="`background-color: ${chroma(color).brighten(0.5).hex()}`"
        >
          brighten <br />
          + 0.5
        </li>
        <li
          class="w-20 h-20 pt-2 pl-2"
          :style="`background-color: ${chroma(color).darken(0.5).hex()}`"
        >
          darker <br />
          + 0.5
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.main {
  font-family: 'Space Mono';
  @apply h-screen grid grid-cols-4;
}

li.lch:nth-of-type(1) p::before {
  content: 'L: ';
}
li.lch:nth-of-type(2) p::before {
  content: 'C: ';
}
li.lch:nth-of-type(3) p::before {
  content: 'H: ';
}
</style>
