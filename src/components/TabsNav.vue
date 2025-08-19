<template>
  <nav class="tabs-nav" aria-label="Main navigation">
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
  { name: routeNames.writibleComputed, label: 'writibleComputed' },
  { name: routeNames.watchFamily, label: 'watchFamily' },
  { name: routeNames.shallowRef, label: 'shallowRef' },
  { name: routeNames.di, label: 'di' },
  { name: routeNames.myDirective, label: 'myDirective' },
  { name: routeNames.customComposableUseToogle, label: 'customComposableUseToogle' },
  { name: routeNames.untilFunc, label: 'untilFunc' },
  { name: routeNames.customComposableUseCounter, label: 'customComposableUseCounter' },
  { name: routeNames.useLocalStorage, label: 'useLocalStorage' },
  { name: routeNames.customVFocusDeritive, label: 'customVFocusDeritive' },
  { name: routeNames.customDebounceClickDirective, label: 'customDebounceClickDirective' }
] as const
</script>

<style scoped>
.tabs-nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 12px;
  border-right: 1px solid #e5e7eb;
  background: #f8fafc;
  min-width: 220px;
  max-width: 280px;
  height: 100vh;
  overflow-y: auto;
  position: sticky;
  top: 0;
}
.tab {
  padding: 10px 12px;
  border-radius: 8px;
  color: #374151;
  text-decoration: none;
  background: transparent;
  transition: background-color .15s ease, color .15s ease, box-shadow .15s ease;
}
.tab:hover {
  background: #eef2ff;
}
.router-link-active.tab {
  background: #ffffff;
  color: #111827;
  font-weight: 600;
  box-shadow: inset 3px 0 0 0 #6366f1, 0 1px 2px rgba(0, 0, 0, 0.04);
}
</style>
