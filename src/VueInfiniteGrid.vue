<template>
  <div class="vue-infinite-grid" :class="customCssClass" :id="gridId">
    <slot />
  </div>
</template>
<script>
  export default {
    name: 'VueInfiniteGrid',
    props: {
      customCssClass: {
        type: [String, Array]
      },
      layout: {
        type: String
      }
    },
    data () {
      return {
        id: Math.random().toString(36).substr(2, 10)
      }
    },
    created () {

    },
    computed: {
      gridId () {
        return `grid_${this.id}`
      }
    }
  }
</script>