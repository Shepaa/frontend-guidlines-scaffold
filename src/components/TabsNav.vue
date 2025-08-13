<template>
  <nav class="tabs-nav">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.name"
      class="tab"
      :to="{ name: tab.name }"
    >
      {{ tab.label }}
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { routeNames } from '@/router/route-names'

const tabs = [
  { name: routeNames.home, label: 'Home' },
  { name: routeNames.lifecycleHooks, label: 'Lifecycle Hooks' },
  { name: routeNames.nextDomUpdateFlush, label: 'next Dom Update Flush' },
  { name: routeNames.dynamicCss, label: 'dynamicCss' },
  { name: routeNames.refFamily, label: 'refFamily' },
  { name: routeNames.preventEventPropagation, label: 'preventEventPropagation' },
  { name: routeNames.losingReactivity, label: 'losingReactivity' },
  { name: routeNames.propValidation, label: 'propValidation' },
  { name: routeNames.writibleComputed, label: 'writibleComputed' }
] as const
</script>

<style scoped>
.tabs-nav {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
}
.tab {
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  color: #374151;
  text-decoration: none;
  background: #f9fafb;
}
.tab:hover {
  background: #fff;
}
.router-link-active.tab {
  background: #fff;
  color: #111827;
  font-weight: 600;
  border-color: #cbd5e1;
}
</style>
