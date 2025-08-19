<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(1)
const plusOne = computed({ get: () => count.value + 1, set: (newValue: number) => {count.value = newValue - 1} })

plusOne.value++

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>

