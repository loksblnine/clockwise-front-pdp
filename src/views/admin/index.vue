<template>
  <div>
    You logged in as Administrator
  </div>
  <ListCities/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ListCities from "./cities/ListCities/index.vue";

export default defineComponent({
  name: "Admin",
  components: {ListCities}
})
</script>

<style scoped>

</style>
