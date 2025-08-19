<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  list: { name: string }[]
  activeIndex: number
}>()

const emit = defineEmits<(e: 'toggle', index: number) => void>()

function handleClick (index: number) {
  emit('toggle', index)
}
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in props.list"
      :key="index"
      :style="{ color: index === props.activeIndex ? 'red' : 'black', cursor: 'pointer' }"
      @click="handleClick(index)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
