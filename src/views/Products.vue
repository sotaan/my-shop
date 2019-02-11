<template>
  <div class="as-products">
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
    <div class="container is-fluid">
      <div
        v-for="(row, i) in rows"
        :key="`row-${i}`"
        class="columns"
      >
        <div
          v-for="(product, j) in row"
          :key="`row-${i}-column-${j}`"
          class="column is-3"
        >
          <ProductCard
            :photos="product.photos"
            :title="product.title"
            :user-id="product.userId"
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
    ...mapGetters('products', ['page']),
    ...mapState('products', ['loaded']),

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
    }
  }
}
</script>
