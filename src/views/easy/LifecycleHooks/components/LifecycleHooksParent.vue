<template>
  <div>
    <h2>Parent Component</h2>
    <p>Parent sees count: {{ count }}</p>
    <button @click="toggleChild">
      {{ showChild ? 'Hide' : 'Show' }} Child
    </button>

    <LifecycleHooksChild v-if="showChild" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import LifecycleHooksChild from '@/views/easy/LifecycleHooks/components/LifecycleHooksChild.vue'

const count = ref(0)
const showChild = ref(true)
const timer = ref<number | null>(null)

provide('count', count)
provide('timer', timer)

function toggleChild () {
  showChild.value = !showChild.value
}
</script>

