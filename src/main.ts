import {createApp} from 'vue'
import loader from "vue-ui-preloader";
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(loader)
  .use(store)
  .mount('#app')
