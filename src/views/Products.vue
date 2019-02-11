<template>
  <div class="as-products">
    <b-loading
      :active="loading"
      is-full-page
    />
    <section class="hero is-bold is-primary">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Products
          </h1>
          <h2 class="subtitle">
            Buy some of our albums with nice photos!
          </h2>
        </div>
      </div>
    </section>
    <div class="products-list-container container is-fluid">
      <div
        v-for="(row, i) in rows"
        :key="`row-${i}`"
        :data-cy="`row-${i}`"
        class="columns"
      >
        <div
          v-for="(product, j) in row"
          :key="`row-${i}-column-${j}`"
          :data-cy="`row-${i}-column-${j}`"
          class="column is-3"
        >
          <ProductCard
            :photos="product.photos"
            :title="product.title"
            :user-id="product.userId"
            :cart-row-count="computeCartRowCount(product)"
            @add-quantity="(count) => handleQuantity(product, count)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chunk from 'lodash.chunk'
import { mapGetters, mapState, mapActions } from 'vuex'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Products',

  components: {
    ProductCard
  },

  data () {
    return {
      nbColumns: 4
    }
  },

  computed: {
    ...mapGetters('cart', ['findProductRow']),
    ...mapGetters('products', ['page']),
    ...mapState('products', ['loading']),
    ...mapState('cart', ['cart']),

    rows () {
      return chunk(this.page, this.nbColumns)
    }
  },

  methods: {
    ...mapActions('cart', ['handleQuantityForProduct']),

    handleQuantity (product, count) {
      const { id } = product
      // if I'm dumb...
      if (count === 0) return null

      this.handleQuantityForProduct({
        id,
        count
      })
    },

    computeCartRowCount (product) {
      const { findProductRow, cart } = this
      const idx = product ? findProductRow(product.id) : -1

      return idx === -1 ? 0 : cart[idx].count
    }
  }
}
</script>

<style lang="scss" scoped>
  .products-list-container {
    margin-top: 1rem;
  }
</style>
