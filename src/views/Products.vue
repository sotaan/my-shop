<template>
  <div class="as-products">
    <section class="hero is-bold is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Products
          </h1>
          <h2 class="subtitle">
            Buy some of our albums with nice photos!
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <ProductCard
        v-for="product in page"
        :key="product.id"
        :photos="product.photos"
        :title="product.title"
        :user-id="product.userId"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Products',

  components: {
    ProductCard
  },

  computed: {
    ...mapGetters('products', ['page']),
    ...mapState('products', ['loaded'])
  }
}
</script>
