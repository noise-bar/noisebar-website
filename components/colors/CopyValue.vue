<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

interface Props {
  colorHex: string
}
const props = defineProps<Props>()
const source = ref(props.colorHex)

const { copy, copied } = useClipboard({ source })
</script>

<template>
  <div class="relative">
    <p class="pl-2" ref="source" @click="copy(colorHex)">
      {{ colorHex }}
    </p>
    <p v-if="copied" class="absolute right-4 top-0 text-sm border px-1">
      Copied
    </p>
  </div>
</template>
