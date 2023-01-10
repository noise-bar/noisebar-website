<template>
  <nav class="fixed top-4 right-4">
    <button><span>m</span><span>e</span><span>n</span><span>u</span></button>
  </nav>
</template>

<style scoped>
button {
  @apply grid grid-cols-2
  gap-0.5
  text-navy text-sm;
  font-family: 'Major Mono Display';
}
button span {
  @apply h-5 w-5
  leading-tight
  border border-navy
  rounded-full;
}
</style>
