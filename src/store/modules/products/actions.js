export default {
  /**
   * Get all available photos
   *
   * @param   {object} { commit }      The module store
   */
  getPhotos ({ commit }) {
    return window.axios.get('/photos')
      .then(({ data: photos }) => {
        commit('SET_PHOTOS', photos)
      })
  },
  /**
   * Get all available albums
   *
   * @param   {object} { commit }      The module store
   */
  getAlbums ({ commit }) {
    return window.axios.get('/albums')
      .then(({ data: albums }) => {
        commit('SET_ALBUMS', albums)
      })
  },

  /**
   * Get associated resources: albums and photos
   *
   * @param   {object} { commit, dispatch }      The module store
   */
  getProducts ({ commit, dispatch }) {
    commit('SET_LOADING', true)
    return Promise.all([
      dispatch('getAlbums'),
      dispatch('getPhotos')
    ]).then(() => commit('SET_LOADING', false))
  }
}
