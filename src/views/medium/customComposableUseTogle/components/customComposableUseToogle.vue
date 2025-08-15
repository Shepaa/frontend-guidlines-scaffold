<script setup lang='ts'>

function useToggle (initialValue = false) {
  const state = ref(initialValue)

  const toggle = () => {
    state.value = !state.value
  }

  return [state, toggle] as const
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>

