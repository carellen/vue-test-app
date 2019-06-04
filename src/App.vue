<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h3>Choose your destiny</h3>
    <button @click="setComponent('Converter')">Converter</button>
    <button @click="setComponent('Turtle')">Turtle</button>
    <button @click="setComponent('Jellyfish')">Jellyfish</button>
    <button @click="setComponent('Shark')">Shark</button>
    <button @click="setComponent('SeaStar')">SeaStar</button>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Converter from './components/Converter.vue'
import Jellyfish from "./components/Jellyfish";
import Turtle from "./components/Turtle";
import Shark from "./components/Shark";
import SeaStar from "./components/SeaStar";

export default {
  name: 'app',
  components: {
    Converter,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
