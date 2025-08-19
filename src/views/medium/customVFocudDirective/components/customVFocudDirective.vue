<script setup lang='ts'>
import { ref } from 'vue'

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
 */

const vFocus = {
  updated (el: HTMLInputElement, binding: { value: boolean }) {
    if (binding.value) {
      if (typeof el.focus === 'function') el.focus()
    } else {
      if (typeof el.blur === 'function') el.blur()
    }
  }
}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <input v-focus="state" type="text">
</template>

