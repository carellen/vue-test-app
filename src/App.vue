<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h3>Choose your destiny</h3>
    <router-link to="/converter" tag="button">Converter</router-link>
    <router-link to="/animals" tag="button">Animals</router-link>
    <router-view/>
  </div>
</template>

<script>
import Converter from './components/Converter.vue'
import Animals from "./components/Animals";

export default {
  name: 'app',
  components: {
    Converter,
    Animals,
  },
  data() {
    return {}
  },
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
