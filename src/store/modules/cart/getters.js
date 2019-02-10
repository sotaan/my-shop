export default {
  /**
   * Get the number of product rows in cart
   *
   * @param   {object} state  The module state
   * @returns {number}        The number of rows in cart
   */
  nbProductsInCart (state) {
    return state.cart.length
  }
}
