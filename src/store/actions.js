export default {
  prepareProducts ({ dispatch, getters }) {
    return dispatch('products/getProducts')
      .then(() => {
        return getters['products/products']
      })
  }
}
