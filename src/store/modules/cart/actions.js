export default {
  /**
   * Handle product and requested count in cart:
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
  handleCountForProduct ({ state, commit, dispatch }, { id, count, increment = true }) {
    return dispatch('findProductRow', id)
      .then((idx) => {
        if (idx) {
          const row = state.cart[idx]
          const { count: _count } = row
          const newCount = increment ? _count + count : _count - count

          commit('CHANGE_PRODUCT_ROW_COUNT', { idx, count: newCount })
        } else {
          commit('ADD_PRODUCT_ROW', { id, count })
        }
      })
  },

  /**
   * Find if a product is already in cart and will return its row index or `false`
   *
   * @param {object}          { state }    The module state
   * @param {number}          id           The product id
   * @returns {number|false}               The existing product row index or `false`
   */
  findProductRow ({ state }, id) {
    const { cart } = state
    const idx = cart.findIndex(row => row.id === id)

    return idx !== -1 ? idx : false
  }
}
