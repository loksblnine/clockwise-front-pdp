<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {apiGet} from "@/http/requestsPlaceholder"

export default defineComponent({
  name: 'App',
  mounted() {
    //dispatch to store cities
    apiGet({
      url: "/cities"
    })
    //dispatch to store token?
  }
})
</script>

<style lang="scss">

@font-face {
  font-family: "Balttiffany";
  src: local("Balttiffany"),
  url(assets/fonts/balttiffany.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
  height: 100vh;
  width: 100vw;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
