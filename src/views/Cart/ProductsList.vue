<template>
  <div class="cart-products-list container is-fluid">
    <RowBox
      v-for="row in rows"
      :key="row.id"
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
