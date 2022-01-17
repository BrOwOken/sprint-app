<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{projectName}}</h1>
  </div>
</template>

<script>
import { getProject } from "./service.js";

export default {
  name: "App",
  data() {
    return{
      projectName: ""
    }
  },
  methods: {
    getProjectName: function() {
      getProject().then((response) => {
        console.log(response);
      });
    },
  },

  mounted: function () {
    console.log("mounted");
    getProject().then(res => this.projectName = res);
  },
};
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