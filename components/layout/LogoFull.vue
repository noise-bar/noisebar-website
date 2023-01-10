<template>
  <figure class="flex items-start gap-2">
    <img
      id="header-logo"
      src="~/assets/graphics/logos/noisebar_tiny_ps.svg"
      alt="Noise Bar pictogram"
      class="filter drop-shadow h-14 -mt-2"
    />
    <figcaption>
      <div class="border border-navy">
        <h1>Noise <span>bAR</span></h1>
        <h2>diGitAl AtelieR</h2>
      </div>
      <div id="logo-info" class="flex justify-between">
        <p>{{ new Date().getFullYear() }}</p>
        <p>Milan</p>
      </div>
    </figcaption>
  </figure>
</template>

<style scoped>
figcaption {
  @apply;
}

h1 {
  font-family: 'Blackout';
  @apply bg-navy text-peach px-1
  text-shadow-sm;
}
span,
h2 {
  font-family: 'Major Mono Display';
}

h2 {
  @apply text-xs px-1
  text-navy;
}

#logo-info {
  font-family: 'Space Mono';
  @apply uppercase text-[0.5rem] text-navy pt-0.5;
}
</style>
