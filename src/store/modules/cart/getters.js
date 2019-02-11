export default {
  /**
   * Get the number of product rows in cart
   *
   * @param   {object} state  The module state
   * @returns {number}        The number of rows in cart
   */
  nbProductsInCart (state) {
    return state.cart.length
  },

  /**
   * Find if a product is already in cart and will return its row index or `-1`
   *
   * @param {object}          { state }    The module state
   * @param {number}          id           The product id
   * @returns {number}               The existing product row index or `-1`
   */
  findProductRow (state) {
    return (id) => state.cart.findIndex(row => row.id === id)
  }
}
