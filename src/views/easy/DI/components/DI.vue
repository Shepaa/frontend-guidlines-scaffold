<script setup lang="ts">
import { inject, type Ref } from 'vue'

const count = inject<Ref<number>>('count')!
</script>

<template>
  {{ count }}
</template>
