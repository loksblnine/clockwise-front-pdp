<template>
  <button type="button" class="btn btn-primary" v-on:click="this.modal.show()">
    Launch demo modal
  </button>
  <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" v-on:click="this.modal.hide()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="this.modal.hide()">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap'

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
      console.log("post123")
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal)
  }
}
</script>

<style scoped>

</style>