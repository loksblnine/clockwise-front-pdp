<template>
  <nav class="navbar">
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle"/>
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <li v-on:click="redirect('/order')">Make order</li>
        <li v-on:click="redirect('/blog')">Blog</li>
        <li v-if="!token.length" v-on:click="redirect('/Login')">Login</li>
        <li v-if="token.length" v-on:click="redirect('/admin')">Admin Panel</li>
        <li v-if="token.length" v-on:click="logout()">Logout</li>
      </div>

    </ul>
  </nav>
<!--  <nav class="navbar" v-if="false">-->
<!--    <ul class="nav-links">-->
<!--      <div class="admin-menu">-->
<!--        <li v-on:click="redirect('/cities')">Cities</li>-->
<!--      </div>-->
<!--    </ul>-->
<!--  </nav>-->
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store";
import router from "@/router";
import AuthRoutes from "@/utils"

export default defineComponent({
  name: 'App',
  mounted() {
    store.dispatch("IS_USER_LOGGED_IN")
  },
  computed: {
    token() {
      return store.state.token
    },
  },
  watch: {
    token(newToken, oldToken) {
      console.log(`${newToken} ---- ${oldToken}`)
    }
  },
  methods: {
    logout() {
      store.dispatch("USER_LOGOUT")
    },
    redirect(path) {
      router.push(path)
    },
  }
})
</script>

<style lang="scss">

@font-face {
  font-family: "Balttiffany";
  src: local("Balttiffany"),
  url(assets/fonts/balttiffany.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
  height: 100vh;
  margin-left: 10%;
  margin-right: 10%;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-image: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  color: #fff;
}

.nav-links a {
  color: #fff;
}

.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
}

.admin-menu {
  margin-top: 20px;
  display: flex;
  gap: 1em;
  font-size: 18px;
}

.menu li:hover {
  background-image: linear-gradient(to left, #ee7724, #d8363a, #dd3675, #b44593);
  border-radius: 5px;
  transition: 0.3s ease;
}

.menu li {
  padding: 5px 14px;
}

.services {
  position: relative;
}

.dropdown {
  background-image: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  padding: 1em 0;
  position: absolute;
  display: none;
  border-radius: 8px;
  top: 35px;
}

.dropdown li + li {
  margin-top: 10px;
}

.dropdown li {
  padding: 0.5em 1em;
  width: 8em;
  text-align: center;
}

.dropdown li:hover {
  background-image: linear-gradient(to left, #ee7724, #d8363a, #dd3675, #b44593);
}

.services:hover .dropdown {
  display: block;
}

input[type=checkbox] {
  display: none;
}

.hamburger {
  display: none;
  font-size: 24px;
  user-select: none;
}

@media (max-width: 768px) {
  .navbar {
    margin-bottom: 60px;
  }

  .menu {
    display: none;
    position: absolute;
    background-image: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
    z-index: 100;
  }

  .menu li + li {
    margin-top: 12px;
  }
  input[type=checkbox]:checked ~ .menu {
    display: block;
  }
  .hamburger {
    display: block;
  }
  .dropdown {
    left: 50%;
    top: 30px;
    transform: translateX(35%);
  }
}
</style>
