<template>
  <v-app id="inspire">
    <div id="app">
      <h1>Ice Creams: {{ results.length }} ice creams</h1>

      <v-container>
        <v-row justify="center">
          
          <v-col cols="9" sm="6" md="4">
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-btn depressed @click="reset"> RESET </v-btn>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="9" sm="6" md="4">
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-text-field
                  label="Sabor de helado"
                  outlined
                  v-model="iceCream"
                ></v-text-field>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="9" sm="6" md="4">
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-btn
                  color="primary"
                  depressed
                  :disabled="results.length == 5"
                  @click="add"
                >
                  ADD
                </v-btn>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <div v-for="(result, index) in results" :key="index">
        <p v-text="result"></p>
      </div>
    </div>
  </v-app>
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
