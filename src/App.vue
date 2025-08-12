<template>
  <ElConfigProvider
    :locale="{
      name: locale,
      el: messages[locale]?.el as TElementPlus['TranslatePair']
    }"
  >
    <TabsNav />
    <router-view />
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
