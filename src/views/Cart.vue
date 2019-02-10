<template>
  <div class="container is-fluid cart">
    <NoProductsNotification v-if="nbProductsInCart === 0" />
    <ProductsList
      v-else
      :rows="rows"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoProductsNotification from './Cart/NoProductsNotification'
import ProductsList from './Cart/ProductsList'

export default {
  components: {
    NoProductsNotification,
    ProductsList
  },

  computed: {
    ...mapGetters('cart', ['nbProductsInCart'])
  }
}
</script>
