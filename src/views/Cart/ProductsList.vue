<template>
  <div class="cart-products-list container is-fluid">
    <RowBox
      v-for="(row, i) in rows"
      :key="row.id"
      :data-cy="`cart-product-${i+1}`"
      :row="row"
      @delete-row="handleRowDeletion"
    />
  </div>
</template>

<script>
import RowBox from './RowBox'

export default {
  components: {
    RowBox
  },

  props: {
    rows: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleRowDeletion (idx) {
      this.$emit('remove-from-cart', idx)
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-products-list {
    margin-top: 4rem;
  }
</style>
