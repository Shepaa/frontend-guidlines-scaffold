<script setup lang="ts">
import { ref, provide } from 'vue'
import DI from './DI.vue'

const count = ref(5)

provide('count', count)
</script>

<template>
  <DI />
</template>
