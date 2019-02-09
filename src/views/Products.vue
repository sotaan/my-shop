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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Products',

  computed: {
    ...mapState('products', ['products'])
  }
}
</script>
