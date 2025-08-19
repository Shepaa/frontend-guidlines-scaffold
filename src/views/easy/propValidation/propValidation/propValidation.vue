<script setup lang="ts">
type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'

const props = withDefaults(defineProps<{
  type?: ButtonType
}>(), {
  type: 'default'
})
</script>

<template>
  <button>{{ props.type }}</button>
</template>
