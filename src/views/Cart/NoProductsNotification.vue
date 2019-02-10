<template>
  <div class="no-products-zone">
    <div class="columns">
      <div class="column">
        <b-notification
          type="is-danger"
          :duration="10000"
        >
          There is no products in Cart, you cannot continue here
        </b-notification>
      </div>
    </div>
    <div class="columns more">
      <div class="column">
        <div class="container">
          You should
          <router-link to="/">
            buy some
          </router-link> of our awesome products (honestly)!
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .no-products-zone > .more {
    margin-top: 4rem;
  }
</style>
