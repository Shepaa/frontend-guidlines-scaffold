<script setup lang="ts">
import { useLocalStorage } from '../composable/useLocalStorage'

const name = useLocalStorage('ls-test-name', '')
const count = useLocalStorage('ls-test-count', 0)

function increment () {
  count.value = (Number(count.value) || 0) + 1
}

function reset () {
  name.value = ''
  count.value = 0
}
</script>

<template>
  <div>
    <input v-model="name" type="text" />
    <p>{{ name }}</p>

    <button @click="increment">+1</button>
    <button @click="reset">Reset</button>

    <p>{{ count }}</p>
  </div>
</template>
