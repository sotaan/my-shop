<template>
  <div class="container is-fluid cart">
    <NoProductsNotification v-if="nbProductsInCart === 0" />
    <ProductsList
      v-else
      :rows="cart"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import NoProductsNotification from './Cart/NoProductsNotification'
import ProductsList from './Cart/ProductsList'

export default {
  components: {
    NoProductsNotification,
    ProductsList
  },

  computed: {
    ...mapGetters('cart', ['nbProductsInCart']),
    ...mapState('cart', ['cart'])
  }
}
</script>
