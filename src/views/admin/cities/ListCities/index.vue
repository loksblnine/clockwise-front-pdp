<template>
  <div>
    <h2 class="text-left mt-5">Cities list</h2>
    <loader v-if="!cities.length" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40"
            objectbg="#999793" opacity="80" disableScrolling="false" name="dots"></loader>
    <template v-else>
      <table class="table mt-5 text-justify">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="city in cities" :key="city.city_id">
          <th scope="row"> {{ city.city_id }}</th>
          <td>{{ city.city_name }}</td>
          <td>
            <EditCity :city-id="city.city_id" :city-name="city.city_name"/>
          </td>
          <td>
            <button class="btn btn-outline-danger"
                    v-on:click="deleteCity(city.city_id)">Удалить
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <AddCity/>
    </template>
  </div>
</template>

<script>
import store from "../../../../store";
import AddCity from "@/views/admin/cities/AddCity";
import EditCity from "@/views/admin/cities/EditCity";

export default {
  name: "ListCities",
  components: {EditCity, AddCity},
  computed: {
    cities() {
      return store.state.cities;
    }
  },
  mounted() {
    if (!this.cities.length) {
      store.dispatch("SET_CITIES_ARRAY", {state: store.state});
    }
  },
  methods: {
    deleteCity(id) {
      store.dispatch("DELETE_CITY_BY_ID", {state: store.state, id});
    }
  }
};
</script>

<style scoped>

</style>