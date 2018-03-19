<template>
  <div class="vue-infinite-grid" :class="customCssClass" :id="gridId">
    <slot/>
  </div>
</template>
<script>
  import InfiniteGrid, {GridLayout, JustifiedLayout, FrameLayout, SquareLayout, PackingLayout} from "@egjs/infinitegrid"
  export default {
    name: 'vue-infinite-grid',
    props: {
      customCssClass: {
        type: [String, Array]
      },
      layout: {
        type: [String, Object]
      },
      layoutConfig: {
        type: Object
      },
      tag: {
        type: String
      },
      size: {
        type: Number
      },
      outline: {
        type: Array
      },
      options: {
        type: Object
      },
      horizontal: {
        type: Boolean
      },
      isEqualSize: {
        type: Boolean
      },
      isOverflowScroll: {
        type: Boolean
      }
    },
    data () {
      return {
        id: Math.random().toString(36).substr(2, 10)
      }
    },
    mounted () {
      var vm = this;
      var ig = new InfiniteGrid(vm.$el, {
        isOverflowScroll: vm.isOverflowScroll,
        size: vm.size,
        tag: vm.tag,
        horizontal: vm.horizontal,
        isEqualSize: vm.isEqualSize
      });

      this.$nextTick(() => {
        ig.setLayout(JustifiedLayout, {
          margin: vm.layoutConfig.margin
        });
      })
    },
    computed: {
      gridId () {
        return `grid_${this.id}`
      },
      gridType () {
        return this.layout === 'JustifiedLayout' ? JustifiedLayout
          : this.layout === 'FrameLayout' ? FrameLayout
            : this.layout === 'SquareLayout' ? SquareLayout
              : this.layout === 'PackingLayout' ? PackingLayout : GridLayout

      }
    }
  }
</script>
