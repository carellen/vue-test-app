<template>
  <div class="sea-star">
    <h1>{{ display() }}</h1>
    <h1>{{ bite() }}</h1>
    <h1>{{ swim() }}</h1>
  </div>
</template>

<script>
import SeaAnimal from "./SeaAnimal";

export default {
  name: 'SeaStar',
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
      return 'I am sea star!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: red;
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
