export default {
  /**
   * Merge all albums with their associated photos
   *
   * @param {object} state      The module state
   * @returns {Array<object>}   The merged data
   */
  products (state) {
    const { photos, albums } = state

    if (!photos.length || !albums.length) return []

    return albums.map((album) => {
      const albumPhotos = photos.reduce((acc, photo) => {
        if (photo.albumId === album.id) {
          acc.push(photo)
        }
        return acc
      }, [])

      return {
        ...album,
        photos: albumPhotos
      }
    })
  },
  /**
   * Find a product in the collection
   *
   * @param {object} state      The module state
   * @param {object} getters    The module state
   * @returns {object}          The product or `undefined`
   */
  findProduct (state, getters) {
    return (id) => getters.products.find(row => row.id === id)
  },

  /**
   * Prepares metadata for pagination about current page in UI
   *
   * @param {object} state      The module state
   * @returns {Array<object>}   The paginated data
   */
  currentPageMeta (state) {
    const { currentPageIdx, pageSize } = state

    return {
      start: currentPageIdx * pageSize,
      end: pageSize
    }
  },

  /**
   * Prepares current page of products to render
   *
   * @param {object} state      The module state
   * @returns {Array<object>}   The paginated data
   */
  page (_, getters) {
    const { currentPageMeta, products } = getters
    const { start, end } = currentPageMeta

    return products.slice(start, end)
  }
}
