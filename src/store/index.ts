import {createStore} from 'vuex'
import jwt_decode from "jwt-decode";
import {apiDelete, apiGet, apiPost, apiPut} from "@/http/requestsPlaceholder/index.js"
import {ICity, IOrder, IType, IUser} from "@/typings/types";
import router from "@/router";
import {createToast} from "mosha-vue-toastify";

const store = createStore({
  state: () => ({
    token: "" as string,
    userInfo: {id: 0, email: "", role: 0} as IUser,
    cities: [] as ICity [],
    types: [] as IType [],
    customerOrder: {} as IOrder
  }),
  mutations: {
    "SET_CITIES_ARRAY"(state, payload: ICity []) {
      state.cities = payload;
    },
    "DELETE_CITY_BY_ID"(state, {id}) {
      state.cities = state.cities.filter((item) => Number(item.city_id) !== id);
    },
    "POST_CITY"(state, payload: ICity) {
      state.cities.push(payload);
    },
    "UPDATE_CITY"(state, payload: ICity) {
      state.cities = state.cities.map((city) => {
        if (Number(city.city_id) === payload.city_id) {
          city.city_name = payload.city_name;
        }
        return city;
      })
    },
    "SET_TYPES_ARRAY"(state, payload: IType []) {
      state.types = payload;
    },
    "IS_USER_LOGGED_IN"(state, {token}) {
      state.token = token;
      state.userInfo = jwt_decode(token);
    },
    "USER_LOGIN"(state, {token}) {
      state.token = token;
      state.userInfo = jwt_decode(token);
    },
    "USER_LOGOUT"(state) {
      state.token = "";
      state.userInfo = {id: 0, email: "", role: 0};
    }
  },
  actions: {
    "SET_CITIES_ARRAY"({commit}) {
      apiGet({
        url: "/cities"
      }).then(({data}: any) => {
        commit("SET_CITIES_ARRAY", data);
      })
    },
    "DELETE_CITY_BY_ID"({commit}, {id}) {
      apiDelete({
        url: `/cities/${id}`
      }).then(() => {
        commit("DELETE_CITY_BY_ID", {id});
      })
    },
    "POST_CITY"({commit}, {city_name}) {
      apiPost({
        url: "/cities",
        data: {
          city_name
        }
      }).then(({data}) => {
        commit("POST_CITY", {...data});
      })
    },
    "UPDATE_CITY"({commit}, {city_id, city_name}) {
      apiPut({
        url: `/cities/${city_id}`,
        data: {
          city_name
        }
      }).then(() => {
        commit("UPDATE_CITY", {city_id, city_name});
      })
    },
    "SET_TYPES_ARRAY"({commit}) {
      apiGet({
        url: "/types"
      }).then(({data}: any) => {
        commit("SET_TYPES_ARRAY", data);
      })
    },
    "IS_USER_LOGGED_IN"({commit}) {
      if (localStorage.getItem('token')?.length) {
        apiGet({
          url: "/auth/login"
        }).then(({data}) => {
          commit("IS_USER_LOGGED_IN", {token: data.token});
        })
      }
    },
    "USER_LOGOUT"({commit}) {
      localStorage.removeItem('token');
      commit("USER_LOGOUT");
      router.push("/Login")
    },
    "USER_LOGIN"({commit}, {email, password}) {
      apiPost({
        url: "/auth/login",
        data: {
          email,
          password
        }
      }).then(({data}) => {
        localStorage.setItem('token', data.token)
        commit("USER_LOGIN", {token: data.token})
        router.push("/admin")
      }).catch(() => {
        createToast('Oops... Something went wrong', {type: "danger"})
      })
    }
  },
})

export default store
