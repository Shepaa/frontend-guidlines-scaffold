<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

function until (initial) {
  function toBe (expectedValue) {
    return new Promise((resolve) => {
      const stop = watch(initial, (val) => {
        if (val === expectedValue) {
          stop()
          resolve(val)
        }
      })
    })
  }

  return {
    toBe
  }
}

async function increase () {
  count.value = 0
  const interval = setInterval(() => {
    count.value++
  }, 1000)

  await until(count).toBe(3)
  clearInterval(interval)

  console.log(count.value === 3)
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increase">Start Counting</button>
  </div>
</template>
