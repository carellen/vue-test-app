<template>
  <div class="hello">
    <h2>Input binary number to convert</h2>
    <form>
      <label>
        <input type="text" @keyup="convert" @keydown="restrict" title="Only binary" v-model="number">
      </label>
      <h1>Result: {{ result }}</h1>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Converter',
  props: {
    msg: String,
  },
  data() {
    return {
      number: '',
      result: 0,
    }
  },
  methods: {
    convert: function(event) {
      this.result = parseInt(this.number, 2)
    },
    restrict: function (event) {
      const key = event.key
      if (key !== '0' && key !== '1' && key !== 'Backspace') {
        event.preventDefault()
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  text-align: right;
}
</style>
