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
          data-cy="navbar-products-link"
          to="/"
        >
          Products
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              data-cy="navbar-cart-link"
              to="/cart"
              class="button is-primary"
            >
              <strong>
                My Cart (
                <span
                  data-cy="cart-products-count"
                  v-text="nbProductsInCart"
                />)
              </strong>
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
