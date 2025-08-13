import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from './route-names'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.home,
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/lifecycleHooks',
    name: routeNames.lifecycleHooks,
    component: () => import('@/views/LifecycleHooks/components/LifecycleHooksParent.vue')
  },
  {
    path: '/nextDomUpdateFlush',
    name: routeNames.nextDomUpdateFlush,
    component: () => import('@/views/NextDomUpdateFlush/components/NextDomUpdateFlush.vue')
  },
  {
    path: '/dynamicCss',
    name: routeNames.dynamicCss,
    component: () => import('@/views/DynamicCSS/components/DynamicCSS.vue')
  },
  {
    path: '/refFamily',
    name: routeNames.refFamily,
    component: () => import('@/views/refFamily/components/refFamily.vue')
  },
  {
    path: '/preventEventPropagation',
    name: routeNames.preventEventPropagation,
    component: () => import('@/views/preventEventPropagation/component/preventEventPropagation.vue')
  },
  {
    path: '/losingReactivity',
    name: routeNames.losingReactivity,
    component: () => import('@/views/losingReactivity/components/LosingReactivity.vue')
  },
  {
    path: '/propValidation',
    name: routeNames.propValidation,
    component: () => import('@/views/propValidation/propValidation/propValidation.vue')
  }
]

export {
  routes
}
