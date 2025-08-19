<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment () {
  count.value++

  nextTick(() => {
    console.log(+document.getElementById('counter').textContent === 1)
  })
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>

