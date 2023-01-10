<script setup lang="ts">
const colemakDH = [
  [
    { key: 'q', class: '' },
    { key: 'w', class: '' },
    { key: 'f', class: '' },
    { key: 'p', class: '' },
    { key: 'b', class: 'logo' },
    { key: 'a', class: 'logo' },
    { key: 'r', class: 'logo' },
    { key: 's', class: 'logo' },
    { key: 't', class: '' },
    { key: 'g', class: '' },
    { key: 'z', class: '' },
    { key: 'x', class: '' },
    { key: 'c', class: '' },
    { key: 'd', class: '' },
    { key: 'v', class: '' },
  ],
  [
    { key: 'j', class: '' },
    { key: 'l', class: '' },
    { key: 'u', class: '' },
    { key: 'y', class: '' },
    { key: ';', class: 'sym' },
    { key: 'm', class: '' },
    { key: 'n', class: 'logo' },
    { key: 'e', class: 'logo' },
    { key: 'i', class: 'logo' },
    { key: 'o', class: 'logo' },
    { key: 'k', class: '' },
    { key: 'h', class: '' },
    { key: ',', class: 'sym' },
    { key: '.', class: 'sym' },
    { key: '/', class: 'sym' },
  ],
]

const payoff = [
  ['d', 'i', 'g', 'i', 't', 'a', 'l', 'a', 't', 'e', 'l', 'i', 'e', 'r'],
]
</script>
<template>
  <LayoutPageMain>
    <div class="flex flex-col items-center">
      <section class="flex gap-8">
        <ul v-for="split in colemakDH">
          <li v-for="key in split" :data-class="key.class">
            <span>{{ key.key }}</span>
          </li>
        </ul>
      </section>

      <section id="payoff" class="mt-2 flex flex-col">
        <ul v-for="payoffRows in payoff">
          <li v-for="letter in payoffRows">
            <span>{{ letter }}</span>
          </li>
        </ul>
      </section>
    </div>
  </LayoutPageMain>
</template>
<style scoped>
ul {
  @apply grid grid-cols-5 gap-0.5;
}
#payoff ul {
  @apply grid-cols-7;
}

li {
  @apply relative
  flex items-center justify-center
  h-7 w-7
  border border-navy rounded-sm
  bg-peach;

  font-family: 'Major Mono Display';
  box-shadow: 0.175rem 0.175rem slateblue;
}
li::after {
  content: '';
  @apply absolute 
  h-5.5 w-5.5
  border border-coral border-opacity-30
  rounded-full
  shadow-md;
}
li[data-class='sym'] {
  @apply bg-coral bg-opacity-40;
}
li[data-class='logo'] {
  box-shadow: 0.075rem 0.075rem slateblue;
}

ul:nth-child(1) li:nth-child(9)::before,
ul:nth-child(2) li:nth-child(7)::before {
  content: '';
  @apply absolute bottom-1
  h-0 w-2
  border-b border-coral border-opacity-50
  shadow-sm;
}
</style>
