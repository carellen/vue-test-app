<template>
  <div class="shark">
    <h1>{{ display() }}</h1>
    <h1>{{ bite() }}</h1>
    <h1>{{ swim() }}</h1>
  </div>
</template>

<script>
import PredatorySeaAnimal from "./PredatorySeaAnimal";
import SeaAnimal from "./SeaAnimal";

export default {
  name: 'Shark',
  mixins: [PredatorySeaAnimal],
  components: {
    SeaAnimal,
    PredatorySeaAnimal,
  },
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    display: function () {
      return 'I am shark!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: chartreuse;
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
