import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../node_modules/.pnpm/nuxt@3.9.1_rollup@4.10.0_vite@4.5.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}