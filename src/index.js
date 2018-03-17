import merge from 'lodash.merge'
import VInfiniteGrid from './VueInfiniteGrid.vue'

export function install (Vue, options = {}) {
  if (install.installed) return
  Vue.component('vue-infinite-grid', VInfiniteGrid)
}

export const VueInfiniteGrid = VInfiniteGrid

const plugin = {
  install
}

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
