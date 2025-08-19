<template>
  <ElConfigProvider
    :locale="{
      name: locale,
      el: messages[locale]?.el as TElementPlus['TranslatePair']
    }"
  >
    <div class="app-layout">
      <TabsNav />
      <main class="app-content">
        <router-view />
      </main>
    </div>

    <Modals />

    <ElButton v-if="isHome" @click="openModal('TestModal')">Open modal</ElButton>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import TabsNav from '@/components/TabsNav.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routeNames } from '@/router/route-names'

const { messages, locale } = useI18n()
const { openModal } = useModals()

const route = useRoute()
const isHome = computed(() => route.name === routeNames.home)
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}
.app-content {
  flex: 1;
  padding: 16px;
}
</style>
