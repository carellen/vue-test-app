<template>
  <div class="jellyfish">
    <h1>{{ display() }}</h1>
    <h1>{{ bite() }}</h1>
    <h1>{{ swim() }}</h1>
  </div>
</template>

<script>
import SeaAnimal from "./SeaAnimal";

export default {
  name: 'Jellyfish',
  mixins: [SeaAnimal],
  components: {
    SeaAnimal,
  },
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    display: function () {
      return 'I am jellyfish!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
