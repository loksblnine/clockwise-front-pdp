<template>
  <button type="button" class="btn btn-outline-success" v-on:click="this.modal.show()">
    Add city
  </button>
  <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add city</h5>
          <button type="button" class="btn-close" v-on:click="this.modal.hide()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <span>Input city name</span>
          <input v-model="cityName" class="form-control"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="this.modal.hide()">Close</button>
          <button type="submit" class="btn btn-primary" v-on:click="submitForm()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import {Modal} from 'bootstrap'
import store from "../../../../store";

export default {
  name: "AddCity",
  data() {
    return {
      cityName: "",
      modal: null
    }
  },
  methods: {
    submitForm() {
      store.dispatch("POST_CITY", {city_name: this.cityName})
      this.modal.hide()
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal)
  }
}
</script>

<style scoped>

</style>