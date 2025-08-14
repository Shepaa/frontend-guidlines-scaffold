<script setup lang="ts">
import { reactive } from 'vue'

function useCount () {
  const state = reactive({
    count: 0
  })

  function update (value: number) {
    state.count = value
  }

  return {
    ...toRefs(state),
    update
  }
}

const { count, update } = useCount()

</script>

<template>
  <div>
    <p>
      <button @click="update(count-1)">-</button>
      {{ count }}
      <button @click="update(count+1)">+</button>
    </p>
  </div>
</template>

