<template>
  <nav
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/"
      >
        My Shop
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          to="/"
        >
          Products
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              to="/cart"
              class="button is-primary"
            >
              <strong>My Cart ({{ nbProductsInCart }})</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',

  computed: {
    ...mapGetters('cart', ['nbProductsInCart'])
  }
}
</script>

<style lang="scss" scoped>
</style>
