<script setup lang="ts">
import { ref } from 'vue'
import ListComponent from './List-component.vue'

const list = [
  { name: 'John' },
  { name: 'Doe' },
  { name: 'Smith' }
]

const activeIndex = ref(0)

function toggle (index: number) {
  activeIndex.value = index
}
</script>

<template>
  <ListComponent
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>
