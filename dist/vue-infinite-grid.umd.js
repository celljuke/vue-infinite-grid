(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash.merge')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash.merge'], factory) :
	(factory((global['vue-infinite-grid'] = {}),global.lodash_merge));
}(this, (function (exports,lodash_merge) { 'use strict';

lodash_merge = lodash_merge && lodash_merge.hasOwnProperty('default') ? lodash_merge['default'] : lodash_merge;

var VInfiniteGrid = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "vue-infinite-grid", class: _vm.customCssClass, attrs: { "id": _vm.gridId } }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'VueInfiniteGrid',
  props: {
    customCssClass: {
      type: [String, Array]
    },
    layout: {
      type: String
    }
  },
  data: function data() {
    return {
      id: Math.random().toString(36).substr(2, 10)
    };
  },
  created: function created() {},

  computed: {
    gridId: function gridId() {
      return "grid_" + this.id;
    }
  }
};

function install(Vue) {
  if (install.installed) return;
  Vue.component('vue-infinite-grid', VInfiniteGrid);
}

var VueInfiniteGrid = VInfiniteGrid;

var plugin = {
  install: install

  // Auto-install
};var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

exports.install = install;
exports.VueInfiniteGrid = VueInfiniteGrid;
exports['default'] = plugin;

Object.defineProperty(exports, '__esModule', { value: true });

})));
