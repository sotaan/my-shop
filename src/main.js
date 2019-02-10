import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'bulma-carousel/dist/bulma-carousel.min.js'
import 'buefy/dist/buefy.css'
import 'bulma-carousel/dist/css/bulma-carousel.min.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
