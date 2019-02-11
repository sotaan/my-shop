export default {
  /**
   * Handle product and requested quantity in product row from cart:
   *
   * 1. product row exists: increment or decrement count
   * 2. product row don't exists: create row with count
   *
   * @param   {object} { state, commit, dispatch }      The module store
   * @param   {object} { id, count, increment = true }  The actions params
   * @param   {number}  id                  The product id
   * @param   {number}  count               The product count to increment/decrement
   * @param   {boolean} [increment=false]   Whether count shall be incremented or decremented
   */
  handleQuantityForProduct ({ state, commit, dispatch, getters }, { id, count, increment = true }) {
    const idx = getters.findProductRow(id)
    const quantity = Number(count)

    if (idx !== -1) {
      const row = state.cart[idx]
      const { count: _count } = row
      const newCount = increment ? _count + quantity : _count - quantity
      const isAnUpdate = newCount !== 0
      const name = isAnUpdate ? 'CHANGE_PRODUCT_ROW_COUNT' : 'REMOVE_PRODUCT_ROW'
      const params = isAnUpdate ? { idx, count: newCount } : idx

      commit(name, params)
    } else {
      commit('ADD_PRODUCT_ROW', { id, count: quantity })
    }
  },

  /**
   * Empty the cart totally (without spies involved :D)
   *
   * @param   {object} { getters, commit }    The module store
   */
  emptyCart ({ getters, commit }) {
    // Again, if I'm really dumb and create an edge case (need to sleep sorry)
    if (getters.nbProductsInCart) return false

    commit('EMPTY_CART')
  }
}
