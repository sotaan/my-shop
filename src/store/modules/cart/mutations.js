export default {
  /**
   * Add product row to cart
   *
   * @param {object} state  The module state
   * @param {object} row    The product row
   */
  ADD_PRODUCT_ROW (state, row) {
    state.cart.push(row)
  },
  /**
   * Remove product row from cart
   *
   * @param {object} state  The module state
   * @param {number} idx    The product row index in cart
   */
  REMOVE_PRODUCT_ROW (state, idx) {
    state.cart.splice(idx, 1)
  },
  /**
   * Remove product row from cart
   *
   * @param {object} state    The module state
   * @param {object} params   { idx, count }
   * @param {number} idx      The product row index in cart
   * @param {number} count    The product count to assign
   */
  CHANGE_PRODUCT_ROW_COUNT (state, { idx, count }) {
    state.cart[idx].count = count
  },
  /**
   * Empty the cart
   *
   * @param {object} state    The module state
   */
  EMPTY_CART (state) {
    state.cart = []
  }
}
