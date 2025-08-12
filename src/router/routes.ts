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
    component: () => import('@/views/LifecycleHooks/components/LifecycleHooks.vue')
  }
]

export {
  routes
}
