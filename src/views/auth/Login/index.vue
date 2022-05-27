<template>
  <section class="gradient-form">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                         style="width: 185px;" alt="logo">
                  </div>

                  <form>
                    <p>Please login to your account</p>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example11">Username</label>
                      <input v-model="email" type="email" id="form2Example11" class="form-control"
                             placeholder="email address"/>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example22">Password</label>
                      <input v-model="password" type="password" class="form-control" id="form2Example22"/>
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button v-on:click="login()" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                      >
                        Log in
                      </button>
                    </div>

                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" class="btn btn-outline-danger" v-on:click="redirectRegister()">Create new
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import router from "@/router";
import 'mosha-vue-toastify/dist/style.css'
import store from "@/store";

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
      store.dispatch("USER_LOGIN", {
        email: this.email,
        password: this.password
      })
    }
  }
})
</script>

<style scoped>
.gradient-custom-2 {
  background: #fccb90;

  background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
  .gradient-form {
    padding-bottom: 50px;
    padding-top: 50px;
  }
}

@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}

@media (max-width: 991px) {
  .gradient-custom-2 {
    display: none !important;
  }
}
</style>
