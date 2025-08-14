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
    component: () => import('@/views/easy/LifecycleHooks/components/LifecycleHooksParent.vue')
  },
  {
    path: '/nextDomUpdateFlush',
    name: routeNames.nextDomUpdateFlush,
    component: () => import('@/views/easy/NextDomUpdateFlush/components/NextDomUpdateFlush.vue')
  },
  {
    path: '/dynamicCss',
    name: routeNames.dynamicCss,
    component: () => import('@/views/easy/DynamicCSS/components/DynamicCSS.vue')
  },
  {
    path: '/refFamily',
    name: routeNames.refFamily,
    component: () => import('@/views/easy/refFamily/components/refFamily.vue')
  },
  {
    path: '/preventEventPropagation',
    name: routeNames.preventEventPropagation,
    component: () => import('@/views/easy/preventEventPropagation/component/preventEventPropagation.vue')
  },
  {
    path: '/losingReactivity',
    name: routeNames.losingReactivity,
    component: () => import('@/views/easy/losingReactivity/components/LosingReactivity.vue')
  },
  {
    path: '/propValidation',
    name: routeNames.propValidation,
    component: () => import('@/views/easy/propValidation/propValidation/propValidation.vue')
  },
  {
    path: '/writibleComputed',
    name: routeNames.writibleComputed,
    component: () => import('@/views/easy/writibleComputed/components/writibleComputed.vue')
  },
  {
    path: '/watchFamily',
    name: routeNames.watchFamily,
    component: () => import('@/views/easy/watchFamily/components/WatchFamily.vue')
  },
  {
    path: '/shallowRef',
    name: routeNames.shallowRef,
    component: () => import('@/views/easy/shallowRef/components/shallowRef.vue')
  },
  {
    path: '/di',
    name: routeNames.di,
    component: () => import('@/views/easy/DI/components/DIParent.vue')
  },
  {
    path: '/myDirective',
    name: routeNames.myDirective,
    component: () => import('@/views/medium/directive/components/myDirective.vue')
  }
]

export {
  routes
}
