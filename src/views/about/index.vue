<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="getCities()"></button>
    <div v-for="city in cities">
{{city.city_name}}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import store from "@/store";

export default defineComponent({
  name: 'AboutPage',
  computed: {
    cities() {
      return store.state.cities
    }
  },
  methods: {
    getCities() {
      store.dispatch("SET_CITIES_ARRAY")
    }
  }
})
</script>


<style>

</style>
