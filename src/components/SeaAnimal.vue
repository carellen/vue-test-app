<template>
  <div class="sea-animal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SeaAnimal',
  props: {},
  data() {
    return {}
  },
  methods: {
    display: function(event) {
      return 'Abstract Sea Animal Display'
    },
    swim: function (event) {
      return 'I can swim!'
    },
    bite: function (event) {
      return ''
    },
  }
}
</script>