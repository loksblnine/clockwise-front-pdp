import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'

// import VueSocketIO from 'vue-socket.io'

createApp(App)
    .use(router)
    .use(store)
    // .use(new VueSocketIO({
    //   debug: true,
    //   connection: 'http://localhost:5000',
    //   vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    //   },
    // }))
    .mount('#app')
