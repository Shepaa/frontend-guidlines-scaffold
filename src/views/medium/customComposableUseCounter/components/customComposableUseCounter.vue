<script setup lang="ts">
import { useCounter } from '@/views/medium/customComposableUseCounter/composable/useCounter.ts'

const props = withDefaults(defineProps<{
  initialValue?: number
  min?: number
  max?: number
}>(), {
  initialValue: 0
})

const { count, inc, dec, reset } = useCounter(props.initialValue, { min: props.min, max: props.max })
</script>

<template>
  <div class="p-4 space-y-4">
    <h2 class="text-lg font-semibold">useCounter demo</h2>

    <div class="text-xl">Count: <span class="font-mono">{{ count }}</span></div>

    <div class="flex gap-2">
      <button
        class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        type="button"
        :disabled="props.min !== undefined && count <= props.min"
        @click="dec"
      >
        -1
      </button>

      <button
        class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        type="button"
        :disabled="props.max !== undefined && count >= props.max"
        @click="inc"
      >
        +1
      </button>

      <button
        class="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
        type="button"
        @click="reset"
      >
        Reset
      </button>
    </div>

    <p class="text-sm text-gray-500">
      Bounds — min: {{ props.min ?? '—' }}, max: {{ props.max ?? '—' }}
    </p>
  </div>
</template>
