<template>
  <div class="predatory_sea_animal">
    <slot></slot>
  </div>
</template>

<script>
import SeaAnimal from "./SeaAnimal";

export default {
  name: 'PredatorySeaAnimal',
  mixins: [SeaAnimal],
  props: {},
  data() {
    return {}
  },
  methods: {
    bite: function(event) {
      return 'I can bite!'
    },
  }
}
</script>
