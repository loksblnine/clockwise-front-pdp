<template>
  <div>
    Login
    <input v-model="email"/>
    <input v-model="password"/>
    <button v-on:click="login()">Login</button>
    <div>
      <p>
        No account? <a v-on:click="redirectRegister()">Register</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import router from "@/router";
import {createToast} from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import {apiPost} from "@/http/requestsPlaceholder"

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "admin@example.com",
      password: "passwordsecret"
    }
  },
  methods: {
    redirectRegister() {
      router.push('/registration')
    },
    login() {
      apiPost({
        url: "/auth/login",
        data: {
          email: this.email,
          password: this.password
        }
      }).then(({data}) => {
        localStorage.setItem('token', data.token)
        router.push("/admin")
      }).catch(() => {
        createToast('Oops... Something went wrong', {type: "danger"})
      })
    }
  }
})
</script>

<style scoped>

</style>