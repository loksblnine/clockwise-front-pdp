<template>
  <div>
    <h2 class="text-left mt-5">Список городов</h2>
    <table class="table mt-5 text-justify">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Название города</th>
        <th scope="col">Изменить</th>
        <th scope="col">Удалить</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="city in cities" :key="city.city_id">
        <th scope="row"> {{ city.city_id }}</th>
        <td>{{ city.city_name }}</td>
        <td>
          <button class="btn btn-danger"
                  v-on:click="deleteCity(city.city_id)">Удалить
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <AddCity/>
  </div>
</template>

<script>
import store from "../../../../store";
import AddCity from "@/views/admin/cities/AddCity";

export default {
  name: "ListCities",
  components: {AddCity},
  computed: {
    cities() {
      return store.state.cities
    }
  },
  mounted() {
    if(!this.cities.length) {
      this.$nextTick(() => {
        store.dispatch("SET_CITIES_ARRAY", {state: store.state})
      })
    }
  },
  methods: {
    deleteCity () {

    }
  }
}
</script>

<style scoped>

</style>