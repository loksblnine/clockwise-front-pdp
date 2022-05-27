import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/index.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/auth/Login/index.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "Registration" */ '../views/auth/Register/index.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/admin/index.vue'),
    meta: {
      requiresAuth: true
    }
  },{
    path: '/cities',
    name: 'ListCities',
    component: () => import(/* webpackChunkName: "ListCities" */ '../views/admin/cities/ListCities/index.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "PageNotFound" */ '../http/404/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const auth = {
  isLoggedIn: () => {
    return localStorage.getItem('token')?.length
  }
}

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    return {
      path: '/Login',
      query: {redirect: to.fullPath},
    }
  }
})

export default router
