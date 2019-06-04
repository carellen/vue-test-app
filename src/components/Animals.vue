<template>
  <div>
    <h3>Choose your animal</h3>
    <button @click="setComponent('Turtle')">Turtle</button>
    <button @click="setComponent('Jellyfish')">Jellyfish</button>
    <button @click="setComponent('Shark')">Shark</button>
    <button @click="setComponent('SeaStar')">SeaStar</button>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Jellyfish from "./Jellyfish";
import Turtle from "./Turtle";
import Shark from "./Shark";
import SeaStar from "./SeaStar";

export default {
  name: 'animals',
  components: {
    Turtle,
    Jellyfish,
    Shark,
    SeaStar,
  },
  data() {
    return {
      currentComponent: '',
    }
  },
  methods: {
    setComponent: function (component) {
      this.currentComponent = component
    }
  }
}
</script>

<style>

</style>
