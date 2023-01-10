<script setup lang="ts">
import Scrambler from 'scrambling-text'

// call scramble function with the text to be scrambled and handler.
// scrambler.scramble('- Friedrich Nietzsche -', handleScramble)
const scramblingPayoff = ref('')
// define a handler that is called whenever text is scrambled.

// await new Promise((r) => setTimeout(r, 2000))
const scrambler = new Scrambler()
// call scramble with the option to set the characters to use when scrambled.

const handleScramble = computed((text: string) => {
  scramblingPayoff.value = text
})
scrambler.scramble('diGitAl AtelieR', handleScramble, {
  characters: [
    '*',
    '#',
    'D',
    'I',
    'G',
    'T',
    'A',
    'L',
    'E',
    'R',
    '$',
    '@',
    '8',
    '5',
    '+',
    '_',
    '%',
  ],
})
// Scrambler provides several characters.
// console.log(Scrambler.CHARACTERS.DEFAULT)
// console.log(Scrambler.CHARACTERS.ALPHABET)
</script>

<template>
  <h2>{{ scramblingPayoff }}</h2>
</template>

<style scoped>
h2 {
  @apply text-xs px-1;
}

 {
  @apply;
}
</style>
