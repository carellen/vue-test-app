<template>
  <div class="turtle">
    <h1>{{ display() }}</h1>
    <h1>{{ bite() }}</h1>
    <h1>{{ swim() }}</h1>
  </div>
</template>

<script>
import PredatorySeaAnimal from "./PredatorySeaAnimal";

export default {
  name: 'Turtle',
  mixins: [PredatorySeaAnimal],
  components: {},
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    display: function () {
      return 'I am turtle!'
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
