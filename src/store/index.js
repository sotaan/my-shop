import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    cart,
    products
  },
  plugins: [createPersistedState({
    key: 'my-shop',
    paths: 'cart.cart'
  })]
})
