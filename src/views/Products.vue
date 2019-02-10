<template>
  <div class="as-products">
    <section class="hero is-bold is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Products
          </h1>
          <h2 class="subtitle">
            Put something here
          </h2>
        </div>
      </div>
    </section>
    <div class="box">
      <ProductCard
        v-for="product in products"
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
    ...mapGetters('products', ['products']),
    ...mapState('products', ['loaded'])
  }
}
</script>
