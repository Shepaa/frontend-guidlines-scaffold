/// <reference types="vite/client" />

// Provide TypeScript declaration for Vue Single File Components (*.vue)
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  type TEmpty = Record<string, never>
  const component: DefineComponent<TEmpty, TEmpty, any>
  export default component
}
