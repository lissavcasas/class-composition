<template>
  <div id="app">
    <h1>Helados: {{ results.length }} helados</h1>
    <button @click="reset">RESET</button>
    <input v-model="iceCream" type="text" />
    <button :disabled="results.length == 5" @click="add">ADD</button>
    <div v-for="(result, index) in results" :key="index">
      <p v-text="result"></p>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  iceCream = "";
  results: string[] = [];

  add() {
    this.results.push(this.iceCream);
  }
  reset() {
    this.results = [];
    this.iceCream = "";
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
