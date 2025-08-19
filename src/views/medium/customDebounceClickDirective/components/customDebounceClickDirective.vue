<script setup lang='ts'>

/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
 */

const VDebounceClick = {
  mounted (el: HTMLElement, binding: any) {
    let timeout: ReturnType<typeof setTimeout> | null = null
    const delay = parseInt(binding.arg)
    const handler = binding.value

    el.addEventListener('click', () => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        handler()
        timeout = null
      }, delay)
    })
  }
}

function onClick () {
  console.log('Only triggered once when clicked many times quickly')
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>

