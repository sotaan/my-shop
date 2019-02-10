import Vue from 'vue'
import Buefy from 'buefy'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.js'
import 'buefy/dist/buefy.css'
import 'bulma-carousel/dist/css/bulma-carousel.min.css'

const MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  Vue.bulmaCarousel = bulmaCarousel
  Vue.prototype.$bulmaCarousel = bulmaCarousel
}

Vue.use(Buefy)
Vue.use(MyPlugin)

export default MyPlugin
