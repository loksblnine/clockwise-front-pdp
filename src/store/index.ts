import {createStore} from 'vuex'
import {apiGet} from "@/http/requestsPlaceholder/index.js"
import {IOrder} from "@/typings/types";

const store = createStore({
  state: () => ({
    cities: [] as String [],
    customerOrder: {} as IOrder
  }),
  mutations: {
    "SET_CITIES_ARRAY"(state, payload: String []) {
      state.cities = payload
    }
  },
  actions: {
    "SET_CITIES_ARRAY"({commit}) {
      apiGet({
        url: "/cities"
      }).then(({data}: any) => {
        commit("SET_CITIES_ARRAY", data)
      })
    }
  },
  modules: {}
})

export default store
